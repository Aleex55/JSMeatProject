const addToCart = document.querySelectorAll('.compra');

addToCart.forEach(addToCart => {
    addToCart.addEventListener('click', addedToCart);
});

function addedToCart(event) { 
    const button = event.target;
    const item = button.closest('.item');
    const itemTitle = item.querySelector('.item-title').textContent;
    const itemPrice = item.querySelector('.item-price').textContent;
    const itemImage = Item.querySelector('.item-image').src;
}