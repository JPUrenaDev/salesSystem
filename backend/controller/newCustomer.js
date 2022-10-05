const connection = require('../connection/db');

connection.query(
    'INSERT INTO `Customer`(FIRST_NAME,LAST_NAME, DATE_OF_BIRTH, ADDRESS, PHONE_NUMBER, EMAIL_ADDRESS) values ()',
    function(err, results, fields) {
      console.log(results[0]); // results contains rows returned by server
  // fields contains extra meta data about results, if available
    }
  );