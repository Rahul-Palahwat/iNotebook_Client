const express= require('express');
const app=express();

const port=3000;

// this is to import db.js to start connection to the database 
const connectToMongo=require('./db.js');
// yen function ko call kiya h jisko import kiya tha 
connectToMongo();


// end points for requests
app.get('/',(req,res)=>{
    res.send("Hello world");
})



// this is to listen the server 
app.listen(port,()=>{
    console.log(`This app is listening at port ${port}`);
})