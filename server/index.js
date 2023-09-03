const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose")
main().catch(err => console.log(err));
var validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};
const formSchema = new mongoose.Schema({
    first: {
        type:String,
        required:[true,"This field is required"]
    },
    last: {
        type:String,
        required:[true,"This field is required"]
    },
    company: {
        type:String,
        required:[true,"This field is required"]
    },
    bussinessEmail: {
        type:String,
        required:"Email is a reuired field",
        validate: [validateEmail, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    useCase: {
        type:String,
        required:[true,"This field is required"]
    }
})
async function main(){
  
        await mongoose.connect('mongodb://127.0.0.1:27017/inflowmate')}

main();
const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json())
app.post("/login/submit",(req,res)=>{
    const Person = mongoose.model('person', formSchema);

    const person1 = new Person(req.body);
    person1.save();
    console.log(person1)
    
})
app.listen("5000", ()=>{
    console.log("listening to port 5000")
})
app.get("/",(req,res)=>{
    // res.send("hello")
})