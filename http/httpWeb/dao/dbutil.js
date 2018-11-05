const mysql = require('mysql');
// console.log(mysql);
function createConnection () {
        return mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "marsyhf",
            database: "test",
        });
}
module.exports = {createConnection};
