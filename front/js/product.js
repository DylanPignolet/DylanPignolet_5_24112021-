// Création nouvelle URL à l'aide de l'id de chaque produit

let params = new URL(window.location.href).searchParams;
let id = params.get('id');

// Création variables pour éléments canapé
let image = document.getElementsByClassName('item__img');
let title = document.getElementById('title');
let price = document.getElementById('price');
let description = document.getElementById('description');
let colors = document.getElementById('colors');
const addButton = document.getElementById('addToCart');

function item() {   
fetch("http://localhost:3000/api/products/" + id)
    .then((response) => {
        return response.json()
})
    .then((couch) => {
        let newImage = document.createElement("img");
        newImage.src = couch.imageUrl;
        newImage.alt = couch.altTxt;
        image[0].appendChild(newImage);
        title.innerHTML = couch.name;
        price.innerText = couch.price;
        description.innerText = couch.description;

// Choix couleurs

    
        for (choice in couch.colors) {
            colors.options[colors.options.length] = new Option(
                couch.colors[choice]
            );
        }

// Ajouter produit au panier

        addButton.onclick = ('click', function () {
        let cart = null
        if(document.cookie.length == 0) {
            cart = [couch]
        }
        else {
            cart = document.cookie
            .split('; ')
            .find(row => row.startsWith('cart='))
            .split('=')[1]
            if(typeof cart == "Array") {
            cart.push(couch)
            }
            else {    
                cart = [couch]
            }
            document.cookie = "cart=" + JSON.stringify(cart)
            console.log(cart)
            console.log(document.cookie)
        }    
        })
    })
}

item()





