const productsModel = require("../model/productsModel")

module.exports.get = async(user) => {
    let getProducts = new productsModel();
    let data = await getProducts.get();
    if(data){
        return data
    }
    else{
        return "Error"
    }
}

module.exports.getProduct = async(id) => {
    let getProducts = new productsModel();
    let data = await getProducts.getProduct(id);
    if(data){
        return data
    }
    else{
        return "Error"
    }
}


module.exports.update = async(user) => {
    let updateAccount = new accountModel();
    let data = await updateAccount.update(user);
    if(data){
        return data
    }
    else{
        return "error"
    }
}
