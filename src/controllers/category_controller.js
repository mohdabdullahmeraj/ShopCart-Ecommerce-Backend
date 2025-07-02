const { StatusCodes, ReasonPhrases } = require("http-status-codes")
const CategoryService = require('../services/category_service')
const CategoryRepository = require("../repositories/category_repository")

const categoryService = new CategoryService(new CategoryRepository)

const getCategories = async(req, res) => {
    try{

        const response = await categoryService.getCategories()
        return res
            .status(StatusCodes.OK)
            .json({
                success: true,
                error: {},
                message: ReasonPhrases.OK,
                data: response
            })

    }catch(err){
        if(err){
            console.log("Something happened", err)
        }
    }
}

const getCategory = async(req, res) => {
    try{

        const response = await categoryService.getCategory(req.params.id)
        return res
            .status(StatusCodes.OK)
            .json({
                success: true,
                error: {},
                message: ReasonPhrases.OK,
                data: response
            })

    }catch(err){
        console.log("Something Happened", err)
    }
}

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
    getCategories,
    getCategory,
    createCategory
}