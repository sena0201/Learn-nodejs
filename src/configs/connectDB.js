// get the client
import mysql from 'mysql2/promise';

// create the connection to database
// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   database: 'nodejsbasic'
// });

// {var connection = async ()=>{
//     return await mysql.createConnection({host:'localhost', user: 'root', database: 'nodejsbasic'});
// }}

// const connection = await mysql.createConnection({host:'localhost', user: 'root', database: 'nodejsbasic'});

var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'nodejs_db'
});

export default connection;
