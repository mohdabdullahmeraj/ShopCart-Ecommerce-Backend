const { default: axios } = require("axios")

class FakeStoreRepository{
    getProducts = async () => {
        try{
    
            const response = await axios.get('https://fakestoreapi.com/products')
            return response
    
        }catch(err){
            console.log("Something happened", err)
        }
    }
    
}


module.exports = FakeStoreRepository