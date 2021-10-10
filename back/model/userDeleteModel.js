const sequelize = require('../db/conexion');



module.exports = class userDeleteModel{
    

    async delete(id){
        const deleteUser = await sequelize.query("DELETE FROM users WHERE id = '" + id + "'");
        if(deleteUser){
            return true
        }
        
    }

}