let listaCategorias = document.querySelector(".columna ul");

fetch("https://dummyjson.com/products/category-list")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        let contenido = "";
        for (let i = 0; i < data.length; i++) {
            contenido += `<li><a href="./category.html?category=${data[i]}">${data[i]}</a></li>`;
        }

        listaCategorias.innerHTML = contenido;
    })
    .catch(function (e) {
        console.log("Error: " + e);
    });