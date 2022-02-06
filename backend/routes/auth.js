const express= require('express');
const router= express.Router();
// wha pr hmm app.get use krte the but yha pr router.get use krnege 

// ab yha pr models me se user module ko import krenge then usko use krke 
const User = require('../models/User');

// create a user using : post "/api/auth/". Doesn't require auth 

router.post('/',(req,res)=>{
    const user=User(req.body);
    user.save();
    console.log(req.body);
    res.send(req.body);
});


// ab yha pr router ko export krenge 
module.exports = router ;