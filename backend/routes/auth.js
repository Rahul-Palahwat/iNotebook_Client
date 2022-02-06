const express= require('express');
const router= express.Router();
// wha pr hmm app.get use krte the but yha pr router.get use krnege 

// ab yha pr models me se user module ko import krenge then usko use krke 
const User = require('../models/User');

// this is for validation 
const { body, validationResult } = require('express-validator');

// create a user using : post "/api/auth/". Doesn't require auth 
// yha pr array ke andar saare validations jayege and error bhi ek array ki form m return hongi like 1 error yen and 2nd yen
router.post('/',[
    body('name','Enter a valid name').isLength({ min: 3 }),
    body('email','Enter a valid Email').isEmail(),
    body('password','password must be atleast five characters').isLength({ min: 5 })
],(req,res)=>{
    // yen errors ke liye h 
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // ab yen data ko save krne ke liye h 
    User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      }).then(user => res.json(user))
      .catch(err=> {console.log(err)
    res.json({error: `Please enter a unique value for email`})})

    // res.send(req.body);
});


// ab yha pr router ko export krenge 
module.exports = router ;