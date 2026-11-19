let parametrosBusqueda = new URLSearchParams(location.search);
let termino = parametrosBusqueda.get("buscar");

let titulo = document.querySelector(".titulo");
let contenedorResultados = document.querySelector(".vendidos");

if (termino) {
    titulo.innerText = `Resultados de búsqueda para: ${termino}`;
    let endpoint = "https://dummyjson.com/products/search?q=" + termino;

    fetch(endpoint)
        .then(function(res) {
            return res.json();
        })
        .then(function(data) {
            let productos = data.products;

            if (productos.length === 0) {
                contenedorResultados.innerText = `No hay resultados para el término: ${termino}`;
                return;
            }

            let tarjetas = "";

            for (let i = 0; i < productos.length; i++) {
                let producto = productos[i];

                tarjetas += `
                    <article class="articulos">
                        <img class="productos" src="${producto.thumbnail}" alt="${producto.title}">
                        <h3>${producto.title}</h3>
                        <p>${producto.description}</p>
                        <p>Precio: ${producto.price} USD</p>
                        <a class="boton" href="./product.html?id=${producto.id}">Ver detalle</a>
                    </article>`;
            }

            contenedorResultados.innerHTML = tarjetas;
        })
        .catch(function(e) {
            contenedorResultados.innerText = "No se pudo completar la búsqueda.";
            console.log(e);
        });
}