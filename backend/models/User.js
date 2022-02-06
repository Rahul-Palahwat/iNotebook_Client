const mongoose=require('mongoose');
// for schemas 
const {Schema}=mongoose;

// this is schema to store data in a proper format 
const UserSchema= new Schema({
    name:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required: true,
        unique: true
    },
    password:{
        type:String,
        required: true
    },
    date:{
        type:Date,
        // yha pr yen javascript ki date h Date.now isko Date.now() aise nhi likhna h as woh call ho jayega and hmm chahte h ki document insert pr run ho...
        default: Date.now
    },
    
});

// now iss schema ko use krne ke liye apun log isse export krenge 
// yha pr pehle usko model bnaya ja rha h then export kr rhe h 
const User=mongoose.model('user', UserSchema);
module.exports = User;
// model ko 2 argument chiye 1 is module ka naam and second is schema 
