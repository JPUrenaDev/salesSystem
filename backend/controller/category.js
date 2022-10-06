const connection = require('../connection/db')

//**********************CREATE NEW CATEGORY********************//
const createCategory = (req,res,next)=>{
    
    const CategoryName = req.body.category;
    const CategoryDescription = req.body.categoryDescription; 
    
connection.query(
    'INSERT INTO `CATEGORY` (CategoryName, CategoryDescription) VALUES (?,?)',
    [CategoryName, CategoryDescription],(error, 
        results) => {
           if (error) return res.json({ error: error })

           if(!error) return res.json({result:'Los datos ha sido insertado correctamente'})
           });
       };

//**********************GET ALL CATEGORIES*******************// 

const getAllCategory = (req,res,next)=>{
    connection.query(
        'SELECT * FROM `CATEGORY`',
        function(err, results, fields) {
         if(err) return res.status(404).json({result:'Files not found'}) 
         
        if(!err) return res.status(200).json(results); // results contains rows returned by server
      // fields contains extra meta data about results, if available
        }
      );
    }

//**********************GET ONE CATEGORY BY ID********************// 
const getOneCategoryByID= (req,res,next)=>{
    console.log(req.params.id);
    connection.query(
        `SELECT * FROM CATEGORY where id  = ${req.params.id}`,
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
const updateOneCategoryByID= (req,res,next)=>{
    let sql =  `UPDATE CATEGORY SET Categoryname = ?,
    CategoryDescription = ?
    where CUSTOMER_ID  = ?`
let results = [req.body.Category, 
               req.body.categoryDescription, 
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
const deleteOneCategoryByID= (req,res,next)=>{
    console.log(req.params.id);
    connection.query(
        `DELETE FROM CATEGORY where id  = ${req.params.id}`,
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

const deleteAllCategory= (req,res,next)=>{ 
    console.log(req.params.id);
    connection.query(
        `DELETE FROM CATEGORY`,
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

    module.exports= {createCategory,getAllCategory,getOneCategoryByID,updateOneCategoryByID,deleteOneCategoryByID,deleteAllCategory}