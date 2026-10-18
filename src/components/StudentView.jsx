import React, { useState } from 'react';
import { 
  Utensils, 
  MapPin, 
  Star, 
  Clock, 
  ShoppingBag, 
  Truck, 
  Store, 
  CheckCircle, 
  Calendar, 
  Phone, 
  Plus, 
  Minus, 
  AlertCircle,
  X,
  Sparkles,
  Eye,
  ChevronRight,
  BookOpen
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function StudentView({ messes, onPlaceOrder, subscriptions, onSkipMeal }) {
  const [selectedMess, setSelectedMess] = useState(null);
  const [filter, setFilter] = useState('all'); // 'all', 'pureVeg', 'under80'
  const [orderModalOpen, setOrderModalOpen] = useState(false);
  const [orderMess, setOrderMess] = useState(null);
  const [menuModalOpen, setMenuModalOpen] = useState(false);
  const [menuMess, setMenuMess] = useState(null);
  const [orderMode, setOrderMode] = useState('delivery'); // 'delivery' or 'pickup'
  const [orderQuantity, setOrderQuantity] = useState(1);
  const [selectedMealType, setSelectedMealType] = useState('lunch'); // 'lunch', 'dinner', or snack
  const [studentDetails, setStudentDetails] = useState({
    name: 'अथर्व माळी',
    phone: '9876543210',
    address: 'रूम नं. १०४, ओंकार हॉस्टेल, कॉलेज रोड'
  });
  const [activeTab, setActiveTab] = useState('browse'); // 'browse', 'pass', 'snacks'

  // Filtered messes
  const filteredMesses = messes.filter(m => {
    if (filter === 'veg') return m.pureVeg || m.categories?.includes('veg');
    if (filter === 'nonveg') return !m.pureVeg || m.categories?.includes('nonveg');
    if (filter === 'snacks') return m.hasSnacks || (m.snacks && m.snacks.length > 0);
    if (filter === 'biryani') return m.hasBiryani || m.type?.toLowerCase().includes('biryani') || m.categories?.includes('biryani');
    if (filter === 'cake') return m.hasCake || m.categories?.includes('cake') || m.type?.toLowerCase().includes('cake');
    if (filter === 'under80') return m.dailyMealPrice <= 80;
    return true;
  });

  const handleOpenOrder = (mess, mealType = 'lunch') => {
    setOrderMess(mess);
    setSelectedMealType(mealType);
    setOrderQuantity(1);
    setOrderModalOpen(true);
  };

  const handleConfirmOrder = (e) => {
    e.preventDefault();
    if (!orderMess) return;

    const basePrice = orderMess.dailyMealPrice * orderQuantity;
    const deliveryExtra = orderMode === 'delivery' ? (orderMess.deliveryExtraCharge * orderQuantity) : 0;
    const totalAmount = basePrice + deliveryExtra;

    const newOrder = {
      id: `ORD-${Math.floor(1000 + Math.random() * 9000)}`,
      studentName: studentDetails.name,
      studentPhone: studentDetails.phone,
      messId: orderMess.id,
      messName: orderMess.name,
      mealType: selectedMealType === 'lunch' ? 'दुपारची थाळी (Lunch)' : 'रात्रीची थाळी (Dinner)',
      quantity: orderQuantity,
      mode: orderMode,
      basePrice: basePrice,
      deliveryFee: deliveryExtra,
      totalAmount: totalAmount,
      status: 'Pending',
      tokenNumber: `TK-${Math.floor(10 + Math.random() * 89)}`,
      address: orderMode === 'delivery' ? studentDetails.address : 'मेसवर स्वतः येऊन घेणार (Self-Pickup at Mess)',
      orderTime: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      paymentStatus: 'Cash / UPI on Receipt'
    };

    onPlaceOrder(newOrder);
    setOrderModalOpen(false);

    // Trigger celebration confetti
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch {
      // ignore if confetti fails
    }
  };

  const currentSub = subscriptions[0] || null;

  return (
    <div className="space-y-6">
      {/* Hero Banner for Students */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 text-white p-6 sm:p-8 shadow-xl">
        <div className="relative z-10 max-w-2xl">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/20 backdrop-blur-md mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            विद्यार्थी आणि बॅचलर्ससाठी खास
          </span>
          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white mb-2">
            घरच्यासारखे गरम जेवण, वेळेवर आणि परवडणाऱ्या दरात!
          </h1>
          <p className="text-orange-100 text-sm sm:text-base leading-relaxed mb-4">
            जवळच्या सर्वोत्कृष्ट मेस शोधा. स्वतः जाऊन घ्या किंवा थेट रूमवर मागवा! 
            <span className="font-bold underline ml-1">Self-pickup ₹80, तर डिलिव्हरीसाठी फक्त ₹5 एक्स्ट्रा!</span>
          </p>

          <div className="flex flex-wrap gap-2 pt-1">
            <button
              onClick={() => setActiveTab('browse')}
              className={`px-4 py-2 rounded-xl font-medium text-sm transition-all ${
                activeTab === 'browse' ? 'bg-white text-orange-700 shadow-md scale-105' : 'bg-white/20 text-white hover:bg-white/30'
              }`}
            >
              🍱 सर्व मेस पहा (Explore Mess)
            </button>
            <button
              onClick={() => setActiveTab('pass')}
              className={`px-4 py-2 rounded-xl font-medium text-sm transition-all ${
                activeTab === 'pass' ? 'bg-white text-orange-700 shadow-md scale-105' : 'bg-white/20 text-white hover:bg-white/30'
              }`}
            >
              🎟️ माझा मासिक पास & QR (Mess Pass)
            </button>
          </div>
        </div>
      </div>

      {/* Tab: Digital Mess Pass */}
      {activeTab === 'pass' && (
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
            <div>
              <span className="text-xs uppercase font-bold text-orange-600 tracking-wider">डिजिटल मेस कार्ड</span>
              <h2 className="text-xl font-bold text-slate-800">{currentSub?.plan}</h2>
              <p className="text-sm text-slate-500">{currentSub?.messName}</p>
            </div>
            <div className="flex items-center gap-2 bg-emerald-50 text-emerald-700 px-3 py-1.5 rounded-full text-xs font-semibold border border-emerald-200">
              <CheckCircle className="w-4 h-4" /> सबस्क्रिप्शन सक्रिय (Active)
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-6">
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-5 rounded-xl border border-orange-200 text-center">
              <div className="text-3xl font-extrabold text-orange-600 mb-1">{currentSub?.remainingMeals}</div>
              <div className="text-xs text-slate-600 font-medium">शिल्लक जेवण (Meals Left)</div>
              <div className="text-xs text-slate-400 mt-1">एकूण: {currentSub?.totalMeals} पैकी {currentSub?.usedMeals} वापरले</div>
            </div>

            <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 text-center">
              <div className="text-3xl font-extrabold text-slate-700 mb-1">{currentSub?.skippedMeals}</div>
              <div className="text-xs text-slate-600 font-medium">Skip केलेले जेवण (Leaves)</div>
              <p className="text-xs text-emerald-600 font-medium mt-1">दिवस पुढे वाढवले आहेत ✅</p>
            </div>

            <div className="bg-slate-900 text-white p-5 rounded-xl flex flex-col items-center justify-center text-center">
              <div className="bg-white p-2 rounded-lg text-slate-900 mb-2">
                <div className="w-20 h-20 bg-slate-900 flex items-center justify-center text-white text-xs font-mono rounded">
                  [ QR CODE ]
                </div>
              </div>
              <div className="text-xs font-mono text-slate-300">{currentSub?.qrToken}</div>
              <div className="text-[11px] text-amber-400 mt-1">मेसवर हा QR कोड दाखवा</div>
            </div>
          </div>

          {/* Action: Skip Meal / Leave */}
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <AlertCircle className="w-5 h-5 text-amber-600 shrink-0" />
              <div className="text-xs text-slate-700">
                <span className="font-semibold text-slate-900">आज जेवायचे नाही किंवा गावी जात आहात का?</span>
                <p>जेवणाच्या २ तास आधी कळवल्यास तुमचा मेस पास वाया जात नाही!</p>
              </div>
            </div>
            <button 
              onClick={() => onSkipMeal(currentSub?.id)}
              className="w-full sm:w-auto px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold rounded-lg transition-colors shadow-sm"
            >
              आजचे जेवण Skip करा (Leave Notice)
            </button>
          </div>
        </div>
      )}

      {/* Tab: Browse Messes */}
      {activeTab === 'browse' && (
        <div className="space-y-6">
          {/* Filters Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 bg-white p-3 rounded-xl border border-slate-200">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs font-semibold text-slate-500">फिल्टर:</span>
              <button 
                onClick={() => setFilter('all')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1 ${
                  filter === 'all' ? 'bg-orange-600 text-white shadow-sm' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                🍱 सर्व (All)
              </button>
              <button 
                onClick={() => setFilter('veg')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1 ${
                  filter === 'veg' ? 'bg-emerald-600 text-white shadow-sm' : 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-200'
                }`}
              >
                🌱 शाकाहारी (Veg)
              </button>
              <button 
                onClick={() => setFilter('nonveg')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1 ${
                  filter === 'nonveg' ? 'bg-rose-600 text-white shadow-sm' : 'bg-rose-50 text-rose-700 hover:bg-rose-100 border border-rose-200'
                }`}
              >
                🍗 मांसाहारी (Non-Veg)
              </button>
              <button 
                onClick={() => setFilter('snacks')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1 ${
                  filter === 'snacks' ? 'bg-amber-600 text-white shadow-sm' : 'bg-amber-50 text-amber-800 hover:bg-amber-100 border border-amber-200'
                }`}
              >
                ☕ स्नॅक्स (Snacks)
              </button>
              <button 
                onClick={() => setFilter('biryani')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1 ${
                  filter === 'biryani' ? 'bg-purple-600 text-white shadow-sm' : 'bg-purple-50 text-purple-700 hover:bg-purple-100 border border-purple-200'
                }`}
              >
                🍲 बिर्याणी (Biryani)
              </button>
              <button 
                onClick={() => setFilter('cake')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1 ${
                  filter === 'cake' ? 'bg-pink-600 text-white shadow-sm' : 'bg-pink-50 text-pink-700 hover:bg-pink-100 border border-pink-200'
                }`}
              >
                🎂 केक (Cake & Bakery)
              </button>
              <button 
                onClick={() => setFilter('under80')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1 ${
                  filter === 'under80' ? 'bg-blue-600 text-white shadow-sm' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                💰 ₹80 बजेट
              </button>
            </div>
            <div className="text-xs text-slate-500 font-medium">
              {filteredMesses.length} मेस उपलब्ध
            </div>
          </div>

          {/* Mess Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMesses.map(mess => (
              <div 
                key={mess.id} 
                className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Mess Image Header */}
                  <div className="relative h-44 overflow-hidden bg-slate-100">
                    <img 
                      src={mess.image} 
                      alt={mess.name}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" 
                    />
                    <div className="absolute top-3 left-3 flex gap-2">
                      <span className={`px-2.5 py-1 rounded-full text-xs font-bold text-white shadow-md ${
                        mess.pureVeg ? 'bg-emerald-600' : 'bg-rose-600'
                      }`}>
                        {mess.pureVeg ? '🌱 Pure Veg' : '🍗 Veg / Non-Veg'}
                      </span>
                    </div>
                    <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm px-2.5 py-1 rounded-full text-xs font-bold text-slate-800 flex items-center gap-1 shadow-md">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      {mess.rating} ({mess.reviewsCount})
                    </div>
                    <div className="absolute bottom-2 left-3 right-3 bg-black/60 backdrop-blur-sm text-white px-3 py-1.5 rounded-lg text-xs flex items-center justify-between">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-orange-400" /> {mess.location}
                      </span>
                      <span className="text-orange-300 font-medium">{mess.distance}</span>
                    </div>
                  </div>

                  {/* Body Details */}
                  <div className="p-4 space-y-3">
                    <h3 className="text-base font-bold text-slate-800 line-clamp-1">
                      {mess.name}
                    </h3>

                    {/* Menu Summary Box */}
                    <div className="bg-orange-50/70 border border-orange-100 rounded-xl p-3 text-xs space-y-1">
                      <div className="flex items-center justify-between text-orange-800 font-bold mb-1">
                        <span className="flex items-center gap-1">
                          <Utensils className="w-3.5 h-3.5" /> 
                          {mess.hasCake ? '🎂 आजचे स्पेशल केक्स:' : '🍛 आजचा दुपारचा मेनू:'}
                        </span>
                        <span className="text-[11px] text-slate-500 font-normal">{mess.todayLunch.time}</span>
                      </div>
                      <p className="text-slate-700 font-medium">✨ {mess.todayLunch.sabji1}</p>
                      <p className="text-slate-600 truncate">{mess.todayLunch.sabji2}</p>
                      {mess.todayLunch.sweet && (
                        <p className="text-amber-700 font-semibold">🍰 {mess.todayLunch.sweet}</p>
                      )}
                    </div>

                    {/* "See Menu" Button */}
                    <button
                      onClick={() => {
                        setMenuMess(mess);
                        setMenuModalOpen(true);
                      }}
                      className="w-full py-2 px-3 rounded-xl bg-amber-50 hover:bg-amber-100 border border-amber-300 text-amber-900 font-bold text-xs flex items-center justify-center gap-1.5 transition shadow-xs"
                    >
                      <BookOpen className="w-3.5 h-3.5 text-amber-700" />
                      <span>संपूर्ण मेनू पहा (See Menu)</span>
                      <ChevronRight className="w-3.5 h-3.5 text-amber-600 ml-auto" />
                    </button>

                    {/* Price and Options Info */}
                    <div className="flex items-center justify-between pt-2 border-t border-slate-100">
                      <div>
                        <div className="text-xs text-slate-500">{mess.hasCake ? 'स्टार्टिंग दर:' : 'रोजची थाळी दर:'}</div>
                        <div className="text-lg font-black text-slate-800">
                          ₹{mess.dailyMealPrice}
                          <span className="text-xs font-normal text-slate-500 ml-1">{mess.hasCake ? '/ पीस' : '/ थाळी'}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-slate-500">{mess.hasCake ? 'पार्टी कॉम्बो:' : 'मासिक पास:'}</div>
                        <div className="text-sm font-bold text-orange-600">
                          ₹{mess.monthlyPrice}
                          <span className="text-[11px] font-normal text-slate-500">{mess.hasCake ? ' पासून' : ' / महिना'}</span>
                        </div>
                      </div>
                    </div>

                    {/* Quick highlights */}
                    <div className="flex flex-wrap gap-1 text-[11px] text-slate-600">
                      {mess.features.slice(0, 2).map((feat, idx) => (
                        <span key={idx} className="bg-slate-100 px-2 py-0.5 rounded-md">✓ {feat}</span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="p-4 pt-0 grid grid-cols-2 gap-2">
                  <button
                    onClick={() => {
                      setOrderMode('pickup');
                      handleOpenOrder(mess, 'lunch');
                    }}
                    className="flex items-center justify-center gap-1 px-3 py-2.5 rounded-xl border-2 border-orange-600 text-orange-600 hover:bg-orange-50 font-bold text-xs transition"
                  >
                    <Store className="w-3.5 h-3.5" />
                    Self-Pickup (₹{mess.dailyMealPrice})
                  </button>

                  <button
                    onClick={() => {
                      setOrderMode('delivery');
                      handleOpenOrder(mess, 'lunch');
                    }}
                    className="flex items-center justify-center gap-1 px-3 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs shadow-md transition"
                  >
                    <Truck className="w-3.5 h-3.5" />
                    Order (+₹5)
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Order Booking Modal */}
      {orderModalOpen && orderMess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-slate-200 relative my-8 animate-in fade-in zoom-in duration-200">
            <button 
              onClick={() => setOrderModalOpen(false)}
              className="absolute top-4 right-4 p-1.5 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-4">
              <span className="text-xs uppercase font-bold text-orange-600 tracking-wider">जेवण बुकिंग व ऑर्डर</span>
              <h2 className="text-xl font-bold text-slate-800">{orderMess.name}</h2>
              <p className="text-xs text-slate-500 flex items-center gap-1 mt-0.5">
                <MapPin className="w-3 h-3 text-orange-500" /> {orderMess.location}
              </p>
            </div>

            <form onSubmit={handleConfirmOrder} className="space-y-4">
              {/* Meal Selection */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">जेवणाची वेळ निवडा:</label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setSelectedMealType('lunch')}
                    className={`p-2.5 rounded-xl border text-xs font-semibold text-center transition ${
                      selectedMealType === 'lunch'
                        ? 'border-orange-600 bg-orange-50 text-orange-700'
                        : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    ☀️ दुपारचे जेवण (Lunch)
                    <div className="text-[10px] text-slate-500 font-normal mt-0.5">12:00 PM - 03:00 PM</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setSelectedMealType('dinner')}
                    className={`p-2.5 rounded-xl border text-xs font-semibold text-center transition ${
                      selectedMealType === 'dinner'
                        ? 'border-orange-600 bg-orange-50 text-orange-700'
                        : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    🌙 रात्रीचे जेवण (Dinner)
                    <div className="text-[10px] text-slate-500 font-normal mt-0.5">07:30 PM - 10:30 PM</div>
                  </button>
                </div>
              </div>

              {/* Mode Selection: Self-Pickup vs Order/Delivery */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">घेण्याची पद्धत (Delivery Mode):</label>
                <div className="grid grid-cols-2 gap-2">
                  <div
                    onClick={() => setOrderMode('pickup')}
                    className={`cursor-pointer p-3 rounded-xl border-2 transition ${
                      orderMode === 'pickup' 
                        ? 'border-orange-600 bg-orange-50/50' 
                        : 'border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <Store className={`w-4 h-4 ${orderMode === 'pickup' ? 'text-orange-600' : 'text-slate-500'}`} />
                      <span className="text-xs font-bold text-slate-800">Self-Pickup</span>
                    </div>
                    <p className="text-[11px] text-slate-500">स्वतः मेसवर येऊन डबा घेणे</p>
                    <div className="mt-2 text-xs font-extrabold text-slate-700">
                      ₹{orderMess.dailyMealPrice} <span className="text-[10px] font-normal text-emerald-600">(कोणतेही एक्स्ट्रा चार्ज नाही)</span>
                    </div>
                  </div>

                  <div
                    onClick={() => setOrderMode('delivery')}
                    className={`cursor-pointer p-3 rounded-xl border-2 transition ${
                      orderMode === 'delivery' 
                        ? 'border-orange-600 bg-orange-50/50' 
                        : 'border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <Truck className={`w-4 h-4 ${orderMode === 'delivery' ? 'text-orange-600' : 'text-slate-500'}`} />
                      <span className="text-xs font-bold text-slate-800">Order / Delivery</span>
                    </div>
                    <p className="text-[11px] text-slate-500">रूम/हॉस्टेलवर थेट डिलिव्हरी</p>
                    <div className="mt-2 text-xs font-extrabold text-orange-600">
                      ₹{orderMess.dailyMealPrice + orderMess.deliveryExtraCharge} <span className="text-[10px] font-normal text-slate-500">(+₹5 पॅकिंग/डिलिव्हरी)</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quantity Selector */}
              <div className="flex items-center justify-between bg-slate-50 p-3 rounded-xl border border-slate-200">
                <span className="text-xs font-semibold text-slate-700">थाळ्यांची संख्या (Quantity):</span>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setOrderQuantity(Math.max(1, orderQuantity - 1))}
                    className="w-8 h-8 rounded-lg bg-white border border-slate-300 flex items-center justify-center text-slate-700 hover:bg-slate-100 font-bold"
                  >
                    -
                  </button>
                  <span className="text-base font-bold text-slate-900 w-6 text-center">{orderQuantity}</span>
                  <button
                    type="button"
                    onClick={() => setOrderQuantity(orderQuantity + 1)}
                    className="w-8 h-8 rounded-lg bg-white border border-slate-300 flex items-center justify-center text-slate-700 hover:bg-slate-100 font-bold"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Delivery Address if Mode is Delivery */}
              {orderMode === 'delivery' && (
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">डिलिव्हरीचा पत्ता (Room / Hostel Address):</label>
                  <input
                    type="text"
                    required
                    value={studentDetails.address}
                    onChange={(e) => setStudentDetails({ ...studentDetails, address: e.target.value })}
                    className="w-full text-xs p-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="उदा. ओंकार हॉस्टेल, रूम नं. १०४"
                  />
                </div>
              )}

              {/* Student Name & Phone */}
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">तुमचे नाव:</label>
                  <input
                    type="text"
                    required
                    value={studentDetails.name}
                    onChange={(e) => setStudentDetails({ ...studentDetails, name: e.target.value })}
                    className="w-full text-xs p-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">मोबाईल नंबर:</label>
                  <input
                    type="tel"
                    required
                    value={studentDetails.phone}
                    onChange={(e) => setStudentDetails({ ...studentDetails, phone: e.target.value })}
                    className="w-full text-xs p-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
              </div>

              {/* Price Calculation Summary */}
              <div className="bg-orange-50 border border-orange-200 rounded-xl p-3 text-xs space-y-1.5">
                <div className="flex justify-between text-slate-600">
                  <span>थाळी किंमत ({orderQuantity} x ₹{orderMess.dailyMealPrice}):</span>
                  <span>₹{orderMess.dailyMealPrice * orderQuantity}</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>
                    {orderMode === 'delivery' ? 'डिलिव्हरी / पॅकिंग चार्ज (+₹5 प्रति थाळी):' : 'Self-Pickup सूट:'}
                  </span>
                  <span className={orderMode === 'delivery' ? 'text-orange-600 font-semibold' : 'text-emerald-600 font-semibold'}>
                    {orderMode === 'delivery' ? `+ ₹${orderMess.deliveryExtraCharge * orderQuantity}` : '₹0 (फ्री)'}
                  </span>
                </div>
                <div className="border-t border-orange-200 pt-1.5 flex justify-between font-bold text-sm text-slate-900">
                  <span>एकूण देय रक्कम (Total):</span>
                  <span className="text-orange-700">
                    ₹{(orderMess.dailyMealPrice * orderQuantity) + (orderMode === 'delivery' ? (orderMess.deliveryExtraCharge * orderQuantity) : 0)}
                  </span>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white font-bold text-sm rounded-xl shadow-lg transition flex items-center justify-center gap-2"
              >
                <CheckCircle className="w-4 h-4" />
                ऑर्डर कन्फर्म करा (Confirm ₹{(orderMess.dailyMealPrice * orderQuantity) + (orderMode === 'delivery' ? (orderMess.deliveryExtraCharge * orderQuantity) : 0)})
              </button>
            </form>
          </div>
        </div>
      )}

      {/* "See Menu" Detailed Modal */}
      {menuModalOpen && menuMess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-slate-200 relative my-8 animate-in fade-in zoom-in duration-200 max-h-[90vh] flex flex-col">
            {/* Modal Header */}
            <div className="flex items-start justify-between pb-4 border-b border-slate-100">
              <div>
                <span className="text-xs uppercase font-extrabold text-orange-600 tracking-wider">
                  {menuMess.hasCake ? '🎂 केक आणि बेकरी मेनू कार्ड' : '🍱 संपूर्ण मेस मेनू कार्ड'}
                </span>
                <h2 className="text-xl font-black text-slate-800 mt-0.5">{menuMess.name}</h2>
                <p className="text-xs text-slate-500 flex items-center gap-1 mt-1">
                  <MapPin className="w-3.5 h-3.5 text-orange-500" /> {menuMess.location} ({menuMess.distance})
                </p>
              </div>
              <button 
                onClick={() => setMenuModalOpen(false)}
                className="p-1.5 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Scrollable Body */}
            <div className="flex-1 overflow-y-auto py-4 space-y-4 pr-1">
              {/* Timing & Special Highlights */}
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 text-xs flex items-center justify-between">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-amber-600" /> वेळ: {menuMess.todayLunch.time}
                </span>
                <span className="text-emerald-700 font-bold bg-white px-2 py-0.5 rounded-md border border-amber-200">
                  {menuMess.pureVeg ? '🌱 १००% Pure Veg' : '🍗 Veg / Non-Veg'}
                </span>
              </div>

              {/* Today's Lunch Section */}
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-xs font-black uppercase text-slate-700 flex items-center gap-1.5">
                    <Utensils className="w-3.5 h-3.5 text-orange-600" />
                    {menuMess.hasCake ? 'आजचे स्पेशल केक्स (Special Cakes)' : 'दुपारचे जेवण (Lunch Thali)'}
                  </h3>
                  <span className="text-xs font-black text-orange-600">₹{menuMess.dailyMealPrice}</span>
                </div>
                <div className="space-y-1.5 text-xs text-slate-700 pt-1 border-t border-slate-200">
                  <div className="flex justify-between">
                    <span className="text-slate-500">{menuMess.hasCake ? 'केक प्रकार १:' : 'भाजी १:'}</span>
                    <span className="font-semibold text-slate-800">{menuMess.todayLunch.sabji1}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">{menuMess.hasCake ? 'केक प्रकार २:' : 'भाजी २:'}</span>
                    <span className="font-semibold text-slate-800">{menuMess.todayLunch.sabji2}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">{menuMess.hasCake ? 'बेकरी आयटम्स:' : 'पोळी/भाकरी:'}</span>
                    <span className="font-semibold text-slate-800">{menuMess.todayLunch.roti}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">{menuMess.hasCake ? 'डिझाईन प्रकार:' : 'राईस/भात:'}</span>
                    <span className="font-semibold text-slate-800">{menuMess.todayLunch.rice}</span>
                  </div>
                  {menuMess.todayLunch.sweet && (
                    <div className="flex justify-between text-amber-700 font-semibold bg-amber-50/80 p-1.5 rounded-md">
                      <span>{menuMess.hasCake ? 'पेस्ट्री स्पेशल:' : 'गोड पदार्थ / स्वीट:'}</span>
                      <span>{menuMess.todayLunch.sweet}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Dinner Section */}
              {menuMess.todayDinner && (
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xs font-black uppercase text-slate-700 flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-blue-600" />
                      {menuMess.hasCake ? 'रात्रीची पार्टी डिलिव्हरी (Midnight Menu)' : 'रात्रीचे जेवण (Dinner)'}
                    </h3>
                    <span className="text-[11px] text-slate-500">{menuMess.todayDinner.time}</span>
                  </div>
                  <div className="space-y-1.5 text-xs text-slate-700 pt-1 border-t border-slate-200">
                    <div className="flex justify-between">
                      <span className="text-slate-500">आयटम १:</span>
                      <span className="font-semibold text-slate-800">{menuMess.todayDinner.sabji1}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">आयटम २:</span>
                      <span className="font-semibold text-slate-800">{menuMess.todayDinner.sabji2}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">स्पेशल:</span>
                      <span className="font-semibold text-slate-800">{menuMess.todayDinner.roti}</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Snacks & Extra Items Menu */}
              {menuMess.snacks && menuMess.snacks.length > 0 && (
                <div className="bg-orange-50/50 border border-orange-200 rounded-xl p-4 space-y-2.5">
                  <h3 className="text-xs font-black uppercase text-orange-900 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-orange-600" />
                    {menuMess.hasCake ? '🍰 उपलब्ध पेस्ट्री, केक व स्नॅक्स रेट लिस्ट:' : '☕ उपलब्ध स्नॅक्स & एक्सट्रा डिशेस:'}
                  </h3>
                  <div className="grid grid-cols-1 gap-2 pt-1">
                    {menuMess.snacks.map(snack => (
                      <div key={snack.id} className="flex items-center justify-between bg-white p-2.5 rounded-lg border border-orange-100 text-xs">
                        <span className="font-medium text-slate-800">✓ {snack.name}</span>
                        <span className="font-black text-orange-700 bg-orange-50 px-2 py-0.5 rounded-md">₹{snack.price}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Pricing & Features */}
              <div className="bg-white border border-slate-200 rounded-xl p-3 text-xs space-y-1.5">
                <div className="flex justify-between text-slate-600">
                  <span>Self-Pickup दर:</span>
                  <span className="font-bold text-slate-800">₹{menuMess.dailyMealPrice}</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Room Delivery / पॅकिंग:</span>
                  <span className="font-bold text-orange-600">₹{menuMess.dailyMealPrice + menuMess.deliveryExtraCharge} (+₹{menuMess.deliveryExtraCharge})</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>मासिक सबस्क्रिप्शन:</span>
                  <span className="font-bold text-emerald-600">₹{menuMess.monthlyPrice} / महिना</span>
                </div>
              </div>
            </div>

            {/* Modal Action Buttons */}
            <div className="pt-3 border-t border-slate-100 grid grid-cols-2 gap-2">
              <button
                onClick={() => {
                  setMenuModalOpen(false);
                  setOrderMode('pickup');
                  handleOpenOrder(menuMess, 'lunch');
                }}
                className="flex items-center justify-center gap-1.5 py-2.5 rounded-xl border-2 border-orange-600 text-orange-600 font-bold text-xs hover:bg-orange-50 transition"
              >
                <Store className="w-4 h-4" />
                Self-Pickup (₹{menuMess.dailyMealPrice})
              </button>

              <button
                onClick={() => {
                  setMenuModalOpen(false);
                  setOrderMode('delivery');
                  handleOpenOrder(menuMess, 'lunch');
                }}
                className="flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs shadow-md transition"
              >
                <Truck className="w-4 h-4" />
                Order (+₹5)
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
