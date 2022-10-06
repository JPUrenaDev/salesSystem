const app = require('./customer');
const controlador = require('../controller/category');

app.post('/createCategory',controlador.createCategory);
app.get('/getAllCategory',controlador.getAllCategory);
app.get('/getCategoryById/:id',controlador.getOneCategoryByID);
app.put('/updateCategory/:id',controlador.getOneCategoryByID);
app.delete('/deleteCategory/:id',controlador.deleteOneCategoryByID);
app.delete('/deleteCategory',controlador.deleteAllCategory);
module.exports = app;