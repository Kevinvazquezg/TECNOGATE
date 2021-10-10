const newProductController = require('../controller/newProductController')


module.exports = async (app) => {

    app.get('/newProduct',async(req,res) => {
        res.render('newProduct');
    });

    app.post('/newProduct',async(req,res) => {
        console.log(req.body)
        let data = await newProductController.add(req.body);
        if(data)
        {
            res.redirect('/products')
        }
    })
};