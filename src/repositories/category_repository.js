const { where } = require('sequelize')
const Category = require('../models/category')

class CategoryRepository{
    getCategories = async () => {
        try{
    
            const response = await Category.findAll()
            return response
    
        }catch(err){
            console.log("Something happened", err)
        }
    }

    getCategory = async (id) => {
        try{
    
            const response = await Category.findByPk(id) 
            return response
    
        }catch(err){
            console.log("Something happened", err)
        }
    }

    createCategory = async(name, description) => {
        try{

            const response = await Category.create({
                name,
                description
            })
            return response

        }
        catch(err){
            console.log("Something happened", err)
        }
    }

    deleteCategory = async(categoryID) => {
        try{

            const response = await Category.destroy({
                where: {
                    id: categoryID
                }
            })
            return response

        }catch(err){
            console.log("Something Happened", err)
        }
    }
    
}


module.exports = CategoryRepository