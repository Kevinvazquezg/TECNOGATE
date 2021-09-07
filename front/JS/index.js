class Trends {
    constructor(data) {
        this.data = data
    }
    static async getTrends() {
        let url = "https://api.mercadolibre.com/trends/MLM/MLM1648";
        const resp = await fetch(url);
        const data = await resp.json();
        let Product = new Trends(data)
        await Product.CreateKeyword()
        
    }
    async CreateKeyword() {

       
      
        let ctn = document.createElement('div');
        let nombre;
        
        for(let i=0; i<1; i++)
        {
           let url = "https://api.mercadolibre.com/sites/MLM/search?q="+this.data[i].keyword;
           const resp = await fetch(url);
           const data = await resp.json();
           let Product = new Trends(data)  
           nombre = document.createElement('p');
           nombre.textContent = `${this.data[i].keyword}`;
           await Product.CreateProduct()
        }
    }
   async CreateProduct() {
    let products = document.getElementById("products");
    for (let i = 0; i < 8; i++) {
        var contenedor = document.createElement("div");
        contenedor.setAttribute("id", "p" + i);
        
        let producto = `
        <div class="card" style="width: 18rem; margin-top: 20px;">
            <div class="card-body">
            <img src="${this.data.results[i].thumbnail}" class="card-img-top img_product item-image" alt="...">
                <h5 class="card-title limitado item-title" id="p">${this.data.results[i].title}</h5>
                <p class="card-text item-price">
                $${this.data.results[i].price}MXN
                </p>
                <button class="item-button btn btn-primary addToCart" data-id="${this.data.results[i].id}">AÑADIR AL CARRITO</button>
            </div>
        </div>`;
        
        contenedor.innerHTML += producto
        
        products.appendChild(contenedor)
    }
    }

   
}
Trends.getTrends()


async function getCart() {

    const result = await fetch('http://localhost:3000/cart');
    const cart = await result.json();
    console.log(cart);
}
getCart()

async function agregarProducto(Articulo) {
    await fetch('http://localhost:3000/cart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(Articulo)
    });

   
}

products.addEventListener('click', e =>{
    addCarrito(e)
})

let Articulo = {}
let item = 0;
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
    if(agregarProducto(Articulo)){
        item ++
        document.getElementById('items').innerHTML = item;
    }
    getCart()
    
}



  




   





