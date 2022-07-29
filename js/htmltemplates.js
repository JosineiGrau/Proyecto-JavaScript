
const obtengoProductos = (URL) =>{
    fetch(URL)
    .then((res) => res.json())
    .then((data) => {
        productos = data
        productos.forEach((producto) => {
            const {id,nombre,precio,img} = producto
        
            const div = document.createElement("div");
            div.classList.add("producto")
            div.innerHTML=`
            <div class="producto-card">
            <div class="producto-precio">
                <a title= ${nombre} href="#">${nombre}</a>
                <p>S/.${precio}</p>
            </div>
            <button class="agregar-carrito" id="agregar${id}" onclick="botonAgregarAlCarrito(${id})">
                <p>AÑADIR AL CARRITO</p>
                <i class="fa fa-cart-shopping"></i>
            </button>
            </div>
            <a title=${nombre} href= "#"><img src=${img}></a>
            <button class="favorito">
                <i class="fa fa-heart"></i>
            </button>
            `
            $productosDiv.appendChild(div);// => el div creado lo agrego a productosDiv
        })
    })
    .catch((error)=>{console.log(error);})
    .finally(()=>{
            let contenedor = document.getElementById("preloader")
            contenedor.innerHTML= ""
    })
}

const obtengoProductoEnElCarrito = (producto) =>{
    const {id,nombre,precio,cantidad,img} = producto
    const div = document.createElement("div");
    div.classList.add("producto-en-carrito")
    div.innerHTML= `
        <img src=${img}>
        <div class="filtro-nombre-precio">
            <div class="nombre-producto">
                <a href="">${nombre}</a>
                <button id="${id}" type="button" onclick ="botonEliminarProducto(${id})">
                    <i class="fa-solid fa-trash-can"></i>
                </button>
            </div>
            <div class="filtro-precio">
                <div class="cantidad">
                    <button onclick ="botonAumentarProductos(${id})">+</button>
                    <input class="numeroCantidad" type="number" value="${cantidad}">
                    <button onclick ="botonDescontarProductos(${id})"> - </button>
                </div>
                <span>S/.${ cantidad * precio}</span>
            </div>
        </div>
        `
    $productosEnCarrito.appendChild(div)
    localStorage.setItem("carrito",JSON.stringify(carrito))
}

const productosCheckout = () =>{
    try {
        $tBody.innerHTML= ""
        carrito.forEach(producto => {
            const {id,nombre,precio,cantidad,img} = producto
            const tr = document.createElement("tr")
            tr.classList.add("product-item")
            tr.innerHTML= `           
                        <td class="product-image">
                            <a href="#"><img src="../${img}" alt=""></a>
                        </td>
                        <td class="product-name">
                            <a href="#">${nombre}</a>
                        </td>
                        <td class="product-price">
                            <span class="list-price">S/.${precio * cantidad}</span>
                        </td>
                        <td class="product-quantity">
                            <button onclick ="botonAumentarProductosCheckout(${id})">+</button>
                            <input type="number" value="${cantidad}">
                            <button onclick ="botonDescontarProductosCheckout(${id})">-</button>
                        </td>
                        <td class="product-remove">
                        <button id="${id}" type="button" onclick ="botonEliminarProductoCheckout(${id})">
                            <i class="fa-solid fa-trash-can"></i>
                        </button>
                        </td>           
            `
            $tBody.appendChild(tr)   


            $monetary.forEach((monetary)=>{
               monetary.textContent = carrito.reduce((acc,producto) =>  acc + producto.precio * producto.cantidad, 0)
            })    
            
        })
        
    } catch (error) {
        console.log(error);
    } finally{
        $cart.style.display ="block"
        $pricetotal.style.display ="block"
        const preloaderCheckout = document.getElementById("preloader-checkout")
        preloaderCheckout.innerHTML= ""
    }
}
