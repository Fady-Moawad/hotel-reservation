const {body} = require('express-validator')
const validate = () => {
    return [
        body('email')
            .trim()
            .notEmpty().withMessage("email is required!")
            .isEmail().withMessage("Invalid email format")
        , body("password")
            .trim()
            .notEmpty()
            .isLength({ min: 3 })
            .matches(/^(?=.*[!@#$%^&*])[A-Za-z\u0621-\u064A0-9!@#$%^&*]+$/)
            .withMessage("password at leats 3 chars")
    ]
}
module.exports=validate