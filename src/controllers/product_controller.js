const { StatusCodes, ReasonPhrases } = require("http-status-codes")

const createProduct = (req, res) => {

    try{

        // db processing

        return res
            .status(StatusCodes.CREATED)
            .json({
                success: true,
                error: {},
                message: ReasonPhrases.CREATED +' Product',
                data: {
                    id: Math.random() * (20),
                    title: req.body.title,
                    description: req.body.description,
                    category: req.body.category,
                    price: req.body.price,
                    image: req.body.image
                }
        })



    }catch(err){
        console.log("Something happened", err)
    }

}

module.exports = {
    createProduct
}