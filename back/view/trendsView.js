
module.exports = async (app) => {

    app.get('/trends', async(req,res) => {
        res.render('trends',{
            user: req.user
        })
        
    })
}