const { badRequest } = require('../errors/bad_request_error')
const {errorResponse} = require('../utils/error_response')


createProductValidator = (req, res, next) => {
    if(!req.body.title){
        return res.status(400).json(errorResponse('Title not present in the incoming request', new badRequest('Title')))
    }

    if(!req.body.description){
        return res.status(400).json(errorResponse('Description not present in the incoming request', new badRequest('Description')))
    }

    if(!req.body.price){
        return res.status(400).json(errorResponse('Price not present in the incoming request', new badRequest('Price')))
    }

    if(!req.body.image){
        return res.status(400).json(errorResponse('Image not present in the incoming request', new badRequest('Image')))
    }

    if(!req.body.category){
        return res.status(400).json(errorResponse('Category not present in the incoming request', new badRequest('Category')))
    }

    next() 
}

module.exports = {
    createProductValidator
}