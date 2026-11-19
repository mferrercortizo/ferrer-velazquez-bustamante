let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let id = queryStringObj.get("id");

let foto = document.querySelector(".fotoProducto");
let nombre = document.querySelector(".nombreProducto");
let marca = document.querySelector(".marca");
let categoria = document.querySelector(".categoria");
let precio = document.querySelector(".precio");
let descripcion = document.querySelector(".descripcion");
let stock = document.querySelector(".stock");
let listaTags = document.querySelector(".tags");
let listaReviews = document.querySelector(".listaReviews");

let endpoint = `https://dummyjson.com/products/${id}`;

fetch(endpoint)
    .then(function (res) {
        return res.json();
    })
    .then(function (data) {
        nombre.innerText = data.title;
        descripcion.innerText = data.description;
        precio.innerText = `Precio: ${data.price} USD`;
        stock.innerText = `Stock: ${data.stock} unidades`;
        foto.src = data.thumbnail;

        if (data.brand == undefined) {
            marca.innerText = "Marca: sin especificar";
        } else {
            marca.innerText = `Marca: ${data.brand}`;
        }

        categoria.innerHTML = `Categoría: <a href="./category.html?category=${data.category}">${data.category}</a>`;

        let tags = "";
        for (let i = 0; i < data.tags.length; i++) {
            if (i < 3) {
                tags += `<li>${data.tags[i]}</li>`;
            }
        }
        listaTags.innerHTML = tags;

        let reviews = "";
        for (let i = 0; i < data.reviews.length; i++) {
            reviews += `
                <article class="review">
                    <p class="rating">Rating: ${data.reviews[i].rating}/5</p>
                    <p>${data.reviews[i].reviewerName}</p>
                    <p>${data.reviews[i].comment}</p>
                    <p class="fecha">${data.reviews[i].date}</p>
                </article>`;
        }
        listaReviews.innerHTML = reviews;
    })
    .catch(function (e) {
        console.log("Error: " + e);
    });