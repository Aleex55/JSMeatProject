let itemTitles = [];
let itemPrices = [];
let itemImages = [];

const allCartItems = document.querySelector('.allcart-items');

itemTitles = JSON.parse(localStorage.getItem('arrayNomProducts'));
itemPrices = JSON.parse(localStorage.getItem('arrayPriceProducts'));
itemImages = JSON.parse(localStorage.getItem('arrayImgProducts'));

function addItemTOCart(itemTitle, itemPrice, itemImage){
    const row = document.createElement('div');
    const rowContent = `
    <div class="cart-item">
        <tr>
            <td>
                <img class="item-minimage" src=${itemImage}>
            </td>
            <td>
                <p class="item-name">${itemTitle}</p>
            </td>
            <td>
                <input class="item-quantity" type="number" value="1"></input>
            </td>
            <td>
                <p class="item-price">${itemPrice}</p>
            </td>
            <td>
                <button class="item-elim" type="button">X</button>
            </td>
        </tr>
    <div>`;
    row.innerHTML = rowContent;
    allCartItems.append(row);

    row.querySelector('.eliminate').addEventListener('click', itemRemover)

    updateTotalPrice();
}

function updateTotalPrice(){
    let total = 0;

    const totalCartPrice = document.querySelector('.total-price');

    const allItems = document.querySelectorAll('.cart-item');

    allItems.forEach(cartItem => {
        const cartItemPriceElement = cartItem.querySelector('.item-price');

        const cartItemPrice = Number(cartItemPriceElement.textContent.replace('€',''));


        const cartItemQuantityElement = cartItem.querySelector('.item-quantity');

        const cartItemQuantity = Number(cartItemQuantityElement.value);

        total = total + (cartItemPrice * cartItemQuantity);
    })

    totalCartPrice.innerHTML = `${total.toFixed(2)}€`;
}

function itemRemover(){
    const buttonClicked = event.target;
    buttonClicked.closest('.cart-item').remove();
    updateTotalPrice();
}