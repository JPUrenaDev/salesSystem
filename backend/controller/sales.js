//BASE DE DATOS
const connection = require('../connection/db')


//**********************CREATE NEW ORDER********************//

const createOrders = (req,res,next)=>{
    const amountProduct = req.body.amountProduct;
    const date_of_purchase = req.body.date_of_purchase;
    const id_product = req.body.id_product;
    const id_customer = req.body.id_customer;

connection.query(
    'INSERT INTO `orders` (amountProduct, date_of_purchase, id_product,id_customer) VALUES (?,?,?,?)',
    [amountProduct,date_of_purchase,id_product,id_customer],(error, 
        results) => {
           if (error) return res.json({ error: error })

           if(!error) return res.json({result:'Los datos ha sido insertado correctamente'})
           });
       };

//**********************GET ALL ORDERS********************//
const getAllOrders = (req,res,next)=>{
    connection.query(
        //CALCULANDO TOTAL.
        'SELECT o.id, o.amountProduct, o.date_of_purchase, p.ProductName, p.price as unit_price, p.price * o.amountProduct as totalOrder, c.FIRST_NAME FROM  `orders` as o LEFT JOIN `products` as p  on p.Id_product = o.id_product LEFT JOIN `customer` as c ON C.CUSTOMER_ID = o.id_customer',
        function(err, results, fields) {
         if(err) return res.status(404).json({result:err}) 
         
        if(!err) return res.status(200).json(results); // results contains rows returned by server
      // fields contains extra meta data about results, if available
        }
      );
    }

//**********************GET ONE ORDER BY ID********************//
const getOneOrderByID= (req,res,next)=>{
    console.log(req.params.id);
    connection.query(
        `SELECT o.id, o.amountProduct, o.date_of_purchase, p.ProductName, p.price as unit_price, p.price * o.amountProduct as totalOrder, c.FIRST_NAME FROM  orders as o LEFT JOIN products as p  on p.Id_product = o.id_product LEFT JOIN customer as c ON C.CUSTOMER_ID = o.id_customer where id  = ${req.params.id}`,
        function(err, results, fields) {
            if(err){
                return res.status(400).json({message:err.sqlMessage});
            }
           
            if(results.length <1){
                return res.status(404).json({result:'Files not found'})
            }
            return res.status(200).json(results)
        
        }
       
    )
    }

//**********************UPDATE ONE ORDER BY ID (ADMIN ROLE) I HAVE TO PROTECT THIS ROUTE********************//
const updateOneOrderByID= (req,res,next)=>{
    console.log(req.body);
    let sql =  `UPDATE orders SET amountProduct = ?,
    id_product = ?, 
    id_customer = ?
    where id  =?`
let results = [req.body.amountProduct, 
               req.body.id_product, 
               req.body.id_customer, 
               req.params.id]

    connection.query(sql,results,
        function(err, results) {
            
          
    console.log(err);
            return res.status(200).json(results)
        }
    )
}
//**********************DELETE ONE ORDER BY ID********************//
const deleteOneOrderByID= (req,res,next)=>{
    console.log(req.params.id);
    connection.query(
        `DELETE FROM orders where id  = ${req.params.id}`,
        function(err, results, fields) {

            console.log(results.affectedRows);
        
            if(err){
                return res.status(400).json({message:err.sqlMessage});
            }
          
          
            if(results.affectedRows===0){
                return res.status(404).json({result:'Files not found'})
            }
            return res.status(200).json({result:'The information was deleted'})
        
        }
       
    )

    }
       
//**********************DELETE ALL CUSTOMERS (JUST FOR DEVELOPMENT PROPURSES)********************//


const deleteAllOrders= (req,res,next)=>{
    console.log(req.params.id);
    connection.query(
        `DELETE FROM Customer`,
        function(err, results, fields) {

            console.log(results.affectedRows);
        
            if(err){
                return res.status(400).json({message:err.sqlMessage});
            }
          
          
            if(results.affectedRows===0){
                return res.status(404).json({result:'The table was empty'})
            }
            return res.status(200).json({result:'The information was deleted'})
        
        }
       
    )
       // results contains rows returned by server
      // fields contains extra meta data about results, if available
        

    }

module.exports = {createOrders,getAllOrders,getOneOrderByID,updateOneOrderByID,deleteOneOrderByID,deleteAllOrders}