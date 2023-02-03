const Mongoose = require("mongoose");


const userSchema = Mongoose.Schema(
{
    email:String,
    password:String
}
)

var userModel=Mongoose.model("users",userSchema);
module.exports=userModel
