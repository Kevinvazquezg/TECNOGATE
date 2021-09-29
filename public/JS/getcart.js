

class Cart{
    constructor(cart){
        this.cart = cart
    }

     static async getCart() {

        const result = await fetch('https://tecnogate-tecla.herokuapp.com/cart');
        const cart = await result.json();
        console.log(cart);
        let shoppingCart = new Cart(cart)
        await shoppingCart.createCart()
    }

    async createCart(){
        let products = document.getElementById("shopCart");
        
        for (let i=0; i<10; i++){
            var tot=0;
            tot = tot + parseInt(this.cart[i].precio)

            var contenedor = document.createElement("div");
            let producto= `
            <div class="row no-gutters">
            <div class="col-md-8">
                <div class="product-details mr-2">
                    </div>
                    <div class="d-flex justify-content-between align-items-center mt-3 p-2 items rounded">
                        <div class="d-flex flex-row">
                            <div class="ml-2"><span class="font-weight-bold d-block">${this.cart[i].nombre}</span><span class="spec">256GB, Navy Blue</span></div>
                        </div>
                        <div class="d-flex flex-row align-items-center"><span class="d-block">${this.cart[i].cantidad}</span><span class="d-block ml-5 font-weight-bold">$${this.cart[i].precio}</span><i class="fa fa-trash-o ml-3 text-black-50"></i></div>
                    </div>
                </div>
            </div>
        </div>`
       
        
      


        contenedor.innerHTML += producto
    
        products.appendChild(contenedor)
        }
    }
    
   
}

Cart.getCart()