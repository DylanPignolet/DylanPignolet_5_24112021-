let cart = JSON.parse(getCookieByName("cart"))

function getCookieByName(name)
    {
        var match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
        if (match) {
            return match[2];
        }
        else{
            return null
        }
    }
console.log(cart)

let cartItems = document.getElementById("cart__items")
let newArticle = document.createElement("article")
let productImg = document.createElement("div")
let productContent = document.createElement("div")
let productDescription = document.createElement("div")
let productName = document.createElement("h2")
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
quantityInput.value = ""
let deleteSettings = document.createElement("div")
let deleteProduct = document.createElement("p")


cartItems
    .appendChild(newArticle)
    .classList.add("cart__item")

newArticle
    .appendChild(productImg)
    .classList.add("cart__item__img")

newArticle
    .appendChild(productContent)
    .classList.add("cart__item__content")
    
 productContent   
    .appendChild(productDescription)
    .classList.add("cart__item__content__description")

productDescription.appendChild(productName)
productDescription.appendChild(productColor)
productDescription.appendChild(productPrice)

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
    if (v > 100) this.value = 50;
  });
    