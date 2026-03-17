'use client';
import { FaChevronLeft, FaPlus, FaHistory, FaWallet, FaQrcode, FaArrowUp, FaArrowDown, FaChevronRight, FaGamepad, FaMobileAlt, FaBolt, FaFilter } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';
import { useState } from 'react';
import Link from 'next/link';

export default function WalletPage() {
  const router = useRouter();
  const [activeHistoryTab, setActiveHistoryTab] = useState('Semua');

  const transactions = [
    { title: "Pembelian Obat - Paracetamol", date: "16 Mar, 14:20", amount: "- Rp 15.000", type: "out", icon: <FaArrowUp /> },
    { title: "Top Up Neura Wallet", date: "15 Mar, 09:00", amount: "+ Rp 100.000", type: "in", icon: <FaArrowDown /> },
    { title: "Konsultasi Psikolog - dr. Sarah", date: "12 Mar, 15:30", amount: "- Rp 50.000", type: "out", icon: <FaArrowUp /> },
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen pb-40 pt-32 bg-zinc-50">
        {/* Back Button */}
        <div className="px-6 max-w-[450px] mx-auto mb-8">
          <button 
            onClick={() => router.back()} 
            className="w-12 h-12 rounded-2xl bg-white border border-gray-100 shadow-sm flex items-center justify-center text-gray-900 active:scale-90 transition-all font-black text-xs"
          >
            <FaChevronLeft />
          </button>
        </div>

        <div className="max-w-[450px] mx-auto">
           {/* Wallet Card Section */}
           <div className="px-8 mb-12">
              <div className="bg-linear-to-br from-primary to-[#ff5177] p-10 rounded-6xl text-white shadow-2xl relative overflow-hidden group">
                 <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-white/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000"></div>
                 <div className="relative z-10">
                    <div className="flex justify-between items-start mb-12">
                       <div>
                          <p className="text-[10px] text-white/60 font-black uppercase tracking-[0.3em] mb-2">Total Saldo</p>
                          <h2 className="text-4xl font-black tracking-tight leading-none">Rp 125.000</h2>
                       </div>
                       <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center text-2xl border border-white/20">
                          <FaWallet />
                       </div>
                    </div>
                    
                    <div className="flex gap-4">
                       <button className="flex-1 bg-white text-primary py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest active:scale-95 transition-all shadow-lg">
                          Top Up
                       </button>
                       <button className="flex-1 bg-white/20 backdrop-blur-md text-white py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest border border-white/20 active:scale-95 transition-all">
                          Transfer
                       </button>
                    </div>
                 </div>
              </div>
           </div>

           {/* Quick Services */}
           <div className="px-8 mb-12 grid grid-cols-4 gap-4">
              {[
                { label: "Bayar", icon: <FaQrcode />, color: "bg-blue-50 text-blue-500" },
                { label: "Pulsa", icon: <FaMobileAlt />, color: "bg-purple-50 text-purple-500" },
                { label: "Listrik", icon: <FaBolt />, color: "bg-orange-50 text-orange-500" },
                { label: "Game", icon: <FaGamepad />, color: "bg-emerald-50 text-emerald-600" },
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center gap-3 group cursor-pointer">
                   <div className={`w-14 h-14 ${item.color} rounded-2xl flex items-center justify-center text-xl shadow-sm group-hover:-translate-y-1 transition-all`}>
                      {item.icon}
                   </div>
                   <span className="text-[10px] font-black text-gray-400 uppercase tracking-tighter">{item.label}</span>
                </div>
              ))}
           </div>

           {/* Transaction History */}
           <div className="px-8 pb-32">
              <div className="flex justify-between items-end mb-8 px-2">
                 <div className="space-y-1">
                    <p className="text-[10px] text-primary font-black uppercase tracking-widest">Riwayat Aktifitas</p>
                    <h2 className="text-[18px] font-black text-gray-900 tracking-tight">Transaksi Terakhir</h2>
                 </div>
                 <button className="text-[10px] font-black text-gray-300 uppercase tracking-widest flex items-center gap-2">
                    Filter <FaFilter />
                 </button>
              </div>

              <div className="space-y-4">
                 {transactions.map((tx, i) => (
                   <div key={i} className="bg-white p-5 rounded-4xl border border-gray-100 shadow-premium flex items-center gap-5 group hover:border-primary/20 transition-all cursor-pointer">
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-sm shrink-0 ${tx.type === 'in' ? 'bg-emerald-50 text-emerald-500' : 'bg-rose-50 text-primary'}`}>
                         {tx.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                         <h4 className="text-[13px] font-black text-gray-900 leading-tight mb-1 truncate">{tx.title}</h4>
                         <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">{tx.date}</p>
                      </div>
                      <div className="text-right">
                         <p className={`text-[14px] font-black tracking-tight ${tx.type === 'in' ? 'text-emerald-500' : 'text-gray-900'}`}>
                            {tx.amount}
                         </p>
                         <p className="text-[8px] text-gray-300 font-black uppercase tracking-widest mt-0.5">Berhasil</p>
                      </div>
                   </div>
                 ))}
                 
                 <button className="w-full py-6 text-[10px] font-black text-gray-300 uppercase tracking-widest hover:text-primary transition-colors flex items-center justify-center gap-3">
                    Lihat Seluruh Riwayat <FaChevronRight className="text-[8px]" />
                 </button>
              </div>
           </div>
        </div>
      </main>
    </>
  );
}
