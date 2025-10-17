// Product database
const products = [
    {
      name: "Sinocare Safe-Accu Blood Glucose Monitoring System",
      mrp: 1850,
      discount: 1100,
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
      image: "images/Sinocare Safe-Accu Blood Glucose Meter.png",
      offerText: "🎉 অফার! অফার! অফার! 🎉<br>🔥 ৬০% ডিসকাউন্ট 🔥<br>🚚 ক্যাশ অন ডেলিভারি সুবিধা",
      link: "https://wa.me/8801346855700?text=I%20want%20to%20buy%20Sinocare%20Blood%20Glucose%20Meter"
      //link: "https://www.facebook.com/dhakamedishop"
    },
    {
    name: "Q.Lab Blood Glucose Monitoring System",
    mrp: 1650,
    discount: 990,
    finalPrice: 660,
    description: `
      ✅ মাত্র ১০ সেকেন্ডে নির্ভুল ফলাফল<br>
      ✅ সহজ ও সুবিধাজনক: এক ফোঁটা রক্তই যথেষ্ট<br>      
      ✅ ফার্মাসিস্টদের ১ নম্বর পছন্দ<br>
      ✅ তাইওয়ানের সেরা প্রযুক্তি<br>
      ✅ ফ্রি অফার: ৫টি ল্যানসেট কিট ফ্রি<br>
      ✅ আজীবন রিপ্লেসমেন্ট ওয়ারেন্টি
    `,
    image: "images/QLab Blood Glucose Monitoring System.jpg",
    offerText: "🎉 অফার! অফার! অফার! 🎉<br>🔥 ৬০% ডিসকাউন্ট 🔥<br>🚚 ক্যাশ অন ডেলিভারি সুবিধা",
    link: "https://wa.me/8801346855700?text=I%20want%20to%20buy%20Q.Lab%20Blood%20Glucose%20Meter"
    //link: "https://www.facebook.com/dhakamedishop"
  }
  
];


// Strip database
const strips = [  
  {
    name: "Sinocare Safe-Accu Blood Glucose Test Strip 50's Pack",
    mrp: 1700,
    discount: 935,
    finalPrice: 765,
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
    image: "images/Sinocare Safe-Accu Blood Glucose Test Strip 50's Pack.png",
    offerText: "🔥 ৫৫% ডিসকাউন্ট 🔥<br>🚚 ক্যাশ অন ডেলিভারি সুবিধা",
    link: "https://wa.me/8801346855700?text=I%20want%20to%20buy%20Sinocare%20Safe-Accu%20Test%20Strip"
  },
  {
    name: "Q.Lab Blood Glucose Monitoring System Test Strip 25 pcs",
    mrp: 600,
    discount: 150,
    finalPrice: 450,
    description: `
      ✅ ব্র্যান্ড: Q-Lab<br>
      ✅ পণ্যের ধরন: Blood Sugar Test Strips (BD)<br>
      ✅ প্যাক সাইজ: 25 Pieces<br>
      ✅ স্টোরেজ: ঠান্ডা ও শুকনো স্থানে রাখুন<br>
      ✅ স্ট্রিপ হ্যান্ডলিং: টেস্ট করার আগে হাত পরিষ্কার ও শুকনো রাখুন<br>
      ✅ ব্যবহার উপযোগী: হোম ও ক্লিনিকাল ইউজ<br>
      ✅ ক্যাশ অন ডেলিভারি সুবিধা
    `,
    image: "images/Q.Lab Blood Glucose Monitoring System Test Strip 25 pcs.png",
    offerText: "🔥 ২৫% ডিসকাউন্ট 🔥<br>🚚 ক্যাশ অন ডেলিভারি সুবিধা",
    link: "https://wa.me/8801346855700?text=I%20want%20to%20buy%20QLab%20Test%20Strip"
  },
  {
    name: "Sinocare Safe Accu 2 Blood Glucose Test Strip 50's Pack",
    mrp: 850,
    discount: 102,
    finalPrice: 748,
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
    image: "images/Sinocare Safe Accu 2 Blood Glucose Strip 50's Pack.png",
    offerText: "🔥 ১২% ডিসকাউন্ট 🔥<br>🚚 ক্যাশ অন ডেলিভারি সুবিধা",
    link: "https://wa.me/8801346855700?text=I%20want%20to%20buy%20Sinocare%20Safe%20Accu%202%20Test%20Strip"
  }
  ,
  {
    name: "Sinocare Safe AQ Blood Glucose Test Strip 50's Pack",
    mrp: 1300,
    discount: 455,
    finalPrice: 845,
     description: `
      ✅ ব্র্যান্ড: Sinocare<br>
      ✅ পণ্যের ধরন: Blood Sugar Test Strips<br>
      ✅ প্যাক সাইজ: 50 Pieces<br>
      ✅ স্টোরেজ: ঠান্ডা ও শুকনো স্থানে রাখুন<br>
      ✅ স্ট্রিপ হ্যান্ডলিং: টেস্ট করার আগে হাত পরিষ্কার ও শুকনো রাখুন<br>
      ✅ ব্যবহার উপযোগী: হোম ও ক্লিনিকাল ইউজ<br>
      ✅ ক্যাশ অন ডেলিভারি সুবিধা
    `,
    image: "images/Sinocare Safe AQ Blood Glucose Test Strip 50's Pack.png",
    offerText: "🔥 35% ডিসকাউন্ট 🔥<br>🚚 ক্যাশ অন ডেলিভারি সুবিধা",
    link: "https://wa.me/8801346855700?text=I%20want%20to%20buy%20Sinocare%20Safe%20AQ%20Test%20Strip"
  }
  ,
  {
    name: "G1 Advance Blood Glucose Strip (25*2) 50 pcs Pack",
    mrp: 985,
    discount: 80,
    finalPrice: 905,
    description: `
      ✅ ব্র্যান্ড: G1 Advance<br>
      ✅ পণ্যের ধরন: Blood Sugar Test Strips<br>
      ✅ প্যাক সাইজ: (25*2) 50 Pieces<br>
      ✅ স্টোরেজ: ঠান্ডা ও শুকনো স্থানে রাখুন<br>
      ✅ স্ট্রিপ হ্যান্ডলিং: টেস্ট করার আগে হাত পরিষ্কার ও শুকনো রাখুন<br>
      ✅ ব্যবহার উপযোগী: হোম ও ক্লিনিকাল ইউজ<br>
      ✅ ক্যাশ অন ডেলিভারি সুবিধা
    `,
    image: "images/G1 Advance Blood Glucose Strip (25-2) 50 pcs Pack.png",
    offerText: "🔥 ৮% ডিসকাউন্ট 🔥<br>🚚 ক্যাশ অন ডেলিভারি সুবিধা",
    link: "https://wa.me/8801346855700?text=I%20want%20to%20buy%20G1%20Advance%20Blood%20Glucose%20Strip%20(25*2)%2050%20pcs%20Test%20Strip"
  }
  ,
  {
    name: "Quick Check Blood Glucose Test Strip 25 pcs Pack",
    mrp: 400,
    discount: 100,
    finalPrice: 300,
    description: `
      ✅ ব্র্যান্ড: Quick Check<br>
      ✅ পণ্যের ধরন: Blood Sugar Test Strips<br>
      ✅ প্যাক সাইজ: 25 Pieces<br>
      ✅ স্টোরেজ: ঠান্ডা ও শুকনো স্থানে রাখুন<br>
      ✅ স্ট্রিপ হ্যান্ডলিং: টেস্ট করার আগে হাত পরিষ্কার ও শুকনো রাখুন<br>
      ✅ ব্যবহার উপযোগী: হোম ও ক্লিনিকাল ইউজ<br>
      ✅ ক্যাশ অন ডেলিভারি সুবিধা
    `,
    image: "images/Quick Check Blood Glucose Test Strip 25 pcs Pack.png",
    offerText: "🔥 ২৫% ডিসকাউন্ট 🔥<br>🚚 ক্যাশ অন ডেলিভারি সুবিধা",
    link: "https://wa.me/8801346855700?text=I%20want%20to%20buy%20Quick%20Check%20Blood%20Glucose%20Test%20Strip%2025%20pcs%20Pack"
  },
  {
    name: "On Call Plus Blood Glucose Test Strip 50 pcs Pack",
    mrp: 1000,
    discount: 300,
    finalPrice: 700,
    description: `
      ✅ ব্র্যান্ড: On Call Plus<br>
      ✅ পণ্যের ধরন: Blood Sugar Test Strips<br>
      ✅ প্যাক সাইজ: 50 Pieces<br>
      ✅ স্টোরেজ: ঠান্ডা ও শুকনো স্থানে রাখুন<br>
      ✅ স্ট্রিপ হ্যান্ডলিং: টেস্ট করার আগে হাত পরিষ্কার ও শুকনো রাখুন<br>
      ✅ ব্যবহার উপযোগী: হোম ও ক্লিনিকাল ইউজ<br>
      ✅ ক্যাশ অন ডেলিভারি সুবিধা
    `,
    image: "images/On Call Plus Blood Glucose Test Strip 50 pcs Pack.png",
    offerText: "🔥 ৩০% ডিসকাউন্ট 🔥<br>🚚 ক্যাশ অন ডেলিভারি সুবিধা",
    link: "https://wa.me/8801346855700?text=I%20want%20to%20buy%20On%20Call%20Plus%20Blood%20Glucose%20Test%20Strip%2050%20pcs%20Pack"
  }
  
];