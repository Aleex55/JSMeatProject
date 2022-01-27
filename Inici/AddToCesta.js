let itemToAdd = document.querySelectorAll('.btn'); //classe boton compra

let nomProds = [];
let priceProds = []; 
let imgProds = [];

itemToAdd.forEach(addToCartButton => {
    addToCartButton.addEventListener('click', addedToCart);
})


if (sessionStorage.getItem("arrayNomProducts") !== null) {
    nomProds = JSON.parse(sessionStorage.getItem('arrayNomProducts'));
    priceProds = JSON.parse(sessionStorage.getItem('arrayPriceProducts'));
    imgProds = JSON.parse(sessionStorage.getItem('arrayImgProducts'));
}

function addedToCart() { 

    let itemTitle = document.querySelector('.item-title').textContent;
    let itemPrice = document.querySelector('.item-price').textContent;
    let itemImage = document.querySelector('.item-image').src;

    let titulo = String(itemTitle);
    let precio = String(itemPrice);
    let imagen = String(itemImage);

    console.log(titulo, precio, imagen);

    nomProds.push(titulo);
    priceProds.push(precio);
    imgProds.push(imagen);
    
    sessionStorage.setItem('arrayNomProducts', JSON.stringify(nomProds));
    sessionStorage.setItem('arrayPriceProducts', JSON.stringify(priceProds));
    sessionStorage.setItem('arrayImgProducts', JSON.stringify(imgProds));
    console.log("Item afegit al carro");
    
    //snackbar popup
    var alertPopup = document.getElementById("snackbar");
    alertPopup.className = "show";
    setTimeout(function(){ alertPopup.className = alertPopup.className.replace("show", ""); }, 3000);
}