const updateProductController = require('../controller/updateProductController')

module.exports = async (app) => {

    app.get('/updateProduct/:id',  async(req,res) => {
        const data = await updateProductController.getProduct(req.params.id);
        console.log(data[0][0])
        res.render('updateProduct',{data})
        
    })

    app.post('/updateProduct', async(req,res) => {
        console.log(req.body)
        data = await updateProductController.update(req.body);
        if(data){
            res.redirect('/products')
        }
    })
}

   

    