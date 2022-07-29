document.addEventListener("DOMContentLoaded", ()=>{
    if(localStorage.getItem("carrito")){
        carrito = JSON.parse(localStorage.getItem("carrito"))
        let get = new Carrito()
        get.actualizarCarrito()
    }
    setTimeout(() => {
        obtengoProductos(URL)
    },500);
})

function antesDeLaCompra (){
    $cart.style.display ="none"
    $pricetotal.style.display ="none"
    setTimeout(()=>{
        productosCheckout()
    },3000)
}
antesDeLaCompra()

const $comprar = document.querySelector(".finalizar-compra")
$comprar.addEventListener("click",()=>{
    localStorage.removeItem("carrito")
})
