const express = require('express')
const dotenv = require('dotenv')
const routes = require('./Routes/hotelRoute')
const mongoose = require('mongoose')
const cors = require('cors')
const { notFound, errorHandler } = require('./middleware/errorHanddling')
const app = express()

dotenv.config()
const port = process.env.PORT || 3000

mongoose.connect(process.env.MONGOOSE_URL).then(() => {
  console.log('connection');
  app.listen(port, () => {
    console.log(`listen in port ${port}`);
  })
})
  .catch((err) => { console.log(err); })

app.use(express.json())
app.use(cors())
app.use('/api/hotel', routes)
app.use(notFound)
app.use(errorHandler)

