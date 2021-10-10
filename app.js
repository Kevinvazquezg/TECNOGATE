const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
require('dotenv').config();
const sequileze = require('./back/db/conexion');
    // const productsView = require('./back/view/productsView');
const homeView = require('./back/view/homeView');
const loginView = require('./back/view/loginView');
const registerView = require('./back/view/registerView');
const laptops = require('./back/view/laptopsView');
const tablets = require('./back/view/tabletsView');
const servers = require('./back/view/serversView');
const trends = require('./back/view/trendsView');
const account = require('./back/view/accountView');
const cartView = require('./back/view/cartView');
const adminView = require('./back/view/adminView');
const userAdmin = require('./back/view/userAdmin');
const usersEdit = require('./back/view/usersEdit');
const newUserAdmin = require('./back/view/newUserAdmin');
const deleteUser = require('./back/view/deleteUser');
const productsView = require('./back/view/productsView');
const updateProductView = require('./back/view/updateProductView');
const newProductView = require('./back/view/newProductView');
const deleteProductView = require('./back/view/deleteProductView');

const app = express();


app.use(express.urlencoded({extended:false  }))

app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.use(express.static(__dirname + '/public'));
app.set('view engine','ejs');
app.set('views', __dirname + '/views');

async function serverStart() {
    try {
        await sequileze.authenticate();
        console.log("Conexión estabilizada correctamente")
        app.listen(process.env.PORT, function () {
            console.log(`Sistema iniciado en htt://${process.env.HOST}:${process.env.PORT}`);
        });
    } catch (error) {
        console.error('No se pudo conectar correctamebte con la Base de datos:', error);
    }
}

serverStart();

//Iniciamos vistas
// productsView(app);
homeView(app);
loginView(app);
registerView(app);
laptops(app);
tablets(app);
servers(app);
trends(app);
account(app)
cartView(app);
adminView(app);
userAdmin(app);
usersEdit(app);
newUserAdmin(app);
deleteUser(app);
productsView(app);
updateProductView(app);
newProductView(app);
deleteProductView(app);