const URL = "./database.json"
let carrito = [];
let productos =[]
// let productosAMostrar = ""

// let UMBRAL = 10
// let IVALOCAL = 1.21
// let IVAIMPORTADO = 1.105

//esto es para los filtros
    const $filtroColores = document.getElementById("filtro-colores");
    const $filtroProducto = document.getElementById("filtro-producto");
    const $filtroPrecio = document.getElementById("filtro-precio");
    const $downPrecio = document.querySelector(".down-precio");
    const $downProducto = document.querySelector(".down-producto");
    const $downColores = document.querySelector(".down-colores");
    const $filtrar = document.getElementById("filtrar");
    const $filtros = document.getElementById("filtros")
    const $colores = document.getElementById("colores");
    const $products = document.getElementById("products");
    const $closeFiltro = document.getElementById("close-filtro");
//


//esto es para el orden
    const $ordenarPor = document.getElementById("ordenarPor");
    const $ordenLista = document.getElementById("orden-lista");
    const $iconDown   = document.querySelector(".down")
//


//ESTO ES PARA LA APLICACION 
const $productosDiv = document.getElementById("productos");
const $productosEnCarrito = document.getElementById("productos-en-carrito");
const $contadorCarrito = document.getElementById("contadorCarrito");
const $precioTotal = document.getElementById("PrecioTotal");
const $ventanaPrecioTotal = document.getElementById("comprar-ahora");
const $listaProductos = document.getElementById("lista-carrito");
const $carVacio = document.querySelector(".row-2");

//alerta
const $alerta = document.getElementById("alerta");

//finalizar compra

const $containerCheckout = document.getElementById("container-checkout")
const $tBody = document.querySelector("tbody")
const $pricetotal = document.querySelector(".price-total-template")
const $cart = document.querySelector(".cart")
const $emptyCartContent = document.querySelector(".empty-cart-content")
const $monetary = document.querySelectorAll(".monetary")


const $tyc = document.getElementById("tyc")
const $finalizarCompra = document.getElementById("finalizar-compra")

$finalizarCompra.classList.add("disabled")

const enabled = () =>{
    if ($tyc.checked) {
        $finalizarCompra.classList.remove("disabled")
    } else{
        $finalizarCompra.classList.add("disabled")
    }
}
