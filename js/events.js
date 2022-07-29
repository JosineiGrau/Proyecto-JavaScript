//esto es para los filtros
$filtroColores.addEventListener("click",()=>{
    $downColores.classList.toggle("rotar-up")
    $colores.classList.toggle("active")
})

$filtroProducto.addEventListener("click",()=>{
    $downProducto.classList.toggle("rotar-up")
    $products.classList.toggle("active")
})

$filtroPrecio.addEventListener("click",()=>{
    $downPrecio.classList.toggle("rotar-up")
})


$filtrar.addEventListener("click",()=>{
    $filtros.classList.toggle("mostrar")
    blurNav.style.display = "block"
})

$closeFiltro.addEventListener("click",()=>{
    $filtros.classList.remove("mostrar")
    blurNav.style.display = "none"
})
//

//esto es para el orden
$ordenarPor.addEventListener("click",()=>{
    $ordenLista.classList.toggle("mostrar");
    $iconDown.classList.toggle("rotar")
})
//


//newlaster

const enviarNewLaster = document.getElementById("enviar-newlaster");
const inputNewLaster = document.getElementById("email-newlaster")
enviarNewLaster.addEventListener("click",()=>{
if (inputNewLaster.value === "") {
    Swal.fire({
        title: '<span>Error</span>',
        html: '<p class="p-swal">Rellene el campo</p>',
        icon: 'error',
        showCloseButton: true,
        showConfirmButton: false,
        allowOutsideClick:false,
        allowEscapeKey:false,
        allowEnterKey:false,
        customClass:{
            title:"span-swal",
            closeButton:"close-swal",
        }
      })
} else{
    Swal.fire({
        title: 'Ahora te llegaran las ultimas novedades a tu correo',
        html: '<p class="p-swal">Gracias por todo</p>',
        icon: 'success',
        confirmButtonText: 'Aceptar',
        confirmButtonColor: '#000',
        confirmButtonAriaLabel:"aceptar",
        allowOutsideClick:false,
        allowEscapeKey:false,
        allowEnterKey:false,
        customClass:{
            title:"span-swal",
            confirmButton:"btn-confirm-swal"
        }
      })
}
})
