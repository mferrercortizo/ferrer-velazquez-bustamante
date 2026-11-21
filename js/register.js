let formularioRegistro = document.querySelector(".formcontainer form");
let emailRegistro = document.querySelector("#email-registro");
let passwordRegistro = document.querySelector("#password-registro");
let passwordRepetida = document.querySelector("#password-repetida");
let errorRegistro = document.querySelector("#error-registro");

formularioRegistro.addEventListener("submit", function (event) {
    event.preventDefault();

    if (emailRegistro.value == "") {
        errorRegistro.innerText = "El email es obligatorio.";
    } else if (passwordRegistro.value == "") {
        errorRegistro.innerText = "La contraseña es obligatoria.";
    } else if (passwordRegistro.value.length < 6) {
        errorRegistro.innerText = "La contraseña debe tener al menos 6 caracteres";
    } else if (passwordRegistro.value != passwordRepetida.value) {
        errorRegistro.innerText = "Las contraseñas no coinciden";
    } else {
        errorRegistro.innerText = "";
        this.submit();
    }
});