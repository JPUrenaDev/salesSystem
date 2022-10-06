const app = require('./category');
const controlador = require('../controller/products');

console.log(controlador);
app.post('/createProduct',controlador.createProduct);
app.get('/getAllProduct',controlador.getAllProduct);
app.get('/getProductById/:id',controlador.getOneProductyByID);
app.put('/updateProduct/:id',controlador.updateOneProductByID);
app.delete('/deleteProduct/:id',controlador.deleteOneProductByID);
app.delete('/deleteProduct',controlador.deleteAllProduct);
module.exports = app;
