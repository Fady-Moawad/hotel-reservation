const mongoose = require('mongoose')

const roomSchema = new mongoose.Schema({
   type:String,
   price:Number,
   availableCount:Number,
   maxGuest:Number
})

const Rooms = mongoose.model('room',roomSchema)
module.exports= Rooms