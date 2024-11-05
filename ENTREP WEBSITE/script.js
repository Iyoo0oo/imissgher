
/*
document.addEventListener('DOMContentLoaded', function() {
    const cartItems = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');
    let totalPrice = 0;

    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function() {
            const itemName = this.getAttribute('data-name');
            const itemPrice = parseFloat(this.getAttribute('data-price'));

            // Add the item to the cart list
            const cartItem = document.createElement('li');
            cartItem.textContent = `${itemName} - ${itemPrice.toFixed(2)} ₱`;
            cartItems.appendChild(cartItem);

            // Update the total price
            totalPrice += itemPrice;
            totalPriceElement.textContent = totalPrice.toFixed(2);
        });
    });
});


<script>
  const cartItems = [];

  function addToCart(product) {
    let productDetails = "";
    
    if (product === 'Notebook') {
      const color = document.getElementById('notebook-color').value;
      const qty = document.getElementById('notebook-qty').value;
      productDetails = `${qty} x ${color} ${product}`;
    } else if (product === 'Pencil') {
      const type = document.getElementById('pencil-type').value;
      const qty = document.getElementById('pencil-qty').value;
      productDetails = `${qty} x ${type} ${product}`;
    }

    cartItems.push(productDetails);
    updateCart();
  }

  function updateCart() {
    const cartList = document.getElementById('cart-items');
    cartList.innerHTML = ""; // Clear the cart
    
    cartItems.forEach((item) => {
      const li = document.createElement('li');
      li.textContent = item;
      cartList.appendChild(li);
    });
  }*/

document.addEventListener('DOMContentLoaded', function() {
    const cartItemsList = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');
    let totalPrice = 0;
    const cartItems = [];

    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function() {
            const product = this.getAttribute('data-name');
            let itemDetails = "";
            let itemPrice = parseFloat(this.getAttribute('data-price'));
            let qty = 1;

            // Handle specific product cases
            if (product === 'Notebook') {
                const color = document.getElementById('notebook-color').value;
                qty = document.getElementById('notebook-qty').value;
                itemDetails = `${qty} x ${color} ${product}`;
            } else if (product === 'Pencil') {
                const type = document.getElementById('pencil-type').value;
                qty = document.getElementById('pencil-qty').value;
                itemDetails = `${qty} x ${type} ${product}`;
            } else {
                itemDetails = `${product}`;
            }

            // Update the cart array
            cartItems.push(itemDetails);

            // Add the item to the cart list in the DOM
            const cartItemElement = document.createElement('li');
            cartItemElement.textContent = `${itemDetails} - ${itemPrice.toFixed(2)} ₱`;
            cartItemsList.appendChild(cartItemElement);

            // Update the total price
            totalPrice += itemPrice * qty;
            totalPriceElement.textContent = totalPrice.toFixed(2);
        });
    });
});

