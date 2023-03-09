const entraYa = document.querySelector(".home-main-buttom")
const paginaParaEntrar = document.querySelector(".entrar")
const sobreMi = document.querySelector(".profile-link")
const closeds = document.querySelector(".closed")
// const siguiente = document.querySelector(".login-button")
const youName = document.querySelector("#name")
const ussuario = document.querySelector("#email")
const passaword = document.querySelector("#password")
const errorAlIngresar = document.querySelector("#error-al-ingresar")
const parrafoAlternativo = document.querySelector("#Parrafo-alternativo")


entraYa.addEventListener("click", abrirCrearCuenta)
sobreMi.addEventListener("click", abrirCrearCuenta)
closeds.addEventListener("click", cerrar)
// siguiente.addEventListener("click", siguientee)

function abrirCrearCuenta() {
    paginaParaEntrar.classList.toggle("inactive")
}

function cerrar() {
    paginaParaEntrar.classList.add("inactive")
}

// function siguientee() {
//     if (youName == !""){
//         parrafoAlternativo.innerHTML = "Complete el campo"; 
//         return;
//     }
// }
