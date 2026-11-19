let formularioLogin = document.querySelector(".formcontainer form");
let email = document.querySelector("#email-login");
let password = document.querySelector("#password-login");
let error = document.querySelector("#error-login");

formularioLogin.addEventListener("submit", function (event) {
    event.preventDefault();

    if (email.value == "") {
        error.innerText = "El email es obligatorio.";
    } else if (password.value == "") {
        error.innerText = "La contraseña es obligatoria.";
    } else if (password.value.length < 6) {
        error.innerText = "La contraseña debe tener al menos 6 caracteres";
    } else {
        error.innerText = "";
        localStorage.setItem("email", email.value);
        this.submit();
    }
});