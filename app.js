const express = require('express');
const cors = require('cors');
require('dotenv').config();
const sequileze = require('./db/conexion');
    // const productsView = require('./back/view/productsView');
const homeView = require('./views/homeView');
const loginView = require('./views/loginView');
const registerView = require('./views/registerView');

const app = express();
app.use(express.urlencoded({extended:true}))
app.use(express.json());
app.use(cors());

app.use(express.static(__dirname + '/public'));
app.set('view engine','ejs');


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