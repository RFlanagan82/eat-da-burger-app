  
const mysql = require("mysql");

let connection;

// if(process.env.JAWSDB_URL){
//     connection = mysql.createConnection(process.env.JAWSDB_URL)
// }else{
    connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        port: "3306",
        password: "Alucard1",
        database: "burger_db"
    });
//};

connection.connect((err) => {
    if(err) throw err;
});
module.exports = connection;