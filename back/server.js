    const express = require("express");
const dotenv = require('dotenv');
const db = require('./db/db');
const midd = require('./middleware/midd');
const cors = require('cors');
const app = express();
dotenv.config();
const sequelize = require('./db/conexion');

//Middlelware
app.use(express.json());
app.use(cors());
app.use(midd.log);
app.use(midd.limitador);

async function inicioServer() {
    try {
        await sequelize.authenticate();

        console.log('Conección estabilizada correctamente');

        app.listen(process.env.PORT, function () {
            console.log(`Sistema iniciado en htt://${process.env.HOST}:${process.env.PORT}`);
        });

      } catch (error) {
        console.error('No se pudo conectar correctamebte con la Base de datos:', error);
      }
}

inicioServer();

