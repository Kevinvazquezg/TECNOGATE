const express = require("express");
const dotenv = require('dotenv');
const db = require('./db/db');
const midd = require('./middlewares/midd');
const cors = require('cors');
const app = express();
dotenv.config();


//Middlelware
app.use(express.json());
app.use(cors());
app.use(midd.log);
app.use(midd.limitador);

app.listen(process.env.PORT, function () {
    console.log(`Servidor iniciado en http://${process.env.HOST}:${process.env.PORT}`);
});


//Endpoint para obtener el Carrito
app.get('/cart',cors(midd.corsOption),function (req, res) {
    res.send(db.Items)
})

app.post('/cart',midd.Autenticar, function (req, res) {
    if (!req.body.id || !req.body.nombre || !req.body.cantidad || !req.body.precio) {
        db.respuesta = {
            codigo: 502,
            error: true,
            mensaje: 'Es indispensable enviar id,    nombre, cantdad y precio'
        }
    } else {
        if (db.buscaItem(req.body.id)) {
            db.respuesta = {
                codigo: 200,
                error: true,
                mensaje: 'Producto añadido'
                
            }
        } else {
            db.nuevoItem(req.body.id, req.body.nombre,req.body.cantidad,req.body.precio)
            db.respuesta = {
                codigo: 200,
                error: false,
                mensaje: '¨Producto Agregado'
            }
        }
    }
    res.send(db.respuesta)
})

app.delete('/cart/:id', function (req, res) {
    if (db.borraItem(req.params.id)) {
            db.respuesta = {
            codigo: 200,
            error: false,
            mensaje: 'Producto eliminado'
        }
    } else {
        db.respuesta = {
            codigo: 421,
            error: true,
            mensaje: 'Producto no existe'
        }
    }
    res.send(db.respuesta);
})

app.get('/categories',cors(midd.corsOption),function (req, res) {
    res.send(db.Category)
})

app.post('/categories',midd.Autenticar, function (req, res) {
    if (!req.body.id || !req.body.nombre) {
        db.respuesta = {
            codigo: 502,
            error: true,
            mensaje: 'Es indispensable enviar id y nombre de las categorias'
        }
    } else {
        if (db.buscaCategoria(req.body.id)) {
            db.respuesta = {
                codigo: 200,
                error: false,
                mensaje: 'La categoria ya existe'
                
            }
        } else {
            db.nuevaCategoria(req.body.id, req.body.nombre)
            db.respuesta = {
                codigo: 200,
                error: false,
                mensaje: '¨Categoría Agregada'
            }
        }
    }
    res.send(db.respuesta)
})


app.get('/products',cors(midd.corsOption),function (req, res) {
    res.send(db.Productos)
})

app.post('/products',midd.Autenticar, function (req, res) {
    if (!req.body.id_categoria ||!req.body.id || !req.body.nombre || !req.body.descripcion || !req.body.cantidad || !req.body.precio) {
        db.respuesta = {
            codigo: 502,
            error: true,
            mensaje: 'Es indispensable enviar toda la información del producto'
        }
    } else {
        if (db.buscaProducto(req.body.id)) {
            db.respuesta = {
                codigo: 200,
                error: false,
                mensaje: 'El producto ya existe ya existe'
                
            }
        } else {
            db.nuevoProducto(req.body.id_categoria,req.body.id,req.body.thumbnail, req.body.nombre, req.body.descripcion, req.body.cantidad, req.body.precio)
            db.respuesta = {
                codigo: 200,
                error: false,
                mensaje: 'Producto Agregado'
            }
        }
    }
    res.send(db.respuesta)
})


app.delete('/products/:id', function (req, res) {
    if (db.borraProducto(req.params.id)) {
            db.respuesta = {
            codigo: 200,
            error: false,
            mensaje: 'Producto eliminado'
        }
    } else {
        db.respuesta = {
            codigo: 421,
            error: true,
            mensaje: 'Producto no existe'
        }
    }
    res.send(db.respuesta);
})