const laptopModel = require('../model/laptopsModel');

module.exports.getProducts = async () => {
    
    let products = new laptopModel();
    let data = products.getProducts();

    if(data){
        return data
    }
}