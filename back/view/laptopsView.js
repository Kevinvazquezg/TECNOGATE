const laptopsController = require('../controller/laptopsController')


module.exports = async (app) => {

    app.get('/laptops', async(req,res) => {
        const data = await laptopsController.getProducts();
        
        res.render('laptops',{data})
    })
}