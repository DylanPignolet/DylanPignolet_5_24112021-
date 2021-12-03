// Création nouvelle URL à l'aide de l'id de chaque produit

let params = new URL(window.location.href).searchParams;
let id = params.get('id');

// Création variables pour éléments canapé
let image = document.getElementsByClassName('item__img');
let title = document.getElementById('title');
let price = document.getElementById('price');
let description = document.getElementById('description');
let colors = document.getElementById('colors');

function item() {   
    fetch("http://localhost:3000/api/products/" + id)
        .then((response) => {
            return response.json()
    })
        .then((couch) => {
            console.log(couch);
            image[0].innerHTML = `<img src="${couch.imageUrl}" alt="${couch.altTxt}">`; 
            title.innerHTML = couch.name;
            price.innerText = couch.price;
            description.innerText = couch.description;

// Choix couleurs

            for (choice in couch.colors) {
                colors.options[colors.options.length] = new Option(
                  couch.colors[choice]
                );
              }
        })
    }

item()
