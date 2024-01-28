
const mysql = require('mysql');


function fetchDataFromMySQL(query, callback) {
  const connection = mysql.createConnection({
    host: "localhost",
    user: "hirasoftwarecom_audit",
    database:"gojo_service",
    password: "Yohannes@hira123321"

  });

  connection.connect((error) => {
    if (error) {
      console.error('Failed to connect to the database:', error);
      callback(error, null);
      return;
    }

    connection.query(query, (error, results) => {
      if (error) {
        console.error('Failed to fetch data from MySQL:', error);
        callback(error, null);
      } else {
        callback(null, results);
      }

      connection.end((error) => {
        if (error) {
          console.error('Failed to close the database connection:', error);
        } else {
          console.log('MySQL connection closed.');
        }
      });
    });
  });
}

module.exports.fetchDataFromMySQL = fetchDataFromMySQL;