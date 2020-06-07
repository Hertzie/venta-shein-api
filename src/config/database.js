const Pool = require('pg').Pool;
const pool = new Pool({
    user : 'pg',
    host: 'localhost',
    database: 'ventashein',
    password: 'linux789',
    port: 5432
});

module.exports = pool;

