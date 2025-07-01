// in memory db
products = []


const createProduct = (product) => {
    const newProduct = {
        id: products.length,
        ...product
    }    
    
    products.push(newProduct)
    return newProduct
}

const getProducts = () => {
    return products
}

const getProduct = (id) => {
    return products.filter(product => product.id == id)[0]
}


module.exports = {
    createProduct,
    getProducts,
    getProduct

}

