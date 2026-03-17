// Product data and utilities

const products = [
    {id:1,name:'Hydrating Serum',img:'https://via.placeholder.com/300x300/ffe6f2/333?text=Serum',price:29.99,skin:'Dry',category:'Serum',rating:4.5,badge:'New'},
    {id:2,name:'Radiant Cream',img:'https://via.placeholder.com/300x300/fff0e6/333?text=Cream',price:24.99,skin:'Oily',category:'Moisturizer',rating:4.0,badge:'Best Seller'},
    {id:3,name:'Glow Mask',img:'https://via.placeholder.com/300x300/e6ffe6/333?text=Mask',price:19.99,skin:'Combination',category:'Mask',rating:4.8},
    {id:4,name:'Soothing Toner',img:'https://via.placeholder.com/300x300/e6f7ff/333?text=Toner',price:14.99,skin:'Sensitive',category:'Toner',rating:4.2},
    {id:5,name:'SPF 50 Sunscreen',img:'https://via.placeholder.com/300x300/fffbe6/333?text=Sunscreen',price:22.99,skin:'All',category:'Sunscreen',rating:4.7}
];

function getProducts(){
    return products;
}

// render products list into a container
function renderProductGrid(container, list){
    container.innerHTML='';
    list.forEach((p,index)=>{
        const card=document.createElement('div');
        card.className='product-card';
        card.setAttribute('data-reveal','');
        const badge = p.badge ? `<div class="badge">${p.badge}</div>` : '';
        const stars = `<div class="rating-stars">${'★'.repeat(Math.floor(p.rating||0))}${'☆'.repeat(5-Math.floor(p.rating||0))}</div>`;
        card.innerHTML=`
            ${badge}
            <img src="${p.img}" alt="${p.name}">
            <h3>${p.name}</h3>
            ${stars}
            <p>$${p.price.toFixed(2)}</p>
            <div class="card-buttons">
                <button class="add-cart" data-id="${p.id}">Add to Cart</button>
                <button class="add-wish" data-id="${p.id}">❤</button>
                <a href="product.html?id=${p.id}" class="details-btn">Details</a>
            </div>
            <div class="quick-view-overlay"><button class="quick-view" data-id="${p.id}">Quick View</button></div>
        `;
        setTimeout(()=>container.appendChild(card), index*100);
    });
}

// simple filter by skin and price
function filterProducts(filters){
    return products.filter(p=>{
        if(filters.skin && filters.skin!="All" && p.skin!==filters.skin) return false;
        if(filters.maxPrice && p.price>filters.maxPrice) return false;
        if(filters.search && !p.name.toLowerCase().includes(filters.search.toLowerCase())) return false;
        return true;
    });
}
