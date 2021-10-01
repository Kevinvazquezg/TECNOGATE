const sequelize = require('../db/conexion');


module.exports = class cartModel{
    
    async add(product){
        let newUser = [
            product.id,
            product.title,
            product.price,
            product.cantidad
        ]
        console.log(product)
       try{

            let result = await sequelize.query("SELECT * FROM cartProducts WHERE id_product = '" + product.id + "'");
            if(!result){
            await sequelize.query(`INSERT INTO cartProducts (id_product, [name], price, cantidad) VALUES (?,?,?,?)`,
            {replacements: newUser, type: sequelize.QueryTypes.SELECT});
            return "Usuario registrado"
            }
            else{
                console.log(result[0][0])
                let cantidad = result[0][0].cantidad + 1;
                await sequelize.query("UPDATE cartProducts SET cantidad = '" + cantidad  + "' WHERE id_product = '" + product.id + "'");
                return "Usuario registrado"

            }
       }
       catch{
            console.log("error");
        }

    }
}