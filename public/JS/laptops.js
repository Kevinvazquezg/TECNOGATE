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
        `;
        
        contenedor.innerHTML += producto
        
        products.appendChild(contenedor)
    }
    }

   
}
Productos.getTrends()






