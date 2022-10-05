const connection = require('../connection/db');

connection.query(
    'SELECT * FROM `Persons`',
    function(err, results, fields) {
      console.log(results[0]); // results contains rows returned by server
  // fields contains extra meta data about results, if available
    }
  );