const mongoose = require("mongoose")
const userSchema = mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    },
    phone:{
        type:String
    },
    tphn:{
        type:String
    },
    tid:{
        type:String
    },
    tsec:{
        type:String
    }


})
module.exports = new mongoose.model("User",userSchema);