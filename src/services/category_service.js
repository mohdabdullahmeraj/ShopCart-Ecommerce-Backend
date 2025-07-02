class CategoryService {
    constructor (repository){
        this.repository = repository
    }

    getCategories = async() => {
        const response = await this.repository.getCategories()
        return response
    }

    getCategory = async(id) => {
        const response = await this.repository.getCategory(id)
        return response
    }

    createCategory = async(category) => {
        const response = await this.repository.createCategory(category.name, category.description)
        return response
    }

    deleteCategory = async(categoryID) => {
        const response = await this.repository.deleteCategory(categoryID)
        return response
    }
}



module.exports = CategoryService

