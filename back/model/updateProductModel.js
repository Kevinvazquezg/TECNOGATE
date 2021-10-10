const sequelize = require('../db/conexion');



module.exports = class updateproductModel{

    
    async getProduct(id){
       
        let result = await sequelize.query("SELECT * FROM products WHERE id = '" + id + "'");
        if (result.length > 0) {
            
                return result;
            
        } else {
            return false;
        }
    }

    async update(product){
       const data =  await sequelize.query("UPDATE products SET [name] = '" + product.name  + "', price = '" + product.price  + "', [description] = '" + product.description  + "', [image] = '" + product.image  + "', id_category = '" + product.id_category  + "', stock = '" + product.stock  + "' WHERE id = '" + product.id + "'");
        if(data){
            return true
        }
    }


}