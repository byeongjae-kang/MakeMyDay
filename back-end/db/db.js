const { Pool } = require("pg");

const pool = new Pool({
  connectionString: process.env.DATABASE_URL || "",
  ssl: process.env.DATABASE_URL ? {rejectUnauthorized: false } : false
});

pool.connect()
  .catch(e => console.log(`Error connecting to Postgres server:\n${e}`));

module.exports = pool;