const registerController = require('../controller/registerController')


module.exports = async (app) => {

    app.get('/newUserAdmin',async(req,res) => {
        res.render('newUser');
    });

    app.post('/newUserAdmin',async(req,res) => {
        let user = req.body;
        let data = await registerController.register(user);
        if(data)
        {
            res.redirect('/users')
        }
    })
};