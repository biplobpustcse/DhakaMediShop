// Product details database
const productDetails = [
  
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
  },
  {
    name: "Q.Lab Blood Glucose Monitoring System",
    image: "images/QLab Blood Glucose Monitoring System.jpg",
    mrp: 1650,
    discount: 60,
    finalPrice: 660,
    description: `
      ✅ মাত্র ১০ সেকেন্ডে নির্ভুল ফলাফল<br>
      ✅ সহজ ও সুবিধাজনক: এক ফোঁটা রক্তই যথেষ্ট<br>      
      ✅ ফার্মাসিস্টদের ১ নম্বর পছন্দ<br>
      ✅ তাইওয়ানের সেরা প্রযুক্তি<br>
      ✅ ফ্রি অফার: ৫টি ল্যানসেট কিট ফ্রি<br>
      ✅ আজীবন রিপ্লেসমেন্ট ওয়ারেন্টি
    `,
    link: "https://wa.me/8801346855700?text=I%20want%20to%20buy%20Q.Lab%20Blood%20Glucose%20Meter"
  }
];

// Strip details database
const stripDetails = [
  {
    name: "Sinocare Safe-Accu Blood Glucose Test Strip 50's Pack",
    image: "images/Sinocare Safe-Accu Blood Glucose Test Strip 50's Pack.png",
    mrp: 1700,
    discount: 1020,
    finalPrice: 680,
    description: `
      ✅ পণ্য: Blood Glucose Test Strips<br>
      ✅ ব্র্যান্ড: Sinocare<br>
      ✅ প্যাক সাইজ: 2 Vial × 25 = মোট 50 Test Strip<br>
      ✅ ম্যাটেরিয়াল: Polymer Fibre<br>
      ✅ কালার: Multicolor<br>
      ✅ কোয়ালিটি: Good Quality, Lightweight<br>
      ✅ Country of Origin: China<br>
      ✅ ক্যাশ অন ডেলিভারি সুবিধা
    `,
    link: "https://wa.me/8801346855700?text=I%20want%20to%20buy%20Sinocare%20Test%20Strip"
  },
  {
    name: "Q.Lab Blood Glucose Monitoring System Test Strip 25 pcs",
    image: "images/Q.Lab Blood Glucose Monitoring System Test Strip 25 pcs.png",
    mrp: 600,
    discount: 8,
    finalPrice: 550,
    description: `
      ✅ ব্র্যান্ড: Q-Lab<br>
      ✅ পণ্যের ধরন: Blood Sugar Test Strips (BD)<br>
      ✅ প্যাক সাইজ: 25 Pieces<br>
      ✅ স্টোরেজ: ঠান্ডা ও শুকনো স্থানে রাখুন<br>
      ✅ স্ট্রিপ হ্যান্ডলিং: টেস্ট করার আগে হাত পরিষ্কার ও শুকনো রাখুন<br>
      ✅ ব্যবহার উপযোগী: হোম ও ক্লিনিকাল ইউজ<br>
      ✅ ক্যাশ অন ডেলিভারি সুবিধা
    `,
    link: "https://wa.me/8801346855700?text=I%20want%20to%20buy%20QLab%20Test%20Strip"
  },
  {
    name: "Sinocare Safe Accu 2 Blood Glucose Strip 50's Pack",
    image: "images/Sinocare Safe Accu 2 Blood Glucose Strip 50's Pack.png",
    mrp: 850,
    discount: 23,
    finalPrice: 650,
    description: `
      ✅ ব্র্যান্ড: Sinocare<br>
      ✅ পণ্যের ধরন: Blood Sugar Test Strips<br>
      ✅ প্যাক সাইজ: 50 Pieces<br>
      ✅ স্টোরেজ: ঠান্ডা ও শুকনো স্থানে রাখুন<br>
      ✅ স্ট্রিপ হ্যান্ডলিং: টেস্ট করার আগে হাত পরিষ্কার ও শুকনো রাখুন<br>
      ✅ কম্প্যাটিবিলিটি: Safe-Accu Glucose Meters এর সাথে ব্যবহারযোগ্য<br>
      ✅ ব্যবহার উপযোগী: হোম ও ক্লিনিকাল ইউজ<br>
      ✅ ক্যাশ অন ডেলিভারি সুবিধা
    `,
    link: "https://wa.me/8801346855700?text=I%20want%20to%20buy%20QLab%20Test%20Strip"
  }
];

// Get product or strip ID from URL
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get("product");
const stripId = urlParams.get("strip");

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
    <div class="button-group">
      <a href="${product.link}" target="_blank">
        <button>Order Now</button>
      </a>
      <a href="https://m.me/dhakamedishop" target="_blank">
        <button>Message on Facebook</button>
      </a>
    </div>
  `;
} else if (stripId !== null && stripDetails[stripId]) {
  const strip = stripDetails[stripId];
  productTitle.textContent = strip.name;

  productDetail.innerHTML = `
    <img src="${strip.image}" alt="${strip.name}">
    <h2>${strip.name}</h2>
    <h3>💰 MRP: ৳${strip.mrp}</h3>
    <p>💥 ডিসকাউন্ট: ${strip.discount}% (${strip.mrp - strip.finalPrice} TK কম)</p>
    <p class="final-price">💳 সেল প্রাইস: মাত্র ৳${strip.finalPrice}</p>
    <h3>✅ পণ্যের বিবরণ:</h3>
    <p>${strip.description}</p>
    <div class="button-group">
      <a href="${strip.link}" target="_blank">
        <button>Order Now</button>
      </a>
      <a href="https://m.me/dhakamedishop" target="_blank">
        <button>Message on Facebook</button>
      </a>
    </div>
  `;
} else {
  productDetail.innerHTML = "<p>❌ পণ্য পাওয়া যায়নি!</p>";
}
