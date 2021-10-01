const tabletsController = require('../controller/tabletsController')


module.exports = async (app) => {

    app.get('/tablets', async(req,res) => {
        const data = await tabletsController.getProducts();
        
        res.render('tablets',{data})
    })
}