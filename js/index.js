let primeraSeccion = document.querySelector("#categoria-uno");
let segundaSeccion = document.querySelector("#categoria-dos");

let endpoint = "https://dummyjson.com/products";

fetch(endpoint)
    .then(function(res) {
        return res.json();
    })
    .then(function(data) {
        console.log(data);
    })
    .catch(function(e) {
        console.log("Error: " + e);
    });