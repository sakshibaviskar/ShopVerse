// Main JavaScript for GlowCare site

document.addEventListener('DOMContentLoaded', () => {
    initThemeToggle();
    initHeroSlider();
    loadFeaturedProducts();
    initNavToggle();
    initCartCount();
    initWishCount();
    initReviewsSlider();
    initNewsletter();
    initScrollReveal();
});

function initThemeToggle() {
    const btn = document.getElementById('mode-toggle');
    if(!btn) return;
    btn.addEventListener('click', () => {
        document.body.classList.toggle('dark');
        btn.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
    });
}

function initNavToggle(){
    const ham = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    if(ham && navLinks){
        ham.addEventListener('click',()=>{
            navLinks.classList.toggle('open');
        });
    }
}

function initHeroSlider() {
    const slides = [
        'https://via.placeholder.com/1200x600/ffdddd/333?text=Slide+1',
        'https://via.placeholder.com/1200x600/ddffdd/333?text=Slide+2',
        'https://via.placeholder.com/1200x600/ddddff/333?text=Slide+3'
    ];
    const slider = document.getElementById('hero-slider');
    if(!slider) return;
    slides.forEach(src => {
        const div = document.createElement('div');
        div.className = 'slide';
        div.style.backgroundImage = `url(${src})`;
        slider.appendChild(div);
    });

    let idx = 0;
    setInterval(() => {
        idx = (idx + 1) % slides.length;
        slider.style.transform = `translateX(-${idx * 100}%)`;
    }, 4000);
}

function initReviewsSlider(){
    const reviews = [
        {text:'Love these products, my skin has never been better!',author:'--- Asha'},
        {text:'Fast shipping and amazing quality',author:'--- Mark'},
        {text:'The quiz actually helped me figure out my skin type!',author:'--- Lina'}
    ];
    const container = document.getElementById('reviews-slider');
    if(!container) return;
    reviews.forEach(r=>{
        const div = document.createElement('div');
        div.className='review';
        div.innerHTML = `<p>"${r.text}"</p><p>${r.author}</p>`;
        container.appendChild(div);
    });
    let idx=0;
    setInterval(()=>{
        idx=(idx+1)%reviews.length;
        container.style.transform=`translateX(-${idx*100}%)`;
    },5000);
}

function initNewsletter(){
    const form=document.getElementById('newsletter-form');
    if(!form) return;
    form.addEventListener('submit',e=>{
        e.preventDefault();
        alert('Thank you for subscribing!');
        form.reset();
    });
}

function initScrollReveal(){
    const reveals=document.querySelectorAll('[data-reveal]');
    if('IntersectionObserver' in window){
        const obs=new IntersectionObserver(entries=>{
            entries.forEach(entry=>{
                if(entry.isIntersecting){
                    // apply stagger on children
                    if(entry.target.querySelectorAll){
                        const children=entry.target.querySelectorAll('[data-reveal]');
                        children.forEach((c,i)=>{
                            setTimeout(()=>c.classList.add('reveal'), i*150);
                        });
                    }
                    entry.target.classList.add('reveal');
                    obs.unobserve(entry.target);
                }
            });
        },{threshold:0.1});
        reveals.forEach(el=>obs.observe(el));
    } else {
        reveals.forEach(el=>el.classList.add('reveal'));
    }
}

function initCartCount(){
    if(typeof updateCartCount==='function')updateCartCount();
}

// global click listener for cart and wishlist buttons
window.addEventListener('click',e=>{
    if(e.target.classList.contains('add-cart')){
        const id=+e.target.dataset.id;
        animateAddToCart(e.target);
        addToCart(id);
    }
    if(e.target.classList.contains('add-wish')){
        addToWish(+e.target.dataset.id);
    }
});

function animateAddToCart(button){
    const card=button.closest('.product-card');
    if(!card) return;
    const img=card.querySelector('img');
    const cartIcon=document.querySelector('#cart-count');
    if(!img||!cartIcon) return;
    const clone=img.cloneNode(true);
    const rect=img.getBoundingClientRect();
    clone.style.position='fixed';
    clone.style.top=rect.top+'px';
    clone.style.left=rect.left+'px';
    clone.style.width=rect.width+'px';
    clone.style.transition='all 0.8s ease-in-out';
    document.body.appendChild(clone);
    const cartRect=cartIcon.getBoundingClientRect();
    setTimeout(()=>{
        clone.style.top=cartRect.top+'px';
        clone.style.left=cartRect.left+'px';
        clone.style.width='20px';
        clone.style.opacity='0.5';
    },10);
    setTimeout(()=>{document.body.removeChild(clone);},900);
}

function initWishCount(){
    if(typeof updateWishCount==='function')updateWishCount();
}

function loadFeaturedProducts() {
    const products = [
        {id:1,name:'Hydrating Serum',img:'https://via.placeholder.com/300x300/ffe6f2/333?text=Serum',price:'29.99',rating:4.5,badge:'New'},
        {id:2,name:'Radiant Cream',img:'https://via.placeholder.com/300x300/fff0e6/333?text=Cream',price:'24.99',rating:4.0,badge:'Best Seller'},
        {id:3,name:'Glow Mask',img:'https://via.placeholder.com/300x300/e6ffe6/333?text=Mask',price:'19.99',rating:4.8}
    ];
    const grid = document.getElementById('featured-grid');
    if(!grid) return;
    products.forEach((p,index)=>{
        const card = document.createElement('div');
        card.className='product-card';
        card.setAttribute('data-reveal','');
        const badge = p.badge ? `<div class="badge">${p.badge}</div>` : '';
        const stars = `<div class="rating-stars">${'★'.repeat(Math.floor(p.rating||0))}${'☆'.repeat(5-Math.floor(p.rating||0))}</div>`;
        card.innerHTML = `
            ${badge}
            <img src="${p.img}" alt="${p.name}">
            <h3>${p.name}</h3>
            ${stars}
            <p>$${p.price}</p>
            <div class="card-buttons">
                <button class="add-cart" data-id="${p.id}">Add to Cart</button>
                <button class="add-wish" data-id="${p.id}">❤</button>
            </div>
            <div class="quick-view-overlay"><button class="quick-view" data-id="${p.id}">Quick View</button></div>
        `;
        setTimeout(()=>grid.appendChild(card), index*100);
    });
}
