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
        
        for(let i=0; i<5; i++)
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
    for (let i = 0; i < 1; i++) {
        var contenedor = document.createElement("div");
        contenedor.setAttribute("id", "p" + i);
        
        let producto = `
        <div class="card" style="width: 18rem; margin-top: 20px;">
            <div class="card-body">
            <img src="${this.data.results[i].thumbnail}" class="card-img-top img_product item-image" alt="...">
                <h5 class="card-title limitado item-title" id="p">${this.data.results[i].title}</h5>
                <p class="card-text">
                $<span class="item-price">${this.data.results[i].price}</span>MXN
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

    const result = await fetch('https://tecnogate-tecla.herokuapp.com/cart');
    const cart = await result.json();
    console.log(cart);
}
getCart()



   





