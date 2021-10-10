
const deleteProductModel = require("../model/deleteProductModel")


module.exports.delete = async(id) => {
    let deleteProduct = new deleteProductModel();
    let data = await deleteProduct.delete(id);
    if(data){
        return data
    }
    else{
        return "Error"
    }
}
