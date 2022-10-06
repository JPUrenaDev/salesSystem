
const mysql = require('mysql2');


const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:'Elsujeto222',
    database: 'salesSystem'
  });

console.log("pruebsssa");

  module.exports = connection;


/*
  HOST =localhost
  USER =root
  PASSWORD =Elsujeto222
  DATABASE =salesSystem
  */

