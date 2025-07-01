const { StatusCodes, ReasonPhrases } = require("http-status-codes")
const CategoryService = require('../services/category_service')
const CategoryRepository = require("../repositories/category_repository")

const categoryService = new CategoryService(new CategoryRepository)

const createCategory = async(req, res) => {

    try{

        const response = await categoryService.createCategory(req.body)
        return res
            .status(StatusCodes.CREATED)
            .json({
                success: true,
                error: {},
                message: ReasonPhrases.CREATED +' Category',
                data: response
        })



    }catch(err){
        console.log("Something happened", err)
    }

}

module.exports = {
    createCategory
}