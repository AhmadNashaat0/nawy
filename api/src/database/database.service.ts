import { env } from '@/config';
import {
  Injectable,
  OnModuleDestroy,
  OnModuleInit,
  Logger,
} from '@nestjs/common';
import { drizzle } from 'drizzle-orm/node-postgres';
import { migrate } from 'drizzle-orm/node-postgres/migrator';
import { Pool } from 'pg';
import * as schema from './schema';
import { seedApartments } from './utils/seed';

@Injectable()
export class DatabaseService implements OnModuleInit, OnModuleDestroy {
  private readonly logger = new Logger(DatabaseService.name);
  pool: Pool;
  db: ReturnType<typeof drizzle>;

  constructor() {
    this.pool = new Pool({
      connectionString: env.DATABASE_URL,
      max: env.POOL_SIZE,
      idleTimeoutMillis: env.DB_IDLE_TIMEOUT,
      statement_timeout: 10000,
    });

    this.db = drizzle(this.pool, { schema });
  }

  async onModuleInit() {
    try {
      console.log(env.DATABASE_URL);

      const client = await this.pool.connect();
      client.release();
      this.logger.log('Successfully connected to database');
    } catch (error) {
      this.logger.error(
        `Failed to connect to database: ${error.message}`,
        error.stack,
      );
      throw new Error(`Database connection failed.`);
    }

    try {
      await migrate(this.db, { migrationsFolder: 'src/database/migrations' });
      this.logger.log('Migrations completed');
    } catch (error) {
      this.logger.error(`Migration failed: ${error.message}`, error.stack);
    }

    if (env.ENABLE_SEED) {
      await seedApartments(this.db, schema);
    }

    this.pool.on('error', (err) => {
      console.error('Unexpected error on idle database client', err);
    });
  }

  async onModuleDestroy() {
    await this.pool.end();
  }
}
