const express= require('express');
const router= express.Router();
// wha pr hmm app.get use krte the but yha pr router.get use krnege 

// ab yha pr models me se user module ko import krenge then usko use krke 
const User = require('../models/User');

// this is for encrypting password to save in database 
const bcrypt = require('bcryptjs');

// for authentication we will give token 
const jwt = require('jsonwebtoken');
// this i have to keep it secret as like api in environment varialbe
const JWT_SECRET="Rahul'sCo$de";

// this is for validation 
const { body, validationResult } = require('express-validator');

// create a user using : post "/api/auth/". Doesn't require auth 
// yha pr array ke andar saare validations jayege and error bhi ek array ki form m return hongi like 1 error yen and 2nd yen
router.post('/createuser',[
    body('name','Enter a valid name').isLength({ min: 3 }),
    body('email','Enter a valid Email').isEmail(),
    body('password','password must be atleast five characters').isLength({ min: 5 })
],async (req,res)=>{
    // yen errors ke liye h , this will return bad request and the error
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // ab yen data ko save krne ke liye h and check weather the user alreday exists with the same email
    // try and catch is liye h ki mano kbhi bhi koi dikkat aa gyi hmare database me toh ek error hme mil jaye 
    try {
    let user=await User.findOne({email: req.body.email});
    if(user){
      return res.status(400).json({error: "sorry email already exits"});
    }

    // yha pa password ko encrypt kr rhe h 
    const salt= await bcrypt.genSalt(10);
    secPass= await bcrypt.hash(req.body.password,salt);


   user=await User.create({
        name: req.body.name,
        email: req.body.email,
        password: secPass,
      })
    
      // ab yen token ke liye h like sending token as id of that user 
      const data={
        user:{
          id:user.id
        }
      }
      const authtoken= jwt.sign(data, JWT_SECRET);
      // console.log(authtoken);
      res.json({authtoken});


    // res.json({user});

  } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal server error");
  }

    // res.send(req.body);
});



// Authenticationg a user using : post "/api/auth/login". Doesn't require auth
router.post('/login',[
  body('email','Enter a valid Email').isEmail(),
  body('password','password can not be blank').exists(),
  
],async (req,res)=>{
  // yen errors ke liye h , this will return bad request and the error
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const {email,password}=req.body;
  try {
    let user= await User.findOne({email});
    if(!user){
      return res.status(400).json({error:"Please try to login with correct caredentilas"})
    }
    const passwordCompare= await bcrypt.compare(password, user.password);
    if(!passwordCompare){
      return res.status(400).json({error:"Please try to login with correct caredentils"})
    }
    // this is the data of the user when all the datils are correct 
    const data={
      user:{
        id:user.id
      }
    }
    const authtoken= jwt.sign(data, JWT_SECRET);
    // console.log(authtoken);
    res.json({authtoken});

  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal server errror");
}



})


// ab yha pr router ko export krenge 
module.exports = router ;