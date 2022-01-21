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


/*
const shoppingCart = document.querySelector('.shoppingCart');
let nomProds = [];
let priceProds = []; 
let imgProds = [];

nomProds = JSON.parse(localStorage.getItem('arrayNomProducts'));
priceProds = JSON.parse(localStorage.getItem('arrayPriceProducts'));
imgProds = JSON.parse(localStorage.getItem('arrayImgProducts'));



function addedToCart(event) { 
    let button = event.target;
    let item = button.closest('.item');
    let itemTitle = item.querySelector('.item-title').textContent;
    let itemPrice = item.querySelector('.item-price').textContent;
    let itemImage = item.querySelector('.item-miniimage').src;


    saveItem(itemTitle, itemPrice, itemImage);
}


function saveItem(itemTitle, itemPrice, itemImage){
    nomProds.push(itemTitle);
    priceProds.push(itemPrice);
    imgProds.push(itemImage);

    saveArrays();
    for (let i = 0; i < nomProds.length; i++) {
        let nombre = nomProds[i];
        let precio = priceProds[i];
        let imagen = imgProds[i];
        console.log(nombre , precio, imagen);
    }
}

function saveArrays () {
    localStorage.setItem('arrayNomProducts', JSON.stringify(nomProds));
    localStorage.setItem('arrayPriceProducts', JSON.stringify(priceProds));
    localStorage.setItem('arrayImgProducts', JSON.stringify(imgProds));
    console.log("Item afegit al carro");
    
}
*/