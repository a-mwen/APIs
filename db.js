const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "postgres",
    password: "317!!Musha4lyf",
    port: 5437
});

module.exports = pool;