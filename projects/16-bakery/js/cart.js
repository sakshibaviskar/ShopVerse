// cart.js - handles cart and wishlist logic using localStorage

function getCart() {
    return JSON.parse(localStorage.getItem('cart') || '[]');
}
function saveCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
}
function getWishlist() {
    return JSON.parse(localStorage.getItem('wishlist') || '[]');
}
function saveWishlist(list) {
    localStorage.setItem('wishlist', JSON.stringify(list));
}

function addToCart(id, quantity = 1, custom = null) {
    const cart = getCart();
    const existing = cart.find(item => item.id === id && JSON.stringify(item.custom) === JSON.stringify(custom));
    if (existing) {
        existing.qty += quantity;
    } else {
        cart.push({ id, qty: quantity, custom });
    }
    saveCart(cart);
    updateCartCount();
}

function removeFromCart(id, custom = null) {
    let cart = getCart();
    cart = cart.filter(item => !(item.id === id && JSON.stringify(item.custom) === JSON.stringify(custom)));
    saveCart(cart);
    updateCartCount();
}

function updateCartCount() {
    const count = getCart().reduce((sum, item) => sum + item.qty, 0);
    const elem = document.getElementById('cart-count');
    if (elem) elem.textContent = count;
}

function addToWishlist(id) {
    const list = getWishlist();
    if (!list.includes(id)) {
        list.push(id);
        saveWishlist(list);
    }
    updateWishlistCount();
}

function removeFromWishlist(id) {
    let list = getWishlist();
    list = list.filter(x => x !== id);
    saveWishlist(list);
    updateWishlistCount();
}

function updateWishlistCount() {
    const count = getWishlist().length;
    const elem = document.getElementById('wishlist-count');
    if (elem) elem.textContent = count;
}

function applyCoupon(code) {
    const valid = { 'SWEET10': 0.1 };
    return valid[code.toUpperCase()] || 0;
}

// when cart page loaded
function renderCartPage() {
    const itemsContainer = document.getElementById('cart-items');
    if (!itemsContainer) return;
    const cart = getCart();
    itemsContainer.innerHTML = '';
    let subtotal = 0;
    cart.forEach(item => {
        const product = getProductById(item.id);
        if (!product) return;
        const tr = document.createElement('tr');
        const itemPrice = product.price * item.qty;
        subtotal += itemPrice;
        tr.innerHTML = `
            <td>${product.title}</td>
            <td>$${product.price.toFixed(2)}</td>
            <td>
                <button class="decrease" data-id="${item.id}">-</button>
                ${item.qty}
                <button class="increase" data-id="${item.id}">+</button>
            </td>
            <td>$${itemPrice.toFixed(2)}</td>
            <td><button class="remove" data-id="${item.id}">x</button></td>
        `;
        itemsContainer.appendChild(tr);
    });
    document.getElementById('subtotal').textContent = subtotal.toFixed(2);
    document.getElementById('total').textContent = subtotal.toFixed(2);
}

function setupCartPageListeners() {
    const itemsContainer = document.getElementById('cart-items');
    if (!itemsContainer) return;
    itemsContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('increase')) {
            const id = +e.target.dataset.id;
            addToCart(id, 1);
            renderCartPage();
        }
        if (e.target.classList.contains('decrease')) {
            const id = +e.target.dataset.id;
            addToCart(id, -1);
            renderCartPage();
        }
        if (e.target.classList.contains('remove')) {
            const id = +e.target.dataset.id;
            removeFromCart(id);
            renderCartPage();
        }
    });
    const couponBtn = document.getElementById('apply-coupon');
    if (couponBtn) {
        couponBtn.addEventListener('click', () => {
            const code = document.getElementById('coupon-code').value;
            const discountRate = applyCoupon(code);
            const subtotal = parseFloat(document.getElementById('subtotal').textContent);
            const discount = subtotal * discountRate;
            document.getElementById('discount').textContent = discount.toFixed(2);
            document.getElementById('total').textContent = (subtotal - discount).toFixed(2);
        });
    }
}

// run upon load
updateCartCount();
updateWishlistCount();
if (document.body.classList.contains('cart-page')) {
    renderCartPage();
    setupCartPageListeners();
}
