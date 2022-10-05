//BASE DE DATOS
const connection = require('../connection/db')


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


module.exports = createCustomer;