const express = require('express')

const { pingController } = require('../../controllers/ping_controller');

const router = express.Router()

const checkRequest = (req, res, next) => {
    console.log("Request is checked")
    next()
    console.log("End Check Request")
}

const logger = (req, res, next) => {
    console.log("Logger is checked")
    next()
    console.log("End Logger")
}

const authChecked = (req, res, next) => {
    console.log("Auth is checked")
    next()
    console.log("End Auth")
}

router.get('/',[checkRequest, logger, authChecked] ,pingController)

module.exports = router