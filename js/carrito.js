class Carrito {
    agregarAlCarrito(productoId){
        const existe = carrito.some(producto => producto.id === productoId);

        if (existe) { // => si el producto existe lo que va a pasar es que ese producto ya no va a salir 2 veces (osea el mismo producto debajo) si no lo que va a pasar es que ese producto se va a acomular.
            const producto = carrito.map(producto => {
                if(producto.id === productoId){
                    producto.cantidad++
                }
            })
        } else {
            const item = productos.find((producto) => producto.id === productoId) ;
            carrito.push(item);
        }
        this.actualizarCarrito()
    }
    eliminarDelCarrito(productoId){
        const item = carrito.find((producto) => producto.id === productoId);
        const indice = carrito.indexOf(item);
        carrito.splice(indice,1);
        this.actualizarCarrito()
    }
    descontarProductos(productoId){
        const existe = carrito.some(producto => producto.id === productoId); // => aqui creamos una variable y dentro esta carrito con el metodo .some()
    
        if (existe) { // => si el producto existe lo que va a pasar es que ese producto ya no va a salir 2 veces (osea el mismo producto debajo) si no lo que va a pasar es que ese producto se va a acomular.
            const producto = carrito.map(producto => {
                if(producto.id === productoId){
                    producto.cantidad--
                    if(producto.cantidad < 1){
                        producto.cantidad = 1
                    }
                }
            })
        }
        this.actualizarCarrito()
    }

    actualizarCarrito(){
        $productosEnCarrito.innerHTML= ""//=> esto quiere decir que cada vez que yo llame a la funcion actualizarCarrito() lo primero que hago es borrar el nodo despues recorro el array lo actualizo de nuevo y lo rellena con la informacion actualizada.
    
        carrito.forEach((producto)=>{
            obtengoProductoEnElCarrito(producto)
        })
        $contadorCarrito.textContent = carrito.length // => esto es para ver cuantos productos ahy en nuestro carrito y tambien para que se valla actualizando mediante la longitud cambie
        $precioTotal.textContent = carrito.reduce((acc,producto) => acc + producto.precio * producto.cantidad, 0) // => esto es para sacar el precio total de los productos.

        $ventanaPrecioTotal.style.setProperty("display","block")
        $carVacio.style.setProperty("display","none");
        const longitud = carrito.length;
        longitud >= 5 &&  $listaProductos.style.setProperty("overflow","scroll"), $listaProductos.style.setProperty("overflow-x","hidden");
        
         if (longitud == 0) {
            $ventanaPrecioTotal.style.setProperty("display","none")
            $listaProductos.style.setProperty("overflow","hidden")
            $carVacio.style.setProperty("display","flex");
            localStorage.removeItem("carrito")
        }
    }
}


class CarritoCheckout {
    aumentarProductoCheckout(productoId){
        const existe = carrito.some(producto => producto.id === productoId);

        if (existe) { // => si el producto existe lo que va a pasar es que ese producto ya no va a salir 2 veces (osea el mismo producto debajo) si no lo que va a pasar es que ese producto se va a acomular.
            const producto = carrito.map(producto => {
                if(producto.id === productoId){
                    producto.cantidad++
                }
            })
        } else {
            const item = productos.find((producto) => producto.id === productoId) ;
            carrito.push(item);
        }
        this.actualizarCarrito()
    }
    eliminarDelCheckout(productoId){
        const item = carrito.find((producto) => producto.id === productoId);
        const indice = carrito.indexOf(item);
        carrito.splice(indice,1);
        this.actualizarCarrito()
    }
    descontarProductosCheckout(productoId){
        const existe = carrito.some(producto => producto.id === productoId); // => aqui creamos una variable y dentro esta carrito con el metodo .some()
    
        if (existe) { // => si el producto existe lo que va a pasar es que ese producto ya no va a salir 2 veces (osea el mismo producto debajo) si no lo que va a pasar es que ese producto se va a acomular.
            const producto = carrito.map(producto => {
                if(producto.id === productoId){
                    producto.cantidad--
                    if(producto.cantidad < 1){
                        producto.cantidad = 1
                    }
                }
            })
        }
        this.actualizarCarrito()
    }

    actualizarCarrito(){
        $tBody.innerHTML= ""//=> esto quiere decir que cada vez que yo llame a la funcion actualizarCarrito() lo primero que hago es borrar el nodo despues recorro el array lo actualizo de nuevo y lo rellena con la informacion actualizada.
    
        carrito.forEach((producto)=>{
            productosCheckout(producto)
        })
        $monetary.forEach((monetary)=>{
            monetary.textContent = carrito.reduce((acc,producto) => acc + producto.precio * producto.cantidad, 0)
        })    // => esto es para sacar el precio total de los productos.
        const longitud = carrito.length;
            if (longitud === 0) {
                $cart.style.display ="none"
                $pricetotal.style.display ="none"
                $emptyCartContent.style.display="block"
                localStorage.removeItem("carrito")
            }
    }
}
const botonEliminarProductoCheckout = (id) => {
    let car = new CarritoCheckout
    car.eliminarDelCheckout(id)
}
const botonAumentarProductosCheckout = (id) => {
    let car = new CarritoCheckout
    car.aumentarProductoCheckout(id)
}
const botonDescontarProductosCheckout = (id) => {
    let car = new CarritoCheckout
    car.descontarProductosCheckout(id)
}
