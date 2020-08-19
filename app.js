const express = require('express')
const morgan = require('morgan')
const app = express()
const cors = require('cors')
const router = require('./router')


app.get('/health', (req, res) => {
  res.status(200).json({
    message: 'OK'
  })
})

app.use(cors())

app.use(express.json())

if (process.env.NODE_ENV !== 'test')
  app.use(morgan('dev'))

app.use(express.urlencoded({ extended: true }))

app.use(router)

module.exports = app