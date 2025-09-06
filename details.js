// Product details database
const productDetails = [
  {
    name: "Q.Lab Blood Glucose Monitoring System",
    image: "images/QLab Blood Glucose Monitoring System.jpg",
    mrp: 1650,
    discount: 60,
    finalPrice: 660,
    description: `
      ✅ মাত্র ১০ সেকেন্ডে নির্ভুল ফলাফল<br>
      ✅ সহজ ও সুবিধাজনক: এক ফোঁটা রক্তই যথেষ্ট<br>
      ✅ আজীবন রিপ্লেসমেন্ট ওয়ারেন্টি<br>
      ✅ ফার্মাসিস্টদের ১ নম্বর পছন্দ<br>
      ✅ তাইওয়ানের সেরা প্রযুক্তি<br>
      ✅ ফ্রি অফার: ৫টি ল্যানসেট কিট ফ্রি
    `,
    link: "https://wa.me/8801346855700?text=I%20want%20to%20buy%20Q.Lab%20Blood%20Glucose%20Meter"
  },
  {
    name: "Sinocare Safe-Accu Blood Glucose Monitoring System",
    image: "images/Sinocare Safe-Accu Blood Glucose Meter.png",
    mrp: 1850,
    discount: 60,
    finalPrice: 740,
    description: `
      🎁 বাক্সে ১০টি স্ট্রিপ ফ্রি<br>
      💉 রক্তের পরিমাণ: 0.6μL<br>
      🧪 নমুনা: ক্যাপিলারি বা ভেনাস সম্পূর্ণ রক্ত<br>
      📏 ক্যালিব্রেশন: প্লাজমা সমতুল্য<br>
      ⏱ মাপার সময়: 10±1 সেকেন্ড<br>
      📦 সংরক্ষণ শর্ত: -20℃ ~ 55℃<br>
      📐 আকার: 96×55×18 মিমি | ⚖ ওজন: 40 গ্রাম<br>
      🔋 পাওয়ার: 3V DC (CR2032) বাটন সেল<br>
      🔄 ব্যাটারি স্থায়িত্ব: ১০০০ বার টেস্ট<br>
      💾 মেমোরি: ২০০টি টেস্ট ফলাফল সংরক্ষণ<br>
      🌡 কার্যক্রম শর্ত: 10℃ ~ 35℃; ≤80% RH<br>
      📊 ইউনিট: mg/dL বা mmol/L<br>
      📈 পরিমাপের সীমা: 20~600 mg/dL<br>
      ✅ আজীবন রিপ্লেসমেন্ট ওয়ারেন্টি
    `,
    link: "https://wa.me/8801346855700?text=I%20want%20to%20buy%20Sinocare%20Blood%20Glucose%20Meter"
  }
];

// Get product ID from URL
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get("product");

// Get product container
const productDetail = document.getElementById("product-detail");
const productTitle = document.getElementById("product-title");

if (productId !== null && productDetails[productId]) {
  const product = productDetails[productId];
  productTitle.textContent = product.name;

  productDetail.innerHTML = `
    <img src="${product.image}" alt="${product.name}">
    <h2>${product.name}</h2>
    <h3>💰 MRP: ৳${product.mrp}</h3>
    <p>💥 ডিসকাউন্ট: ${product.discount}% (${product.mrp - product.finalPrice} TK কম)</p>
    <p class="final-price">💳 সেল প্রাইস: মাত্র ৳${product.finalPrice}</p>
    <h3>✅ পণ্যের বিবরণ:</h3>
    <p>${product.description}</p>
    <a href="${product.link}" target="_blank">
      <button>📲 Order Now</button>
    </a>
  `;
} else {
  productDetail.innerHTML = "<p>❌ পণ্য পাওয়া যায়নি!</p>";
}
