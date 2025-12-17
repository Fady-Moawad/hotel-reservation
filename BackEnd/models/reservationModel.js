const mongoose = require('mongoose')

const reservationSchema = new mongoose.Schema({
   userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'client',
       required: true
   },
   name: String,
   rtype: String,
   roomId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'room',
      require: true
   },
   checkIn:Date,
    checkOut:Date,
    status:{
      type:String,
      enum:["pending", "completed","cancle"],
      default:'pending'
    },
    paymentAmount:Number
})

const Reservation = mongoose.model('reservation', reservationSchema)
module.exports = Reservation