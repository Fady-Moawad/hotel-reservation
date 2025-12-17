routes 
	post('api/hotel/register')
        name: '',
        email: '',
        password: ''
        status(201)

	post('api/hotel/login')
        email: '',
        password: ''
        status(200)

	post('api/hotel/reservation')
        name: '',
        email: '',
        checkInDate: '',
        checkOutDate: '',
        type: ''
        status(201)

Register:
    1-validation data from req.body
    2-check already exists before
    3-hashed password
    4-save data
    5-generate token for verify token with id 
    6-send token

login:
    1-get email and password from bady and
    2-check emial already exists or no
    3-compare password with password in DB
    4-send token

reservation:
    1-validation data from req.body
    2-check free availble room
    3-reduce availble room
    4-send confirm message reservation
    ---> option:
    -send confirm reservation via email

dependencies:
    "bcryptjs": "^3.0.2",
    "cors": "^2.8.5",
    "dotenv": "^17.2.2",
    "express": "^5.1.0",
    "express-validator": "^7.2.1",
    "jsonwebtoken": "^9.0.2",
    "mongoose": "^8.18.1"
