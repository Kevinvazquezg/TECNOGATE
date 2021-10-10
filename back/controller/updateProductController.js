const updateProductModel = require("../model/updateProductModel")


module.exports.getProduct = async(id) => {
    let getProduct = new updateProductModel();
    let data = await getProduct.getProduct(id);
    if(data){
        return data
    }
    else{
        return "Error"
    }
}


module.exports.update = async(product) => {
    let updateProduct = new updateProductModel();
    let data = await updateProduct.update(product);
    if(data){
        return data
    }
    else{
        return "error"
    }
}
