const mongoose = require('mongoose');
const Datee = new mongoose.Schema({
    _id:String,
    count:Number,
    data:Array
})
module.exports = new mongoose.model("Data",Datee);