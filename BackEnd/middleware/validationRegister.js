const { body } = require('express-validator')

const validate = () => {
    return [
        body('name')
            .trim()
            .notEmpty().withMessage("name is required!")
        , body('email')
            .trim()
            .notEmpty().withMessage("email is required!")
            .isEmail().withMessage("Invalid email format")
        , body("password")
            .trim()
            .notEmpty().withMessage("password is required")
            .isLength({ min: 3 })
            .matches(/^(?=.*[!@#$%^&*])[A-Za-z\u0621-\u064A0-9!@#$%^&*]+$/)
            .withMessage("password at leats 3 chars")
    ]
}
module.exports = validate