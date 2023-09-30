const express=require("express");
const path=require("path");
const hbs=require("hbs");
require("./db/conn");
const app=express();
const port=process.env.PORT||3000
const Registration=require("./models/login");
const staticpath=path.join(__dirname+"/public");
const viewpath=path.join(__dirname+"/templates/views");
const partialpath=path.join(__dirname+"/templates/partials");

app.use(express.static(staticpath));
app.set("view engine","hbs");
app.set("views",viewpath);  
hbs.registerPartials(partialpath);
app.use(express.urlencoded({extended:false}));
app.get("/",(req,res)=>{
    res.render("index");
})
app.use(express.json());


app.post("/register",async(req,res)=>{
    
    try{
const passwords= req.body.password;
const cpassword= req.body.confirm_password;

if(passwords===cpassword){
 const registername=new Registration({
    Username:req.body.username,
    Email:req.body.email,
    Password:req.body.password,
    ConfirmPassword:req.body.confirm_password,
 })

const usersave=await registername.save();
res.render("login");


}
else{
    res.send("passwords are not matching");
}


    }
    catch(e){
        res.send(e);
    }
})
app.listen(port,()=>{
    console.log(`connection is started at port ${port}`);
})

