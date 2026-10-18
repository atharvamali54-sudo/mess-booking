import React, { useState } from 'react';
import { 
  UtensilsCrossed, 
  GraduationCap, 
  ChefHat, 
  ShoppingBag, 
  Heart, 
  Share2, 
  Phone,
  Clock,
  Sparkles,
  Code
} from 'lucide-react';
import StudentView from './components/StudentView';
import MessOwnerDashboard from './components/MessOwnerDashboard';
import YourOrdersModal from './components/YourOrdersModal';
import { initialMesses, initialOrders, initialSubscriptions } from './data/mockData';

export default function App() {
  const [role, setRole] = useState('student'); // 'student' or 'owner'
  const [messes, setMesses] = useState(initialMesses);
  const [orders, setOrders] = useState(initialOrders);
  const [subscriptions, setSubscriptions] = useState(initialSubscriptions);
  const [ordersModalOpen, setOrdersModalOpen] = useState(false);

  // Place a new order
  const handlePlaceOrder = (newOrder) => {
    setOrders([newOrder, ...orders]);
    setOrdersModalOpen(true); // Automatically show Your Orders modal
  };

  // Update order status (Owner action)
  const handleUpdateOrderStatus = (orderId, newStatus) => {
    setOrders(orders.map(o => o.id === orderId ? { ...o, status: newStatus } : o));
  };

  // Update mess menu / prices (Owner action)
  const handleUpdateMenu = (messId, updatedMess) => {
    setMesses(messes.map(m => m.id === messId ? updatedMess : m));
  };

  // Skip meal (Student action)
  const handleSkipMeal = (subId) => {
    setSubscriptions(subscriptions.map(s => {
      if (s.id === subId) {
        return {
          ...s,
          skippedMeals: s.skippedMeals + 1,
          remainingMeals: s.remainingMeals // preserved, not wasted
        };
      }
      return s;
    }));
    alert('तुमची सुट्टी नोंदवली गेली आहे! हे जेवण वाया जाणार नाही आणि पुढे वाढवले जाईल.');
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-900">
      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-2">
          {/* Logo & Brand */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-orange-600 to-amber-500 flex items-center justify-center text-white shadow-md shadow-orange-500/20">
              <UtensilsCrossed className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-black text-lg text-slate-900 tracking-tight">मेस बुकिंग</span>
                <span className="bg-orange-100 text-orange-700 text-[10px] font-extrabold px-2 py-0.5 rounded-full">
                  Mess & Food
                </span>
              </div>
              <p className="text-[11px] text-slate-500 font-medium hidden sm:block">For Students & Mess Owners</p>
            </div>
          </div>

          {/* Right Header Navigation */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* "Your Orders" button (दिसणारा पर्याय) */}
            <button
              onClick={() => setOrdersModalOpen(true)}
              className="relative flex items-center gap-1.5 px-3 py-2 rounded-xl bg-orange-50 hover:bg-orange-100 text-orange-700 border border-orange-200 text-xs font-bold transition shadow-sm"
              title="तुमच्या ऑर्डर्सचे स्टेटस पहा"
            >
              <ShoppingBag className="w-4 h-4 text-orange-600" />
              <span>Your Orders</span>
              {orders.length > 0 && (
                <span className="w-5 h-5 rounded-full bg-orange-600 text-white text-[10px] font-black flex items-center justify-center shadow-sm">
                  {orders.length}
                </span>
              )}
            </button>

            {/* Role Switcher Toggle */}
            <div className="flex items-center bg-slate-100 p-1 rounded-xl border border-slate-200">
              <button
                onClick={() => setRole('student')}
                className={`flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  role === 'student'
                    ? 'bg-white text-orange-600 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <GraduationCap className="w-4 h-4" />
                <span className="hidden md:inline">विद्यार्थी / बॅचलर्स</span>
                <span className="md:hidden">Student</span>
              </button>

              <button
                onClick={() => setRole('owner')}
                className={`flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  role === 'owner'
                    ? 'bg-white text-orange-600 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <ChefHat className="w-4 h-4" />
                <span className="hidden md:inline">मेस मालक (Owner)</span>
                <span className="md:hidden">Owner</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 py-6">
        {role === 'student' ? (
          <StudentView 
            messes={messes}
            onPlaceOrder={handlePlaceOrder}
            subscriptions={subscriptions}
            onSkipMeal={handleSkipMeal}
          />
        ) : (
          <MessOwnerDashboard 
            messes={messes}
            orders={orders}
            onUpdateOrderStatus={handleUpdateOrderStatus}
            onUpdateMenu={handleUpdateMenu}
            subscriptions={subscriptions}
          />
        )}
      </main>

      {/* Your Orders Status Modal */}
      <YourOrdersModal 
        isOpen={ordersModalOpen}
        onClose={() => setOrdersModalOpen(false)}
        orders={orders}
      />

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-6 mt-12 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <span className="font-bold text-slate-800">मेस बुकिंग प्लॅटफॉर्म</span> • घरगुती जेवण आणि स्नॅक्स बुकिंग
          </div>
          <div className="flex items-center gap-4 text-slate-600">
            <span>Self-Pickup: ₹80</span>
            <span>•</span>
            <span>Order/Delivery: ₹85 (+₹5)</span>
            <span>•</span>
            <a 
              href="https://github.com/atharvamali54-sudo/mess-booking" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-1 text-slate-900 hover:text-orange-600 font-medium"
            >
              <Code className="w-4 h-4" /> GitHub Repo
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
