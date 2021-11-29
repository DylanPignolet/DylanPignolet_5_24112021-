// choix couleurs 

const newSelect = document.createElement("select");
        elt.appendChild(newSelect);
        
        couch.colors.forEach(color => {
            const newOption = document.createElement("option");
            newSelect.appendChild(newOption);
            newOption.append(color);
        })