const express = require('express');
const app = express();
require('dotenv').config();
const bodyParser = require('body-parser');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false}))
console.log(process.env)
// parse application/json
app.use(bodyParser.json())

module.exports = {app}; 

