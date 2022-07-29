$alerta.style.display = "none"
//para el boton añadir carrito
const botonAgregarAlCarrito = (id) => {
        let car = new Carrito()
        car.agregarAlCarrito(id)
        // agregarAlCarrito(id)// => esto nos manda a la funcion agregarAlCarrito().
        $alerta.classList.remove("ocultar-animacion")
        $alerta.classList.add("animacion")
        $alerta.style.display = "flex"
        const ocultarAlerta = ()=>{
            $alerta.classList.remove("animacion")
            $alerta.classList.add("ocultar-animacion")
            $alerta.style.display = "none"
            const $cerrarAlerta = document.getElementById("cerrar");
            $cerrarAlerta.addEventListener("click",()=>{
                $alerta.classList.remove("animacion")
                $alerta.classList.add("ocultar-animacion")
                $alerta.style.display = "none"
            })
        }
        setTimeout(ocultarAlerta,3000)
}
//esto para la clase productos.

//esto es para cuando los productos esten en el carrito
const botonEliminarProducto = (id) => {
    let car = new Carrito()
    car.eliminarDelCarrito(id)
}
const botonAumentarProductos = (id) => {
    let car = new Carrito()
    car.agregarAlCarrito(id)
}
const botonDescontarProductos = (id) => {
    let car = new Carrito()
    car.descontarProductos(id)
}
/////////////////////



