const mongoose = require("mongoose")

const contact = mongoose.Schema({
    email:{
        type:String,
    },
    phone:{
        type:String,
    }

})
module.exports = new mongoose.Schema("Contact",contact);