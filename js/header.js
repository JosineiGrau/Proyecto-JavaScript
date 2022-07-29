/**
 * ESTO ES PARA EL MENU HAMBURGUESA.
 */
const button = document.querySelector(".menu-hamburguesa");
const nav = document.querySelector("nav");
const blurNav = document.querySelector(".blur-nav");
const closeNav = document.getElementById("close-nav");

button.addEventListener("click",()=>{
    nav.classList.toggle("activo");
    blurNav.style.display = "block"
})

closeNav.addEventListener("click", () =>{
    nav.classList.remove("activo")
    blurNav.style.display = "none"
})
//////////////////////////////////////////

/*
**   ESTO ES PARA EL CARRITO DE COMPRAS
*/

const btncarrito = document.querySelector(".car");
const navcarrito = document.querySelector(".nav-carrito")
const closeCar = document.querySelector (".close-car")
btncarrito.addEventListener("click", ()=>{
    navcarrito.classList.toggle("activo");
    blurNav.style.display = "block"
})

closeCar.addEventListener("click", () =>{
    navcarrito.classList.remove("activo");
    blurNav.style.display = "none"
})























/***
 * 
 * ESTO ES PARA CUANDO HACEN SCROLL EL NAV SE ESCONDA Y CUANDO SUBAN EL SCROLL EL NAV SE MUESTRE
 */
// let ubicacionPrincipal = window.pageYOffset;
// window.addEventListener("scroll", ()=>{
//     let desplazamiento = window.pageYOffset;
//     if(ubicacionPrincipal >= desplazamiento){
//         document.getElementById("w-nav-bar").style.transition = ".3s ease all"
//         document.getElementById("w-nav-bar").style.top = "0px";

//     }else{
//         document.getElementById("w-nav-bar").style.top = "-100px";
//     }
//     ubicacionPrincipal = desplazamiento;
// })

