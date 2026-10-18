// Initial Mock Data for Mess, Snacks, Biryani & Cake Platform

export const initialMesses = [
  // 1. MESS (Pure Veg & Non-Veg Messes with Monthly Pass & Thali)
  {
    id: 'mess-1',
    name: 'माऊली मेस आणि खानावळ (Mauli Mess)',
    ownerName: 'दत्तात्रय पाटील (Dattatray Patil)',
    ownerPhone: '+91 98765 43210',
    type: 'Veg & Non-Veg Mess',
    categoryType: 'mess', // 'mess', 'snacks', 'biryani', 'cake'
    pureVeg: false,
    categories: ['veg', 'nonveg'],
    hasBiryani: false,
    hasSnacks: false,
    rating: 4.8,
    reviewsCount: 142,
    location: 'कॉलेज रोड, बस स्टँड जवळ',
    distance: '0.4 km',
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=600&auto=format&fit=crop&q=80',
    monthlyPrice: 2800,
    dailyMealPrice: 80,
    deliveryExtraCharge: 5,
    todayLunch: {
      sabji1: 'मटकी उसळ (Matki Usal)',
      sabji2: 'पनीर बटर मसाला (Paneer Butter)',
      roti: '३ चपाती / भाकरी',
      rice: 'जिरा राईस + वरण',
      sweet: 'गुलाबजामुन (Gulab Jamun)',
      available: true,
      time: '12:00 PM - 03:00 PM'
    },
    todayDinner: {
      sabji1: 'शेव भाजी (झणझणीत)',
      sabji2: 'सुकी बटाटा भाजी',
      roti: '४ गरम चपात्या',
      rice: 'मसाले भात + ताक',
      available: true,
      time: '07:30 PM - 10:30 PM'
    },
    features: ['Unlimited Rice & Dal', 'रविवार चिकन थाळी', 'Free Clean RO Water', 'मासिक पास उपलब्ध'],
    subscribersCount: 48
  },
  {
    id: 'mess-2',
    name: 'अन्नपूर्णा शुद्ध शाकाहारी मेस (Annapurna Pure Veg)',
    ownerName: 'सौ. अनिता कुलकर्णी (Anita Kulkarni)',
    ownerPhone: '+91 98220 11223',
    type: 'Pure Veg Mess',
    categoryType: 'mess',
    pureVeg: true,
    categories: ['veg'],
    hasBiryani: false,
    hasSnacks: false,
    rating: 4.9,
    reviewsCount: 210,
    location: 'हॉस्टेल गल्ली क्र. ३',
    distance: '0.8 km',
    image: 'https://images.unsplash.com/photo-1613292443284-c774439c1481?w=600&auto=format&fit=crop&q=80',
    monthlyPrice: 2600,
    dailyMealPrice: 75,
    deliveryExtraCharge: 5,
    todayLunch: {
      sabji1: 'भेंडी फ्राय (Bhendi Fry)',
      sabji2: 'दाल तडका (Dal Tadka)',
      roti: '४ फुलके (Ghee Phulkas)',
      rice: 'स्टीम राईस',
      sweet: 'खीर (Kheer)',
      available: true,
      time: '12:30 PM - 03:00 PM'
    },
    todayDinner: {
      sabji1: 'मेथी भाजी (Methi Bhaji)',
      sabji2: 'कढी खिचडी (Kadhi Khichdi)',
      roti: '३ चपाती',
      rice: 'बासमती राईस',
      available: true,
      time: '08:00 PM - 10:30 PM'
    },
    features: ['१००% शुद्ध शाकाहारी', 'घरगुती चव (Home Style)', 'कमी तेल-मसाले', 'Clean Kitchen'],
    subscribersCount: 65
  },
  {
    id: 'mess-3',
    name: 'सह्याद्री खानपान मेस (Sahyadri Food Hub)',
    ownerName: 'गणेश शिंदे (Ganesh Shinde)',
    ownerPhone: '+91 97654 98765',
    type: 'Veg & Non-Veg Mess',
    categoryType: 'mess',
    pureVeg: false,
    categories: ['veg', 'nonveg'],
    hasBiryani: false,
    hasSnacks: false,
    rating: 4.6,
    reviewsCount: 88,
    location: 'शिवाजी पुतळा चौक',
    distance: '1.2 km',
    image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=600&auto=format&fit=crop&q=80',
    monthlyPrice: 3000,
    dailyMealPrice: 85,
    deliveryExtraCharge: 5,
    todayLunch: {
      sabji1: 'कोल्हापुरी तांबडा-पांढरा रस्सा / पनीर कोल्हापुरी',
      sabji2: 'दाल फ्राय (Dal Fry)',
      roti: 'ज्वारीची भाकरी (२) / चपाती (3)',
      rice: 'इंद्रायणी भात (Indrayani Rice)',
      available: true,
      time: '12:00 PM - 03:30 PM'
    },
    todayDinner: {
      sabji1: 'अंडे करी (Egg Curry) / सोयाबीन मसाला',
      sabji2: 'तडका दाल (Tadka Dal)',
      roti: '४ गरम चपात्या',
      rice: 'जिरा राईस',
      available: true,
      time: '07:30 PM - 11:00 PM'
    },
    features: ['झणझणीत कोल्हापुरी जेवण', 'Late Night Dinner', 'Fast Delivery', 'Student Discount'],
    subscribersCount: 32
  },

  // 2. SNACKS SHOPS (Campus Vadapav, Anna Idli, etc. - No Monthly Pass, Direct Menu Items with Prices)
  {
    id: 'snack-1',
    name: 'कॅम्पस वडापाव & मिसळ सेंटर (Campus Vadapav)',
    ownerName: 'सचिन गायकवाड (Sachin Gaikwad)',
    ownerPhone: '+91 98888 11111',
    type: 'Snacks Corner',
    categoryType: 'snacks',
    pureVeg: true,
    categories: ['veg', 'snacks'],
    hasBiryani: false,
    hasSnacks: true,
    hasCake: false,
    rating: 4.9,
    reviewsCount: 380,
    location: 'कॉलेज गेट क्र. २ (Campus Gate)',
    distance: '0.2 km',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&auto=format&fit=crop&q=80',
    deliveryExtraCharge: 5,
    features: ['गरमागरम क्रिस्पी वडापाव', 'झणझणीत कट मिसळ', 'चहा-नाष्टा कट्टा', 'Fast Pickup & Delivery'],
    menuItems: [
      { id: 'v1', name: 'स्पेशल कॅम्पस वडापाव (१ नग)', price: 18, image: '🍔' },
      { id: 'v2', name: 'चीज वडापाव (Cheese Vadapav)', price: 30, image: '🧀' },
      { id: 'v3', name: 'उकडीचे गरमागरम पोहे', price: 25, image: '🥣' },
      { id: 'v4', name: 'स्पेशल कट मिसळ पाव (२ पाव)', price: 50, image: '🍲' },
      { id: 'v5', name: 'कांदा भजी प्लेट (Kanda Bhaji)', price: 35, image: '🧅' },
      { id: 'v6', name: 'अमृततुल्य स्पेशल चहा (Tea)', price: 12, image: '☕' }
    ]
  },
  {
    id: 'snack-2',
    name: 'अण्णा साऊथ इंडियन इडली & डोसा (Anna Idli Center)',
    ownerName: 'अण्णा मुरुगन (Anna Murugan)',
    ownerPhone: '+91 97777 22222',
    type: 'South Indian Snacks',
    categoryType: 'snacks',
    pureVeg: true,
    categories: ['veg', 'snacks'],
    hasBiryani: false,
    hasSnacks: true,
    hasCake: false,
    rating: 4.8,
    reviewsCount: 290,
    location: 'हॉस्टेल समोर, मेन रोड',
    distance: '0.3 km',
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=600&auto=format&fit=crop&q=80',
    deliveryExtraCharge: 5,
    features: ['अस्सल सांबार व खोबरे चटणी', 'गरमागरम मऊ इडली', 'क्रिस्पी बटर डोसा', 'Instant Parcel'],
    menuItems: [
      { id: 'a1', name: 'मऊ इडली सांबार (२ नग)', price: 35, image: '⚪' },
      { id: 'a2', name: 'मेदू वडा सांबार (२ नग)', price: 45, image: '🍩' },
      { id: 'a3', name: 'मसाला डोसा (Masala Dosa)', price: 60, image: '🥞' },
      { id: 'a4', name: 'बटर उत्तपम (Butter Uttapam)', price: 55, image: '🍕' },
      { id: 'a5', name: 'इडली + वडा कॉम्बो (१+१)', price: 40, image: '🍱' },
      { id: 'a6', name: 'फिल्टर कॉफी (South Filter Coffee)', price: 20, image: '☕' }
    ]
  },

  // 3. BIRYANI SHOPS (Biryani Center - Direct Menu Items with Prices, No Mess Thali / Pass)
  {
    id: 'biryani-1',
    name: 'रॉयल हैदराबादी दम बिर्याणी हाऊस (Royal Biryani)',
    ownerName: 'इम्रान शेख (Imran Shaikh)',
    ownerPhone: '+91 91234 56789',
    type: 'Biryani Special',
    categoryType: 'biryani',
    pureVeg: false,
    categories: ['nonveg', 'biryani'],
    hasBiryani: true,
    hasSnacks: false,
    hasCake: false,
    rating: 4.9,
    reviewsCount: 320,
    location: 'विद्यापीठ गेट समोर',
    distance: '0.6 km',
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=600&auto=format&fit=crop&q=80',
    deliveryExtraCharge: 5,
    features: ['अस्सल बासमती दम बिर्याणी', 'मोफत सालन ग्रेव्ही & रायता', 'गरमागरम फॉइल पॅकिंग', 'Late Night Delivery'],
    menuItems: [
      { id: 'b1', name: 'चिकन दम बिर्याणी (हाफ)', price: 100, image: '🍗' },
      { id: 'b2', name: 'चिकन दम बिर्याणी (फुल थाळी)', price: 160, image: '🍛' },
      { id: 'b3', name: 'व्हेज दम बिर्याणी विथ रायता', price: 90, image: '🥦' },
      { id: 'b4', name: 'अंडा बिर्याणी (Egg Biryani)', price: 95, image: '🥚' },
      { id: 'b5', name: 'चिकन कबाब फ्राय (४ नग)', price: 80, image: '🍢' },
      { id: 'b6', name: 'शाही तुकडा / फिरनी स्वीट', price: 40, image: '🍮' }
    ]
  },

  // 4. CAKE & BAKERY SHOPS (Cake & Pastry Shop - Direct Menu Items with Prices, No Mess Thali / Pass)
  {
    id: 'cake-1',
    name: 'सेलिब्रेशन केक्स & पेस्ट्री कॉर्नर (Celebration Cakes)',
    ownerName: 'प्रवीण मोरे (Praveen More)',
    ownerPhone: '+91 95555 44433',
    type: 'Cakes & Bakery',
    categoryType: 'cake',
    pureVeg: true,
    categories: ['veg', 'cake'],
    hasCake: true,
    hasBiryani: false,
    hasSnacks: false,
    rating: 4.9,
    reviewsCount: 280,
    location: 'कॉलेज कॉर्नर, मुख्य रस्ता',
    distance: '0.5 km',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&auto=format&fit=crop&q=80',
    deliveryExtraCharge: 5,
    features: ['१००% Eggless Fresh Cakes', 'मिडनाईट बर्थडे डिलिव्हरी', 'Free Candles & Knife', 'Instant Pickup & Delivery'],
    menuItems: [
      { id: 'c1', name: 'चॉकलेट ट्रफल पेस्ट्री (Choco Truffle)', price: 40, image: '🍫' },
      { id: 'c2', name: 'ब्लॅक फॉरेस्ट केक (१/२ kg)', price: 250, image: '🎂' },
      { id: 'c3', name: 'चॉकलेट लावा केक (Choco Lava)', price: 60, image: '🧁' },
      { id: 'c4', name: 'रेड वेल्वेट पेस्ट्री (Red Velvet)', price: 50, image: '🍰' },
      { id: 'c5', name: 'पायनापल फ्रेश केक (१/२ kg)', price: 220, image: '🍍' },
      { id: 'c6', name: 'हॉट ब्राउनी विथ चॉकलेट सॉस', price: 70, image: '🥮' }
    ]
  }
];

export const initialOrders = [
  {
    id: 'ORD-9021',
    studentName: 'अथर्व माळी (Atharva)',
    studentPhone: '9876543210',
    messId: 'mess-1',
    messName: 'माऊली मेस आणि खानावळ',
    mealType: 'दुपारची थाळी (Full Lunch Thali)',
    quantity: 1,
    mode: 'delivery',
    basePrice: 80,
    deliveryFee: 5,
    totalAmount: 85,
    status: 'Ready',
    tokenNumber: 'TK-14',
    address: 'रूम नं. १०४, ओंकार हॉस्टेल, कॉलेज रोड',
    orderTime: '12:35 PM',
    paymentStatus: 'Paid Online (UPI)'
  },
  {
    id: 'ORD-9022',
    studentName: 'रोहित पाटील (Rohit)',
    studentPhone: '9822334455',
    messId: 'snack-1',
    messName: 'कॅम्पस वडापाव & मिसळ सेंटर',
    mealType: 'स्पेशल कॅम्पस वडापाव (१ नग)',
    quantity: 2,
    mode: 'pickup',
    basePrice: 36,
    deliveryFee: 0,
    totalAmount: 36,
    status: 'Preparing',
    tokenNumber: 'TK-15',
    address: 'मेसवर स्वतः येऊन घेणार (Self-Pickup at Shop)',
    orderTime: '12:45 PM',
    paymentStatus: 'Cash on Pickup'
  }
];

export const initialSubscriptions = [
  {
    id: 'SUB-101',
    studentName: 'अथर्व माळी',
    messId: 'mess-1',
    messName: 'माऊली मेस आणि खानावळ',
    plan: 'Monthly 30-Days Pass (दोन वेळचे जेवण)',
    startDate: '01 Oct 2026',
    endDate: '31 Oct 2026',
    totalMeals: 60,
    usedMeals: 24,
    skippedMeals: 2,
    remainingMeals: 34,
    status: 'Active',
    qrToken: 'QR-ATHARVA-2026'
  }
];
