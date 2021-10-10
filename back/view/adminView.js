module.exports = async (app) => {

    app.get('/admin',  async(req,res) => {
       
        res.render('admin')
        
    })

    
}