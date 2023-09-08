const mongoose = require("mongoose");

const imgSchema = new mongoose.Schema({
    fname:{
        type:String,
        required:true
    },
    imgpath:{
        type:String,
        required:true
    },
    date:{
        type:Date
    }
});

const images = new mongoose.model("images",imgSchema) 

module.exports = images;