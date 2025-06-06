import { z } from 'zod';

const EnvSchema = z.object({
  PORT: z.coerce.number().default(5000),
  NODE_ENV: z.enum(['development', 'production']).default('development'),
  DATABASE_URL: z.string().url(),
  POOL_SIZE: z.coerce.number().default(10),
  DB_IDLE_TIMEOUT: z.coerce.number().default(30000),
  ENABLE_SEED: z.coerce.boolean().default(false),
  SEEDING_COUNT: z.coerce.number().default(20),
});

export const env = EnvSchema.parse(process.env);
