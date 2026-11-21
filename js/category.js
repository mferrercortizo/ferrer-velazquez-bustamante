let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let category = queryStringObj.get("category");

let titulo = document.querySelector("#titulo-categoria");
let listaProductos = document.querySelector("#lista-productos");

titulo.innerText = "Resultados para la categoría: " + category;

let endpoint = `https://dummyjson.com/products/category/${category}`;

fetch(endpoint)
    .then(function (res) {
        return res.json();
    })
    .then(function (data) {
        let productos = data.products;
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

        listaProductos.innerHTML = tarjetas;
    })
    .catch(function (e) {
        console.log("Error: " + e);
    });