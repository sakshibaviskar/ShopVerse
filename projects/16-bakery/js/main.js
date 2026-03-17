// main.js - handles general UI behavior, homepage sliders, product details, customization, animations

// wait for DOM
document.addEventListener('DOMContentLoaded', () => {
    setupMobileMenu();
    setupBackToTop();
    setupTestimonialSlider();
    setupProductClicks();
    setupWishlistButtons();
    setupAddCartAnimation();
    setupProductPage();
    setupOrderTracking();
    setupNewsletter();
    setupQuickView();
});

function setupQuickView() {
    document.body.addEventListener('click', (e) => {
        if (e.target.classList.contains('quick-view')) {
            const id = +e.target.dataset.id;
            const product = getProductById(id);
            const modal = document.getElementById('quick-view-modal');
            const content = document.getElementById('quick-view-content');
            const qImg = Array.isArray(product.images) ? product.images[0] : product.images;
            content.innerHTML = `
                <span class="close-quick">&times;</span>
                <img src="${qImg}" alt="${product.title}" style="max-width:100%;border-radius:20px;">
                <h3>${product.title}</h3>
                <p>${product.description}</p>
                <div class="price">$${product.price.toFixed(2)}</div>
                <button class="add-cart" data-id="${product.id}">Add to Cart</button>
            `;
            modal.classList.remove('hidden');
        }
        if (e.target.classList.contains('close-quick') || e.target.id === 'quick-view-modal') {
            document.getElementById('quick-view-modal').classList.add('hidden');
        }
    });
}

function setupNewsletter() {
    const form = document.getElementById('newsletter-form');
    if (!form) return;
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for subscribing!');
        form.reset();
    });
}
function setupOrderTracking() {
    const btn = document.getElementById('track-btn');
    if (btn) {
        btn.addEventListener('click', () => {
            const id = document.getElementById('order-id').value;
            trackOrder(id);
        });
    }
}

function setupMobileMenu() {
    const toggle = document.querySelector('.mobile-menu-toggle');
    const nav = document.querySelector('.nav-links');
    if (toggle) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('visible');
        });
    }
}

function setupBackToTop() {
    const btn = document.createElement('div');
    btn.id = 'back-to-top';
    btn.textContent = '↑';
    document.body.appendChild(btn);
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) btn.style.display = 'block';
        else btn.style.display = 'none';
    });
    btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

function setupTestimonialSlider() {
    const slider = document.getElementById('testimonial-slider');
    if (!slider) return;
    const testimonials = [
        'Love the cakes, tasted like homemade! - Amy',
        'Great service and delicious cookies. - John',
        'My wedding cake was perfect! - Lisa',
    ];
    let index = 0;
    function show() {
        slider.innerHTML = `<div class="testimonial">${testimonials[index]}</div>`;
    }
    show();
    setInterval(() => {
        index = (index + 1) % testimonials.length;
        show();
    }, 4000);
}

function setupProductClicks() {
    document.body.addEventListener('click', (e) => {
        if (e.target.classList.contains('product-card')) {
            const id = e.target.querySelector('.add-cart')?.dataset.id;
            if (id) {
                window.location = `product.html?id=${id}`;
            }
        }
        if (e.target.matches('.product-card *')) {
            // if clicking inside card but not button
            const card = e.target.closest('.product-card');
            const id = card?.querySelector('.add-cart')?.dataset.id;
            if (id && !e.target.classList.contains('add-cart') && !e.target.classList.contains('wishlist-btn')) {
                window.location = `product.html?id=${id}`;
            }
        }
    });
}

function setupWishlistButtons() {
    document.body.addEventListener('click', (e) => {
        if (e.target.classList.contains('wishlist-btn')) {
            const id = +e.target.dataset.id;
            addToWishlist(id);
            e.target.textContent = '✓';
        }
    });
}

function setupAddCartAnimation() {
    document.body.addEventListener('click', (e) => {
        if (e.target.classList.contains('add-cart')) {
            const id = +e.target.dataset.id;
            const img = e.target.closest('.product-card')?.querySelector('img');
            if (img) animateAddToCart(img);
            addToCart(id);
        }
    });
}

function animateAddToCart(img) {
    const copy = img.cloneNode(true);
    const rect = img.getBoundingClientRect();
    copy.style.position = 'fixed';
    copy.style.left = rect.left + 'px';
    copy.style.top = rect.top + 'px';
    copy.style.width = rect.width + 'px';
    copy.style.transition = 'all 1s ease-in-out';
    document.body.appendChild(copy);
    const cartIcon = document.querySelector('.cart-link');
    if (cartIcon) {
        const cartRect = cartIcon.getBoundingClientRect();
        setTimeout(() => {
            copy.style.left = cartRect.left + 'px';
            copy.style.top = cartRect.top + 'px';
            copy.style.width = '20px';
            copy.style.opacity = '0.5';
        }, 50);
        setTimeout(() => document.body.removeChild(copy), 1050);
    }
}

function setupProductPage() {
    if (!window.location.href.includes('product.html')) return;
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    if (!id) return;
    const product = getProductById(id);
    if (!product) return;
    document.getElementById('product-title').textContent = product.title;
    document.getElementById('product-description').textContent = product.description;
    document.getElementById('product-price').textContent = `$${product.price.toFixed(2)}`;
    document.getElementById('product-rating').textContent = '★'.repeat(Math.round(product.rating));
    const firstImage = Array.isArray(product.images) ? product.images[0] : product.images;
    document.getElementById('main-image').src = firstImage;
    const thumbs = document.getElementById('thumbnails');
    (product.images || [firstImage]).forEach(src => {
        const img = document.createElement('img');
        img.src = src;
        img.addEventListener('click', () => {
            document.getElementById('main-image').src = src;
        });
        thumbs.appendChild(img);
    });
    // quantity controls
    document.getElementById('increase-qty').addEventListener('click', () => {
        const q = document.getElementById('quantity');
        q.value = +q.value + 1;
    });
    document.getElementById('decrease-qty').addEventListener('click', () => {
        const q = document.getElementById('quantity');
        if (+q.value > 1) q.value = +q.value - 1;
    });
    document.getElementById('add-to-cart').addEventListener('click', () => {
        const qty = +document.getElementById('quantity').value;
        addToCart(+id, qty);
        showOrderSuccess();
    });
    // customization modal
    const customBtn = document.getElementById('customize-cake');
    const modal = document.getElementById('customization-modal');
    const close = modal.querySelector('.close-modal');
    if (customBtn) customBtn.addEventListener('click', () => modal.classList.remove('hidden'));
    if (close) close.addEventListener('click', () => modal.classList.add('hidden'));
    modal.querySelector('#cake-size').addEventListener('change', updateCustomSummary);
    modal.querySelector('#cake-flavor').addEventListener('change', updateCustomSummary);
    modal.querySelector('#cake-message').addEventListener('input', updateCustomSummary);
    modal.querySelector('#delivery-date').addEventListener('change', updateCustomSummary);
    modal.querySelector('#customization-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const flavor = modal.querySelector('#cake-flavor').value;
        const size = +modal.querySelector('#cake-size').value;
        const message = modal.querySelector('#cake-message').value;
        const date = modal.querySelector('#delivery-date').value;
        const basePrice = product.price;
        const finalPrice = basePrice * size;
        const summary = { flavor, size, message, date, price: finalPrice };
        addToCart(+id, 1, summary);
        modal.classList.add('hidden');
        showOrderSuccess();
    });
    updateCustomSummary();
}

function updateCustomSummary() {
    const flavor = document.getElementById('cake-flavor').value;
    const size = +document.getElementById('cake-size').value;
    const message = document.getElementById('cake-message').value;
    const date = document.getElementById('delivery-date').value;
    const price = getProductById(new URLSearchParams(window.location.search).get('id')).price * size;
    const summary = `Flavor: ${flavor}<br>Size: ${size}kg<br>Message: ${message}<br>Date: ${date}<br>Price: $${price.toFixed(2)}`;
    document.getElementById('custom-summary').innerHTML = summary;
}

function showOrderSuccess() {
    const popup = document.createElement('div');
    popup.className = 'order-success-popup';
    popup.textContent = 'Added to cart!';
    popup.style.position = 'fixed';
    popup.style.top = '20px';
    popup.style.right = '20px';
    popup.style.background = 'var(--primary)';
    popup.style.color = '#fff';
    popup.style.padding = '10px 20px';
    popup.style.borderRadius = '10px';
    document.body.appendChild(popup);
    setTimeout(() => document.body.removeChild(popup), 2000);
}

// fake order tracking
function trackOrder(id) {
    const statuses = ['Baking', 'Packing', 'Delivered'];
    let idx = 0;
    const container = document.getElementById('order-tracking');
    if (!container) return;
    container.textContent = statuses[idx];
    const interval = setInterval(() => {
        idx++;
        if (idx >= statuses.length) { clearInterval(interval); }
        else container.textContent = statuses[idx];
    }, 2000);
}

// scroll reveal animation
window.addEventListener('scroll', () => {
    document.querySelectorAll('section').forEach(sec => {
        const rect = sec.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            sec.classList.add('visible');
        }
    });
});
