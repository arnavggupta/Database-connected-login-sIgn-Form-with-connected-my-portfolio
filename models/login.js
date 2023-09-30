const mongoose= require("mongoose");

const loginschema= new mongoose.Schema({

Username:{
    type:String,
    required:true
},
Email:{
type:   String,
required:true,
unique:true
},
Password:{
    type:String,
    required:true,

},
ConfirmPassword:{
    type:String,
required:true,

}


})

const Registration= new mongoose.model("Registration",loginschema);

module.exports=Registration;