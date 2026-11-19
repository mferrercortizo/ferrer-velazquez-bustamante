let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let termino = queryStringObj.get("buscar");

let titulo = document.querySelector("#titulo-busqueda");
let listaResultados = document.querySelector("#lista-resultados");

titulo.innerText = "Resultados de búsqueda para: " + termino;

let endpoint = `https://dummyjson.com/products/search?q=${termino}`;

fetch(endpoint)
    .then(function (res) {
        return res.json();
    })
    .then(function (data) {
        let productos = data.products;

        if (productos.length == 0) {
            listaResultados.innerText = "No hay resultados para el término: " + termino;
        } else {
            let tarjetas = "";
            for (let i = 0; i < productos.length; i++) {
                tarjetas += `
                    <article class="articulos">
                        <img class="productos" src="${productos[i].thumbnail}" alt="${productos[i].title}">
                        <h3>${productos[i].title}</h3>
                        <p>${productos[i].description}</p>
                        <p>Precio: ${productos[i].price} USD</p>
                        <a class="boton" href="./product.html?id=${productos[i].id}">Ver detalle</a>
                    </article>`;
            }

            listaResultados.innerHTML = tarjetas;
        }
    })
    .catch(function (e) {
        console.log("Error: " + e);
    });