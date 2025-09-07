const products = [
    {
      name: "Sinocare Safe-Accu Blood Glucose Monitoring System",
      mrp: 1850,
      discount: 60,
      finalPrice: 740,
      image: "images/Sinocare Safe-Accu Blood Glucose Meter.png",
      offerText: "🎉 অফার! অফার! অফার! 🎉<br>🔥 ৬০% ডিসকাউন্ট 🔥<br>📅 অফার শেষ: 30 সেপ্টেম্বর ২০২৫<br>🚚 ক্যাশ অন ডেলিভারি সুবিধা",
      link: "https://wa.me/8801346855700?text=I%20want%20to%20buy%20Sinocare%20Blood%20Glucose%20Meter"
      //link: "https://www.facebook.com/dhakamedishop"
    },
    {
    name: "Q.Lab Blood Glucose Monitoring System",
    mrp: 1650,
    discount: 60,
    finalPrice: 660,
    image: "images/QLab Blood Glucose Monitoring System.jpg",
    offerText: "🎉 অফার! অফার! অফার! 🎉<br>🔥 ৬০% ডিসকাউন্ট 🔥<br>📅 অফার শেষ: 30 সেপ্টেম্বর ২০২৫<br>🚚 ক্যাশ অন ডেলিভারি সুবিধা",
    link: "https://wa.me/8801346855700?text=I%20want%20to%20buy%20Q.Lab%20Blood%20Glucose%20Meter"
    //link: "https://www.facebook.com/dhakamedishop"
  }
  
];

const strips = [  
  {
    name: "Sinocare Safe-Accu Blood Glucose Test Strip 50's Pack",
    mrp: 1700,
    discount: 60,
    finalPrice: 680,
    image: "images/Sinocare Safe-Accu Blood Glucose Test Strip 50's Pack.png",
    offerText: "🔥 ৬০% ডিসকাউন্ট 🔥<br>📅 অফার শেষ: 30 সেপ্টেম্বর ২০২৫<br>🚚 ক্যাশ অন ডেলিভারি সুবিধা",
    link: "https://wa.me/8801346855700?text=I%20want%20to%20buy%20Sinocare%20Test%20Strip"
  },
  {
    name: "Sinocare Safe Accu 2 Blood Glucose Strip 50's Pack",
    mrp: 850,
    discount: 23,
    finalPrice: 650,
    image: "images/Sinocare Safe Accu 2 Blood Glucose Strip 50's Pack.png",
    offerText: "🔥 ৩০% ডিসকাউন্ট 🔥<br>📅 অফার শেষ: 30 সেপ্টেম্বর ২০২৫<br>🚚 ক্যাশ অন ডেলিভারি সুবিধা",
    link: "https://wa.me/8801346855700?text=I%20want%20to%20buy%20QLab%20Test%20Strip"
  }
  
];

const productList = document.getElementById("product-list");

products.forEach((product, index) => {
  const card = document.createElement("div");
  card.classList.add("product-card");
  card.innerHTML = `
    <img src="${product.image}" alt="${product.name}">
    <h2>${product.name}</h2>
    <p class="offer">${product.offerText}</p>
    <p><del>MRP: ৳${product.mrp}</del></p>
    <p>💥 ডিসকাউন্ট: ${product.discount}%</p>
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
    <p>💥 ডিসকাউন্ট: ${strip.discount}%</p>
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
