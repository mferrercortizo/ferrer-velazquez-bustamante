let parametros = new URLSearchParams(location.search);
let categoriaElegida = parametros.get("category");

console.log(categoriaElegida);

let tituloCategoria = document.querySelector(".titulo");
let contenedorProductos = document.querySelector(".vendidos");

let endpoint = `https://dummyjson.com/products/category/${categoriaElegida}`

fetch(endpoint)
    .then(function(res) {
        return res.json();
    })
    .then(function(data) {
        tituloCategoria.innerText = categoriaElegida;

        let productos = data.products;
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

        contenedorProductos.innerHTML = tarjetas;
    })
    .catch(function(e) {
        console.log("Error:", e);
    });