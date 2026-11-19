let emailGuardado = localStorage.getItem("email");

let itemLogin = document.querySelector("#item-login");
let itemRegistro = document.querySelector("#item-registro");
let itemSaludo = document.querySelector("#item-saludo");
let itemLogout = document.querySelector("#item-logout");

if (emailGuardado != null) {
    itemSaludo.innerText = "Bienvenido: " + emailGuardado;
    itemLogin.style.display = "none";
    itemRegistro.style.display = "none";
} else {
    itemSaludo.style.display = "none";
    itemLogout.style.display = "none";
}