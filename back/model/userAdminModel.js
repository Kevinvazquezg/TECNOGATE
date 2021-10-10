const sequelize = require('../db/conexion');



module.exports = class accountModel{
    
    async get(){
       
        let result = await sequelize.query("SELECT * FROM users");
        if (result.length > 0) {
            
                return result;
            
        } else {
            return false;
        }
    }

    async delete(id){
        const deleteUser = await sequelize.query("DELETE * FROM users WHERE id = '" + id + "'");
        if(deleteUser){
            return true
        }
        
    }

}