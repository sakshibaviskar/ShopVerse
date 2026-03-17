const projects = [
  {
    name: "Fashion Store",
    description: "Cute fashion shop UI with product cards and cart layout.",
    image: "./assets/project1.png",
    live: "./projects/01-e-commerce-website/index.html",
    code: "#"
  },
  {
    name: "Fruit Store",
    description: "Fresh fruit shop UI with colorful product cards and shopping cart layout.",
    image: "./assets/project2.png",
    live: "./projects/02-fruit-store/index.html",
    code: "#"
  },

  {
    name: "Beauty & Skincare",
    description: "Elegant beauty and skincare e-commerce UI.",
    image: "./assets/03-beauty.png",
    live: "./projects/03-beauty-skincare/index.html",
    code: "#"
  },
  {
    name: "Birthday",
    description: "Birthday theme shop with celebration items.",
    image: "./assets/04-birthday.png",
    live: "./projects/04-birthday/index.html",
    code: "#"
  },
  {
    name: "GlowCare",
    description: "Modern cosmetic shopping website UI.",
    image: "./assets/05-glowcare.png",
    live: "./projects/05-glowcare/index.html",
    code: "#"
  },
  {
    name: "E-Commerce Website",
    description: "General e-commerce platform design.",
    image: "./assets/06-ecommerce.png",
    live: "./projects/06-ecommerce-website/index.html",
    code: "#"
  },
  {
    name: "Jewelry Store",
    description: "Premium jewelry shopping experience.",
    image: "./assets/07-jewelry.png",
    live: "./projects/07-jewelry-store/index.html",
    code: "#"
  },
  {
    name: "Fashion & Clothing Store",
    description: "Trendy clothing and fashion UI design.",
    image: "./assets/08-fashion.png",
    live: "./projects/08-fashion-clothing/index.html",
    code: "#"
  },
  {
    name: "Footwear",
    description: "Stylish footwear e-commerce layout.",
    image: "./assets/09-footwear.png",
    live: "./projects/09-footwear/index.html",
    code: "#"
  },
  
  {
    name: "Furniture",
    description: "Modern furniture showcase website.",
    image: "./assets/11-furniture.png",
    live: "./projects/11-furniture/index.html",
    code: "#"
  },
  {
    name: "Gaming Store",
    description: "Gaming products and accessories shop UI.",
    image: "./assets/12-gaming.png",
    live: "./projects/12-gaming-store/index.html",
    code: "#"
  },
  {
    name: "GlowNest",
    description: "Beauty lifestyle brand website UI.",
    image: "./assets/13-glownest.png",
    live: "./projects/13-glownest/index.html",
    code: "#"
  },
  {
    name: "GreenBasket",
    description: "Organic grocery and vegetable store UI.",
    image: "./assets/14-greenbasket.png",
    live: "./projects/14-greenbasket/index.html",
    code: "#"
  },
  {
    name: "Headphones Store",
    description: "Headphones and audio gear e-commerce UI.",
    image: "./assets/15-headphones.png",
    live: "./projects/15-headphones/index.html",
    code: "#"
  },
  {
    name: "Homemade Bakery",
    description: "Cute bakery shop with dessert items.",
    image: "./assets/16-bakery.png",
    live: "./projects/16-bakery/index.html",
    code: "#"
  },
  {
    name: "Indoor Plants",
    description: "Indoor plant shopping experience.",
    image: "./assets/17-plants.png",
    live: "./projects/17-indoor-plants/index.html",
    code: "#"
  },

  {
    name: "Pet Supplies",
    description: "All-in-one pet accessories store.",
    image: "./assets/19-pet.png",
    live: "./projects/19-pet-supplies/index.html",
    code: "#"
  },
  {
    name: "PetPaws",
    description: "Cute pet care and product shop UI.",
    image: "./assets/20-petpaws.png",
    live: "./projects/20-petpaws/index.html",
    code: "#"
  },
  {
    name: "Pizza Delivery",
    description: "Online pizza ordering website.",
    image: "./assets/21-pizza.png",
    live: "./projects/21-pizza-delivery/index.html",
    code: "#"
  },
  {
    name: "Plant Nursery",
    description: "Nature-inspired plant store UI.",
    image: "./assets/22-nursery.png",
    live: "./projects/22-plant-nursery/index.html",
    code: "#"
  },
  {
    name: "SoundSphere",
    description: "Audio products and music gear store.",
    image: "./assets/23-sound.png",
    live: "./projects/23-soundsphere/index.html",
    code: "#"
  },
  {
    name: "Sports Shoes",
    description: "Athletic shoes and sportswear UI.",
    image: "./assets/24-shoes.png",
    live: "./projects/24-sports-shoes/index.html",
    code: "#"
  },
  {
    name: "Sunglasses Store",
    description: "Trendy sunglasses shopping UI.",
    image: "./assets/25-sunglasses.png",
    live: "./projects/25-sunglasses/index.html",
    code: "#"
  },
  {
    name: "SweetCrave",
    description: "Dessert and sweets e-commerce UI.",
    image: "./assets/26-sweet.png",
    live: "./projects/26-sweetcrave/index.html",
    code: "#"
  }
  
];

const grid = document.getElementById("projectsGrid");
const count = document.getElementById("projectCount");

projects.forEach(project => {
  const card = document.createElement("div");
  card.className = "project-card";

  card.innerHTML = `
    <img src="${project.image}" class="project-image">
    <div class="project-content">
      <h3>${project.name}</h3>
      <p>${project.description}</p>

      <div class="buttons">
        <a href="${project.live}" class="btn primary">Preview</a>
        <a href="${project.code}" class="btn secondary">Code</a>
      </div>
    </div>
  `;

  grid.appendChild(card);
});

count.textContent = projects.length;
