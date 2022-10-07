const app = require('./products');

const controlador = require('../controller/sales');

app.post('/createOrder',controlador.createOrders);
app.get('/getAllOrder',controlador.getAllOrders);
app.get('/getOrderByID/:id',controlador.getOneOrderByID)
app.put('/updateOneOrderById/:id',controlador.updateOneOrderByID);
app.delete('/deleteOneOrderById/:id',controlador.deleteOneOrderByID);
app.delete('/deleteOrders',controlador.deleteAllOrders);
module.exports = app;
