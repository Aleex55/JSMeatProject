let itemToAdd = document.querySelectorAll('.btn'); //classe boton compra

let nomProds = [];
let priceProds = []; 
let imgProds = [];

itemToAdd.forEach(addToCartButton => {
    addToCartButton.addEventListener('click', addedToCart);
})


if (localStorage.getItem("arrayNomProducts") !== null) {
    nomProds = JSON.parse(localStorage.getItem('arrayNomProducts'));
    priceProds = JSON.parse(localStorage.getItem('arrayPriceProducts'));
    imgProds = JSON.parse(localStorage.getItem('arrayImgProducts'));
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
    
    localStorage.setItem('arrayNomProducts', JSON.stringify(nomProds));
    localStorage.setItem('arrayPriceProducts', JSON.stringify(priceProds));
    localStorage.setItem('arrayImgProducts', JSON.stringify(imgProds));
    console.log("Item afegit al carro");
}