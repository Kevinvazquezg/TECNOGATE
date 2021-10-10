const sequelize = require('../db/conexion');


module.exports = class newProductModel{
    
    async add(producto){
        let newProduct = [
            producto.name,
            producto.price,
            producto.description,
            producto.image,
            producto.id_category,
            producto.stock
        ]
       try{

        await sequelize.query(`INSERT INTO products ([name], price, [description], [image], id_category, stock) VALUES (?,?,?,?,?)`,
        {replacements: newProduct, type: sequelize.QueryTypes.SELECT});
            return "Producto registrado"
       }
       catch{
            console.log("error");
        }

    }
}