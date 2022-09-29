import { Client } from 'faunadb';

export const fauna = new Client({
  secret: process.env.DB_KEY,
  domain: 'db.us.fauna.com',
});
