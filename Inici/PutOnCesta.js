let itemTitles = [];
let itemPrices = [];
let itemImages = [];


const allCartItemsContainer = document.querySelector('.allcart-items');

const comprarButton = document.querySelector('.buy-all');

comprarButton.addEventListener('click', comprarButtonClicked);

const deleteAllButton = document.querySelector('.delete-all');

deleteAllButton.addEventListener('click', deleteAllButtonClicked);

itemTitles = JSON.parse(sessionStorage.getItem('arrayNomProducts'));
itemPrices = JSON.parse(sessionStorage.getItem('arrayPriceProducts'));
itemImages = JSON.parse(sessionStorage.getItem('arrayImgProducts'));

if (sessionStorage.getItem("arrayNomProducts") !== null) {
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

    itemTitles.splice(index, 1);
    itemImages.splice(index, 1);
    itemPrices.splice(index, 1);
    
    sessionStorage.setItem('arrayNomProducts', JSON.stringify(itemTitles));
    sessionStorage.setItem('arrayPriceProducts', JSON.stringify(itemPrices));
    sessionStorage.setItem('arrayImgProducts', JSON.stringify(itemImages));

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
    if (sessionStorage.getItem("arrayNomProducts") !== null) {
        var alertPopup = document.getElementById("snackbar");
        alertPopup.className = "show";
        setTimeout(function(){ alertPopup.className = alertPopup.className.replace("show", ""); }, 3000);
        sessionStorage.removeItem('arrayNomProducts');
        sessionStorage.removeItem('arrayPriceProducts');
        sessionStorage.removeItem('arrayImgProducts');
    }

    allCartItemsContainer.innerHTML = '';
    updatePrice();
}
function deleteAllButtonClicked(){
    if (sessionStorage.getItem("arrayNomProducts") !== null) {
        sessionStorage.removeItem('arrayNomProducts');
        sessionStorage.removeItem('arrayPriceProducts');
        sessionStorage.removeItem('arrayImgProducts');
    }
    allCartItemsContainer.innerHTML = '';
    updatePrice();
}



