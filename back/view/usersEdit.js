const accountController = require('../controller/accountController')

module.exports = async (app) => {

    app.get('/usersEdit/:id',  async(req,res) => {
       console.log(req.params);
       const data = await accountController.get(req.params.id);
       console.log(data)
       res.render('accountAdmin',{data})
       
    })

    app.post('/account', async(req,res) => {
        let user = req.body;
        console.log(user)
        data = await accountController.update(user);
        if(data){
            res.redirect('/account')
        }
    })
}