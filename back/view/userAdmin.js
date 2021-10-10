const userAdminController = require('../controller/userAdminController')


module.exports = async (app) => {

    app.get('/users',  async(req,res) => {
        
        const data = await userAdminController.get();
        console.log(data[0].length);
        res.render('users',{data})
        
    })
    
}