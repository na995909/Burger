var mysql = require("mysql");

// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "1q2w3e4r",
  database: "burgers_db"
});

// connect to the mysql server and sql database
connection.connect(function(err) {
  if (err) throw err;
  return;
 console.log("Connected!");
});
module.exports = connection;
