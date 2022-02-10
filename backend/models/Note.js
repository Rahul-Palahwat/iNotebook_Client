const mongoose=require('mongoose');
// for schemas 
const {Schema}=mongoose;

// this is schema to store data in a proper format 
const NotesSchema= new Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    title:{
        type:String,
        required: true
    },
    description:{
        type:String,
        required: true
    },
    tag:{
        type:String,
        default: "General"
    },
    date:{
        type:Date,
        // yha pr yen javascript ki date h Date.now isko Date.now() aise nhi likhna h as woh call ho jayega and hmm chahte h ki document insert pr run ho...
        default: Date.now
    },
    
});

// now iss schema ko use krne ke liye apun log isse export krenge 
// yha pr pehle usko model bnaya ja rha h then export kr rhe h 
module.exports = mongoose.model('notes', NotesSchema);
// model ko 2 argument chiye 1 is module ka naam and second is schema 
