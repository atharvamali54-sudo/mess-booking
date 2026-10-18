// Initial Mock Data for Mess Booking Platform

export const initialMesses = [
  {
    id: 'mess-1',
    name: 'माऊली मेस आणि खानावळ (Mauli Mess)',
    ownerName: 'दत्तात्रय पाटील (Dattatray Patil)',
    ownerPhone: '+91 98765 43210',
    type: 'Veg & Non-Veg',
    pureVeg: false,
    categories: ['veg', 'nonveg', 'snacks'],
    hasBiryani: true,
    hasSnacks: true,
    rating: 4.8,
    reviewsCount: 142,
    location: 'कॉलेज रोड, बस स्टँड जवळ (Near College Road)',
    distance: '0.4 km',
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=600&auto=format&fit=crop&q=80',
    monthlyPrice: 2800,
    dailyMealPrice: 80,
    deliveryExtraCharge: 5, // Order kelays 80 + 5 = 85 rs
    todayLunch: {
      sabji1: 'मटकी उसळ (Matki Usal)',
      sabji2: 'पनीर बटर मसाला (Paneer Butter)',
      roti: '३ चपाती / भाकरी (3 Chapati / Bhakri)',
      rice: 'जिरा राईस + वरण (Jeera Rice & Dal)',
      sweet: 'गुलाबजामुन (Gulab Jamun)',
      specialDish: 'दम बिर्याणी स्पेशल (दुपारी उपलब्ध)',
      available: true,
      time: '12:00 PM - 03:00 PM'
    },
    todayDinner: {
      sabji1: 'शेव भाजी (झणझणीत) (Shev Bhaji)',
      sabji2: 'सुकी बटाटा भाजी (Sukhi Batata)',
      roti: '४ गरम चपात्या (4 Hot Chapatis)',
      rice: 'मसाले भात + ताक (Masale Bhat & Taak)',
      available: true,
      time: '07:30 PM - 10:30 PM'
    },
    snacks: [
      { id: 's1', name: 'कांदा पोहे (Kanda Pohe)', price: 25, available: true },
      { id: 's2', name: 'मिसळ पाव (Misal Pav)', price: 50, available: true },
      { id: 's3', name: 'वडा पाव (२ नग) (Vada Pav 2pcs)', price: 30, available: true },
      { id: 's4', name: 'स्पेशल चहा (Special Tea)', price: 15, available: true },
    ],
    features: ['दम बिर्याणी स्पेशल', 'Unlimited Rice & Dal', 'रविवार चिकन थाळी', 'Free Clean RO Water'],
    subscribersCount: 48
  },
  {
    id: 'mess-2',
    name: 'अन्नपूर्णा शुद्ध शाकाहारी मेस (Annapurna Pure Veg)',
    ownerName: 'सौ. अनिता कुलकर्णी (Anita Kulkarni)',
    ownerPhone: '+91 98220 11223',
    type: 'Pure Veg',
    pureVeg: true,
    categories: ['veg', 'snacks'],
    hasBiryani: false,
    hasSnacks: true,
    rating: 4.9,
    reviewsCount: 210,
    location: 'हॉस्टेल गल्ली क्र. ३ (Hostel Lane 3)',
    distance: '0.8 km',
    image: 'https://images.unsplash.com/photo-1613292443284-c774439c1481?w=600&auto=format&fit=crop&q=80',
    monthlyPrice: 2600,
    dailyMealPrice: 75,
    deliveryExtraCharge: 5,
    todayLunch: {
      sabji1: 'भेंडी फ्राय (Bhendi Fry)',
      sabji2: 'दाल तडका (Dal Tadka)',
      roti: '४ फुलके (4 Ghee Phulkas)',
      rice: 'स्टीम राईस (Steam Rice)',
      sweet: 'खीर (Kheer)',
      available: true,
      time: '12:30 PM - 03:00 PM'
    },
    todayDinner: {
      sabji1: 'मेथी भाजी (Methi Bhaji)',
      sabji2: 'कढी खिचडी (Kadhi Khichdi)',
      roti: '३ चपाती (3 Chapati)',
      rice: 'बासमती राईस (Basmati Rice)',
      available: true,
      time: '08:00 PM - 10:30 PM'
    },
    snacks: [
      { id: 's5', name: 'उपमा / साबुदाणा खिचडी', price: 35, available: true },
      { id: 's6', name: 'इडली सांबार (Idli Sambar)', price: 40, available: true },
      { id: 's6b', name: 'गरम पोहे + चहा कॉम्बो', price: 35, available: true }
    ],
    features: ['१००% शुद्ध शाकाहारी', 'घरगुती चव (Home Style)', 'कमी तेल-मसाले', 'Clean Kitchen'],
    subscribersCount: 65
  },
  {
    id: 'mess-3',
    name: 'सह्याद्री खानपान & स्नॅक्स सेंटर (Sahyadri Food Hub)',
    ownerName: 'गणेश शिंदे (Ganesh Shinde)',
    ownerPhone: '+91 97654 98765',
    type: 'Veg & Non-Veg',
    pureVeg: false,
    categories: ['veg', 'nonveg', 'snacks'],
    hasBiryani: false,
    hasSnacks: true,
    rating: 4.6,
    reviewsCount: 88,
    location: 'शिवाजी पुतळा चौक (Shivaji Chowk)',
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
    snacks: [
      { id: 's7', name: 'भुर्जी पाव (Bhurji Pav)', price: 45, available: true },
      { id: 's8', name: 'ऑम्लेट पाव (Omelette Pav)', price: 40, available: true },
      { id: 's9', name: 'फ्रेंच फ्राईज / कटलेट', price: 50, available: true }
    ],
    features: ['झणझणीत कोल्हापुरी जेवण', 'Late Night Dinner', 'Fast Delivery', 'Student Discount'],
    subscribersCount: 32
  },
  {
    id: 'mess-4',
    name: 'रॉयल बिर्याणी & कबाब कट्टा (Royal Biryani House)',
    ownerName: 'इम्रान शेख (Imran Shaikh)',
    ownerPhone: '+91 91234 56789',
    type: 'Biryani Special',
    pureVeg: false,
    categories: ['nonveg', 'biryani'],
    hasBiryani: true,
    hasSnacks: false,
    rating: 4.9,
    reviewsCount: 320,
    location: 'विद्यापीठ गेट समोर (Opposite University Gate)',
    distance: '0.6 km',
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=600&auto=format&fit=crop&q=80',
    monthlyPrice: 3500,
    dailyMealPrice: 100,
    deliveryExtraCharge: 5,
    todayLunch: {
      sabji1: 'हैदराबादी चिकन दम बिर्याणी (Hyderabadi Biryani)',
      sabji2: 'व्हेज दम बिर्याणी + रायता (Veg Biryani & Raita)',
      roti: 'रुमाली रोटी (२ नग) (Rumali Roti)',
      rice: 'अस्सल बासमती दम राईस',
      sweet: 'शाही तुकडा (Shahi Tukda)',
      specialDish: 'अस्सल मटका दम बिर्याणी',
      available: true,
      time: '12:00 PM - 04:00 PM'
    },
    todayDinner: {
      sabji1: 'स्पेशल चिकन फ्राय बिर्याणी (Chicken Fry Biryani)',
      sabji2: 'पनीर बिर्याणी / दाल मखनी',
      roti: 'बटर नान (२ नग)',
      rice: 'बिर्याणी राईस + सालन ग्रेव्ही',
      available: true,
      time: '07:00 PM - 11:30 PM'
    },
    snacks: [
      { id: 'b1', name: 'हाफ चिकन बिर्याणी', price: 90, available: true },
      { id: 'b2', name: 'व्हेज बिर्याणी विथ रायता', price: 80, available: true },
      { id: 'b3', name: 'चिकन कबाब (४ नग)', price: 70, available: true }
    ],
    features: ['स्पेशल दम बिर्याणी', 'मोफत सालन व रायता', 'गरमागरम पॅकिंग', 'Late Night Delivery'],
    subscribersCount: 55
  },
  {
    id: 'mess-5',
    name: 'कट्टा स्नॅक्स & फास्ट फूड (Katta Snacks Corner)',
    ownerName: 'सचिन जाधव (Sachin Jadhav)',
    ownerPhone: '+91 99887 76655',
    type: 'Snacks & Quick Bites',
    pureVeg: true,
    categories: ['veg', 'snacks'],
    hasBiryani: false,
    hasSnacks: true,
    rating: 4.7,
    reviewsCount: 175,
    location: 'लायब्ररी चौक (Library Chowk)',
    distance: '0.3 km',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&auto=format&fit=crop&q=80',
    monthlyPrice: 2200,
    dailyMealPrice: 60,
    deliveryExtraCharge: 5,
    todayLunch: {
      sabji1: 'छोले भटुरे (२ भटुरे + छोले) (Chole Bhature)',
      sabji2: 'दाल खिचडी तडका (Dal Khichdi)',
      roti: '२ पराठे / भटुरे',
      rice: 'मसाला खिचडी',
      sweet: 'गुलाबजामुन',
      available: true,
      time: '11:00 AM - 04:00 PM'
    },
    todayDinner: {
      sabji1: 'पाव भाजी (२ बटर पाव) (Pav Bhaji)',
      sabji2: 'शेव शेवगा मसाला',
      roti: '३ चपात्या / पाव',
      rice: 'तवा पुलाव',
      available: true,
      time: '06:00 PM - 11:00 PM'
    },
    snacks: [
      { id: 'k1', name: 'स्पेशल कोल्हापुरी मिसळ पाव', price: 50, available: true },
      { id: 'k2', name: 'गरमागरम वडा पाव (२)', price: 30, available: true },
      { id: 'k3', name: 'चीज मॅगी / अंडा मॅगी', price: 40, available: true },
      { id: 'k4', name: 'कांदा भजी / बटाटा भजी', price: 35, available: true },
      { id: 'k5', name: 'मसाला चहा / कॉफी', price: 15, available: true }
    ],
    features: ['ऑल-डे स्नॅक्स उपलब्ध', 'झटपट डिलिव्हरी', 'बजेट फ्रेंडली', 'चहा-कॉफी कट्टा'],
    subscribersCount: 40
  }
];

export const initialOrders = [
  {
    id: 'ORD-9021',
    studentName: 'अथर्व माळी (Atharva)',
    studentPhone: '9876543210',
    messId: 'mess-1',
    messName: 'माऊली मेस आणि खानावळ',
    mealType: 'Full Lunch Thali (दुपारची थाळी)',
    quantity: 1,
    mode: 'delivery', // 'delivery' or 'pickup'
    basePrice: 80,
    deliveryFee: 5,
    totalAmount: 85,
    status: 'Ready', // 'Pending', 'Preparing', 'Ready', 'Delivered'
    tokenNumber: 'TK-14',
    address: 'रूम नं. १०४, ओंकार हॉस्टेल, कॉलेज रोड',
    orderTime: '12:35 PM',
    paymentStatus: 'Paid Online (UPI)'
  },
  {
    id: 'ORD-9022',
    studentName: 'रोहित पाटील (Rohit)',
    studentPhone: '9822334455',
    messId: 'mess-1',
    messName: 'माऊली मेस आणि खानावळ',
    mealType: 'Full Lunch Thali (Self-Pickup)',
    quantity: 1,
    mode: 'pickup',
    basePrice: 80,
    deliveryFee: 0,
    totalAmount: 80,
    status: 'Pending',
    tokenNumber: 'TK-15',
    address: 'मेसवर स्वतः येऊन घेणार (Self-Pickup at Mess)',
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
