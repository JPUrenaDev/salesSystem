const mysql = require('mysql2');


const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:'Elsujeto222',
    database: 'salesSystem'
  });



  module.exports = connection;





