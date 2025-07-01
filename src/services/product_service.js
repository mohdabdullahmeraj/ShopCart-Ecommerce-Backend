products = []

class ProductService {
    constructor (repository){
        this.repository = repository
    }
    createProduct = (product) => {
        const newProduct = {
            id: products.length,
            ...product
        }    
        
        products.push(newProduct)
        return newProduct
    }
    
    getProducts = async() => {
        const response = await this.repository.getProducts()
        return response        
    }
    
    getProduct = async(id) => {
        const response = await this.repository.getProduct(id)
        return response
    }
}



module.exports = ProductService

