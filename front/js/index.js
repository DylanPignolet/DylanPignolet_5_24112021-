function items() {
  fetch("http://localhost:3000/api/products")
    .then((response) => {
      return response.json();
    })

    .then((response2) => {
      console.log(response2);
      // Boucle response sur canapés
      response2.forEach((couch) => {
        const newHover = document.createElement("a");
        const newArticle = document.createElement("article");
        let elt = document.getElementById("items");
        elt.appendChild(newHover);
        newHover.appendChild(newArticle);
        newHover.classList.add("product");

        // Image

        var image = document.createElement("img");
        image.src = couch.imageUrl;
        image.alt = couch.altTxt;
        newArticle.appendChild(image);

        // Nom

        const newName = document.createElement("h3");
        newName.append(couch.name);
        newArticle.appendChild(newName);

        // Description

        const newDescription = document.createElement("p");
        newDescription.append(couch.description);
        newArticle.appendChild(newDescription);

        // Prix

        const newPrice = document.createElement("p");
        newPrice.append(couch.price + "€");
        newArticle.appendChild(newPrice);

        // URL par produit

        newHover.href = "./product.html?id=" + couch._id;
      });
    });
}

items();
