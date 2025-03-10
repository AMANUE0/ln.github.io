// Obtener botones examen
let primerParcial = document.querySelector("primer-parcial");
let medioTermino = document.querySelector("medio-termino");
let segundoParcial = document.querySelector("segundo-parcial");
let global = document.querySelector("global");

let examenes = document.querySelector(".contenedor-examenes");

// menu sidebar 
let sidebar = document.querySelector(".sidebar");
let menuButton1 = document.querySelector(".menu-button");
let menuButton2 = document.querySelector(".menu-button-2");

menuButton2.addEventListener("click", () => {
    sidebar.classList.toggle("sidebar-desactived");
})

