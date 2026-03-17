// products.js - holds product data and methods to render products

const products = [
    {
        id: 1,
        title: 'Chocolate Birthday Cake',
        category: 'birthday',
        price: 35,
        images: [
            'https://via.placeholder.com/600x400?text=Chocolate+Cake+1',
            'https://via.placeholder.com/600x400?text=Chocolate+Cake+2',
            'https://via.placeholder.com/600x400?text=Chocolate+Cake+3'
        ],
        description: 'Rich chocolate cake perfect for birthdays',
        rating: 4.5
    },
    {
        id: 2,
        title: 'Vanilla Wedding Cake',
        category: 'wedding',
        price: 120,
        images: [
            'https://via.placeholder.com/600x400?text=Vanilla+Wedding+1',
            'https://via.placeholder.com/600x400?text=Vanilla+Wedding+2'
        ],
        description: 'Elegant vanilla cake for your big day',
        rating: 4.8
    },
    {
        id: 3,
        title: 'Red Velvet Theme Cake',
        category: 'theme',
        price: 60,
        images: [
            'https://via.placeholder.com/600x400?text=Red+Velvet+1',
            'https://via.placeholder.com/600x400?text=Red+Velvet+2'
        ],
        description: 'Colorful red velvet cake with custom design',
        rating: 4.7
    },
    {
        id: 4,
        title: 'Cupcake Assortment',
        category: 'cupcakes',
        price: 15,
        images: [
            'https://via.placeholder.com/600x400?text=Cupcakes+1',
            'https://via.placeholder.com/600x400?text=Cupcakes+2'
        ],
        description: 'A dozen assorted cupcakes',
        rating: 4.3
    },
    {
        id: 5,
        title: 'Chocolate Chip Cookies',
        category: 'cookies',
        price: 8,
        images: [
            'https://via.placeholder.com/600x400?text=Cookies+1',
            'https://via.placeholder.com/600x400?text=Cookies+2'
        ],
        description: 'Freshly baked cookies with chocolate chips',
        rating: 4.6
    },
    {
        id: 6,
        title: 'Assorted Chocolates Box',
        category: 'chocolates',
        price: 25,
        images: [
            'https://via.placeholder.com/600x400?text=Chocolates+1',
            'https://via.placeholder.com/600x400?text=Chocolates+2'
        ],
        description: 'Handmade chocolate pieces in gift box',
        rating: 4.9
    }
];

// utility functions
function getProductById(id) {
    return products.find(p => p.id === +id);
}

function renderProductCard(product) {
    const div = document.createElement('div');
    div.className = 'product-card';
    const imgSrc = Array.isArray(product.images) ? product.images[0] : product.images || '';
    div.innerHTML = `
        <img src="${imgSrc}" alt="${product.title}">
        <div class="title">${product.title}</div>
        <div class="price">$${product.price.toFixed(2)}</div>
        <button class="add-cart" data-id="${product.id}">Add to Cart</button>
        <button class="wishlist-btn" data-id="${product.id}">❤</button>
        <button class="quick-view" data-id="${product.id}">Quick View</button>
    `;
    return div;
}

function populateShop(filters = {}) {
    const list = document.getElementById('product-list');
    if (!list) return;
    list.innerHTML = '';

    let filtered = products.slice();
    if (filters.category && filters.category !== 'all') {
        filtered = filtered.filter(p => p.category === filters.category);
    }
    if (filters.price) {
        filtered = filtered.filter(p => p.price <= +filters.price);
    }
    if (filters.search) {
        const term = filters.search.toLowerCase();
        filtered = filtered.filter(p => p.title.toLowerCase().includes(term));
    }

    filtered.forEach(p => {
        list.appendChild(renderProductCard(p));
    });
}

function renderFeaturedAndBest() {
    const featuredContainer = document.getElementById('featured-products');
    const bestContainer = document.getElementById('best-sellers');
    if (featuredContainer) {
        products.slice(0, 3).forEach(p => featuredContainer.appendChild(renderProductCard(p)));
    }
    if (bestContainer) {
        products.slice(3, 6).forEach(p => bestContainer.appendChild(renderProductCard(p)));
    }
}

function setupShopListeners() {
    const category = document.getElementById('category-filter');
    const price = document.getElementById('price-filter');
    const priceVal = document.getElementById('price-value');
    const search = document.getElementById('search-input');

    if (category) {
        category.addEventListener('change', () => {
            populateShop({
                category: category.value,
                price: price.value,
                search: search.value
            });
        });
    }
    if (price) {
        price.addEventListener('input', () => {
            priceVal.textContent = `$${price.value}`;
            populateShop({
                category: category.value,
                price: price.value,
                search: search.value
            });
        });
    }
    if (search) {
        search.addEventListener('input', () => {
            populateShop({
                category: category.value,
                price: price.value,
                search: search.value
            });
        });
    }
}

// initialization: always show featured/best on pages where containers exist
renderFeaturedAndBest();

// if we're on the shop page, also populate list and setup filters
if (document.body.classList.contains('shop-page')) {
    populateShop({ category: 'all', price: 100 });
    setupShopListeners();
}

// export functions for other modules
// none needed for now
