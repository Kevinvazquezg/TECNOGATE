const tabletModel = require('../model/tabletModel');

module.exports.getProducts = async () => {
    
    let products = new tabletModel();
    let data = products.getProducts();

    if(data){
        return data
    }
}