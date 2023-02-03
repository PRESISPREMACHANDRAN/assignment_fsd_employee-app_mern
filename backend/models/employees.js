const Mongoose = require("mongoose");


const postSchema = Mongoose.Schema(
{
    name:String,
    email:String,
    designation:String
}
)

var postModel=Mongoose.model("posts",postSchema);
module.exports=postModel
