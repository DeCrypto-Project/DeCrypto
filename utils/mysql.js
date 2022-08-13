const mysql = require('mysql');
const config = require('config');

const connection = mysql.createConnection({
    host: config.Db.host,
    user: config.Db.user,
    password: config.Db.pass,
    database: config.Db.database,
    port: config.Db.port
});

connection.connect();

function runQuery(query, parameters = []) {
    console.log('executing query: ', query);
    return new Promise((resolve, reject) => {
        connection.query(query, parameters, (error, results) => {
            if (error) {
                reject(error);
            }
            resolve(results);
        });
    });
}

module.exports = {runQuery};