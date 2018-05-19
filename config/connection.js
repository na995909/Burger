var mysql = require("mysql");

var connection;
if (process.env.JAWSDB_URL) {
 connection= mysql.createConnection( process.env.JAWSDB_URL);
 } else {
 	connection = mysql.createConnection({

     host: "localhost",

     // My username
      user: "root",

	  // My password
	  password: "1q2w3e4r",
	  database: "burgers_db"
});
 };

// connect to the mysql server and sql database
connection.connect(function(err) {
  if (err) throw err;
  return;
 console.log("Connected!");
});
module.exports = connection;
