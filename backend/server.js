const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const errorHandler = require('./middleware/error-handler')
const app = express()
const { verifyToken } = require('./controllers/auth')

require('dotenv').config()

//import routes
const authRoutes = require('./routes/auth')

//app middlewares
app.use(bodyParser.json())
app.use(cors()) //allow all origins
if (process.env.NODE_ENV == 'development') {
  app.use(cors({ origin: `http://localhost:3000` }))
}

//middleware
app.use('/api', authRoutes)

app.use(errorHandler)

app.use((err, req, res, next) => {
  res.status(err.status || 500)
  res.send({
    error: {
      status: err.status || 500,
      message: err.message,
    },
  })
})

const port = process.env.port || 8800

app.listen(port, () => {
  console.log(`API is running on port ${port}`)
})
