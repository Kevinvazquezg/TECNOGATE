const serversModel = require('../model/serversModel');

module.exports.getProducts = async () => {
    
    let products = new serversModel();
    let data = products.getProducts();

    if(data){
        return data
    }
}