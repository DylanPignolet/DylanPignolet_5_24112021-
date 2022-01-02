let cart = JSON.parse(getCookieByName("cart"));

let cartItems = document.getElementById("cart__items");

for (let product = 0; product < cart.length; product++) {
  let newArticle = document.createElement("article");
  newArticle.id = product;
  let divImg = document.createElement("div");
  let productContent = document.createElement("div");
  let productDescription = document.createElement("div");
  let productName = document.createElement("h2");
  let couchDescription = document.createElement("p");
  let productColor = document.createElement("p");
  let productPrice = document.createElement("p");
  let productSettings = document.createElement("div");
  let settingsQuantity = document.createElement("div");
  let productQuantity = document.createElement("p");
  let quantityInput = document.createElement("input");
  quantityInput.type = "number";
  quantityInput.name = "itemQuantity";
  quantityInput.min = "1";
  quantityInput.max = "100";
  quantityInput.value = cart[product].quantity;
  let deleteSettings = document.createElement("div");
  let deleteProduct = document.createElement("p");
  deleteProduct.addEventListener("click", (event) => {
    event.preventDefault();

    cart.splice(product, 1)

    document.cookie = "cart=" + JSON.stringify(cart) + ";"; 

    // window.location.reload();
    document.getElementById(product).remove()
    showCouchQty();
    showTotalPrice();
  });

  cartItems.appendChild(newArticle).classList.add("cart__item");

  newArticle.appendChild(divImg).classList.add("cart__item__img");

  let productImg = document.createElement("img");
  divImg.appendChild(productImg);
  productImg.src = cart[product].image;
  productImg.alt = cart[product].alt;

  newArticle.appendChild(productContent).classList.add("cart__item__content");

  productContent
    .appendChild(productDescription)
    .classList.add("cart__item__content__description");

  productDescription.appendChild(productName);
  productName.append(cart[product].name);

  productDescription.appendChild(couchDescription);
  couchDescription.append(cart[product].description);

  productDescription.appendChild(productColor);
  productColor.append(cart[product].color);

  productDescription.appendChild(productPrice);
  productPrice.append(cart[product].price + "€");

  productContent
    .appendChild(productSettings)
    .classList.add("cart__item__content__settings");

  productSettings
    .appendChild(settingsQuantity)
    .classList.add("cart__item__content__settings__quantity");

  productSettings.appendChild(productQuantity).append("Qté : ");

  productQuantity.appendChild(quantityInput).classList.add("itemQuantity");

  productSettings
    .appendChild(deleteSettings)
    .classList.add("cart__item__content__settings__delete");

  deleteSettings.appendChild(deleteProduct).classList.add("deleteItem");

  deleteProduct.append("Supprimer");

  // Impossibilité de rentrer des valeurs supérieures au max et inférieures au min https://stackoverflow.com/questions/56719160/input-value-with-a-min-and-max-number/56719198

  quantityInput.addEventListener("change", function () {
    let v = parseInt(this.value);
    if (v < 1) this.value = 1;
    if (v > 100) this.value = 100;
  });
}

// Total Quantité et prix

function showCouchQty() {
  // Quantité
  let productQty = document.getElementsByClassName("itemQuantity");
  let totalQty = 0;

  for (let i = 0; i < productQty.length; ++i) {
    totalQty += productQty[i].valueAsNumber;
  }

  let totalProduct = document.getElementById("totalQuantity");
  totalProduct.textContent = totalQty;
}
showCouchQty();

function showTotalPrice() {
  let cart = JSON.parse(getCookieByName("cart"));
  let total = 0;
  for (i = 0; i < cart.length; i++) {
    total += cart[i].price * cart[i].quantity;
  }
  const totalPrice = document.getElementById("totalPrice");
  totalPrice.textContent = total;
}
showTotalPrice();

// Ajout de quantité et prix

function addQte() {
  let productQty = document.getElementsByClassName("itemQuantity");

  for (let i = 0; i < productQty.length; i++) {
    productQty[i].addEventListener("change", (event) => {
      event.preventDefault();

      let newQty = productQty[i].value;

      //https://stackoverflow.com/questions/48929453/updating-cookie-values
      cart[i]["quantity"] = newQty;
      document.cookie = "cart=" + JSON.stringify(cart) + ";";
      console.log(cart);

      showCouchQty();
      showTotalPrice();
    });
  }
}
addQte();

let firstName = document.getElementById('firstName')
let lastName = document.getElementById('lastName')
let address = document.getElementById('address')
let city = document.getElementById('city')
let email = document.getElementById('email')
let order = document.getElementById('order')

function orderBtnToSendForm() {
  order.addEventListener('click', (event) => {
    event.preventDefault()
  
  let formInformation = getCookieByName('contact')
  formInformation = {
    firstName : firstName.value,
    lastName : lastName.value,
    address : address.value,
    city : city.value,
    email : email.value
  }

  // Vérifications des inputs

  function firstNameCheck() {
    let firstNameVerification = formInformation.firstName
    let nameRegExp = new RegExp("^[a-zA-Z ,.'-]+$")
    
    if (nameRegExp.test(firstNameVerification)) {
      return true
    }
    else {
      let firstNameErrorMsg = document.getElementById('firstNameErrorMsg')
      firstNameErrorMsg.innerText = 'Veuillez saisir un prénom correct'
    }
  }
  firstNameCheck()

  function lastNameCheck() {
    let lastNameVerification = formInformation.lastName
    let nameRegExp = new RegExp("^[a-zA-Z ,.'-]+$")
    
    if (nameRegExp.test(lastNameVerification)) {
      return true
    }
    else {
      let lastNameErrorMsg = document.getElementById('lastNameErrorMsg')
      lastNameErrorMsg.innerText = 'Veuillez saisir un nom correct'
    }
  }
  lastNameCheck()

  function addressCheck() {
    let addressVerification = formInformation.address
    let addressRegExp = new RegExp("^[0-9]{1,3}(?:(?:[,. ]){1}[-a-zA-Zàâäéèêëïîôöùûüç]+)+")
    
    if (addressRegExp.test(addressVerification)) {
      return true
    }
    else {
      let addressErrorMsg = document.getElementById('addressErrorMsg')
      addressErrorMsg.innerText = 'Veuillez saisir une adresse correcte'
    }
  }
  addressCheck()

  function cityCheck() {
    let cityVerification = formInformation.city
    let cityRegExp = new RegExp("^[a-zA-Z ,.'-]+$")
    
    if (cityRegExp.test(cityVerification)) {
      return true
    }
    else {
      let cityErrorMsg = document.getElementById('cityErrorMsg')
      cityErrorMsg.innerText = 'Veuillez saisir une ville correcte'
    }
  }
  cityCheck()

  function emailCheck() {
    let emailVerification = formInformation.email
    let emailRegExp = new RegExp('^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$')
    
    if (emailRegExp.test(emailVerification)) {
      return true
    }
    else {
      let emailErrorMsg = document.getElementById('emailErrorMsg')
      emailErrorMsg.innerText = 'Veuillez saisir une adresse mail correcte'
    }
  }
  emailCheck()

  function formIntoCookie() {
    if(firstNameCheck() && lastNameCheck() && addressCheck() && cityCheck() && emailCheck()) {
      document.cookie = "contact=" + JSON.stringify(formInformation) + ";";
      alert('aoihdzpa')
    }
    else {
      alert('Veuillez remplir les champs obligatoires')
    }
  }
  formIntoCookie()

  let cookieOrder = {
    cart,
    formInformation,
  }
  })
}
orderBtnToSendForm()
