let nav = document.getElementById("navbar");
var contenedor = document.createElement("div");
let navbar = `
<nav class="navbar navbar-expand-lg navbar-dark bg-dark nav-fixed ">
    <div class="container-fluid">
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
                <a class="nav-link active" aria-current="page" href="/"><i class="fas fa-home"></i> Inicio</a>
                <a class="nav-link" href="/laptops">Laptops</a>
                <a class="nav-link" href="/tablets">Tablets y Accesorios</a>
                <a class="nav-link" href="/servers">Servidores</a>
            </div>
        </div>
        <div class="navbar-nav">
          <a class="nav-link active" aria-current="page" href="login.html"> Entrar</a>
          <a class="nav-link" href="#">Mi cuenta</a>
          <a class="nav-link" href="cart.html" tabindex="-1" aria-disabled="true">
              <i class="fas fa-shopping-cart" id="items"></i>
          </a>
      </div>
    </div>
</nav>
`;
contenedor.innerHTML += navbar
nav.appendChild(contenedor)

