// Récupération et affichage de l'id de commande

let cartId = JSON.stringify(getCookieByName('orderId'))
let orderId = document.getElementById('orderId');
orderId.innerHTML = cartId
document.cookie = "cart= ; expires = Thu, 01 Jan 1970 00:00:00 GMT"
document.cookie = "contact= ; expires = Thu, 01 Jan 1970 00:00:00 GMT"
document.cookie = "orderId= ; expires = Thu, 01 Jan 1970 00:00:00 GMT"
