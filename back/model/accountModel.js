const sequelize = require('../db/conexion');
const {promisify} = require('util');
const jwt = require('jsonwebtoken');


module.exports = class accountModel{
    
    async get(user){
       
        let result = await sequelize.query("SELECT * FROM users WHERE [user] = '" + user + "'");
        if (result[0].length > 0) {
            
                return result[0][0];
            
        } else {
            return false;
        }
    }

    async update(user){
        let result = await sequelize.query("UPDATE users SET user = '" + user.user  + "' WHERE user = '" + user.user + "'");
    }

}