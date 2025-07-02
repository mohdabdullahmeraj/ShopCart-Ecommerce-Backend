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
    
}


module.exports = CategoryRepository