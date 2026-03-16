'use client';
import { FaChevronLeft, FaMapMarkerAlt, FaTruck, FaWallet, FaTicketAlt, FaShieldAlt, FaShoppingBasket, FaCheckCircle, FaArrowRight, FaCreditCard, FaStore } from 'react-icons/fa';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Link from 'next/link';

export default function CheckoutPage() {
  const router = useRouter();
  const [paymentStep, setPaymentStep] = useState(0); // 0: checkout, 1: success

  // Mock checkout data
  const order = {
    items: [
      { name: "Paracetamol 500mg", price: "12.500", qty: 2, icon: <FaShoppingBasket /> },
      { name: "Vitamin C 1000mg", price: "45.000", qty: 1, icon: <FaShieldAlt /> }
    ],
    address: {
      type: "Kamar Kos / Asrama",
      detail: "Asrama Mahasiswa UI, Blok C No. 402",
      receiver: "Budi Setiawan (+62 812-3456-7890)"
    },
    shipping: {
      provider: "Neura Express (Instant)",
      price: "10.000",
      etd: "Tiba dalam 15-30 menit"
    },
    paymentMethods: [
      { id: 'neura-wallet', name: 'Neura Wallet', balance: 'Rp 125.000', icon: <FaWallet />, selected: true },
      { id: 'qris', name: 'QRIS / E-Wallet', icon: <FaCreditCard />, selected: false }
    ],
    summary: {
      subtotal: "70.000",
      delivery: "10.000",
      appFee: "1.000",
      total: "81.000"
    }
  };

  const handlePayment = () => {
    // Navigate to transaction success
    router.push('/toko/transaksi/ORD-992837');
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen pb-40 pt-32 bg-white">
        {/* Header Section */}
        <div className="px-6 max-w-[450px] mx-auto mb-8 flex justify-between items-center">
          <button 
            onClick={() => router.back()} 
            className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center text-gray-900 border border-gray-100 shadow-sm active:scale-90 transition-all font-black text-xs"
          >
            <FaChevronLeft />
          </button>
          <h1 className="text-[12px] font-black text-gray-900 uppercase tracking-[0.3em]">Ringkasan Pesanan</h1>
          <div className="w-12" /> {/* Spacer */}
        </div>

        <div className="max-w-[450px] mx-auto">
           {/* Section: Address */}
           <div className="px-8 mb-10">
              <h2 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-4">Alamat Pengiriman</h2>
              <div className="p-6 bg-zinc-50 rounded-4xl border border-zinc-100 flex gap-5 items-start group hover:border-primary/20 transition-all cursor-pointer">
                 <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-primary shadow-sm border border-gray-100 shrink-0">
                    <FaMapMarkerAlt />
                 </div>
                 <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                       <span className="text-[11px] font-black text-gray-900">{order.address.type}</span>
                       <span className="bg-primary/10 text-primary text-[7px] font-black px-1.5 py-0.5 rounded-full uppercase">Utama</span>
                    </div>
                    <p className="text-[12px] text-gray-600 font-medium truncate mb-1">{order.address.detail}</p>
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-tight">{order.address.receiver}</p>
                 </div>
                 <FaChevronLeft className="text-gray-200 rotate-180 text-xs mt-3 group-hover:text-primary transition-all" />
              </div>
           </div>

           {/* Section: Order Items */}
           <div className="px-8 mb-10">
              <div className="flex justify-between items-center mb-4">
                 <h2 className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Detail Produk</h2>
                 <Link href="/toko" className="text-[9px] font-black text-primary uppercase tracking-widest">Tambah Lagi</Link>
              </div>
              <div className="space-y-4">
                 {order.items.map((item, i) => (
                   <div key={i} className="flex gap-5 items-center p-4 bg-white rounded-3xl border border-gray-50 shadow-premium">
                      <div className="w-14 h-14 bg-zinc-50 rounded-2xl flex items-center justify-center text-2xl text-gray-300 shadow-inner group">
                         {item.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                         <h4 className="text-[13px] font-black text-gray-900 truncate mb-1">{item.name}</h4>
                         <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest leading-none">Rp {item.price} • {item.qty} Pcs</p>
                      </div>
                      <div className="text-right">
                         <p className="text-[13px] font-black text-gray-900">Rp {parseInt(item.price.replace('.', '')) * item.qty}</p>
                      </div>
                   </div>
                 ))}
              </div>
           </div>

           {/* Section: Shipping Courier */}
           <div className="px-8 mb-10">
              <h2 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-4">Layanan Pengiriman</h2>
              <div className="p-6 bg-zinc-50 rounded-4xl border border-zinc-100 flex items-center gap-5 group hover:border-primary/20 transition-all cursor-pointer">
                 <div className="w-10 h-10 rounded-xl bg-gray-900 flex items-center justify-center text-primary shadow-sm border border-white/10 shrink-0">
                    <FaTruck />
                 </div>
                 <div className="flex-1 min-w-0">
                    <h4 className="text-[11px] font-black text-gray-900 uppercase tracking-widest mb-1">{order.shipping.provider}</h4>
                    <p className="text-[10px] text-emerald-500 font-bold uppercase tracking-tight leading-none">{order.shipping.etd}</p>
                 </div>
                 <div className="text-right">
                    <p className="text-[12px] font-black text-gray-900">Rp {order.shipping.price}</p>
                 </div>
              </div>
           </div>

           {/* Section: Promo / Voucher */}
           <div className="px-8 mb-10">
              <div className="p-5 bg-emerald-50 rounded-3xl border border-emerald-100 flex items-center justify-between group active:scale-95 transition-all cursor-pointer">
                 <div className="flex items-center gap-4">
                    <FaTicketAlt className="text-emerald-500 text-lg" />
                    <span className="text-[11px] font-black text-emerald-900 uppercase tracking-widest">Gunakan Voucher Cuan</span>
                 </div>
                 <div className="flex items-center gap-2">
                    <span className="text-[9px] font-black text-emerald-400 uppercase tracking-widest">Apply</span>
                    <FaChevronLeft className="text-emerald-300 rotate-180 text-[10px]" />
                 </div>
              </div>
           </div>

           {/* Section: Payment Method */}
           <div className="px-8 mb-12">
              <h2 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-4 px-1">Metode Pembayaran</h2>
              <div className="space-y-3">
                 {order.paymentMethods.map((pm, i) => (
                   <div 
                     key={i} 
                     className={`p-5 rounded-3xl border-2 transition-all cursor-pointer flex items-center justify-between ${pm.selected ? 'border-primary bg-primary/5' : 'border-gray-50 bg-gray-50/50'}`}
                   >
                      <div className="flex items-center gap-4">
                         <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-lg ${pm.selected ? 'bg-primary text-white' : 'bg-white text-gray-300 shadow-sm'}`}>
                            {pm.icon}
                         </div>
                         <div>
                            <p className={`text-[12px] font-black ${pm.selected ? 'text-gray-900' : 'text-gray-400'}`}>{pm.name}</p>
                            {pm.balance && <p className="text-[8px] text-primary/60 font-black uppercase tracking-widest mt-1">Saldo: {pm.balance}</p>}
                         </div>
                      </div>
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${pm.selected ? 'border-primary' : 'border-gray-200'}`}>
                         {pm.selected && <div className="w-2 h-2 bg-primary rounded-full" />}
                      </div>
                   </div>
                 ))}
              </div>
           </div>

           {/* Section: Order Summary */}
           <div className="px-8 pb-32">
              <div className="bg-zinc-50 p-8 rounded-5xl border border-zinc-100/50 space-y-4">
                 <div className="flex justify-between items-center text-[11px] font-black uppercase tracking-widest text-gray-400">
                    <span>Subtotal Produk</span>
                    <span className="text-gray-900">Rp {order.summary.subtotal}</span>
                 </div>
                 <div className="flex justify-between items-center text-[11px] font-black uppercase tracking-widest text-gray-400">
                    <span>Biaya Pengiriman</span>
                    <span className="text-gray-900">Rp {order.summary.delivery}</span>
                 </div>
                 <div className="flex justify-between items-center text-[11px] font-black uppercase tracking-widest text-gray-400">
                    <span>Biaya Aplikasi</span>
                    <span className="text-gray-900">Rp {order.summary.appFee}</span>
                 </div>
                 <div className="pt-4 border-t border-dashed border-gray-200 mt-4 flex justify-between items-center">
                    <span className="text-[14px] font-black text-gray-900 uppercase tracking-[0.2em]">Total Tagihan</span>
                    <span className="text-2xl font-black text-primary tracking-tight">Rp {order.summary.total}</span>
                 </div>
              </div>
           </div>
        </div>

        {/* Floating Checkout Button */}
        <div className="fixed bottom-10 left-6 right-6 z-50">
           <div className="max-w-[400px] mx-auto bg-gray-900 text-white p-4 rounded-4xl shadow-2xl flex items-center justify-between border border-white/10 ring-1 ring-white/10 backdrop-blur-2xl">
              <div className="flex flex-col pl-4">
                 <p className="text-[8px] text-white/40 font-black uppercase tracking-widest">Bayar Pakai Wallet</p>
                 <p className="text-[16px] font-black text-white leading-none mt-1">Rp {order.summary.total}</p>
              </div>
              <button 
                onClick={handlePayment}
                className="h-12 bg-primary text-white px-8 rounded-2xl flex items-center justify-center gap-3 text-[10px] font-black uppercase tracking-widest hover:opacity-90 transition-all active:scale-95 shadow-primary-sm"
              >
                 Bayar Sekarang <FaArrowRight />
              </button>
           </div>
        </div>
      </main>
    </>
  );
}
