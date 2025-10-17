const productList = document.getElementById("product-list");

products.forEach((product, index) => {
  const card = document.createElement("div");
  card.classList.add("product-card");
  card.innerHTML = `
    <img src="${product.image}" alt="${product.name}">
    <h2>${product.name}</h2>
    <p class="offer">${product.offerText}</p>
    <p><del>MRP: ৳${product.mrp}</del></p>
    <p>💥 ডিসকাউন্ট: ৳${product.discount}</p>
    <p class="final-price">💳 সেল প্রাইস: মাত্র ৳${product.finalPrice}</p>
    <div class="button-group">
      <a href="${product.link}" target="_blank">
        <button>Order Now</button>
      </a>
      <a href="details.html?product=${index}">
        <button>View Details</button>
      </a>
    </div>
  `;
  productList.appendChild(card);
});

const stripList = document.getElementById("strip-list");

strips.forEach((strip, index) => {
  const card = document.createElement("div");
  card.classList.add("product-card");
  card.innerHTML = `
    <img src="${strip.image}" alt="${strip.name}">
    <h2>${strip.name}</h2>
    <p class="offer">${strip.offerText}</p>
    <p><del>MRP: ৳${strip.mrp}</del></p>
    <p>💥 ডিসকাউন্ট: ৳${strip.discount}</p>
    <p class="final-price">💳 সেল প্রাইস: মাত্র ৳${strip.finalPrice}</p>
    <div class="button-group">
      <a href="${strip.link}" target="_blank">
        <button>Order Now</button>
      </a>
      <a href="details.html?strip=${index}">
        <button>View Details</button>
      </a>
    </div>
  `;
  stripList.appendChild(card);
});