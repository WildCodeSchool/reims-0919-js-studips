const  mysql = require('mysql');
const  connection = mysql.createConnection({
  host :  'localhost', // address of the server
  user :  'me', // username
  password :  'password',
  database :  'studips',
});
module.exports = connection;