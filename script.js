const products = [
    {
    name: "Q.Lab Blood Glucose Monitoring System",
    mrp: 1650,
    discount: 60,
    finalPrice: 660,
    image: "images/QLab Blood Glucose Monitoring System.jpg",
    offerText: "🎉 অফার! অফার! অফার! 🎉<br>🔥 ৬০% ডিসকাউন্ট 🔥<br>📅 অফার শেষ: ১৬ আগস্ট ২০২৫<br>🚚 ক্যাশ অন ডেলিভারি সুবিধা",
    link: "https://wa.me/88017XXXXXXXX?text=I%20want%20to%20buy%20Q.Lab%20Blood%20Glucose%20Meter"
  },
  {
    name: "Sinocare Safe-Accu Blood Glucose Monitoring System",
    mrp: 1850,
    discount: 60,
    finalPrice: 740,
    image: "images/Sinocare Safe-Accu Blood Glucose Meter.png",
    offerText: "🎉 অফার! অফার! অফার! 🎉<br>🔥 ৬০% ডিসকাউন্ট 🔥<br>📅 অফার শেষ: ১৬ আগস্ট ২০২৫<br>🚚 ক্যাশ অন ডেলিভারি সুবিধা",
    link: "https://wa.me/88017XXXXXXXX?text=I%20want%20to%20buy%20Sinocare%20Blood%20Glucose%20Meter"
  }
];

const productList = document.getElementById("product-list");

products.forEach(product => {
  const card = document.createElement("div");
  card.classList.add("product-card");
  card.innerHTML = `
    <img src="${product.image}" alt="${product.name}">
    <h2>${product.name}</h2>
    <p class="offer">${product.offerText}</p>
    <p><del>MRP: ৳${product.mrp}</del></p>
    <p>💥 ডিসকাউন্ট: ${product.discount}%</p>
    <p class="final-price">💳 সেল প্রাইস: মাত্র ৳${product.finalPrice}</p>
    <a href="${product.link}" target="_blank">
      <button>Order Now</button>
    </a>
  `;
  productList.appendChild(card);
});
