const sequelize = require('../db/conexion');

module.exports = class laptopModel{

    async getProducts(){
        let result = await sequelize.query("SELECT * FROM products WHERE id_category = '2' OR id_category = '3'");
        if(result.length > 0){
            return result
        }

    }
}