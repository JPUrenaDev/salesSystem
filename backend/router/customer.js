const {app} = require('../app');
const controlador = require('../controller/customer');

console.log(controlador.getAllCustomer);
app.post('/createCustomer',controlador.createCustomer);
app.get('/getAllCustomer',controlador.getAllCustomer);
app.get('/getCustomerById/:id',controlador.getOneCustomerByID);
app.put('/updateCustomer/:id',controlador.updateOneCustomerByID);
module.exports = app;

