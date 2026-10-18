import React from 'react';
import { 
  X, 
  ShoppingBag, 
  Clock, 
  CheckCircle2, 
  Store, 
  Truck, 
  Phone, 
  MapPin, 
  AlertCircle 
} from 'lucide-react';

export default function YourOrdersModal({ isOpen, onClose, orders }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-xl w-full p-6 shadow-2xl border border-slate-200 relative my-8 animate-in fade-in zoom-in duration-200 max-h-[85vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-black text-slate-800">तुमच्या ऑर्डर्स (Your Orders)</h2>
              <p className="text-xs text-slate-500">लाईव्ह स्टेटस आणि टोकन ट्रॅक करा</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Order List */}
        <div className="flex-1 overflow-y-auto py-4 space-y-4 pr-1">
          {orders.length === 0 ? (
            <div className="text-center py-12 text-slate-500">
              <ShoppingBag className="w-12 h-12 text-slate-300 mx-auto mb-2" />
              <p className="font-bold text-sm">तुम्ही अजून एकही ऑर्डर केलेली नाही.</p>
              <p className="text-xs text-slate-400 mt-1">मेस निवडून Self-Pickup किंवा Delivery ऑर्डर करा!</p>
            </div>
          ) : (
            orders.map(order => {
              const isPickup = order.mode === 'pickup';
              const isReady = order.status === 'Ready';
              const isPreparing = order.status === 'Preparing';
              const isDelivered = order.status === 'Delivered';

              return (
                <div 
                  key={order.id}
                  className="bg-slate-50 rounded-xl p-4 border border-slate-200 space-y-3 relative overflow-hidden transition hover:shadow-sm"
                >
                  <div className={`absolute top-0 left-0 right-0 h-1.5 ${
                    isReady ? 'bg-emerald-500' : isPreparing ? 'bg-amber-500' : 'bg-orange-500'
                  }`} />

                  {/* Top Bar of Card */}
                  <div className="flex items-start justify-between pt-1">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono font-bold bg-slate-900 text-white px-2 py-0.5 rounded-md">
                          {order.tokenNumber}
                        </span>
                        <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${
                          isPickup ? 'bg-blue-100 text-blue-700' : 'bg-orange-100 text-orange-700'
                        }`}>
                          {isPickup ? '🏪 Self-Pickup' : '🚚 Room Delivery'}
                        </span>
                      </div>
                      <h3 className="text-sm font-bold text-slate-800 mt-1">{order.messName}</h3>
                      <p className="text-[11px] text-slate-500 flex items-center gap-1">
                        <Clock className="w-3 h-3 text-slate-400" /> {order.orderTime} • {order.id}
                      </p>
                    </div>

                    <div className="text-right">
                      <div className="text-base font-black text-slate-900">₹{order.totalAmount}</div>
                      <span className={`inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-full mt-1 ${
                        isReady 
                          ? 'bg-emerald-100 text-emerald-700 border border-emerald-300' 
                          : isPreparing 
                          ? 'bg-amber-100 text-amber-700 border border-amber-300' 
                          : 'bg-orange-100 text-orange-700 border border-orange-200'
                      }`}>
                        {isReady && <CheckCircle2 className="w-3 h-3 text-emerald-600" />}
                        {isPreparing && <Clock className="w-3 h-3 text-amber-600 animate-spin" />}
                        {order.status === 'Ready' ? 'तयार आहे (Ready)' : order.status === 'Preparing' ? 'बनत आहे (Cooking)' : 'नोंदवली (Pending)'}
                      </span>
                    </div>
                  </div>

                  {/* Order Items Info */}
                  <div className="bg-white p-3 rounded-lg border border-slate-200 text-xs space-y-1">
                    <div className="flex justify-between font-semibold text-slate-800">
                      <span>{order.mealType} × {order.quantity}</span>
                      <span>₹{order.basePrice}</span>
                    </div>
                    {order.deliveryFee > 0 && (
                      <div className="flex justify-between text-slate-500">
                        <span>डिलिव्हरी/पॅकिंग फी:</span>
                        <span>+₹{order.deliveryFee}</span>
                      </div>
                    )}
                    <div className="text-[11px] text-slate-500 pt-1 border-t border-slate-100 flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-orange-500 shrink-0" />
                      <span className="truncate">{order.address}</span>
                    </div>
                  </div>

                  {/* Status Steps Tracker */}
                  <div className="bg-white p-2.5 rounded-lg border border-slate-200">
                    <div className="flex items-center justify-between text-[11px]">
                      <div className="flex items-center gap-1 font-semibold text-emerald-600">
                        <CheckCircle2 className="w-3.5 h-3.5" /> ऑर्डर स्वीकारली
                      </div>
                      <span className="text-slate-300">➔</span>
                      <div className={`flex items-center gap-1 font-semibold ${
                        isPreparing || isReady ? 'text-amber-600' : 'text-slate-400'
                      }`}>
                        <Clock className="w-3.5 h-3.5" /> किचनमध्ये तयार होत आहे
                      </div>
                      <span className="text-slate-300">➔</span>
                      <div className={`flex items-center gap-1 font-semibold ${
                        isReady ? 'text-emerald-600' : 'text-slate-400'
                      }`}>
                        <CheckCircle2 className="w-3.5 h-3.5" /> {isPickup ? 'मेसवर तयार' : 'डिलिव्हरीसाठी तयार'}
                      </div>
                    </div>
                  </div>

                  {isPickup && isReady && (
                    <div className="bg-emerald-50 border border-emerald-200 p-2.5 rounded-lg text-xs text-emerald-800 font-medium flex items-center gap-2">
                      <Store className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>तुमचा डबा तयार आहे! मेसवर जाऊन <strong>{order.tokenNumber}</strong> हा टोकन नंबर सांगा.</span>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Footer */}
        <div className="pt-3 border-t border-slate-100 text-center">
          <button 
            onClick={onClose}
            className="w-full py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-xl transition"
          >
            बंद करा (Close)
          </button>
        </div>
      </div>
    </div>
  );
}
