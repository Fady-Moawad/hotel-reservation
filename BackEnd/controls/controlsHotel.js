const Users = require('../models/userModel')
const Rooms = require('../models/roomModel')
const Reservation = require('../models/reservationModel')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { validationResult, body } = require('express-validator')

const register = async (req, res, next) => {

    const { name, email, password } = req.body
    const errors = await validationResult(req)
    if (!errors.isEmpty()) {
        res.status(400)
        return next(errors)
    }
    try {
        const oldUser = await Users.findOne({ email: email });
        if (oldUser) {
            res.status(400)
            return next('change your email !')
        }

        const hasshpassword = await bcrypt.hash(password, 10)
        const newUser = await new Users({
            ...req.body,
            password: hasshpassword,
            role: 'user'
        })
        newUser.save();
        const payload = {
            userId: newUser._id,
            name: name,
            email: email,
            role: newUser.role
        }
        const token = await jwt.sign(payload, process.env.JWT_SECRET)
        res.status(201).json({ status: 'done', data: token })
    } catch (error) {
        res.status(400)
        return next(error)
    }


}
const login = async (req, res, next) => {
    const { email, password } = req.body    
    try {
        const user = await Users.findOne({ email: email });
        if (!user) {
            res.status(400)
            return next('user Not Found')
        }

        const matchedPassword = await bcrypt.compare(password, user.password)
        if (!matchedPassword) {
            res.status(400)
            return next('password is invalid !')
        }
        const payload = {
            userId: user._id,
            name: user.name,
            email: email,
            role: user.role
        }
        const token = await jwt.sign(payload, process.env.JWT_SECRET)
        res.status(200).json({ status: 'done', data: token })


    } catch (error) {
        res.status(400)
        return next(error)
    }

}
const reservation = async (req, res, next) => {
    //availableCount = availableCount - 1
    //availableCount = availableCount + 1 cancle possible new route
    /*   
    collect data =>user id  , room id ,email=>send with body from front end
   user login or send email => check email or id t|f
   check availalbe room t|f f=>return error
   t =>
    push data 
   
   */
    try {
        const { type, email, name, checkInDate, checkOutDate } = req.body;
        const user = await Users.findOne({ email: email });
        if (!user) {
            res.status(400)
            return next('user Not Found')
        }

        if (!(checkInDate<=checkOutDate)) {
            res.status(400)
            return next('invalid date')
        }




        let roomId;

        if (type == 'single') roomId = `693434af9ed63814e6cdaf61`
        else if (type == 'double') roomId = `694062b70dd3eac8dd35fb8d`
        else roomId = `694063c70dd3eac8dd35fb8e`

        const room = await Rooms.findOne({ _id: roomId });

        if (room.availableCount == 0) {
            res.status(400)
            return next('There are not enough rooms')
        }

        const reservation = await new Reservation({
            userId: user._id,
            name: name,
            rtype: type,
            roomId: room._id,
            checkInDate: checkInDate,
            checkOutDate: checkOutDate,
            paymentAmount: room.price

        })
        await reservation.save()
        room.availableCount = room.availableCount - 1
        await room.save()
        res.status(201).json({ status: 'done', data: ['Your reservation was completed successfully'] })

    } catch (error) {
        res.status(400)
        return next(error)
    }
}


module.exports = {
    register,
    login,
    reservation
}