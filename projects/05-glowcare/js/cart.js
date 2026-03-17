// Cart and wishlist management using localStorage

function getCart(){
    return JSON.parse(localStorage.getItem('cart')) || [];
}

function saveCart(cart){
    localStorage.setItem('cart', JSON.stringify(cart));
}

function addToCart(id){
    const cart=getCart();
    const existing=cart.find(i=>i.id===id);
    if(existing){
        existing.qty++;
    } else {
        cart.push({id:id,qty:1});
    }
    saveCart(cart);
    updateCartCount();
}

function removeFromCart(id){
    let cart=getCart();
    cart=cart.filter(i=>i.id!==id);
    saveCart(cart);
    updateCartCount();
}

function changeQty(id,delta){
    const cart=getCart();
    const item=cart.find(i=>i.id===id);
    if(item){
        item.qty+=delta;
        if(item.qty<1) item.qty=1;
        saveCart(cart);
        renderCartPage();
    }
}

function updateCartCount(){
    const count=document.getElementById('cart-count');
    if(count){
        const total=getCart().reduce((a,b)=>a+b.qty,0);
        count.textContent=total;
    }
}

// Wishlist functions
function getWish(){
    return JSON.parse(localStorage.getItem('wish')) || [];
}
function saveWish(w){
    localStorage.setItem('wish', JSON.stringify(w));
}
function addToWish(id){
    const w=getWish();
    if(!w.includes(id)) w.push(id);
    saveWish(w);
    updateWishCount();
}
function updateWishCount(){
    const count=document.getElementById('wish-count');
    if(count){
        count.textContent=getWish().length;
    }
}

// Render cart details on cart page
function renderCartPage(){
    const container=document.getElementById('cart-items');
    if(!container) return;
    const cart=getCart();
    container.innerHTML='';
    let total=0;
    cart.forEach(i=>{
        const prod=products.find(p=>p.id===i.id);
        if(!prod) return;
        const row=document.createElement('div');
        row.className='cart-row';
        row.innerHTML=`
            <img src="${prod.img}" alt="${prod.name}" class="cart-img">
            <div class="cart-info">
                <h4>${prod.name}</h4>
                <p>$${prod.price.toFixed(2)}</p>
                <div class="qty-controls">
                    <button onclick="changeQty(${prod.id},-1)">-</button>
                    <span>${i.qty}</span>
                    <button onclick="changeQty(${prod.id},1)">+</button>
                </div>
                <button class="remove" onclick="removeFromCart(${prod.id})">Remove</button>
            </div>
        `;
        container.appendChild(row);
        total+=prod.price*i.qty;
    });
    const totalElem=document.getElementById('cart-total');
    if(totalElem) totalElem.textContent=`$${total.toFixed(2)}`;
}

// On cart page load
if(document.getElementById('cart-items')){
    renderCartPage();
}
