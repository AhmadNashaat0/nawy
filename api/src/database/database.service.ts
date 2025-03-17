import { env } from '@/config';
import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';

@Injectable()
export class DatabaseService implements OnModuleInit, OnModuleDestroy {
  pool: Pool;
  db: ReturnType<typeof drizzle>;

  constructor() {
    this.pool = new Pool({
      connectionString: env.DATABASE_URL,
      max: env.POOL_SIZE,
      idleTimeoutMillis: env.DB_IDLE_TIMEOUT,
      statement_timeout: 10000,
    });

    this.db = drizzle(this.pool);
  }

  async onModuleInit() {
    this.pool.on('error', (err) => {
      console.error('Unexpected error on idle database client', err);
    });
  }

  async onModuleDestroy() {
    await this.pool.end();
  }
}
