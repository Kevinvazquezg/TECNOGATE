 const accountController = require('../controller/accountController')
const isAuthenticated = require('../middleware/isAtuthenticated')
const {promisify} = require('util');
const jwt = require('jsonwebtoken');

module.exports = async (app) => {

    app.get('/account',  async(req,res) => {
        const decodificada = await promisify(jwt.verify)(req.cookies.jwt, process.env.KEY)
        const token = decodificada.data;
        
        const data = await accountController.get(token.id);
        console.log(data)
        res.render('account',{data})
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