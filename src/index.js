const express = require('express')

const {PORT} = require('./config/serverConfig')

const app = express()

app.listen(5000, () => {
    console.log("Server for shop cart is up")
})