const userDeleteController = require('../controller/userDeleteController')


module.exports = async (app) => {

    app.get('/delete/:id',  async(req,res) => {
        
        const data = await userDeleteController.delete(req.params.id);
        if(data){
            res.redirect('/users')
        }
        
    })
    
}