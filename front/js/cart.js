let cart = JSON.parse(getCookieByName("cart"))

console.log(cart)

let cartItems = document.getElementById("cart__items")

for (let product in cart){

let newArticle = document.createElement("article")
let divImg = document.createElement("div")
let productContent = document.createElement("div")
let productDescription = document.createElement("div")
let productName = document.createElement("h2")
let couchDescription = document.createElement("p")
let productColor = document.createElement("p")
let productPrice = document.createElement("p")
let productSettings = document.createElement("div")
let settingsQuantity = document.createElement("div")
let productQuantity = document.createElement("p")
let quantityInput = document.createElement("input")
quantityInput.type = "number"
quantityInput.name = "itemQuantity"
quantityInput.min = "1"
quantityInput.max = "100"
quantityInput.value = cart[product].quantity
let deleteSettings = document.createElement("div")
let deleteProduct = document.createElement("p")
    
cartItems
    .appendChild(newArticle)
    .classList.add("cart__item")

newArticle
    .appendChild(divImg)
    .classList.add("cart__item__img")

let productImg = document.createElement("img")
divImg.appendChild(productImg)
productImg.src = cart[product].image
productImg.alt = cart[product].alt


newArticle
    .appendChild(productContent)
    .classList.add("cart__item__content")
    
productContent   
    .appendChild(productDescription)
    .classList.add("cart__item__content__description")

productDescription.appendChild(productName)
productName.append(cart[product].name)

productDescription.appendChild(couchDescription)
couchDescription.append(cart[product].description)

productDescription.appendChild(productColor)
productColor.append(cart[product].color)

productDescription.appendChild(productPrice)
productPrice.append(cart[product].price + '€')

productContent
    .appendChild(productSettings)
    .classList.add("cart__item__content__settings")

productSettings
    .appendChild(settingsQuantity)
    .classList.add("cart__item__content__settings__quantity")

productSettings
    .appendChild(productQuantity)
    .append("Qté : ")

productQuantity
    .appendChild(quantityInput)
    .classList.add("itemQuantity")

productSettings
    .appendChild(deleteSettings)
    .classList.add("cart__item__content__settings__delete")

deleteSettings
    .appendChild(deleteProduct)
    .classList.add("deleteItem")
    
deleteProduct.append("Supprimer")

// Impossibilité de rentrer des valeurs supérieures au max et inférieures au min https://stackoverflow.com/questions/56719160/input-value-with-a-min-and-max-number/56719198
    
quantityInput.addEventListener("change", function() {
    let v = parseInt(this.value);
    if (v < 1) this.value = 1;
    if (v > 100) this.value = 100;
  });
}

// Total Quantité et prix

function qteTotal() {

    // Quantité
    let productQty = document.getElementsByClassName("itemQuantity")
    let totalQty = 0

    for (let i = 0; i < productQty.length; ++i) {
        totalQty += productQty[i].valueAsNumber
    }

    let totalProduct = document.getElementById("totalQuantity")
    totalProduct.textContent = totalQty;
}
qteTotal()

function totalPrice() {
    let calcul = [];
    for (i = 0; i < cart.length; i++) {
        const cartPrice = cart[i].price * cart[i].quantity;
        calcul.push(cartPrice);
  
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
        const reduce = (previousValue, currentValue) => previousValue + currentValue;
        total = calcul.reduce(reduce);

        const totalPrice = document.getElementById('totalPrice');
        totalPrice.textContent = total;
    }
  }
totalPrice();

// Ajout de quantité et prix

function addQte() {
    let productQty = document.getElementsByClassName("itemQuantity")

    for (let i = 0; i < productQty.length; i++) {
        productQty[i].addEventListener("change", (event) => {
            event.preventDefault()

            let newQty = productQty[i].value

            //https://stackoverflow.com/questions/48929453/updating-cookie-values
            cart[i]['quantity'] = newQty
            document.cookie = "cart=" + JSON.stringify(cart)+";"
            console.log(cart)

            qteTotal()
            totalPrice()
        })
    }
}
addQte()

// Fonction suppression item du panier

function removeItem() {
    let deleteBtn = document.getElementsByClassName("deleteItem")

    // event sur bouton supprimer
    for (let i = 0; i < deleteBtn.length; i++){
        deleteBtn[i].addEventListener("click" , (event) => {
            event.preventDefault();

//https://stackoverflow.com/questions/5767325/how-can-i-remove-a-specific-item-from-an-array
            let deleteId = cart[i].id;

            cart = cart.filter( prod => prod.id !== deleteId);
            
            document.cookie = "cart=" + JSON.stringify(cart)+";"

            alert("Le produit a été retiré du panier");
            window.location.reload()
        })
    }
}
removeItem()