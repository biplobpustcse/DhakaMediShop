// Get product or strip ID from URL
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get("product");
const stripId = urlParams.get("strip");

// Get product container
const productDetail = document.getElementById("product-detail");
const productTitle = document.getElementById("product-title");

if (productId !== null && products[productId]) {
  const product = products[productId];
  productTitle.textContent = product.name;

  productDetail.innerHTML = `
    <img src="${product.image}" alt="${product.name}">
    <h2>${product.name}</h2>
    <h3>💰 MRP: ৳${product.mrp}</h3>
    <p>💥 ডিসকাউন্ট: ৳${product.discount}</p>
    <p class="final-price">💳 সেল প্রাইস: মাত্র ৳${product.finalPrice}</p>
    <h3>✅ পণ্যের বিবরণ:</h3>
    <p>${product.description}</p>
    <div class="button-group">
      <a href="${product.link}" target="_blank">
        <button>Order Now</button>
      </a>
    </div>
  `;
} else if (stripId !== null && strips[stripId]) {
  const strip = strips[stripId];
  productTitle.textContent = strip.name;

  productDetail.innerHTML = `
    <img src="${strip.image}" alt="${strip.name}">
    <h2>${strip.name}</h2>
    <h3>💰 MRP: ৳${strip.mrp}</h3>
    <p>💥 ডিসকাউন্ট: ৳${strip.discount}</p>
    <p class="final-price">💳 সেল প্রাইস: মাত্র ৳${strip.finalPrice}</p>
    <h3>✅ পণ্যের বিবরণ:</h3>
    <p>${strip.description}</p>
    <div class="button-group">
      <a href="${strip.link}" target="_blank">
        <button>Order Now</button>
      </a>
    </div>
  `;
} else {
  productDetail.innerHTML = "<p>❌ পণ্য পাওয়া যায়নি!</p>";
}