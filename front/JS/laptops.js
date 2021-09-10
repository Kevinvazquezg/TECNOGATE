class Productos {
    constructor(data) {
        this.data = data
    }
    static async getTrends() {
        let url = "https://tecnogate-tecla.herokuapp.com/products";
        const resp = await fetch(url);
        const data = await resp.json();
        let Product = new Productos(data)
        await Product.CreateProduct()
        
    }
    
   async CreateProduct() {
    let products = document.getElementById("laptops");
    for (let i = 0; i < 5; i++) {
        var contenedor = document.createElement("div");
        contenedor.setAttribute("id", "p" + i);
        let producto = `
        <div class="card" style="width: 18rem; margin-top: 20px;">
            <div class="card-body">
            <img src="${this.data[i].thumbnail}" class="card-img-top img_product item-image" alt="...">
                <h5 class="card-title limitado item-title" id="p">${this.data[i].nombre}</h5>
                <p class="card-text item-price">
                $${this.data[i].precio}MXN
                </p>
                <button class="item-button btn btn-primary addToCart" data-id="${this.data[i].id}">AÑADIR AL CARRITO</button>
            </div>
        </div>`;
        
        contenedor.innerHTML += producto
        
        products.appendChild(contenedor)
    }
    }

   
}
Productos.getTrends()






