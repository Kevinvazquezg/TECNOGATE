const deleteProductController = require('../controller/deleteProductController')


module.exports = async (app) => {

    app.get('/deleteProduct/:id',  async(req,res) => {
        
        const data = await deleteProductController.delete(req.params.id);
        if(data){
            res.redirect('/products')
        }
        
    })
    
}