'use client';
import { FaChevronLeft, FaCheckCircle, FaTruck, FaClock, FaCalendarAlt, FaFileAlt, FaMapMarkerAlt, FaShoppingBasket, FaStar, FaArrowRight, FaCommentDots } from 'react-icons/fa';
import { useParams, useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Link from 'next/link';

export default function OrderSuccessPage() {
  const params = useParams();
  const router = useRouter();

  // Mock transaction data
  const transaction = {
    id: params.id || "ORD-992837",
    status: "Sedang Dikemas",
    date: "16 Mar 2026, 13:55",
    shipping: {
      provider: "Neura Express (Instant)",
      estimate: "15-30 Menit",
      courier: "Andi Saputra"
    },
    items: [
      { name: "Paracetamol 500mg", qty: 2, price: "25.000" },
      { name: "Vitamin C 1000mg", qty: 1, price: "45.000" }
    ],
    total: "81.000",
    payment: "Neura Wallet"
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen pb-40 pt-32 bg-white relative overflow-hidden">
        {/* Background Sparkle Decoration */}
        <div className="absolute top-0 inset-x-0 h-[40vh] bg-primary/5 blur-[100px] rounded-full -translate-y-1/2"></div>
        
        {/* Header Action */}
        <div className="px-6 max-w-[450px] mx-auto mb-10 flex justify-between items-center relative z-10">
          <button 
            onClick={() => router.push('/toko')} 
            className="w-12 h-12 rounded-2xl bg-white border border-gray-100 shadow-sm flex items-center justify-center text-gray-900 active:scale-90 transition-all font-black text-xs"
          >
            <FaChevronLeft />
          </button>
          <div className="text-center">
             <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Transaction Success</p>
             <p className="text-[12px] font-black text-gray-900 uppercase tracking-[0.2em]">{transaction.id}</p>
          </div>
          <div className="w-12" />
        </div>

        <div className="max-w-[450px] mx-auto relative z-10">
           {/* Success Animation Area */}
           <div className="px-8 flex flex-col items-center text-center mb-16 animate-in fade-in zoom-in duration-1000">
              <div className="w-24 h-24 bg-emerald-50 text-emerald-500 rounded-[2.5rem] flex items-center justify-center text-5xl mb-8 shadow-inner border border-emerald-100/50">
                 <FaCheckCircle className="animate-pulse" />
              </div>
              <h1 className="text-3xl font-black text-gray-900 leading-tight mb-3">Pesanan <span className="text-emerald-500">Berhasil!</span></h1>
              <p className="text-[14px] text-gray-400 font-medium leading-relaxed max-w-[280px]">Pembayaran terverifikasi. Apotek sedang menyiapkan obatmu.</p>
           </div>

           {/* Order Live Status */}
           <div className="px-6 mb-12">
              <div className="bg-gray-950 p-10 rounded-5xl text-white shadow-2xl relative overflow-hidden group">
                 <div className="absolute top-0 right-0 w-40 h-40 bg-primary/20 rounded-full blur-3xl opacity-50 group-hover:scale-110 transition-transform"></div>
                 <div className="flex items-center gap-4 mb-10 relative z-10">
                    <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-3xl text-primary border border-white/10 backdrop-blur-xl group-hover:rotate-12 transition-transform">
                       <FaTruck />
                    </div>
                    <div className="flex flex-col">
                       <p className="text-[10px] text-white/40 font-black uppercase tracking-widest leading-none mb-1.5">Status Pengiriman</p>
                       <h3 className="text-lg font-black text-white leading-none">{transaction.status}</h3>
                    </div>
                 </div>
                 
                 {/* Progress Steps (Vertical) */}
                 <div className="space-y-6 relative z-10 pl-4 border-l border-white/5 ml-3">
                    <div className="relative">
                       <div className="absolute -left-[2.35rem] top-1 w-3 h-3 rounded-full bg-primary shadow-[0_0_15px_rgba(255,46,108,0.6)]"></div>
                       <p className="text-[12px] font-black text-white opacity-100">Menyiapkan Pesanan</p>
                       <p className="text-[9px] text-white/40 font-black tracking-widest uppercase mt-1">13:56 • Apotek Neura Center</p>
                    </div>
                    <div className="relative">
                       <div className="absolute -left-[2.35rem] top-1 w-3 h-3 rounded-full bg-white/10 border border-white/10"></div>
                       <p className="text-[12px] font-black text-white/30">Menunggu Kurir</p>
                    </div>
                 </div>
              </div>
           </div>

           {/* Detail Summary Cards */}
           <div className="px-8 space-y-8 mb-20">
              {/* Order Info */}
              <div className="grid grid-cols-1 gap-6">
                 <div className="bg-zinc-50 p-8 rounded-4xl border border-zinc-100/50 space-y-6">
                    <div className="flex items-center gap-5">
                       <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-primary shadow-sm border border-gray-50">
                          <FaCalendarAlt className="text-sm" />
                       </div>
                       <div>
                          <p className="text-[8px] text-gray-400 font-black uppercase tracking-widest mb-1">Waktu Pesanan</p>
                          <p className="text-[13px] font-black text-gray-900">{transaction.date}</p>
                       </div>
                    </div>
                    
                    <div className="flex items-center gap-5">
                       <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-primary shadow-sm border border-gray-50">
                          <FaShoppingBasket className="text-sm" />
                       </div>
                       <div>
                          <p className="text-[8px] text-gray-400 font-black uppercase tracking-widest mb-1">Metode Bayar</p>
                          <p className="text-[13px] font-black text-gray-900">{transaction.payment}</p>
                       </div>
                    </div>
                    
                    <div className="flex items-center gap-5">
                       <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-primary shadow-sm border border-gray-50">
                          <FaFileAlt className="text-sm" />
                       </div>
                       <div className="flex justify-between items-center flex-1">
                          <div>
                             <p className="text-[8px] text-gray-400 font-black uppercase tracking-widest mb-1">Total Tagihan</p>
                             <p className="text-[14px] font-black text-gray-900">Rp {transaction.total}</p>
                          </div>
                          <button className="text-[10px] font-black text-primary uppercase tracking-widest underline decoration-2 underline-offset-4">Lihat Invoice</button>
                       </div>
                    </div>
                 </div>
              </div>

              {/* Items Summary (Accordion style list) */}
              <div className="bg-white rounded-4xl p-8 border border-gray-100 shadow-premium">
                 <h4 className="text-[12px] font-black text-gray-900 uppercase tracking-widest mb-8 flex items-center gap-3">
                    <FaShoppingBasket className="text-primary" /> Pesanan Kamu
                 </h4>
                 <div className="space-y-6">
                    {transaction.items.map((item, i) => (
                      <div key={i} className="flex justify-between items-center text-[13px]">
                         <div className="flex items-center gap-4">
                            <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
                            <p className="font-black text-gray-700">{item.name} <span className="text-gray-300 font-medium ml-2">x{item.qty}</span></p>
                         </div>
                         <p className="font-black text-gray-900">Rp {item.price}</p>
                      </div>
                    ))}
                 </div>
              </div>

              {/* Courier Insight / Feedback */}
              <div className="bg-primary/5 p-8 rounded-5xl border border-primary/10 flex flex-col items-center text-center group">
                 <div className="w-16 h-16 bg-white rounded-4xl flex items-center justify-center text-primary text-2xl mb-6 shadow-sm group-hover:scale-105 transition-transform">
                    <FaCommentDots />
                 </div>
                 <h3 className="text-lg font-black text-gray-900 mb-2">Butuh bantuan pesanan?</h3>
                 <p className="text-[12px] text-gray-500 font-medium leading-relaxed max-w-[240px]">Hubungi Customer Success Neura jika ada kendala dengan obatmu.</p>
                 <button className="w-full mt-10 h-16 bg-gray-900 text-white rounded-3xl text-[11px] font-black uppercase tracking-[0.2em] shadow-xl hover:bg-primary transition-all active:scale-95 flex items-center justify-center gap-4">
                    Hubungi Neura Care <FaArrowRight />
                 </button>
              </div>
           </div>
           
           <div className="text-center pb-20 opacity-30">
              <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.4em]">Thank you for buying <br /> with Neura Health</p>
           </div>
        </div>
      </main>
    </>
  );
}
