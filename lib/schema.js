import { pgTable, PgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export const posts=pgTable('posts',{
    id:serial('id').primaryKey(),
    title:text('title').notNull(),
    content:text('content'),
    createdAt:timestamp('created_at').defaultNow()
})