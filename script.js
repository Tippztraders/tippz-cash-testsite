const products = [
  {
    { img: "PH1.jpg", name: "White Office Chair", price: "N$850", condition: "Excellent Condition" },
    { img: "PH2.jpg", name: "32L Samsung Microwave", price: "N$950", condition: "Pre-Loved" },
    { img: "PH3.jpg", name: "Electrical Frying Pan", price: "N$450", condition: "Pre-Loved" },
    { img: "PH4.jpg", name: "Traditional Pot #3", price: "N$350", condition: "Showroom Quality" },
    { img: "PH5.jpg", name: "Traditional Pot #2", price: "N$250", condition: "Showroom Quality" },
    { img: "PH6.jpg", name: "32L Samsung Microwave", price: "N$1,250", condition: "Trendsetter" },
    { img: "PH7.jpg", name: "Office Chair #3", price: "N$750", condition: "Well-Maintained" },
    { img: "PH8.jpg", name: "Office Chair #1", price: "N$650", condition: "Well-Maintained" },
    { img: "PH9.jpg", name: "Kitchen Sink", price: "N$1,250", condition: "Well-Maintained" },
    { img: "PH10.jpg", name: "Event Tables", price: "N$2,700 both", condition: "Well-Maintained" },
    { img: ["PH11a.jpg", "PH11b.jpg"], name: "Assorted Fabric ", price: "N$20 per meter", condition: "Well-Maintained" },
    { img: "PH12.jpg", name: "Mirror#1", price: "N$1,250", condition: "Trendsetter" },
  }
];

window.addEventListener('load', () => {
  const container = document.getElementById('product-container');
  if (!container) {
    console.error("❌ product-container not found!");
    return;
  }

  products.forEach((product, index) => {
    const productCard = document.createElement('div');
    productCard.className = 'product-card';

    const swiperId = `swiper-${index}`;
    const imageList = Array.isArray(product.img) ? product.img : [product.img];

    const imagesHTML = imageList.map((src, i) => `
      <div class="swiper-slide">
        <div class="swiper-zoom-container">
          <img src="${src}" alt="${product.name}" />
        </div>
      </div>
    `).join('');

    productCard.innerHTML = `
      <div class="swiper product-swiper" id="${swiperId}">
        <div class="swiper-wrapper">
          ${imagesHTML}
        </div>
      </div>
      <h2>${product.name}</h2>
      <p class="price">${product.price}</p>
      <p class="condition">${product.condition}</p>
    `;

    container.appendChild(productCard);

    // Activate Swiper
    new Swiper(`#${swiperId}`, {
      zoom: true,
      loop: true,
      slidesPerView: 1,
      spaceBetween: 10
    });
  });
});
