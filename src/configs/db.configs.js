import 'dotenv/config'
import knex from 'knex'

export const db = knex({
  client: 'mysql',
  connection: {
    // filename: './src/database/test.db'
    host: "localhost",
    user: "root",
    password: "12345678",
    database: "products",
  },
  pool:{min: 0, max: 10,}
})
