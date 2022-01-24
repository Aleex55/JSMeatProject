let itemTitles = [];
let itemPrices = [];
let itemImages = [];


const allCartItemsContainer = document.querySelector('.allcart-items');

const comprarButton = document.querySelector('.buy-all');

comprarButton.addEventListener('click', comprarButtonClicked);

const deleteAllButton = document.querySelector('.delete-all');

deleteAllButton.addEventListener('click', deleteAllButtonClicked);

itemTitles = JSON.parse(localStorage.getItem('arrayNomProducts'));
itemPrices = JSON.parse(localStorage.getItem('arrayPriceProducts'));
itemImages = JSON.parse(localStorage.getItem('arrayImgProducts'));

if (localStorage.getItem("arrayNomProducts") !== null) {
    addItemsToCart(itemTitles, itemPrices, itemImages);
}



function addItemsToCart(itemTitles, itemPrices, itemImages){
    console.log(itemTitles, itemPrices, itemImages);

    for (let i = 0; i < itemTitles.length; i++) {
       const cartRow = document.createElement('div');
        const rowContent = `
        <div class="table-row cart-item">
                    <div class = "table-cell">
                        <img class="item-minimage" src="${itemImages[i]}">
                    </div>
                    <div class = "table-cell">
                        <p class="item-name">${itemTitles[i]}</p>
                    </div>
                    <div class = "table-cell">
                        <input class="item-quantity" type="number" value="1"></input>
                    </div>
                    <div class = "table-cell">
                        <p class="item-price">${itemPrices[i]}</p>
                    </div>
                    <div class = "table-cell">
                        <button class="eliminate-button" type="button">X</button>
                    </div>
            </div>`;
        
        allCartItemsContainer.append(cartRow);
        cartRow.innerHTML = rowContent;

        cartRow.querySelector('.eliminate-button').addEventListener('click', removeItem);

        cartRow.querySelector('.item-quantity').addEventListener('change', quantityChanged);

        updatePrice();
    }
};

function updatePrice(){
    let total = 0;
    const shoppingCartTotal = document.querySelector('.total-price');

    const shoppingCartItems = document.querySelectorAll('.cart-item');

    shoppingCartItems.forEach((shoppingCartItem) =>{
        const itemPriceElement = shoppingCartItem.querySelector('.item-price');

        const itemPrice =  Number(itemPriceElement.textContent.replace('€', ''));

        const itemQuantityElement = shoppingCartItem.querySelector('.item-quantity');

        const itemQuantity = Number(itemQuantityElement.value);

        total = total + (itemPrice * itemQuantity);
    });
    shoppingCartTotal.innerHTML = `${total.toFixed(2)}€`;
}

function removeItem (event){
    const buttonClicked = event.target;
    const item = buttonClicked.closest('.cart-item');
    const itemTitle = item.querySelector('.item-name').textContent;
    var index = itemTitles.indexOf(itemTitle);
    console.log(itemTitle, index);
    buttonClicked.closest('.cart-item').remove();
    updatePrice();

}

function quantityChanged(event) {
    const input = event.target;

    if (input.value <= 0){
        input.value = 1;
    }

    updatePrice();
} 

function comprarButtonClicked(){
    //poner aqui alerta de compra realizada
    allCartItemsContainer.innerHTML = '';
    updatePrice();
}
function deleteAllButtonClicked(){
    //poner aqui alerta items eliminados
    allCartItemsContainer.innerHTML = '';
    updatePrice();
}