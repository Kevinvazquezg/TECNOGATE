const sequelize = require('../db/conexion');

module.exports = class laptopModel{

    async getProducts(){
        let result = await sequelize.query("SELECT * FROM products WHERE id_category = '4'");
        if(result.length > 0){
            return result
        }

    }
}