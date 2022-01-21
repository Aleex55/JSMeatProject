let itemTitles = [];
let itemPrices = [];
let itemImages = [];


const allCartItemsContainer = document.querySelector('.allcart-items');

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

        updatePrice();
    }

    document.querySelector('.delete-all').addEventListener('click', deleteAll);

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
        buttonClicked.closest('.cart-item').remove();
        updatePrice();
    }

    
    function deleteAll(){
        let everyItem = document.querySelectorAll('.cart-item');
        everyItem.remove();
        localStorage.clear();
    }
    

};