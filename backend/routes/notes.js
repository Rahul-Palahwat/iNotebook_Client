const express= require('express');
const router= express.Router();
// wha pr hmm app.get use krte the but yha pr router.get use krnege 

router.get('/',(req,res)=>{
    res.json([]);
});


// ab yha pr router ko export krenge 
module.exports = router ;