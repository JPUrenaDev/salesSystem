//BASE DE DATOS
const connection = require('../connection/db')


//**********************CREATE CUSTOMER********************//

const createCustomer = (req,res,next)=>{
    
    const FIRST_NAME = req.body.nombre;
    const LAST_NAME = req.body.apellido; 
    const DATE_OF_BIRTH = req.body.fechaNacimiento; 
    const ADDRESS = req.body.Direccion; 
    const PHONE_NUMBER = req.body.Telefono
    const EMAIL_ADDRESS = req.body.Email

connection.query(
    'INSERT INTO `Customer` (FIRST_NAME, LAST_NAME, DATE_OF_BIRTH,ADDRESS,PHONE_NUMBER,EMAIL_ADDRESS) VALUES (?,?,?,?,?,?)',
    [FIRST_NAME,LAST_NAME, DATE_OF_BIRTH,ADDRESS,PHONE_NUMBER,EMAIL_ADDRESS],(error, 
        results) => {
           if (error) return res.json({ error: error })

           if(!error) return res.json({result:'Los datos ha sido insertado correctamente'})
           });
       };

//**********************GET ALL CUSTOMER********************//
const getAllCustomer = (req,res,next)=>{
    connection.query(
        'SELECT * FROM `Customer`',
        function(err, results, fields) {
         if(err) return res.status(404).json({result:'Files not found'}) 
         
        if(!err) return res.status(200).json(results); // results contains rows returned by server
      // fields contains extra meta data about results, if available
        }
      );
    }


//**********************GET ONE CUSTOMER BY ID********************//
const getOneCustomerByID= (req,res,next)=>{
    console.log(req.params.id);
    connection.query(
        `SELECT * FROM Customer where CUSTOMER_ID  = ${req.params.id}`,
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

//**********************UPDATE ONE CUSTOMER BY ID********************//
const updateOneCustomerByID= (req,res,next)=>{
    let sql =  `UPDATE Customer SET FIRST_NAME = ?,
    LAST_NAME = ?, 
    DATE_OF_BIRTH = ?, 
    ADDRESS = ?,
    PHONE_NUMBER = ?, 
    EMAIL_ADDRESS = ?
where CUSTOMER_ID  = ?`
let results = [req.body.Nombre, 
               req.body.apellido, 
               req.body.fechaNacimiento, 
               req.body.Direccion, 
               req.body.Telefono, 
               req.body.Email,req.params.id]

    connection.query(sql,results,
        function(err, results) {
            console.log(results);
          
    console.log(err);
            return res.status(200).json(results)
        
        }
       
    )
       // results contains rows returned by server
      // fields contains extra meta data about results, if available
}




//**********************DELETE ONE CUSTOMER BY ID********************//

       

//**********************DELETE ALL CUSTOMERS (JUST FOR DEVELOPMENT PROPURSES)********************//


module.exports = {createCustomer,getAllCustomer,getOneCustomerByID,updateOneCustomerByID}