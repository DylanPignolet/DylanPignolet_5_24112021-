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
          
        newDiv.append(couch.altTxt);

        // Boucle couleurs
        const newSelect = document.createElement("select");
        elt.appendChild(newSelect);
        
        couch.colors.forEach(color => {
            const newOption = document.createElement("option");
            newSelect.appendChild(newOption);
            newOption.append(color);
        })
        
        const newDescription = document.createElement("p")
        elt.appendChild(newDescription);
        newDescription.append(couch.description);

        document.getElementById("items").innerHTML
        += '<img src="'+couch.imageUrl+'">'

        const newName = document.createElement("p")
        elt.appendChild(newName);
        newName.append(couch.name);

        const newPrice = document.createElement("p")
        elt.appendChild(newPrice);
        newPrice.append(couch.price + '€');
        
        })
        });
         
     };   
    
 

items()