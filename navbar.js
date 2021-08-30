let nav = document.getElementById("navbar");
var contenedor = document.createElement("div");
let navbar = `
<nav class="navbar navbar-expand-lg navbar-dark bg-dark nav-fixed ">
    <div class="container-fluid">
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
                <a class="nav-link active" aria-current="page" href="index.html"><i class="fas fa-home"></i> Inicio</a>
                <a class="nav-link" href="#">Laptops</a>
                <a class="nav-link" href="#">Tablets y Accesorios</a>
                <a class="nav-link" href="#">Servidores</a>
            </div>
        </div>
        <div class="navbar-nav">
          <a class="nav-link active" aria-current="page" href="login.html"><i class="fas fa-home"></i> Entrar</a>
          <a class="nav-link" href="#">Mi cuenta</a>
          <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">
              <i class="fas fa-shopping-cart"></i>
          </a>
      </div>
    </div>
</nav>
`;
contenedor.innerHTML += navbar
nav.appendChild(contenedor)