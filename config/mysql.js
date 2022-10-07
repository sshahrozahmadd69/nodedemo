const mysql = require('mysql2');

const pool = mysql.createPool({
    host: "localhost",
    database: 'warehouse',
    user: 'root',
    password: 'Qsefjil-369',

})

const db = pool.promise();

module.exports= {
    db: db
}
