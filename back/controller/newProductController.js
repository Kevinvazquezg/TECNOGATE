const newProductModel = require("../model/newProductModel")


module.exports.add = async(product) => {
   
    let addProduct = new newProductModel();
    let data = await addProduct.add(product);

    if(data){
        return "Producto agregado"
    }
    else{
        console.log("error");
    }
}