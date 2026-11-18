let primeraSeccion = document.querySelector("#categoria-uno");
let segundaSeccion = document.querySelector("#categoria-dos");

let endpointUno = "https://dummyjson.com/products/category/sports-accessories";
let endpointDos = "https://dummyjson.com/products/category/mobile-accessories";

fetch(endpointUno)
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

        primeraSeccion.innerHTML = tarjetas;
    })
    .catch(function (e) {
        console.log("Error: " + e);
    });

    fetch(endpointDos)
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

        segundaSeccion.innerHTML = tarjetas;
    })
    .catch(function (e) {
        console.log("Error: " + e);
    });