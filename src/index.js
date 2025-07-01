const express = require('express')
const bodyParser = require('body-parser')
const responseTime = require('response-time')
const mysql = require('mysql2')

const {PORT, DB_HOST, DB_NAME, DB_PASS, DB_USER} = require('./config/serverConfig')

const db = mysql.createConnection({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASS,
    database: DB_NAME
})

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

    db.connect((err) => {
        if(err){
            console.log('db did not connect')
            console.log(err)
            throw err
            return
        }

        console.log('db is connected')
        db.query('select * from products', (err, result) => {
            if(err){
                console.log(err)
                throw err
                return
            }
            console.log(result)
        })
    })
})