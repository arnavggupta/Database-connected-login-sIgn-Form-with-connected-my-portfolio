const mongoose= require("mongoose");
const bcrypt =require("bcrypt");
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

loginschema.pre("save",async function(next){
    if(this.isModified("Password")){
const a=this.Password;
   this.Password=await bcrypt.hash(a,10);
   console.log(this.Password);
   this.ConfirmPassword=undefined;
    }
    next();
})
const Registration= new mongoose.model("Registration",loginschema);


module.exports=Registration;