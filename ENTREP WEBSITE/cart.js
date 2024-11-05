document.addEventListener('DOMContentLoaded', function() {
    const cartItemsList = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    let totalPrice = 0;

    // Display stored cart items
    cartItems.forEach(item => {
        const itemTotal = item.itemPrice * item.qty;
        const cartItemElement = document.createElement('li');
        cartItemElement.textContent = `${item.itemDetails} - ₱${itemTotal.toFixed(2)}`;
        cartItemsList.appendChild(cartItemElement);
        totalPrice += itemTotal;
    });

    totalPriceElement.textContent = totalPrice.toFixed(2);

    // Clear Cart Button
    document.getElementById('clear-cart').addEventListener('click', function() {
        localStorage.removeItem('cartItems');
        cartItemsList.innerHTML = '';
        totalPriceElement.textContent = '0.00';
    });
});
