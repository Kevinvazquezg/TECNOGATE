const sequelize = require('../db/conexion');



module.exports = class deleteProductModel{
    

    async delete(id){
        const deleteUser = await sequelize.query("DELETE FROM products WHERE id = '" + id + "'");
        if(deleteUser){
            return true
        }
        
    }

}