'use client';
import { FaChevronLeft, FaMinus, FaPlus, FaTrash, FaShoppingBasket, FaArrowRight, FaTicketAlt, FaShieldAlt } from 'react-icons/fa';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Link from 'next/link';

export default function CartPage() {
  const router = useRouter();
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Paracetamol 500mg", price: "12.500", qty: 2, icon: <FaShoppingBasket /> },
    { id: 2, name: "Vitamin C 1000mg", price: "45.000", qty: 1, icon: <FaShieldAlt /> }
  ]);

  const updateQty = (id: number, delta: number) => {
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, qty: Math.max(1, item.qty + delta) } : item
    ));
  };

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((acc, item) => acc + (parseInt(item.price.replace('.', '')) * item.qty), 0);

  return (
    <>
      <Navbar />
      <main className="min-h-screen pb-40 pt-32 bg-white">
        {/* Header Action */}
        <div className="px-6 max-w-[450px] mx-auto mb-10 flex justify-between items-center">
          <button 
            onClick={() => router.back()} 
            className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center text-gray-900 border border-gray-100 shadow-sm active:scale-90 transition-all font-black text-xs"
          >
            <FaChevronLeft />
          </button>
          <div className="text-center">
             <h1 className="text-[12px] font-black text-gray-900 uppercase tracking-[0.3em]">Keranjang Belanja</h1>
             <p className="text-[9px] text-gray-400 font-bold uppercase tracking-widest mt-1">{cartItems.length} Produk Ditemukan</p>
          </div>
          <div className="w-12" />
        </div>

        <div className="max-w-[450px] mx-auto px-8">
           {cartItems.length === 0 ? (
             <div className="mt-20 text-center opacity-30 flex flex-col items-center">
                <div className="w-24 h-24 bg-gray-100 rounded-[2.5rem] flex items-center justify-center text-4xl mb-8">
                   <FaShoppingBasket className="text-gray-400" />
                </div>
                <h3 className="text-lg font-black text-gray-400 mb-2">Keranjang Kosong</h3>
                <p className="text-[11px] font-black uppercase tracking-widest max-w-[200px]">Cari obat yang kamu butuhkan sekarang</p>
                <Link href="/toko" className="mt-8 text-primary font-black uppercase text-[10px] tracking-widest border-2 border-primary/10 px-8 py-4 rounded-2xl">Mulai Belanja</Link>
             </div>
           ) : (
             <div className="space-y-6">
                {cartItems.map((item) => (
                  <div key={item.id} className="p-6 bg-white rounded-4xl border border-gray-100 shadow-premium flex gap-5 group relative overflow-hidden transition-all hover:bg-zinc-50">
                     <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button 
                          onClick={() => removeItem(item.id)}
                          className="w-8 h-8 rounded-xl bg-rose-50 text-rose-500 flex items-center justify-center text-xs active:scale-90 transition-all"
                        >
                           <FaTrash />
                        </button>
                     </div>
                     <div className="w-20 h-20 bg-zinc-50 rounded-3xl flex items-center justify-center text-4xl text-gray-300 shadow-inner shrink-0 scale-100 group-hover:scale-105 group-hover:rotate-6 transition-transform">
                        {item.icon}
                     </div>
                     <div className="flex-1 min-w-0 flex flex-col justify-between">
                        <div className="pr-4">
                           <h3 className="text-[14px] font-black text-gray-900 leading-tight mb-1 truncate">{item.name}</h3>
                           <p className="text-[12px] font-black text-primary">Rp {item.price}</p>
                        </div>
                        <div className="flex items-center gap-4 mt-4">
                           <button 
                              onClick={() => updateQty(item.id, -1)}
                              className="w-10 h-10 rounded-xl bg-white border border-gray-100 shadow-sm flex items-center justify-center text-[10px] text-gray-400 hover:text-primary transition-colors active:scale-90"
                           >
                              <FaMinus />
                           </button>
                           <span className="text-[14px] font-black text-gray-900 w-4 text-center">{item.qty}</span>
                           <button 
                              onClick={() => updateQty(item.id, 1)}
                              className="w-10 h-10 rounded-xl bg-gray-900 text-white flex items-center justify-center text-[10px] hover:bg-primary transition-all active:scale-90 shadow-lg"
                           >
                              <FaPlus />
                           </button>
                        </div>
                     </div>
                  </div>
                ))}

                {/* Additional Info / Promo */}
                <div className="pt-10 pb-8 space-y-4">
                   <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-widest px-2">Voucher Tersedia</h4>
                   <div className="bg-emerald-50 p-5 rounded-3xl border border-emerald-100 flex items-center justify-between group active:scale-95 transition-all cursor-pointer">
                      <div className="flex items-center gap-4">
                         <FaTicketAlt className="text-emerald-500 text-lg" />
                         <span className="text-[10px] font-black text-emerald-900 uppercase tracking-widest">Gunakan Voucher Cuan</span>
                      </div>
                      <FaArrowRight className="text-emerald-300 text-xs" />
                   </div>
                </div>

                {/* Checkout Summary Bar */}
                <div className="pt-8 border-t border-gray-50 mb-40">
                   <div className="flex justify-between items-center mb-6">
                      <span className="text-[14px] font-black text-gray-400 uppercase tracking-[0.2em]">Subtotal</span>
                      <span className="text-2xl font-black text-gray-900 tracking-tight">Rp {subtotal.toLocaleString('id-ID')}</span>
                   </div>
                   <p className="text-[10px] text-gray-400 font-medium leading-relaxed italic">*Belum termasuk ongkos kirim dan biaya administrasi.</p>
                </div>
             </div>
           )}
        </div>

        {/* Sticky Proceed to Checkout Bar */}
        {cartItems.length > 0 && (
          <div className="fixed bottom-10 left-6 right-6 z-50">
             <div className="max-w-[400px] mx-auto bg-gray-900 text-white p-4 rounded-4xl shadow-2xl flex items-center justify-between border border-white/10 ring-1 ring-white/10 backdrop-blur-2xl">
                <div className="flex flex-col pl-4">
                   <p className="text-[8px] text-white/40 font-black uppercase tracking-widest">Total Bayar</p>
                   <p className="text-[16px] font-black text-white leading-none mt-1">Rp {subtotal.toLocaleString('id-ID')}</p>
                </div>
                <button 
                  onClick={() => router.push('/toko/checkout')}
                  className="h-12 bg-primary text-white px-8 rounded-2xl flex items-center justify-center gap-3 text-[10px] font-black uppercase tracking-widest hover:opacity-90 transition-all active:scale-95 shadow-primary-sm"
                >
                   Checkout <FaArrowRight />
                </button>
             </div>
          </div>
        )}
      </main>
    </>
  );
}
