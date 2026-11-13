console.log("javascript");

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