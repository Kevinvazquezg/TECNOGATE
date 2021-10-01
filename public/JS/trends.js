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
        
        for(let i=0; i<20; i++)
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
        <div class="card" style="width: 18rem; margin-top: 20px;">
            <form class="card-body" action="/cart" method="POST">
            <img src="${this.data.results[i].thumbnail}" class="card-img-top img_product item-image" alt="...">
                <input type="hidden" value="${this.data.results[i].id}" name="id">
                <input type="hidden" value="1" name="cantidad">
                <input type= text class="card-title limitado item-title" id="p" name="title" value="${this.data.results[i].title}" readonly></input>
                <input class="card-text item-price" name="price" value="${this.data.results[i].price}" style="border:0" readonly ><p>MXN</p>
                <button type="submit" class="item-button btn btn-primary addToCart">AÑADIR AL CARRITO</button>
            </form>
        </div>`;
        
        contenedor.innerHTML += producto
        
        products.appendChild(contenedor)
    }
    }

    

   
}



Trends.getTrends()







