const { StatusCodes, ReasonPhrases } = require("http-status-codes")
const productService = require('../services/product_service')

const createProduct = (req, res) => {

    try{

        // db processing
        const response = productService.createProduct(req.body)
        return res
            .status(StatusCodes.CREATED)
            .json({
                success: true,
                error: {},
                message: ReasonPhrases.CREATED +' Product',
                data: response
        })



    }catch(err){
        console.log("Something happened", err)
    }

}

const getProducts = (req, res) =>{
    try{

        const response = productService.getProducts()
        return res
            .status(StatusCodes.OK)
            .json({
                success: true,
                error: {},
                message: 'Successfully fetched Products',
                data: response
        })

    }catch(err){
        console.log("Something went wrong", err)
    }
}

const getProduct = (req, res) => {
    try{

       const response = productService.getProduct(req.params.id)
        return res
            .status(StatusCodes.OK)
            .json({
                success: true,
                error: {},
                message: 'Successfully fetched Product',
                data: response
        }) 

    }catch(err){
        console.log("Something happened", err)
    }
}

module.exports = {
    createProduct,
    getProducts,
    getProduct
}