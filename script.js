// 1. Product Data
const products = [
    { id: 1, name: "Wireless Headphones", price: 99.99, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500", rating: 4.5 },
    { id: 2, name: "Smart Watch", price: 149.50, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500", rating: 4.8 },
    { id: 3, name: "Premium Backpack", price: 75.00, image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500", rating: 4.2 },
    { id: 4, name: "Mechanical Keyboard", price: 120.00, image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=500", rating: 4.7 }
];

// 2. Render Products
const productList = document.getElementById('product-list');

function displayProducts() {
    products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <span class="price">$${product.price}</span>
            <div class="rating">⭐ ${product.rating}</div>
            <button class="add-to-cart" onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productList.appendChild(card);
    });
}

// 3. Cart Logic
let cartCount = 0;
const cartCountElement = document.getElementById('cart-count');

function addToCart(id) {
    cartCount++;
    cartCountElement.innerText = cartCount;
    
    // Simple visual feedback
    alert("Item added to cart!");
}

// 4. Mobile Menu Toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    // Basic CSS toggle for mobile visibility
    if(navLinks.style.display === "flex") {
        navLinks.style.display = "none";
    } else {
        navLinks.style.display = "flex";
        navLinks.style.flexDirection = "column";
        navLinks.style.position = "absolute";
        navLinks.style.top = "70px";
        navLinks.style.left = "0";
        navLinks.style.width = "100%";
        navLinks.style.background = "white";
        navLinks.style.padding = "20px";
    }
});

// Initialize
displayProducts();
