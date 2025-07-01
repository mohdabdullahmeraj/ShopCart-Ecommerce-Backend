const express = require('express')

const {PORT} = require('./config/serverConfig')

const ApiRouter = require('./routes/api_router')

const app = express()

app.use('/api', ApiRouter)


app.listen(PORT, () => {
    console.log("Server for shop cart is up")
})