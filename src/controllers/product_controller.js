const createProduct = (req, res) => {

    try{

        // db processing

        return res.json({
            success: true,
            error: {},
            message: 'Successfully created a product',
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