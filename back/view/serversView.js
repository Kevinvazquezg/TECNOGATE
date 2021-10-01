const serversController = require('../controller/serversController')


module.exports = async (app) => {

    app.get('/servers', async(req,res) => {
        const data = await serversController.getProducts();
        
        res.render('servers',{data})
    })
}