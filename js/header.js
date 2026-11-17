//verificacion del form del header
//primero capturo el form, el input y el mensaje de errror. 
let formulario = document.querySelector(".center form");
let campoBusqueda = document.querySelector(".campoBusqueda");
let mensajeError = document.querySelector(".error-buscador")
//hago la validacion 
formulario.addEventListener("submit", function(event){
    event.preventDefault();
    if (campoBusqueda.value == ""){
        mensajeError.innerText = "El campo de busqueda no puede estar vacio."

    } else if (campoBusqueda.value.length < 3){ 
        mensajeError.innerText = "La busqueda debe contener al menos 3 caracteres.";
    } else{
        this.submit();
    }
})