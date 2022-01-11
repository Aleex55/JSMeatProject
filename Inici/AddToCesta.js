const addToCart = document.querySelectorAll('.compra'); //classe boton compra

addToCart.forEach(addToCart => {
    addToCart.addEventListener('click', addedToCart);
});

const shoppingCart = document.querySelector('.shoppingCart');
let nomProds = [];
let priceProds = [];
let quantProds = [];
let imgProds = [];

function addedToCart(event) { 
    const button = event.target;
    const item = button.closest('.item');
    const itemTitle = item.querySelector('.item-title').textContent;
    const itemPrice = item.querySelector('.item-price').textContent;
    const itemQuantity = item.querySelector('.item-quant').textContent;
    const itemImage = item.querySelector('.item-image').src;

    saveItem(itemTitle, itemPrice, itemQuantity, itemImage);
}


function saveItem(itemTitle, itemPrice, itemQuantity, itemImage){
    nomProds.push(itemTitle);
    priceProds.push(itemPrice);
    quantProds.push(itemQuantity);
    imgProds.push(itemImage);

    sessionStorage.setItem('arrayNomProducts', JSON.stringify(nomProds));
    sessionStorage.setItem('arrayPriceProducts', JSON.stringify(priceProds));
    sessionStorage.setItem('arrayQuantProducts', JSON.stringify(quantProds));
    sessionStorage.setItem('arrayImgProducts', JSON.stringify(imgProds));

    console.log("Item afegit al carro")
}