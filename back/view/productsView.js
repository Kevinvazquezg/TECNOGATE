const productsController = require('../controller/productsController')


module.exports = async (app) => {

    app.get('/products',  async(req,res) => {
        const data = await productsController.get();
        console.log(data)
        res.render('products',{data})
        
    })


   

    
}