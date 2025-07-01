const express = require('express')
const bodyParser = require('body-parser')
const responseTime = require('response-time')

const {PORT} = require('./config/serverConfig')

const ApiRouter = require('./routes/api_router')

const app = express()

// app.use(responseTime((req, res, time) => {
//     console.log("Time elapsed: ", time)
//     res.setHeader('X-Response-Time', time)
// }))

app.use(responseTime())

app.use(bodyParser.json()) // application level middleware
app.use(bodyParser.text()) // application level middleware
app.use(bodyParser.urlencoded({extended: true})) // application level middleware

app.use('/api', ApiRouter)



app.listen(PORT, () => {
    console.log("Server for shop cart is up")
})