function items() {
    fetch("http://localhost:3000/api/products")
    .then((response) => {         
        return response.json()
    })

    .then((response2) => {
        console.log(response2)
        // Boucle response sur canapés
        response2.forEach(couch => {
        const newDiv = document.createElement("div");
        let elt = document.getElementById("items");
        elt.appendChild(newDiv);
    

        // Description
        
        const newDescription = document.createElement("p")
        newDescription.append(couch.description);
        newDiv.appendChild(newDescription);
        

        // Image

        var image = document.createElement("img");
        image.src = couch.imageUrl;
        image.alt = couch.altTxt
        newDiv.appendChild(image);
        

        // Nom

        const newName = document.createElement("p")
        newName.append(couch.name);
        newDiv.appendChild(newName);

        // Prix

        const newPrice = document.createElement("p")
        newPrice.append(couch.price + '€');
        newDiv.appendChild(newPrice);
        
        
        })
        });
         
     };   
    
 

items()