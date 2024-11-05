document.addEventListener('DOMContentLoaded', function() {
    const cartItemsList = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');
    let totalPrice = 0;
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function() {
            const product = this.getAttribute('data-name');
            const itemPrice = parseFloat(this.getAttribute('data-price'));
            let qty = getQuantity(product);
            const options = getOptions(product);

            // Build item details text based on product type
            const itemDetails = buildItemDetails(product, qty, options);

            // Add item to the cart array
            addItemToCart({ itemDetails, itemPrice, qty });

            // Update total price
            totalPrice += itemPrice * qty;
            totalPriceElement.textContent = totalPrice.toFixed(2);

            // Save cart items in localStorage
            localStorage.setItem('cartItems', JSON.stringify(cartItems));
            updateCartUI();
        });
    });

    function getQuantity(productName) {
        const qtyInput = document.getElementById(`${productName.toLowerCase().replace(" ", "-")}-qty`);
        return qtyInput ? parseInt(qtyInput.value) : 1;
    }

    function getOptions(product) {
        // Get options based on product type
        const options = {};
        if (product === 'Notebook') {
            options.color = document.getElementById('notebook-color').value;
            options.type = document.getElementById('notebook-type').value;
            options.paper = document.getElementById('notebook-paper').value;
        } else if (product === 'Pencil') {
            options.type = document.getElementById('pencil-type').value;
        } else if (product === 'Pen') {
            options.color = document.getElementById('Pen-color').value;
            options.inkColor = document.getElementById('Pen-ink').value;
            options.penType = document.getElementById('Pen-type').value;
            options.penTip = document.getElementById('Pen-tip').value;
        } else if (product === 'Marker') {
            options.markerColor = document.getElementById('Marker-color').value;
            options.inkColor = document.getElementById('ink-color').value;
        } else if (product === 'Organizer') {
            options.material = document.getElementById('Org-material').value;
            options.size = document.getElementById('Org-size').value;
            options.color = document.getElementById('Org-color').value;
        }
        return options;
    }

    function buildItemDetails(product, qty, options) {
        let details = `${qty} x ${product}`;
        if (product === 'Notebook') {
            details += ` | ${options.color} | ${options.type} | ${options.paper}`;
        } else if (product === 'Pencil') {
            details += ` | ${options.type}`;
        } else if (product === 'Pen') {
            details += ` | ${options.color} | ${options.inkColor} | ${options.penType} | ${options.penTip}`;
        } else if (product === 'Marker') {
            details += ` | ${options.markerColor} | ${options.inkColor}`;
        } else if (product === 'Organizer') {
            details += ` | ${options.material} | ${options.size} | ${options.color}`;
        }
        return details;
    }

    function addItemToCart(item) {
        const existingItem = cartItems.find(cartItem => cartItem.itemDetails === item.itemDetails);

        if (existingItem) {
            existingItem.qty += item.qty;
        } else {
            cartItems.push(item);
        }
    }

    function updateCartUI() {
        cartItemsList.innerHTML = '';
        cartItems.forEach(item => {
            const itemTotal = item.itemPrice * item.qty;
            const cartItemElement = document.createElement('li');
            cartItemElement.textContent = `${item.itemDetails} - ₱${itemTotal.toFixed(2)}`;
            cartItemsList.appendChild(cartItemElement);
        });
    }

    // Initialize cart UI if items are stored in localStorage
    updateCartUI();
});
