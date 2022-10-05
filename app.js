const express = require('express');
const app = express();

app.get('/prueba',(req,res,next)=>{
    res.status(200).json({nombre:'prueba'})
});

