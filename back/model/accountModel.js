const sequelize = require('../db/conexion');
const {promisify} = require('util');
const jwt = require('jsonwebtoken');


module.exports = class accountModel{
    
    async get(user){
       
        let result = await sequelize.query("SELECT * FROM users WHERE id = '" + user + "'");
        if (result[0].length > 0) {
            
                return result[0][0];
            
        } else {
            return false;
        }
    }

    async update(user){
        await sequelize.query("UPDATE users SET [user] = '" + user.user  + "', [name] = '" + user.name  + "', email = '" + user.email  + "' WHERE id = '" + user.id + "'");
        return await sequelize.query("SELECT * FROM users WHERE id = '" + user.id + "'");
        
    }

}