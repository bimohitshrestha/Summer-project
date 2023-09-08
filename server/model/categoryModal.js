const mongoose = require('mongoose')

const categorySchema = mongoose.Schema({
    name:String,
    email:String,
    password:String
},{timestamps:true})

module.exports = mongoose.model('category',categorySchema)