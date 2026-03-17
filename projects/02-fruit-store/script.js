// ===========================
// PRODUCT DATABASE WITH REAL IMAGES
// ===========================
const allProducts = [
    {
        id: 1,
        name: 'Red Apples',
        category: 'fresh',
        price: 60,
        emoji: '🍎',
        image: 'Images/apple.jpg',
        description: 'Crisp and sweet red apples',
        rating: 4.5
    },
    {
        id: 2,
        name: 'Bananas',
        category: 'fresh',
        price: 40,
        emoji: '🍌',
        image: 'Images/banana.jpg',
        description: 'Fresh, yellow bananas',
        rating: 4.7
    },
    {
        id: 3,
        name: 'Fresh Mangoes',
        category: 'fresh',
        price: 80,
        emoji: '🥭',
        image: 'Images/magoes.jpeg',
        description: 'Sweet and juicy mangoes',
        rating: 4.8
    },
    {
        id: 4,
        name: 'Red Grapes',
        category: 'fresh',
        price: 120,
        emoji: '🍇',
        image: 'Images/grapes.png',
        description: 'Sweet seedless grapes',
        rating: 4.6
    },
    {
        id: 5,
        name: 'Fresh Strawberries',
        category: 'fresh',
        price: 200,
        emoji: '🍓',
        image: 'Images/strawberry.jpg',
        description: 'Delicious and sweet strawberries',
        rating: 4.9
    },
    {
        id: 6,
        name: 'Oranges',
        category: 'fresh',
        price: 50,
        emoji: '🍊',
        image: 'Images/oranges.png',
        description: 'Juicy citrus oranges',
        rating: 4.4
    },
    {
        id: 7,
        name: 'Blueberries',
        category: 'fresh',
        price: 250,
        emoji: '🫐',
        image: 'Images/blueberries.jpg',
        description: 'Antioxidant-rich blueberries',
        rating: 4.8
    },
    {
        id: 8,
        name: 'Watermelon',
        category: 'fresh',
        price: 100,
        emoji: '🍉',
        image: 'Images/watermelon.jpg',
        description: 'Refreshing watermelon',
        rating: 4.5
    },
    {
        id: 9,
        name: 'Pineapple',
        category: 'fresh',
        price: 70,
        emoji: '🍍',
        image: 'Images/pineapple.jpg',
        description: 'Fresh tropical pineapple',
        rating: 4.6
    },
    {
        id: 10,
        name: 'Kiwi Fruits',
        category: 'fresh',
        price: 90,
        emoji: '🥝',
        image: 'Images/kiwi.jpg',
        description: 'Green and tangy kiwi fruits',
        rating: 4.7
    },
    {
        id: 11,
        name: 'Papaya',
        category: 'fresh',
        price: 75,
        emoji: '🧡',
        image: 'Images/papaya.jpg',
        description: 'Fresh and tropical papaya',
        rating: 4.5
    },
    {
        id: 12,
        name: 'Pomegranate',
        category: 'fresh',
        price: 130,
        emoji: '❤️',
        image: 'Images/pomegranate.png',
        description: 'Juicy pomegranate fruits',
        rating: 4.7
    },
    {
        id: 13,
        name: 'Almonds',
        category: 'dry',
        price: 400,
        emoji: '🥜',
        image: 'Images/almond.jpg',
        description: 'Premium quality almonds',
        rating: 4.7
    },
    {
        id: 14,
        name: 'Cashews',
        category: 'dry',
        price: 500,
        emoji: '🥜',
        image: 'Images/cashew.jpg',
        description: 'Delicious cashew nuts',
        rating: 4.8
    },
    {
        id: 15,
        name: 'Walnuts',
        category: 'dry',
        price: 450,
        emoji: '🥜',
        image: 'Images/walnuts.png',
        description: 'Rich and nutritious walnuts',
        rating: 4.6
    },
    {
        id: 16,
        name: 'Raisins',
        category: 'dry',
        price: 180,
        emoji: '🍇',
        image: 'Images/raisins.png',
        description: 'Sweet dried raisins',
        rating: 4.5
    },
    {
        id: 17,
        name: 'Dates',
        category: 'dry',
        price: 200,
        emoji: '📅',
        image: 'Images/dates.jpg',
        description: 'Sweet and nutritious dates',
        rating: 4.7
    },
    {
        id: 18,
        name: 'Pistachios',
        category: 'dry',
        price: 550,
        emoji: '🥜',
        image: 'Images/pistachios.png',
        description: 'Premium pistachio nuts',
        rating: 4.9
    },
    {
        id: 19,
        name: 'Dried Apricots',
        category: 'dry',
        price: 300,
        emoji: '🍑',
        image: 'Images/dried apricots.png',
        description: 'Sweet dried apricots',
        rating: 4.6
    },
    {
        id: 20,
        name: 'Figs (Anjeer)',
        category: 'dry',
        price: 350,
        emoji: '🍂',
        image: 'Images/figs.png',
        description: 'Premium dried figs',
        rating: 4.8
    }
];

// ===========================
// DISCOUNT COUPONS
// ===========================
const coupons = {
    'SAKSHI10': { discount: 10, type: 'percentage' },
    'FRESH20': { discount: 20, type: 'percentage' },
    'SUMMER50': { discount: 50, type: 'fixed' },
    'HEALTH15': { discount: 15, type: 'percentage' },
    'SAKSHI20': { discount: 20, type: 'percentage' }
};

// ===========================
// ADVANCED FEATURES INITIALIZATION
// ===========================

// Dark Mode
let isDarkMode = localStorage.getItem('darkMode') === 'true';

function toggleDarkMode() {
    isDarkMode = !isDarkMode;
    localStorage.setItem('darkMode', isDarkMode);
    document.body.classList.toggle('dark-mode', isDarkMode);
    updateThemeToggleButton();
}

function updateThemeToggleButton() {
    const themeBtn = document.querySelector('.theme-toggle');
    if (themeBtn) {
        themeBtn.textContent = isDarkMode ? '☀️' : '🌙';
    }
}

function initializeDarkMode() {
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
        updateThemeToggleButton();
    }
}

// Wishlist Management
let wishlist = loadWishlist();

function loadWishlist() {
    const saved = localStorage.getItem('sakshiFruitShopWishlist');
    return saved ? JSON.parse(saved) : [];
}

function saveWishlist() {
    localStorage.setItem('sakshiFruitShopWishlist', JSON.stringify(wishlist));
    updateWishlistBadge();
}

function addToWishlist(productId) {
    const product = allProducts.find(p => p.id === productId);
    if (!product) return;

    if (!wishlist.find(p => p.id === productId)) {
        wishlist.push(product);
        saveWishlist();
        showToast(`❤️ ${product.name} added to wishlist!`, 'success');
    } else {
        removeFromWishlist(productId);
    }
}

function removeFromWishlist(productId) {
    const product = allProducts.find(p => p.id === productId);
    wishlist = wishlist.filter(p => p.id !== productId);
    saveWishlist();
    if (product) {
        showToast(`Removed from wishlist`, 'info');
    }
}

function updateWishlistBadge() {
    const badge = document.getElementById('wishlistBadge');
    if (badge) {
        badge.textContent = wishlist.length;
    }
}

function toggleWishlistButton(productId) {
    const btn = document.querySelector(`[data-wishlist-btn="${productId}"]`);
    if (btn) {
        const isInWishlist = wishlist.find(p => p.id === productId);
        btn.classList.toggle('active', isInWishlist);
    }
}

// Recently Viewed Products
let recentlyViewed = loadRecentlyViewed();

function loadRecentlyViewed() {
    const saved = localStorage.getItem('recentlyViewed');
    return saved ? JSON.parse(saved) : [];
}

function saveRecentlyViewed() {
    localStorage.setItem('recentlyViewed', JSON.stringify(recentlyViewed));
}

function addToRecentlyViewed(productId) {
    const product = allProducts.find(p => p.id === productId);
    if (!product) return;

    recentlyViewed = recentlyViewed.filter(p => p.id !== productId);
    recentlyViewed.unshift(product);
    
    if (recentlyViewed.length > 10) {
        recentlyViewed.pop();
    }
    
    saveRecentlyViewed();
}

function displayRecentlyViewed() {
    const section = document.getElementById('recentlyViewedSection');
    if (!section) return;

    if (recentlyViewed.length > 0) {
        section.style.display = 'block';
        const grid = document.getElementById('recentlyViewedGrid');
        if (grid) {
            grid.innerHTML = recentlyViewed.slice(0, 3).map(product => `
                <div class="featured-card" onclick="addToRecentlyViewed(${product.id})">
                    <div class="featured-image-container">
                        <img src="${product.image}" 
                             alt="${product.name}" 
                             class="featured-image-real" 
                             loading="lazy"
                             onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22500%22 height=%22500%22><rect fill=%22%23ede9fe%22 width=%22500%22 height=%22500%22/><text x=%2250%25%22 y=%2250%25%22 text-anchor=%22middle%22 font-size=%2248%22 font-family=%22Poppins%22>${product.emoji}</text></svg>'">
                    </div>
                    <h4>${product.name}</h4>
                    <p class="featured-description">${product.description}</p>
                    <p class="featured-price">₹${product.price}</p>
                    <button class="btn btn-small" onclick="event.stopPropagation(); addToCart(${product.id}, 1)">Add to Cart</button>
                </div>
            `).join('');
        }
    } else {
        section.style.display = 'none';
    }
}

// Order History
let orders = loadOrders();

function loadOrders() {
    const saved = localStorage.getItem('sakshiFruitShopOrders');
    return saved ? JSON.parse(saved) : [];
}

function saveOrders() {
    localStorage.setItem('sakshiFruitShopOrders', JSON.stringify(orders));
}

function addOrder(orderData) {
    orders.unshift(orderData);
    saveOrders();
}

// Toast Notifications
function showToast(message, type = 'info') {
    const container = document.getElementById('toastContainer') || createToastContainer();
    
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = message;
    
    container.appendChild(toast);
    
    setTimeout(() => {
        toast.style.animation = 'slideOut 0.3s ease forwards';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

function createToastContainer() {
    const container = document.createElement('div');
    container.id = 'toastContainer';
    container.className = 'toast-container';
    document.body.appendChild(container);
    return container;
}

// Search Functionality
function handleSearch(event) {
    const query = event.target.value.toLowerCase();
    const suggestions = document.getElementById('searchSuggestions');
    
    if (!suggestions) return;
    
    if (query.length < 1) {
        suggestions.classList.remove('show');
        return;
    }
    
    const filtered = allProducts.filter(p => 
        p.name.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query)
    );
    
    if (filtered.length > 0) {
        suggestions.innerHTML = filtered.slice(0, 5).map(p => `
            <div class="suggestion-item" onclick="goToProduct(${p.id})">${p.emoji} ${p.name} - ₹${p.price}</div>
        `).join('');
        suggestions.classList.add('show');
    } else {
        suggestions.classList.remove('show');
    }
}

function goToProduct(productId) {
    addToRecentlyViewed(productId);
    window.location.href = `products.html?highlight=${productId}`;
}

// Font Size Control (Accessibility)
let fontSize = localStorage.getItem('fontSize') || 'normal';

function setFontSize(size) {
    fontSize = size;
    localStorage.setItem('fontSize', size);
    document.body.classList.remove('font-small', 'font-normal', 'font-large');
    document.body.classList.add(`font-${size}`);
}

function initializeFontSize() {
    setFontSize(fontSize);
}

// ===========================
// CART MANAGEMENT
// ===========================
let cart = loadCart();

function loadCart() {
    const savedCart = localStorage.getItem('sakshiFruitShopCart');
    return savedCart ? JSON.parse(savedCart) : [];
}

function saveCart() {
    localStorage.setItem('sakshiFruitShopCart', JSON.stringify(cart));
    updateCartBadge();
}

function addToCart(productId, quantity = 1) {
    const product = allProducts.find(p => p.id === productId);
    if (!product) return;

    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            emoji: product.emoji,
            image: product.image,
            quantity: quantity
        });
    }

    saveCart();
    showAddToCartNotification(product.name);
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
}

function updateCartItem(productId, quantity) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity = Math.max(1, quantity);
        saveCart();
    }
}

function clearCart() {
    cart = [];
    saveCart();
}

function updateCartBadge() {
    const badge = document.getElementById('cartBadge');
    if (badge) {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        badge.textContent = totalItems;
    }
}

// ===========================
// DISPLAY FUNCTIONS
// ===========================
function displayProducts(category) {
    const productsGrid = document.getElementById('productsGrid');
    if (!productsGrid) return;

    const filtered = category === 'all'
        ? allProducts
        : allProducts.filter(p => p.category === category);

    productsGrid.innerHTML = filtered.map(product => {
        const isInWishlist = wishlist.find(p => p.id === product.id);
        return `
        <div class="product-card">
            <div class="product-image-container">
                <img src="${product.image}" 
                     alt="${product.name}" 
                     class="product-image-real" 
                     loading="lazy"
                     onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22500%22 height=%22500%22><rect fill=%22%23ede9fe%22 width=%22500%22 height=%22500%22/><text x=%2250%25%22 y=%2250%25%22 text-anchor=%22middle%22 font-size=%2248%22 font-family=%22Poppins%22>${product.emoji}</text></svg>'">
            </div>
            <button class="wishlist-btn ${isInWishlist ? 'active' : ''}" data-wishlist-btn="${product.id}" onclick="event.stopPropagation(); addToWishlist(${product.id}); toggleWishlistButton(${product.id})">
                ${isInWishlist ? '❤️' : '🤍'}
            </button>
            <div class="product-info">
                <span class="product-category">${product.category === 'fresh' ? 'Fresh' : 'Dry'}</span>
                <h4 class="product-name">${product.name}</h4>
                <div class="stars" style="margin-bottom: 8px;">
                    ${'⭐'.repeat(Math.floor(product.rating))} <span style="font-size: 12px; color: #6b7280;">(${product.rating})</span>
                </div>
                <p class="product-price">₹${product.price}/kg</p>
                <div class="quantity-selector">
                    <button class="quantity-btn" onclick="updateQuantity('qty-${product.id}', -1)">−</button>
                    <input type="number" class="quantity-input" id="qty-${product.id}" value="1" min="1" max="100">
                    <button class="quantity-btn" onclick="updateQuantity('qty-${product.id}', 1)">+</button>
                </div>
                <button class="add-to-cart-btn" onclick="addToCartFromProducts(${product.id})">
                    Add to Cart
                </button>
            </div>
            <button class="floating-add-btn" onclick="addToCartFromProducts(${product.id}); showToast('Added to cart!', 'success')">🛒</button>
        </div>
        `;
    }).join('');
}

function filterProducts(category) {
    // Update button styles
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');

    displayProducts(category);
}

function sortProducts(sortValue) {
    let sorted = [...allProducts];

    switch(sortValue) {
        case 'price-low':
            sorted.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            sorted.sort((a, b) => b.price - a.price);
            break;
        case 'name':
            sorted.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case 'popular':
            sorted.sort((a, b) => b.rating - a.rating);
            break;
        default:
            sorted = allProducts;
    }

    const productsGrid = document.getElementById('productsGrid');
    if (!productsGrid) return;

    const currentCategory = document.querySelector('.filter-btn.active')?.textContent;
    let filtered = sorted;

    if (currentCategory === 'Fresh Fruits') {
        filtered = sorted.filter(p => p.category === 'fresh');
    } else if (currentCategory === 'Dry Fruits') {
        filtered = sorted.filter(p => p.category === 'dry');
    }

    productsGrid.innerHTML = filtered.map(product => {
        const isInWishlist = wishlist.find(p => p.id === product.id);
        return `
        <div class="product-card">
            <div class="product-image-container">
                <img src="${product.image}" 
                     alt="${product.name}" 
                     class="product-image-real" 
                     loading="lazy"
                     onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22500%22 height=%22500%22><rect fill=%22%23ede9fe%22 width=%22500%22 height=%22500%22/><text x=%2250%25%22 y=%2250%25%22 text-anchor=%22middle%22 font-size=%2248%22 font-family=%22Poppins%22>${product.emoji}</text></svg>'">
            </div>
            <button class="wishlist-btn ${isInWishlist ? 'active' : ''}" data-wishlist-btn="${product.id}" onclick="event.stopPropagation(); addToWishlist(${product.id}); toggleWishlistButton(${product.id})">
                ${isInWishlist ? '❤️' : '🤍'}
            </button>
            <div class="product-info">
                <span class="product-category">${product.category === 'fresh' ? 'Fresh' : 'Dry'}</span>
                <h4 class="product-name">${product.name}</h4>
                <div class="stars" style="margin-bottom: 8px;">
                    ${'⭐'.repeat(Math.floor(product.rating))} <span style="font-size: 12px; color: #6b7280;">(${product.rating})</span>
                </div>
                <p class="product-price">₹${product.price}/kg</p>
                <div class="quantity-selector">
                    <button class="quantity-btn" onclick="updateQuantity('qty-${product.id}', -1)">−</button>
                    <input type="number" class="quantity-input" id="qty-${product.id}" value="1" min="1" max="100">
                    <button class="quantity-btn" onclick="updateQuantity('qty-${product.id}', 1)">+</button>
                </div>
                <button class="add-to-cart-btn" onclick="addToCartFromProducts(${product.id})">
                    Add to Cart
                </button>
            </div>
            <button class="floating-add-btn" onclick="addToCartFromProducts(${product.id}); showToast('Added to cart!', 'success')">🛒</button>
        </div>
        `;
    }).join('');
}

function displayWishlist() {
    const display = document.getElementById('wishlistDisplay');
    if (!display) return;

    if (wishlist.length === 0) {
        display.innerHTML = `
            <div class="empty-cart" style="text-align: center; padding: 50px 20px;">
                <p style="font-size: 24px; margin-bottom: 10px;">❤️ Your wishlist is empty</p>
                <p>Save your favorite fruits for later!</p>
                <a href="products.html" class="btn btn-primary" style="margin-top: 20px;">Start Shopping</a>
            </div>
        `;
    } else {
        const productsGrid = document.createElement('div');
        productsGrid.className = 'products-grid';
        productsGrid.innerHTML = wishlist.map(product => `
            <div class="product-card">
                <div class="product-image-container">
                    <img src="${product.image}" 
                         alt="${product.name}" 
                         class="product-image-real" 
                         loading="lazy"
                         onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22500%22 height=%22500%22><rect fill=%22%23ede9fe%22 width=%22500%22 height=%22500%22/><text x=%2250%25%22 y=%2250%25%22 text-anchor=%22middle%22 font-size=%2248%22 font-family=%22Poppins%22>${product.emoji}</text></svg>'">
                </div>
                <button class="wishlist-btn active" onclick="event.stopPropagation(); removeFromWishlist(${product.id}); displayWishlist(); updateWishlistBadge();">
                    ❤️
                </button>
                <div class="product-info">
                    <span class="product-category">${product.category === 'fresh' ? 'Fresh' : 'Dry'}</span>
                    <h4 class="product-name">${product.name}</h4>
                    <p class="product-price">₹${product.price}/kg</p>
                    <button class="btn btn-primary btn-small" onclick="addToCart(${product.id}, 1); showToast('Added to cart!', 'success')">
                        Add to Cart
                    </button>
                </div>
            </div>
        `).join('');
        display.innerHTML = '';
        display.appendChild(productsGrid);
    }
}

function displayOrders() {
    const display = document.getElementById('ordersDisplay');
    if (!display) return;

    if (orders.length === 0) {
        display.innerHTML = `
            <div class="empty-cart" style="text-align: center; padding: 50px 20px;">
                <p style="font-size: 24px; margin-bottom: 10px;">📦 No orders yet</p>
                <p>Start shopping to place your first order!</p>
                <a href="products.html" class="btn btn-primary" style="margin-top: 20px;">Shop Now</a>
            </div>
        `;
    } else {
        display.innerHTML = `<div style="display: flex; flex-direction: column; gap: 20px;">
            ${orders.map((order, index) => `
                <div style="background: white; border-radius: 15px; padding: 25px; border: 1px solid #e5e7eb; box-shadow: 0 5px 15px rgba(0,0,0,0.1);">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px;">
                        <h4 style="color: #6d28d9; margin: 0;">Order ${order.orderId}</h4>
                        <span style="background: linear-gradient(135deg, #8b5cf6, #6d28d9); color: white; padding: 5px 15px; border-radius: 20px; font-size: 12px; font-weight: 600;">${order.status}</span>
                    </div>
                    <p style="color: #6b7280; margin: 10px 0;"><strong>Date:</strong> ${order.date}</p>
                    <p style="color: #6b7280; margin: 10px 0;"><strong>Total:</strong> ₹${order.total.toFixed(2)}</p>
                    <p style="color: #6b7280; margin: 10px 0;"><strong>Items:</strong> ${order.items.length} product(s)</p>
                </div>
            `).join('')}
        </div>`;
    }
}

function displayCart() {
    const cartItemsDisplay = document.getElementById('cartItemsDisplay');
    if (!cartItemsDisplay) return;

    if (cart.length === 0) {
        cartItemsDisplay.innerHTML = `
            <div class="empty-cart">
                <p>🛒 Your cart is empty</p>
                <p>Start shopping to add items!</p>
                <a href="products.html" class="btn btn-primary">Continue Shopping</a>
            </div>
        `;
    } else {
        cartItemsDisplay.innerHTML = cart.map(item => `
            <div class="cart-item">
                <div class="cart-item-image-container">
                    <img src="${item.image}" 
                         alt="${item.name}" 
                         class="cart-item-image-real" 
                         loading="lazy"
                         onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22120%22 height=%22120%22><rect fill=%22%23ede9fe%22 width=%22120%22 height=%22120%22/><text x=%2250%25%22 y=%2250%25%22 text-anchor=%22middle%22 font-size=%2232%22 font-family=%22Poppins%22>${item.emoji}</text></svg>'">
                </div>
                <div class="cart-item-details">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-price">₹${item.price}/kg</div>
                    <div class="cart-item-quantity">
                        <button class="quantity-btn" onclick="updateQuantityInCart(${item.id}, -1)">−</button>
                        <input type="number" value="${item.quantity}" min="1" readonly style="width: 40px; text-align: center; border: none; background: transparent; font-weight: 600;">
                        <button class="quantity-btn" onclick="updateQuantityInCart(${item.id}, 1)">+</button>
                    </div>
                    <div class="cart-item-subtotal">Subtotal: ₹${item.price * item.quantity}</div>
                </div>
                <div class="cart-item-actions">
                    <div class="cart-item-subtotal-value">₹${item.price * item.quantity}</div>
                    <button class="remove-btn" onclick="removeFromCartAndDisplay(${item.id})">Remove</button>
                </div>
            </div>
        `).join('');
    }

    updateCartSummary();
}

function updateCartSummary() {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const appliedCoupon = localStorage.getItem('appliedCoupon');
    const appliedDiscount = localStorage.getItem('appliedDiscount');

    let discount = 0;
    if (appliedCoupon && appliedDiscount) {
        discount = parseFloat(appliedDiscount);
    }

    const discountedAmount = subtotal - discount;
    const deliveryCharge = discountedAmount >= 500 ? 0 : 40;
    const total = discountedAmount + deliveryCharge;

    // Update cart page summary if it exists
    const subtotalEl = document.getElementById('subtotal');
    if (subtotalEl) {
        subtotalEl.textContent = `₹${subtotal.toFixed(2)}`;
    }

    const discountEl = document.getElementById('discount');
    if (discountEl) {
        discountEl.textContent = `-₹${discount.toFixed(2)}`;
    }

    const deliveryEl = document.getElementById('deliveryCharge');
    if (deliveryEl) {
        deliveryEl.textContent = `₹${deliveryCharge.toFixed(2)}`;
    }

    const totalEl = document.getElementById('totalAmount');
    if (totalEl) {
        totalEl.textContent = `₹${total.toFixed(2)}`;
    }

    const deliveryInfo = document.getElementById('deliveryInfo');
    if (deliveryInfo) {
        if (discountedAmount >= 500) {
            deliveryInfo.textContent = '✨ Free delivery on this order!';
            deliveryInfo.style.color = '#4CAF50';
        } else {
            deliveryInfo.textContent = `Add ₹${(500 - discountedAmount).toFixed(2)} more for free delivery`;
            deliveryInfo.style.color = '#ff9800';
        }
    }

    // Update checkout summary if it exists
    updateCheckoutSummary();
}

function updateCheckoutSummary() {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const appliedCoupon = localStorage.getItem('appliedCoupon');
    const appliedDiscount = localStorage.getItem('appliedDiscount');

    let discount = 0;
    if (appliedCoupon && appliedDiscount) {
        discount = parseFloat(appliedDiscount);
    }

    const discountedAmount = subtotal - discount;
    const deliveryCharge = discountedAmount >= 500 ? 0 : 40;
    const total = discountedAmount + deliveryCharge;

    // Update order summary items
    const orderSummaryItems = document.getElementById('orderSummaryItems');
    if (orderSummaryItems) {
        orderSummaryItems.innerHTML = cart.map(item => `
            <div class="summary-item">
                <div class="summary-item-image-container">
                    <img src="${item.image}" 
                         alt="${item.name}" 
                         class="summary-item-image-real" 
                         loading="lazy"
                         onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2280%22 height=%2280%22><rect fill=%22%23ede9fe%22 width=%2280%22 height=%2280%22/><text x=%2250%25%22 y=%2250%25%22 text-anchor=%22middle%22 font-size=%2224%22 font-family=%22Poppins%22>${item.emoji}</text></svg>'">
                </div>
                <div>
                    <div class="summary-item-name">${item.name}</div>
                    <div class="summary-item-qty">Qty: ${item.quantity} kg</div>
                </div>
                <div class="summary-item-price">₹${(item.price * item.quantity).toFixed(2)}</div>
            </div>
        `).join('');
    }

    // Update summaries
    const summaryElements = {
        'summarySubtotal': subtotal,
        'summaryDiscount': discount,
        'summaryDelivery': deliveryCharge,
        'summaryTotal': total
    };

    for (const [id, value] of Object.entries(summaryElements)) {
        const el = document.getElementById(id);
        if (el) {
            el.textContent = `₹${value.toFixed(2)}`;
        }
    }
}

// ===========================
// CART INTERACTION FUNCTIONS
// ===========================
function addToCartFromProducts(productId) {
    const quantityInput = document.getElementById(`qty-${productId}`);
    const quantity = parseInt(quantityInput.value) || 1;
    addToCart(productId, quantity);
    quantityInput.value = 1;
    const product = allProducts.find(p => p.id === productId);
    if (product) {
        showToast(`✅ ${product.name} added to cart!`, 'success');
    }
}

function addToCartFromHome(name, price) {
    // Find product by name and price
    const product = allProducts.find(p => p.name === name && p.price === price);
    if (product) {
        addToCart(product.id, 1);
        showToast(`✅ ${product.name} added to cart!`, 'success');
    }
}

function updateQuantity(inputId, change) {
    const input = document.getElementById(inputId);
    let value = parseInt(input.value) || 1;
    value = Math.max(1, value + change);
    input.value = value;
}

function updateQuantityInCart(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity = Math.max(1, item.quantity + change);
        saveCart();
        displayCart();
    }
}

function removeFromCartAndDisplay(productId) {
    const product = allProducts.find(p => p.id === productId);
    if (confirm('Remove this item from cart?')) {
        removeFromCart(productId);
        displayCart();
        if (product) {
            showToast(`Removed ${product.name} from cart`, 'info');
        }
    }
}

// ===========================
// COUPON FUNCTIONS
// ===========================
function applyCoupon() {
    const couponInput = document.getElementById('couponInput');
    const couponCode = couponInput.value.trim().toUpperCase();
    const couponMessage = document.getElementById('couponMessage');

    if (!couponCode) {
        showToast('Please enter a coupon code', 'error');
        return;
    }

    const coupon = coupons[couponCode];

    if (!coupon) {
        showToast('❌ Invalid coupon code', 'error');
        document.getElementById('discount').textContent = '-₹0.00';
        localStorage.removeItem('appliedCoupon');
        localStorage.removeItem('appliedDiscount');
        updateCartSummary();
        return;
    }

    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    let discountAmount = 0;

    if (coupon.type === 'percentage') {
        discountAmount = (subtotal * coupon.discount) / 100;
    } else if (coupon.type === 'fixed') {
        discountAmount = coupon.discount;
    }

    localStorage.setItem('appliedCoupon', couponCode);
    localStorage.setItem('appliedDiscount', discountAmount.toString());

    showToast(`✅ Coupon applied! You saved ₹${discountAmount.toFixed(2)}`, 'success');

    if (couponMessage) {
        couponMessage.textContent = `✅ Coupon applied! You saved ₹${discountAmount.toFixed(2)}`;
        couponMessage.className = 'coupon-message success';
    }

    updateCartSummary();
    couponInput.value = '';
}

// ===========================
// CHECKOUT FUNCTIONS
// ===========================
function proceedToCheckout() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }
    window.location.href = 'checkout.html';
}

function nextStep(currentStep, nextStep) {
    // Validate current step
    if (!validateStep(currentStep)) {
        return;
    }

    // Hide current step
    document.getElementById(currentStep).classList.remove('active');

    // Show next step
    const nextElement = document.getElementById(nextStep);
    if (nextElement) {
        nextElement.classList.add('active');
    }

    // Update progress indicator
    updateProgressIndicator(nextStep);

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function previousStep(currentStep, previousStep) {
    // Hide current step
    document.getElementById(currentStep).classList.remove('active');

    // Show previous step
    const prevElement = document.getElementById(previousStep);
    if (prevElement) {
        prevElement.classList.add('active');
    }

    // Update progress indicator
    updateProgressIndicator(previousStep);

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function validateStep(stepId) {
    if (stepId === 'step1') {
        const fullName = document.getElementById('fullName').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const address = document.getElementById('address').value.trim();
        const city = document.getElementById('city').value.trim();
        const pincode = document.getElementById('pincode').value.trim();

        if (!fullName || !email || !phone || !address || !city || !pincode) {
            alert('Please fill in all required fields');
            return false;
        }

        if (!/^\d{10}$/.test(phone)) {
            alert('Please enter a valid 10-digit phone number');
            return false;
        }

        if (!/^\d{6}$/.test(pincode)) {
            alert('Please enter a valid 6-digit pincode');
            return false;
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            alert('Please enter a valid email address');
            return false;
        }

        return true;
    }

    return true;
}

function updateProgressIndicator(currentStepId) {
    const stepMap = {
        'step1': 1,
        'step2': 2,
        'step3': 3,
        'step4': 4
    };

    const stepNumber = stepMap[currentStepId];

    document.querySelectorAll('.progress-step').forEach((step, index) => {
        if (index < stepNumber) {
            step.classList.add('active');
        } else {
            step.classList.remove('active');
        }
    });

    document.querySelectorAll('.progress-line').forEach((line, index) => {
        if (index < stepNumber - 1) {
            line.classList.add('active');
        } else {
            line.classList.remove('active');
        }
    });
}

function completeCheckout() {
    const fullName = document.getElementById('fullName').value;
    const phone = document.getElementById('phone').value;
    const paymentMethod = document.querySelector('input[name="payment"]:checked').value;

    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const appliedDiscount = localStorage.getItem('appliedDiscount');
    let discount = 0;
    if (appliedDiscount) {
        discount = parseFloat(appliedDiscount);
    }
    const discountedAmount = subtotal - discount;
    const deliveryCharge = discountedAmount >= 500 ? 0 : 40;
    const total = discountedAmount + deliveryCharge;

    // Generate order ID
    const orderId = 'ORD' + Date.now();

    // Add order to history
    const orderData = {
        orderId: orderId,
        date: new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'short', day: 'numeric' }),
        cartItems: [...cart],
        total: total,
        items: cart,
        status: 'Confirmed',
        customerName: fullName,
        phone: phone,
        paymentMethod: paymentMethod
    };
    addOrder(orderData);

    // Calculate delivery date
    const deliveryDate = new Date();
    deliveryDate.setDate(deliveryDate.getDate() + 1);
    const deliveryDateStr = deliveryDate.toLocaleDateString('en-IN', { year: 'numeric', month: 'short', day: 'numeric' });

    // Display confirmation
    document.getElementById('orderID').textContent = orderId;
    document.getElementById('confirmName').textContent = fullName;
    document.getElementById('confirmPhone').textContent = phone;
    document.getElementById('confirmTotal').textContent = `₹${total.toFixed(2)}`;
    document.getElementById('deliveryDate').textContent = deliveryDateStr;

    const paymentNames = {
        'cod': 'Cash on Delivery',
        'upi': 'UPI',
        'card': 'Debit/Credit Card'
    };
    document.getElementById('confirmPayment').textContent = paymentNames[paymentMethod];

    // Clear cart and local storage
    clearCart();
    localStorage.removeItem('appliedCoupon');
    localStorage.removeItem('appliedDiscount');

    // Move to step 4
    nextStep('step3', 'step4');
    
    // Show success toast
    showToast('🎉 Order placed successfully!', 'success');
}

// ===========================
// NOTIFICATION FUNCTION
// ===========================
function showAddToCartNotification(productName) {
    // Create notification element
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 80px;
        right: 20px;
        background: linear-gradient(135deg, #8b5cf6, #6d28d9);
        color: white;
        padding: 15px 25px;
        border-radius: 10px;
        box-shadow: 0 10px 30px rgba(139, 92, 246, 0.3);
        z-index: 1000;
        animation: slideIn 0.3s ease;
        font-weight: 600;
    `;
    notification.textContent = `✅ ${productName} added to cart!`;

    document.body.appendChild(notification);

    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease forwards';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// ===========================
// EVENT LISTENERS & INITIALIZATION
// ===========================
document.addEventListener('DOMContentLoaded', function() {
    // Initialize features
    initializeDarkMode();
    initializeFontSize();
    updateCartBadge();
    updateWishlistBadge();
    
    // Sticky navbar scroll effect
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Add keyboard shortcut support for coupon
    const couponInput = document.getElementById('couponInput');
    if (couponInput) {
        couponInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                applyCoupon();
            }
        });
    }

    // Auto-load order summary on checkout page load
    if (document.getElementById('orderSummaryItems')) {
        updateCheckoutSummary();
    }
    
    // Scroll animation trigger
    observeScrollAnimations();
    
    // Display recently viewed products
    displayRecentlyViewed();
});

// Intersection Observer for scroll animations
function observeScrollAnimations() {
    const options = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-enter');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    // Observe all cards and sections
    document.querySelectorAll('.featured-card, .combo-card, .feature-card, .product-card, .testimonial-card').forEach(el => {
        observer.observe(el);
    });
}

// Add CSS for animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }

    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
    
    @keyframes slideDown {
        from {
            opacity: 0;
            transform: translateY(-10px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);
