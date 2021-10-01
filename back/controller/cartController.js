const cartModel = require("../model/cartModel")

module.exports.add = async(product) => {
   
    let addProduct = new cartModel();
    let data = await addProduct.add(product);

    if(data){
        return "Se agrego al carrito"
    }
    else{
        console.log(product)
    }
}

