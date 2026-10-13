// Initial Mock Data for Mess Booking Platform

export const initialMesses = [
  {
    id: 'mess-1',
    name: 'माऊली मेस आणि खानावळ (Mauli Mess)',
    ownerName: 'दत्तात्रय पाटील (Dattatray Patil)',
    ownerPhone: '+91 98765 43210',
    type: 'Veg & Non-Veg',
    pureVeg: false,
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
    features: ['Unlimited Rice & Dal', 'रविवार स्पेशल चिकन/पनीर', 'Free Clean RO Water', 'Monthly Pass Available'],
    subscribersCount: 48
  },
  {
    id: 'mess-2',
    name: 'अन्नपूर्णा शुद्ध शाकाहारी मेस (Annapurna Pure Veg)',
    ownerName: 'सौ. अनिता कुलकर्णी (Anita Kulkarni)',
    ownerPhone: '+91 98220 11223',
    type: 'Pure Veg',
    pureVeg: true,
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
    ],
    features: ['घरगुती चव (Home Style)', 'कमी तेल-मसाले', 'Clean Kitchen', 'Tiffin Service'],
    subscribersCount: 65
  },
  {
    id: 'mess-3',
    name: 'सह्याद्री खानपान & स्नॅक्स सेंटर (Sahyadri Food Hub)',
    ownerName: 'गणेश शिंदे (Ganesh Shinde)',
    ownerPhone: '+91 97654 98765',
    type: 'Veg & Non-Veg',
    pureVeg: false,
    rating: 4.6,
    reviewsCount: 88,
    location: 'शिवाजी पुतळा चौक (Shivaji Chowk)',
    distance: '1.2 km',
    image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=600&auto=format&fit=crop&q=80',
    monthlyPrice: 3000,
    dailyMealPrice: 85,
    deliveryExtraCharge: 5,
    todayLunch: {
      sabji1: 'कोल्हापुरी तांबडा-पांढरा रस्सा स्पेशल / पनीर कोल्हापुरी',
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
    features: ['स्पेशल मटण/चिकन थाळी', 'Late Night Dinner', 'Fast Delivery', 'Student Discount'],
    subscribersCount: 32
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
