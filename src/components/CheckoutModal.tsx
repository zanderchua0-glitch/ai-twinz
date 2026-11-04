import React, { useState } from 'react';
import { useTwin } from '../context/TwinContext';
import { ProductCandidate, CheckoutReceipt } from '../types';
import { 
  X, 
  CreditCard, 
  MapPin, 
  Truck, 
  ShieldCheck, 
  Zap, 
  RotateCcw, 
  CheckCircle2, 
  ExternalLink, 
  Sparkles,
  ArrowRight
} from 'lucide-react';

interface CheckoutModalProps {
  product: ProductCandidate | null;
  onClose: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({ product, onClose }) => {
  const { profile, executeOneTapCheckout, isCheckingOut, checkoutReceipt } = useTwin();
  const [localReceipt, setLocalReceipt] = useState<CheckoutReceipt | null>(checkoutReceipt);

  if (!product) return null;

  const handleAuthorize = async () => {
    const res = await executeOneTapCheckout(product);
    setLocalReceipt(res);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-xl bg-slate-900 border-2 border-cyan-500/50 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-cyan-950 text-slate-100 overflow-hidden">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!localReceipt ? (
          /* Pre-Authorization Confirmation Screen */
          <div className="space-y-6">
            
            {/* Header */}
            <div>
              <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono font-bold uppercase tracking-wider mb-1">
                <Zap className="w-4 h-4 fill-cyan-400" />
                <span>One-Tap Tokenized Autonomous Checkout</span>
              </div>
              <h2 className="text-2xl font-black text-white">
                Authorize Pre-Configured Order
              </h2>
              <p className="text-xs text-slate-400 mt-1">
                Your Digital Twin pre-selected sizing, verified authentic stock, and negotiated shipping.
              </p>
            </div>

            {/* Product Summary Row */}
            <div className="flex items-center gap-4 p-3.5 rounded-2xl bg-slate-950 border border-slate-800">
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-16 h-16 rounded-xl object-cover border border-slate-800"
              />
              <div className="flex-1 min-w-0">
                <div className="text-xs font-mono text-cyan-400 uppercase font-semibold">{product.brand}</div>
                <div className="font-bold text-white text-sm truncate">{product.name}</div>
                <div className="text-xs text-emerald-400 font-medium mt-0.5">
                  Pre-Selected: {profile.sizing.shoeSize} • {profile.sizing.shoeWidth}
                </div>
              </div>
              <div className="text-right">
                <div className="text-xl font-black text-white">${product.price.toFixed(2)}</div>
                <div className="text-[10px] text-slate-500 uppercase font-mono">Tax & Duties Inc.</div>
              </div>
            </div>

            {/* Address & Payment Token Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              
              {/* Shipping Address */}
              <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800/90 space-y-1.5">
                <div className="flex items-center gap-2 text-slate-400 font-mono uppercase text-[10px]">
                  <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Pre-Configured Destination</span>
                </div>
                <div className="font-semibold text-slate-200">742 Evergreen Terrace</div>
                <div className="text-slate-400 text-[11px]">San Francisco, CA 94107, USA</div>
                <div className="text-[10px] text-cyan-400 font-medium">Expedited Tokyo Transit Pre-Clearance</div>
              </div>

              {/* Tokenized Payment */}
              <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800/90 space-y-1.5">
                <div className="flex items-center gap-2 text-slate-400 font-mono uppercase text-[10px]">
                  <CreditCard className="w-3.5 h-3.5 text-amber-400" />
                  <span>Tokenized Payment Vault</span>
                </div>
                <div className="font-semibold text-slate-200 flex items-center gap-1.5">
                  <span>Visa ending in 4242</span>
                  <span className="text-[9px] px-1.5 py-0.5 rounded bg-emerald-950 border border-emerald-500/40 text-emerald-300 font-mono">Verified</span>
                </div>
                <div className="text-slate-400 text-[11px] font-mono">Stripe Customer off_session</div>
                <div className="text-[10px] text-slate-500">Zero CVV or Form Entry Needed</div>
              </div>

            </div>

            {/* Trust Assurance Badge */}
            <div className="p-3 rounded-xl bg-cyan-950/30 border border-cyan-500/30 text-xs text-slate-300 flex items-start gap-2.5">
              <ShieldCheck className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-cyan-300">AI Twinz Zero-Friction Guarantee:</span>
                <span className="text-slate-300 ml-1">
                  If the fit differs from your 10.5 EE tolerance in Tokyo, your Digital Twin schedules automatic courier pickup with full reimbursement.
                </span>
              </div>
            </div>

            {/* Slide / Click to Authorize */}
            <div className="pt-2">
              <button
                onClick={handleAuthorize}
                disabled={isCheckingOut}
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-extrabold text-base shadow-xl shadow-cyan-500/30 flex items-center justify-center gap-2 transition-all active:scale-[0.98] disabled:opacity-50"
              >
                {isCheckingOut ? (
                  <>
                    <RotateCcw className="w-5 h-5 animate-spin" />
                    <span>Clearing Stripe PaymentIntent & Holding SKU...</span>
                  </>
                ) : (
                  <>
                    <Zap className="w-5 h-5 fill-amber-300 text-amber-300" />
                    <span>Authorize One-Tap Purchase • ${product.price.toFixed(2)}</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>

          </div>
        ) : (
          /* Post-Purchase Success & Receipt Screen */
          <div className="space-y-6 text-center animate-fadeIn">
            
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-400 flex items-center justify-center mx-auto shadow-xl shadow-emerald-500/30">
              <CheckCircle2 className="w-8 h-8 text-emerald-400" />
            </div>

            <div>
              <div className="text-xs font-mono uppercase text-emerald-400 font-bold tracking-wider mb-1">
                Payment Authorized & Order Confirmed
              </div>
              <h2 className="text-2xl font-black text-white">
                Autonomous Execution Complete!
              </h2>
              <p className="text-xs text-slate-400 mt-1 max-w-sm mx-auto">
                No checkout forms, no address entry, no fake reviews. Delivered directly for your trip.
              </p>
            </div>

            {/* Receipt Card */}
            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-left text-xs space-y-2.5 font-mono">
              <div className="flex justify-between border-b border-slate-800 pb-2">
                <span className="text-slate-500">Order ID:</span>
                <span className="text-cyan-300 font-bold">{localReceipt.orderId}</span>
              </div>
              <div className="flex justify-between border-b border-slate-800 pb-2">
                <span className="text-slate-500">Authorized At:</span>
                <span className="text-slate-200">{localReceipt.authorizedAt}</span>
              </div>
              <div className="flex justify-between border-b border-slate-800 pb-2">
                <span className="text-slate-500">Tracking Code:</span>
                <span className="text-emerald-400 font-bold">{localReceipt.trackingNumber}</span>
              </div>
              <div className="flex justify-between border-b border-slate-800 pb-2">
                <span className="text-slate-500">Estimated Delivery:</span>
                <span className="text-slate-200">{localReceipt.estimatedDeliveryDate}</span>
              </div>
              <div className="flex justify-between pt-1">
                <span className="text-slate-500">Total Billed:</span>
                <span className="text-white font-black text-sm">${localReceipt.amount.toFixed(2)} USD</span>
              </div>
            </div>

            {/* Memory Feedback */}
            <div className="p-3.5 rounded-2xl bg-indigo-950/30 border border-indigo-500/30 text-left text-xs space-y-1.5">
              <div className="flex items-center gap-1.5 text-indigo-300 font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Context Graph Compounding Learning:</span>
              </div>
              <p className="text-slate-300 text-[11px] leading-relaxed">
                {localReceipt.twinPostPurchaseFeedbackLearned}
              </p>
            </div>

            <button
              onClick={onClose}
              className="w-full py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm transition-colors"
            >
              Back to Concierge
            </button>

          </div>
        )}

      </div>
    </div>
  );
};
