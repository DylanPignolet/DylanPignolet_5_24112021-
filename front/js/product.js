// Création nouvelle URL à l'aide de l'id de chaque produit

let params = new URL(window.location.href).searchParams;
let id = params.get("id");

// Création variables pour éléments canapé
let image = document.getElementsByClassName("item__img");
let title = document.getElementById("title");
let price = document.getElementById("price");
let description = document.getElementById("description");
let colors = document.getElementById("colors");
let quantity = document.getElementById("quantity");
const addButton = document.getElementById("addToCart");

function item() {
  fetch("http://localhost:3000/api/products/" + id)
    .then((response) => {
      return response.json();
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
          couch.colors[choice],
          couch.colors[choice]
        );
      }

      // Ajouter produit au panier https://stackoverflow.com/questions/10730362/get-cookie-by-name

      addButton.onclick =
        ("click",
        function () {
          let couchColor = colors.value;
          let couchQuantity = quantity.value;

          if (couchColor === "") {
            alert("Veuillez remplir les champs recquis.");
            return;
          }
          if (couchQuantity < 1 || couchQuantity > 100) {
            alert("Veuillez ...");
            return;
          }

          let product = {
            id: id,
            image: couch.imageUrl,
            alt: couch.altTxt,
            name: title.textContent,
            description: description.textContent,
            price: price.textContent,
            color: couchColor,
            quantity: couchQuantity,
          };
          // couch.color = couchColor
          let cart = getCookieByName("cart");

          if (cart === null || cart === "null") {
            cart = [];
            cart.push(product);
            document.cookie = "cart=" + JSON.stringify(cart) + ";";
          } else {
            cart = JSON.parse(cart);
            cart.push(product);
            document.cookie = "cart=" + JSON.stringify(cart) + ";";
          }
          console.log(cart);
        });
    });
}

item();
