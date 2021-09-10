async function agregarProducto(Articulo) {
    await fetch('http://localhost:3000/cart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(Articulo)
    });

   
}

laptops.addEventListener('click', e =>{
    addCarrito(e)
})

let Articulo = {}


const addCarrito = e =>{
    
    // console.log(e.target);
    // console.log(e.target.classList.contains('addToCart'));
    if(e.target.classList.contains('addToCart')){
        setCarrito(e.target.parentElement);
        
        
    }
    
}


const setCarrito = objeto => {


let Articulo = {
    id: objeto.querySelector('.addToCart').dataset.id,
    nombre: objeto.querySelector('h5').textContent,
    cantidad: 1,
    precio: objeto.querySelector('.item-price').textContent,
    clave:"Una clave para protegernos a todos"
}   
    agregarProducto(Articulo)

    
}



  




   

