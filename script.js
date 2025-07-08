const products = [
  {
    images: ["PH2.jpg"],
    name: "White Office Chair",
    price: "N$850",
    condition: "Excellent Condition"
  },
  {
    images: ["PH2.jpg"],
    name: "32L Samsung Microwave",
    price: "N$950",
    condition: "Pre-Loved"
  },
  {
    images: ["PH3a.jpg", "PH3b.jpg", "PH3c.jpg"],
    name: "Electrical Frying Pan",
    price: "N$450",
    condition: "Pre-Loved"
  }
  // 👉 Add more products using this structure
];

// Render products
document.querySelector(".product-grid").innerHTML = products.map((product, i) => `
  <div class="product-card" id="item${i + 1}">
    <img src="${product.images[0]}" alt="${product.name}" onclick="openLightbox(${i}, 0)" />
    <h4>${product.name}</h4>
    <p class="price">${product.price}</p>
    <span class="condition faded-badge">${product.condition}</span>
    <p class="status">In Stock</p>
    <div class="like-section">
      <i class="fas fa-heart" onclick="toggleLike(this)"></i> <span class="like-count">0</span>
    </div>
    <a href="https://wa.me/264817859603" target="_blank" class="whatsapp-button">
      <i class="fab fa-whatsapp"></i> WhatsApp Seller
    </a>
  </div>
`).join('');

// Lightbox Logic
let currentProductIndex = 0;
let currentImageIndex = 0;

function openLightbox(productIndex, imageIndex) {
  currentProductIndex = productIndex;
  currentImageIndex = imageIndex;
  updateLightbox();
  document.getElementById("lightbox").style.display = "flex";
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}

function updateLightbox() {
  const img = document.getElementById("lightboxImage");
  const dotsContainer = document.getElementById("lightboxDots");
  const images = products[currentProductIndex].images;

  img.src = images[currentImageIndex];
  dotsContainer.innerHTML = images.map((_, i) => `
    <div class="${i === currentImageIndex ? 'active' : ''}" onclick="goToImage(${i})"></div>
  `).join('');
}

function goToImage(i) {
  currentImageIndex = i;
  updateLightbox();
}

// Like button logic
function toggleLike(icon) {
  const count = icon.nextElementSibling;
  let number = parseInt(count.textContent);
  icon.classList.toggle('liked');
  count.textContent = icon.classList.contains('liked') ? number + 1 : number - 1;
}

// Swipe Support for Lightbox
let startX = 0;
const img = document.getElementById("lightboxImage");

img.addEventListener("touchstart", e => {
  startX = e.touches[0].clientX;
});

img.addEventListener("touchend", e => {
  const endX = e.changedTouches[0].clientX;
  const delta = endX - startX;
  const images = products[currentProductIndex].images;

  if (delta > 50 && currentImageIndex > 0) {
    currentImageIndex--;
    updateLightbox();
  } else if (delta < -50 && currentImageIndex < images.length - 1) {
    currentImageIndex++;
    updateLightbox();
  }
});

