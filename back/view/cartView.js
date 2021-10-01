const cartController = require('../controller/cartController')
const isAuthenticated = require('../middleware/isAtuthenticated')


module.exports = async (app) => {

    app.post('/cart',isAuthenticated.isAuthenticated, async(req,res) => {
        let product = req.body;
        console.log(product)
        let data = await cartController.add(product);
        if(data)
        {
            res.redirect('/laptops')
        }
    })
}