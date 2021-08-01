const Pool = require("pg").Pool;

const pool = new Pool ({
  user: "postgres",
  password: "postgres",
  host: "localhost",
  port: 5432,
  database: "makemyday"
});

module.exports = pool;