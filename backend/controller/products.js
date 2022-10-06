const connection = require('../connection/db')

//**********************CREATE NEW PRODUCT********************//
const createProduct = (req,res,next)=>{
    
    const ProductName = req.body.productName;
    const id_category = req.body.id_category;
    const price = req.body.price;
    const stock = req.body.stock 
    
connection.query(

    'INSERT INTO `products` (ProductName,id_Category,price,stock) VALUES (?,?,?,?)',
    [ProductName, id_category,price,stock],(error, 
        results) => {
           if (error) return res.json({ error: error })

           if(!error) return res.json({result:'Los datos ha sido insertado correctamente'})
           });
       };

//**********************GET ALL PRODUCT*******************// 

const getAllProduct = (req,res,next)=>{
    connection.query(
        'SELECT p.Id_product, p.ProductName, CategoryName, p.price, p.stock FROM `products` AS p INNER JOIN `CATEGORY` ON id= p.Id_category',
        function(err, results, fields) {
         if(err) return res.status(404).json({result:'Files not found'}) 
         
        if(!err) return res.status(200).json(results); // results contains rows returned by server
      // fields contains extra meta data about results, if available
        }
      );
    }

//**********************GET ONE PRODUCT BY ID********************// 
const getOneProductyByID= (req,res,next)=>{
    console.log(req.params.id);
    connection.query(
        `SELECT * FROM products where Id_product = ${req.params.id}`,
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
       // results contains rows returned by server
      // fields contains extra meta data about results, if available
    }
//**********************UPDATE ONE CATEGORY BY ID********************// 


const updateOneProductByID= (req,res,next)=>{
    let sql =  `UPDATE PRODUCTS SET ProductName = ?,
    id_category = ?,
    price = ?,
    stock =?
    where Id_product  = ?`
let results = [req.body.productName, 
               req.body.id_category, 
               req.body.price,
               req.body.stock,
               req.params.id]

    connection.query(sql,results,
        function(err, results) {
            console.log(results);
          
    console.log(err);
            return res.status(200).json(results)
        }
    )
}

//**********************DELETE ONE CATEGORY BY ID********************// 
const deleteOneProductByID= (req,res,next)=>{
    console.log(req.params.id);
    connection.query(
        `DELETE FROM products where Id_product  = ${req.params.id}`,
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
       // results contains rows returned by server
      // fields contains extra meta data about results, if available
        

    }

//**********************DELETE ALL CATEGORIES (JUST FOR DEVELOPMENT PROPURSES)********************//

const deleteAllProduct= (req,res,next)=>{ 
    console.log(req.params.id);
    connection.query(
        `DELETE FROM products`,
        function(err, results, fields) {

            //console.log(results.affectedRows);
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

    module.exports= {createProduct,getAllProduct,getOneProductyByID,updateOneProductByID,deleteOneProductByID,deleteAllProduct}





