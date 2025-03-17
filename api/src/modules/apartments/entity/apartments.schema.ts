import {
  pgTable,
  varchar,
  text,
  timestamp,
  uuid,
  integer,
  numeric,
} from 'drizzle-orm/pg-core';

export const apartments = pgTable('apartments', {
  id: uuid('id').primaryKey().defaultRandom(),
  number: varchar('unit_number', { length: 255 }).notNull(),
  name: varchar('unit_name', { length: 255 }).notNull(),
  description: text('description').notNull(),
  project: varchar('project', { length: 255 }).notNull(),
  price: numeric('price', { precision: 10, scale: 2 }).notNull(),
  bedrooms: integer('bedrooms').notNull(),
  bathrooms: integer('bathrooms').notNull(),
  area: numeric('area', { precision: 10, scale: 2 }).notNull(),
  amenities: varchar('amenities', { length: 255 }).array(),
  images: varchar('images', { length: 255 }).array().notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

export type Apartment = typeof apartments.$inferSelect;
