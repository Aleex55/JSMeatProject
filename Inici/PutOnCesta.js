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
        
    }

    

};