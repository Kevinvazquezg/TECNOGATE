let Items = [];
let Category = {};
let Productos = [];
let Id = {
    cont: 0,
}




let respuesta = {
    codigo: 200,
    error: false,
    mensaje:''
}

class Item {
    constructor(id,nombre,cantidad,precio){
        this.id = id
        this.nombre = nombre
        this.cantidad = cantidad
        this.precio = precio
        this.Id = Id.cont
    }
}

const nuevoItem = function(id,nombre,cantidad,precio){

    Items.push({
        
        "id" : id,
        
        "nombre" : nombre,
        
        "cantidad" : cantidad,
        "precio" : precio,
    })  
    Id.cont++
}



const buscaItem = function (id) {
    if(Items.hasOwnProperty(Items.id)){
        Items[id].cantidad++;
        return true;
    }else{
        return false;
    } 
}

const borraItem = function (id) {
    if(Items.hasOwnProperty(id)){
        console.log(Items[id]);
    if (Items[id].cantidad  > 1) {
        Items[id].cantidad  = Items[id].cantidad  - 1;
        return true
    } else {
        delete Items[id]
        return true
     } 
    }
    else{
      return false
    }
}



class Categoria{
    constructor(id,nombre){
        this.id = id
        this.nombre = nombre
    }
}

const nuevaCategoria = function(id,nombre){
    Category[id] = new Categoria(id,nombre);
    return true;
    
}



const buscaCategoria = function (id) {
    if(Category.hasOwnProperty(id)){
        return true;
    }else{
        return false;
    } 
}



class Producto {
    constructor(id_categoria,id,thumbnail,nombre, descripcion,cantidad,precio){
      
        this.id_categoria = id_categoria
        this.id = id
        this.thumbnail = thumbnail
        this.nombre = nombre
        this.descripcion = descripcion
        this.cantidad = cantidad
        this.precio = precio
    }
}

const nuevoProducto = function(id_categoria,id,thumbnail,nombre,descripcion,cantidad,precio){

    Productos.push({
        "id_categoria" : id_categoria,
        "id" : id,
        "thumbnail":thumbnail,
        "nombre" : nombre,
        "descripcion" : descripcion,
        "cantidad" : cantidad,
        "precio" : precio,
    })



    return true;
    
}



const buscaProducto = function (id) {
    if(Productos.hasOwnProperty(id)){
        return true;
    }else{
        return false;
    } 
}


const borraProducto = function (id) {
    if(Productos.id.hasOwnProperty(id)){
        console.log(Productos.id[id]);
        delete Productos[id]
        return true
    } else {
      return false
    }
}




module.exports = {Items,respuesta,nuevoItem,buscaItem,borraItem,nuevoProducto,buscaProducto, nuevaCategoria, buscaCategoria, Category, Productos, borraProducto}