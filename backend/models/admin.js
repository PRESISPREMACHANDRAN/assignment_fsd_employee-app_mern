const Mongoose = require("mongoose");


const adminSchema = Mongoose.Schema(
{
    name:String,
    email:String,
    password:String
}
)


var adminModel=Mongoose.model("admin",adminSchema);
module.exports=adminModel
