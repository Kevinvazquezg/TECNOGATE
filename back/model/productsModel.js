const sequelize = require('../db/conexion');



module.exports = class productsModel{
    
    async get(){
       
        let result = await sequelize.query("SELECT * FROM products");
        if (result.length > 0) {
            
                return result;
            
        } else {
            return false;
        }
    }
    
    async getProduct(id){
       
        let result = await sequelize.query("SELECT * FROM products WHERE id = '" + id + "'");
        if (result.length > 0) {
            
                return result;
            
        } else {
            return false;
        }
    }

    async update(user){
        await sequelize.query("UPDATE users SET [user] = '" + user.user  + "', [name] = '" + user.name  + "', email = '" + user.email  + "' WHERE id = '" + user.id + "'");
        return await sequelize.query("SELECT * FROM users WHERE id = '" + user.id + "'");
        
    }

}