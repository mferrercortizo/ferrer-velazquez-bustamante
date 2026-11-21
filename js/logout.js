itemLogout.addEventListener("click", function(event) {
    event.preventDefault();

    localStorage.removeItem("email");

    itemSaludo.style.display = "none";
    itemLogout.style.display = "none";
    itemLogin.style.display = "block";
    itemRegistro.style.display = "block";
});