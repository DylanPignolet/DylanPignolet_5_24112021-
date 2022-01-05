// Récupération et affichage de l'id de commande

let params = new URL(window.location.href).searchParams;
let id = params.get('id');
let orderId = document.getElementById('orderId');
orderId.innerHTML = id
