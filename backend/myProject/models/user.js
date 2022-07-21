var mongoose =require('mongoose')
var Schema = mongoose.Schema;
var user =new Schema(
    {
        name:String,
        email:String,
        phone:Number,
        password:String
    }
)

module.exports=mongoose.model('user',user);
//anand nhi ho rha kya