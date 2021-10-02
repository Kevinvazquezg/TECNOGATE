const cartController = require('../controller/cartController')
const isAuthenticated = require('../middleware/isAtuthenticated')


module.exports = async (app) => {

    app.get('/cart',isAuthenticated.isAuthenticated, async(req,res) => {
        let data = await cartController.get();
        console.log(data)
         res.render('cart',{data })
    })

    app.post('/cart',isAuthenticated.isAuthenticated, async(req,res) => {
        let product = req.body;
        console.log(product)
        let data = await cartController.add(product);
        if(data)
        {
            res.redirect('/')
        }
    })
}