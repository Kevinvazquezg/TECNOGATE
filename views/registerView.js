const registerController = require('../controller/registerController')


module.exports = async (app) => {

    app.get('/register',async(req,res) => {
        
        // const data = await registerController.register(user);
        res.render('registerView');
        
    });

    app.post('/register',async(req,res) => {
        let user = req.body;
        let data = await registerController.register(user);
        if(data)
        {
            res.redirect('/')
        }
    })
};