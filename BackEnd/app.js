const express = require('express')
const cors = require('cors')
const routes = require('./Routes/hotelRoute')
const { notFound, errorHandler } = require('./middleware/errorHanddling')

const app = express()

app.use(express.json())
app.use(cors())
app.use('/api/hotel', routes)
app.use(notFound)
app.use(errorHandler)

module.exports = app
