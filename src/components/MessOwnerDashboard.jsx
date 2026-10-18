import React, { useState } from 'react';
import { 
  Plus, 
  Check, 
  Clock, 
  Truck, 
  Store, 
  Users, 
  DollarSign, 
  Edit3, 
  Bell, 
  Utensils, 
  Save, 
  PhoneCall, 
  CheckCircle2, 
  AlertTriangle 
} from 'lucide-react';

export default function MessOwnerDashboard({ 
  messes, 
  orders, 
  onUpdateOrderStatus, 
  onUpdateMenu, 
  subscriptions 
}) {
  // Use first mess as active owner for demonstration
  const [selectedMessId, setSelectedMessId] = useState(messes[0]?.id || 'mess-1');
  const activeMess = messes.find(m => m.id === selectedMessId) || messes[0];

  const [activeTab, setActiveTab] = useState('orders'); // 'orders', 'menu', 'subscribers'
  const [editMenuForm, setEditMenuForm] = useState({
    sabji1: activeMess.todayLunch?.sabji1 || '',
    sabji2: activeMess.todayLunch?.sabji2 || '',
    roti: activeMess.todayLunch?.roti || '',
    rice: activeMess.todayLunch?.rice || '',
    sweet: activeMess.todayLunch?.sweet || '',
    dailyMealPrice: activeMess.dailyMealPrice || 0,
    deliveryExtraCharge: activeMess.deliveryExtraCharge || 5
  });
  const [menuSavedAlert, setMenuSavedAlert] = useState(false);

  // Filter orders for this mess
  const messOrders = orders.filter(o => o.messId === activeMess.id);
  const messSubs = subscriptions.filter(s => s.messId === activeMess.id);

  // Calculate revenue
  const totalRevenue = messOrders.reduce((sum, o) => sum + o.totalAmount, 0);
  const pendingOrders = messOrders.filter(o => o.status === 'Pending').length;
  const readyOrders = messOrders.filter(o => o.status === 'Ready').length;

  const handleSaveMenu = (e) => {
    e.preventDefault();
    onUpdateMenu(activeMess.id, {
      ...activeMess,
      dailyMealPrice: Number(editMenuForm.dailyMealPrice),
      deliveryExtraCharge: Number(editMenuForm.deliveryExtraCharge),
      todayLunch: {
        ...activeMess.todayLunch,
        sabji1: editMenuForm.sabji1,
        sabji2: editMenuForm.sabji2,
        roti: editMenuForm.roti,
        rice: editMenuForm.rice,
        sweet: editMenuForm.sweet
      }
    });

    setMenuSavedAlert(true);
    setTimeout(() => setMenuSavedAlert(false), 3000);
  };

  return (
    <div className="space-y-6">
      {/* Mess Selector & Header */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <span className="text-xs uppercase font-extrabold text-orange-600 tracking-wider">मेस मालक पोर्टल (Mess Owner Dashboard)</span>
          <h1 className="text-2xl font-black text-slate-800">{activeMess.name}</h1>
          <p className="text-xs text-slate-500">मालक: {activeMess.ownerName} | {activeMess.ownerPhone}</p>
        </div>

        {/* Change Mess Profile (if managing multiple) */}
        <div className="flex items-center gap-2">
          <label className="text-xs font-semibold text-slate-500">मेस निवडा:</label>
          <select 
            value={selectedMessId} 
            onChange={(e) => {
              setSelectedMessId(e.target.value);
              const m = messes.find(item => item.id === e.target.value);
              if (m) {
                setEditMenuForm({
                  sabji1: m.todayLunch?.sabji1 || '',
                  sabji2: m.todayLunch?.sabji2 || '',
                  roti: m.todayLunch?.roti || '',
                  rice: m.todayLunch?.rice || '',
                  sweet: m.todayLunch?.sweet || '',
                  dailyMealPrice: m.dailyMealPrice || 0,
                  deliveryExtraCharge: m.deliveryExtraCharge || 5
                });
              }
            }}
            className="text-xs font-medium p-2 bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            {messes.map(m => (
              <option key={m.id} value={m.id}>{m.name}</option>
            ))}
          </select>
        </div>
      </div>

      {/* KPI Stats Bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between text-slate-500 text-xs font-medium mb-1">
            <span>आजच्या ऑर्डर्स</span>
            <Utensils className="w-4 h-4 text-orange-500" />
          </div>
          <div className="text-2xl font-black text-slate-800">{messOrders.length}</div>
          <div className="text-[11px] text-orange-600 font-semibold">{pendingOrders} नवीन ऑर्डर्स बाकी</div>
        </div>

        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between text-slate-500 text-xs font-medium mb-1">
            <span>आजची कमाई (Revenue)</span>
            <DollarSign className="w-4 h-4 text-emerald-500" />
          </div>
          <div className="text-2xl font-black text-slate-800">₹{totalRevenue}</div>
          <div className="text-[11px] text-emerald-600 font-semibold">Self-Pickup + Delivery</div>
        </div>

        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between text-slate-500 text-xs font-medium mb-1">
            <span>मासिक सबस्क्रायबर्स</span>
            <Users className="w-4 h-4 text-blue-500" />
          </div>
          <div className="text-2xl font-black text-slate-800">{activeMess.subscribersCount}</div>
          <div className="text-[11px] text-blue-600 font-semibold">रेग्युलर डबे व थाळ्या</div>
        </div>

        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between text-slate-500 text-xs font-medium mb-1">
            <span>डिलिव्हरी चार्ज</span>
            <Truck className="w-4 h-4 text-purple-500" />
          </div>
          <div className="text-2xl font-black text-slate-800">+₹{activeMess.deliveryExtraCharge}</div>
          <div className="text-[11px] text-purple-600 font-semibold">प्रति डबा पॅकिंग/डिलिव्हरी</div>
        </div>
      </div>

      {/* Tabs Switcher */}
      <div className="flex border-b border-slate-200 gap-4">
        <button
          onClick={() => setActiveTab('orders')}
          className={`pb-3 text-xs sm:text-sm font-bold flex items-center gap-1.5 transition border-b-2 ${
            activeTab === 'orders' 
              ? 'border-orange-600 text-orange-600' 
              : 'border-transparent text-slate-500 hover:text-slate-800'
          }`}
        >
          <Bell className="w-4 h-4" />
          लाईव्ह ऑर्डर्स व टोकन ({messOrders.length})
        </button>

        <button
          onClick={() => setActiveTab('menu')}
          className={`pb-3 text-xs sm:text-sm font-bold flex items-center gap-1.5 transition border-b-2 ${
            activeTab === 'menu' 
              ? 'border-orange-600 text-orange-600' 
              : 'border-transparent text-slate-500 hover:text-slate-800'
          }`}
        >
          <Edit3 className="w-4 h-4" />
          आजचा मेनू अपडेट करा (Update Menu)
        </button>

        <button
          onClick={() => setActiveTab('subscribers')}
          className={`pb-3 text-xs sm:text-sm font-bold flex items-center gap-1.5 transition border-b-2 ${
            activeTab === 'subscribers' 
              ? 'border-orange-600 text-orange-600' 
              : 'border-transparent text-slate-500 hover:text-slate-800'
          }`}
        >
          <Users className="w-4 h-4" />
          पास धारक विद्यार्थी (Subscribers List)
        </button>
      </div>

      {/* TAB 1: LIVE ORDERS */}
      {activeTab === 'orders' && (
        <div className="space-y-4">
          {messOrders.length === 0 ? (
            <div className="bg-white rounded-xl p-8 text-center text-slate-500 border border-slate-200">
              सध्या एकही नवीन ऑर्डर नाही.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {messOrders.map(order => (
                <div 
                  key={order.id}
                  className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm space-y-3 relative overflow-hidden"
                >
                  <div className={`absolute top-0 left-0 right-0 h-1.5 ${
                    order.mode === 'pickup' ? 'bg-blue-500' : 'bg-orange-500'
                  }`} />

                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-base font-extrabold text-slate-900">{order.tokenNumber}</span>
                        <span className={`px-2 py-0.5 rounded-full text-[11px] font-bold ${
                          order.mode === 'pickup' 
                            ? 'bg-blue-100 text-blue-700' 
                            : 'bg-orange-100 text-orange-700'
                        }`}>
                          {order.mode === 'pickup' ? '🏪 Self-Pickup' : '🚚 Delivery (+₹5)'}
                        </span>
                      </div>
                      <div className="text-xs text-slate-400 mt-0.5">{order.orderTime} • {order.id}</div>
                    </div>

                    <div className="text-right">
                      <div className="text-lg font-black text-slate-800">₹{order.totalAmount}</div>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                        order.status === 'Ready' ? 'bg-emerald-100 text-emerald-700' :
                        order.status === 'Preparing' ? 'bg-amber-100 text-amber-700' :
                        'bg-slate-100 text-slate-600'
                      }`}>
                        {order.status}
                      </span>
                    </div>
                  </div>

                  <div className="bg-slate-50 p-3 rounded-lg text-xs space-y-1">
                    <div className="font-semibold text-slate-800">{order.studentName} ({order.studentPhone})</div>
                    <div className="text-slate-600">{order.mealType} × {order.quantity} थाळी</div>
                    <div className="text-slate-500 italic">पत्ता: {order.address}</div>
                  </div>

                  {/* Actions for Mess Owner */}
                  <div className="flex items-center gap-2 pt-1">
                    <button
                      onClick={() => onUpdateOrderStatus(order.id, 'Preparing')}
                      className={`flex-1 py-1.5 text-xs font-semibold rounded-lg border transition ${
                        order.status === 'Preparing' 
                          ? 'bg-amber-500 text-white border-amber-500' 
                          : 'border-slate-300 text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      तयार होत आहे (Preparing)
                    </button>

                    <button
                      onClick={() => onUpdateOrderStatus(order.id, 'Ready')}
                      className={`flex-1 py-1.5 text-xs font-semibold rounded-lg border transition ${
                        order.status === 'Ready' 
                          ? 'bg-emerald-600 text-white border-emerald-600' 
                          : 'border-slate-300 text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      तयार आहे (Ready / Dispatch)
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* TAB 2: UPDATE MENU */}
      {activeTab === 'menu' && (
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-lg font-bold text-slate-800">आजचा दुपारचा व रात्रीचा मेनू सेट करा</h2>
              <p className="text-xs text-slate-500">हा मेनू सर्व विद्यार्थ्यांना ॲपवर लगेच दिसेल.</p>
            </div>
            {menuSavedAlert && (
              <div className="bg-emerald-100 text-emerald-700 text-xs font-bold px-3 py-1.5 rounded-lg flex items-center gap-1 animate-pulse">
                <CheckCircle2 className="w-4 h-4" /> मेनू सेव्ह झाला!
              </div>
            )}
          </div>

          <form onSubmit={handleSaveMenu} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">पहिली भाजी (भाजी १):</label>
                <input
                  type="text"
                  required
                  value={editMenuForm.sabji1}
                  onChange={(e) => setEditMenuForm({ ...editMenuForm, sabji1: e.target.value })}
                  className="w-full text-xs p-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-orange-500 focus:outline-none"
                  placeholder="उदा. मटकी उसळ / पनीर बटर मसाला"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">दुसरी भाजी (भाजी २):</label>
                <input
                  type="text"
                  required
                  value={editMenuForm.sabji2}
                  onChange={(e) => setEditMenuForm({ ...editMenuForm, sabji2: e.target.value })}
                  className="w-full text-xs p-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-orange-500 focus:outline-none"
                  placeholder="उदा. दाल तडका / बटाटा सुकी भाजी"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">चपाती / भाकरी प्रकार:</label>
                <input
                  type="text"
                  required
                  value={editMenuForm.roti}
                  onChange={(e) => setEditMenuForm({ ...editMenuForm, roti: e.target.value })}
                  className="w-full text-xs p-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-orange-500 focus:outline-none"
                  placeholder="उदा. ३ गरम चपात्या / २ ज्वारी भाकरी"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">भात / राईस:</label>
                <input
                  type="text"
                  required
                  value={editMenuForm.rice}
                  onChange={(e) => setEditMenuForm({ ...editMenuForm, rice: e.target.value })}
                  className="w-full text-xs p-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-orange-500 focus:outline-none"
                  placeholder="उदा. जिरा राईस + वरण"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">गोड पदार्थ / स्वीट (ऑप्शनल):</label>
                <input
                  type="text"
                  value={editMenuForm.sweet}
                  onChange={(e) => setEditMenuForm({ ...editMenuForm, sweet: e.target.value })}
                  className="w-full text-xs p-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-orange-500 focus:outline-none"
                  placeholder="उदा. गुलाबजामुन / खीर / शिरा"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">थाळी मूळ किंमत (₹):</label>
                  <input
                    type="number"
                    required
                    value={editMenuForm.dailyMealPrice}
                    onChange={(e) => setEditMenuForm({ ...editMenuForm, dailyMealPrice: e.target.value })}
                    className="w-full text-xs p-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-orange-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">डिलिव्हरी एक्स्ट्रा (₹):</label>
                  <input
                    type="number"
                    required
                    value={editMenuForm.deliveryExtraCharge}
                    onChange={(e) => setEditMenuForm({ ...editMenuForm, deliveryExtraCharge: e.target.value })}
                    className="w-full text-xs p-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-orange-500 focus:outline-none"
                  />
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="px-6 py-2.5 bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs rounded-xl shadow-md transition flex items-center gap-2"
            >
              <Save className="w-4 h-4" /> मेनू अपडेट करा (Publish Menu)
            </button>
          </form>
        </div>
      )}

      {/* TAB 3: SUBSCRIBERS */}
      {activeTab === 'subscribers' && (
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-bold text-slate-800">मासिक पास धारक (Active Subscribers)</h2>
              <p className="text-xs text-slate-500">विद्यार्थ्यांचे उरलेले जेवण आणि QR हजेरी.</p>
            </div>
            <span className="text-xs font-bold bg-blue-50 text-blue-700 px-3 py-1 rounded-full border border-blue-200">
              एकूण {messSubs.length} विद्यार्थी
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50 text-slate-600">
                  <th className="p-3">विद्यार्थी नाव</th>
                  <th className="p-3">प्लॅन</th>
                  <th className="p-3">शिल्लक जेवण</th>
                  <th className="p-3">Skip केलेले</th>
                  <th className="p-3">QR टोकन</th>
                  <th className="p-3">स्टेटस</th>
                </tr>
              </thead>
              <tbody>
                {messSubs.map(sub => (
                  <tr key={sub.id} className="border-b border-slate-100 hover:bg-slate-50">
                    <td className="p-3 font-semibold text-slate-800">{sub.studentName}</td>
                    <td className="p-3 text-slate-600">{sub.plan}</td>
                    <td className="p-3 font-bold text-orange-600">{sub.remainingMeals} जेवण</td>
                    <td className="p-3 text-slate-500">{sub.skippedMeals} दिवस</td>
                    <td className="p-3 font-mono text-slate-500">{sub.qrToken}</td>
                    <td className="p-3">
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-700">
                        {sub.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
