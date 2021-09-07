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
        
        for(let i=0; i<100; i++)
        {
           let url = "https://api.mercadolibre.com/sites/MLM/search?q="+this.data[i].keyword;
           const resp = await fetch(url);
           const data = await resp.json();
           let Product = new Trends(data)  
           await Product.CreateProduct()
        }
    }
   async CreateProduct() {
    let products = document.getElementById("products");
    for (let i = 0; i <20; i++) {
        var contenedor = document.createElement("div");
        contenedor.setAttribute("id", "p" + i);
        
        let producto = `
        <div class="card" style=" margin-top: 10px;">
            <img src="${this.data.results[i].thumbnail}" class="card-img-top img_product" alt="...">
            <div class="card-body"> 
                <p class="card-title limitado" ;>${this.data.results[i].title}</p>
                <p class="card-text">
                $ ${this.data.results[i].price}MXN
                <a href="#" class="btn btn-primary"> <i class="fas fa-cart-plus"></i></a>
                </p>
                
            </div>
        </div>`;
        
        contenedor.innerHTML += producto
        
        products.appendChild(contenedor)
    }
    }

    

   
}



Trends.getTrends()







