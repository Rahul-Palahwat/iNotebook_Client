const express= require('express');
const app=express();

const port=3000;

// this is to import db.js to start connection to the database 
const connectToMongo=require('./db.js');
// yen function ko call kiya h jisko import kiya tha 
connectToMongo();


// end points for requests
//Available routes
// ab yha pr apun log end points ko routes folder se lenge 

app.use('/api/auth', require('./routes/auth'));
app.use('/api/notes', require('./routes/notes'));



// this is to listen the server 
app.listen(port,()=>{
    console.log(`This app is listening at port ${port}`);
})