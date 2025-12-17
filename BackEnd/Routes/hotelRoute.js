const express = require('express')
const route = express.Router()
const controls = require('../controls/controlsHotel')
const validateRegister = require('../middleware/validationRegister')
const validateLogin = require('../middleware/validationLogin')

route.route('/login')
    .post(validateLogin(),controls.login)
route.route('/register')
    .post(validateRegister(),controls.register)
route.route('/reservation')
    .post(controls.reservation)

module.exports =route
