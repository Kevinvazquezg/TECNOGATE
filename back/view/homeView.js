const isAuthenticated = require('../middleware/isAtuthenticated')

module.exports = async (app) => {

    app.get('/',isAuthenticated.isAuthenticated, async(req,res) => {
        res.render('index',{
            user: req.user
        })
        
    })
}