'use client';
import Navbar from '@/components/Navbar';
import { FaTag, FaClock, FaCopy, FaChevronRight, FaGift, FaPercentage, FaTruck, FaHospitalAlt } from 'react-icons/fa';
import { useState } from 'react';

export default function PromoPage() {
  const [activeTab, setActiveTab] = useState('Semua');

  const categories = ['Semua', 'Konsultasi', 'Farmasi', 'Lab', 'Lainnya'];

  const promos = [
    {
      title: "Voucher Chat Gratis",
      desc: "Konsultasi pertama dengan Psikolog Klinis pilihanmu.",
      code: "NEURAMIND",
      expires: "Sisa 2 hari lagi",
      tag: "Konsultasi",
      badge: "FREE",
      gradient: "bg-linear-to-br from-indigo-600 to-blue-500",
      icon: <FaGift />
    },
    {
      title: "Vitamin Focus Duo",
      desc: "Beli 1 gratis 1 untuk suplemen konsentrasi belajar.",
      code: "STUDYBRIGHT",
      expires: "Sisa 12 jam lagi",
      tag: "Farmasi",
      badge: "B1G1",
      gradient: "bg-linear-to-br from-primary to-[#ff5177]",
      icon: <FaPercentage />
    },
    {
      title: "Gratis Ongkir Asrama",
      desc: "Tanpa minimum belanja untuk pengiriman ke asrama kampus.",
      code: "KAMPUSFREE",
      expires: "Berlaku selamanya",
      tag: "Lainnya",
      badge: "FREE SHIPPING",
      gradient: "bg-linear-to-br from-indigo-600 to-blue-500",
      icon: <FaTruck />
    },
    {
      title: "Medical Check Bundle",
      desc: "Potongan harga Paket Sehat Mahasiswa (Darah + Vitamin).",
      code: "CEKSEHAT",
      expires: "Sisa 5 hari lagi",
      tag: "Lab",
      badge: "OFF 30%",
      gradient: "bg-linear-to-br from-primary to-[#ff5177]",
      icon: <FaHospitalAlt />
    },
  ];

  const filteredPromos = activeTab === 'Semua' 
    ? promos 
    : promos.filter(p => p.tag === activeTab);

  return (
    <>
      <Navbar />
      <main className="min-h-screen pb-32 pt-32 bg-background-app">
        <div className="px-8 max-w-[450px] mx-auto">
          {/* Header */}
          <div className="mb-10">
            <span className="text-[10px] text-primary font-black uppercase tracking-[0.4em] mb-3 block">Special Offers</span>
            <h1 className="text-3xl font-black text-gray-900 tracking-tight leading-tight mb-4">
              Promo <span className="text-primary">Menarik</span> & <br/>Penawaran Spesial
            </h1>
            <p className="text-gray-500 text-[13px] font-medium leading-relaxed">
               Dapatkan akses layanan kesehatan terbaik dengan harga yang lebih terjangkau bagi kantong mahasiswa.
            </p>
          </div>

          {/* Categories Tabs */}
          <div className="mb-10 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden -mx-8 px-8">
            <div className="flex gap-4">
              {categories.map((cat) => (
                <button 
                  key={cat}
                  onClick={() => setActiveTab(cat)}
                  className={`px-6 py-3 rounded-2xl whitespace-nowrap text-[10px] font-black uppercase tracking-widest transition-all ${
                    activeTab === cat 
                      ? 'bg-primary text-white shadow-primary-sm' 
                      : 'bg-white text-gray-400 border border-gray-100'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Promo List */}
          <div className="space-y-8">
            {filteredPromos.map((promo, idx) => (
              <div key={idx} className="group flex flex-col gap-0 transition-all duration-300">
                {/* Main Card */}
                <div className={`${promo.gradient} p-8 rounded-5xl text-white relative overflow-hidden shadow-premium z-10`}>
                   <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700"></div>
                   
                   <div className="relative z-10">
                      <div className="flex justify-between items-start mb-10">
                         <span className="inline-block bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-xl text-[8px] font-black tracking-widest uppercase border border-white/20">
                            {promo.badge}
                         </span>
                         <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-xl border border-white/10 backdrop-blur-md">
                            {promo.icon}
                         </div>
                      </div>
                      
                      <div className="mb-10">
                         <h3 className="text-xl font-black mb-2 tracking-tight">{promo.title}</h3>
                         <p className="text-[11px] text-white/80 font-medium leading-relaxed max-w-[240px]">
                           {promo.desc}
                         </p>
                      </div>

                      <div className="flex items-center gap-2 text-[9px] font-black uppercase tracking-widest opacity-60">
                         <FaClock /> {promo.expires}
                      </div>
                   </div>
                </div>

                {/* Bottom Bar / Voucher */}
                <div className="bg-white mx-6 -mt-4 pt-8 pb-6 px-8 rounded-b-[40px] border-x border-b border-gray-100 shadow-sm flex items-center justify-between group-hover:shadow-md transition-shadow">
                   <div className="flex flex-col gap-1">
                      <p className="text-[8px] text-gray-400 font-black uppercase tracking-widest leading-none">Kode Voucher</p>
                      <p className="text-[14px] font-black text-gray-900 tracking-wider leading-none">{promo.code}</p>
                   </div>
                   <button className="flex items-center gap-2 bg-gray-50 text-primary p-3 rounded-xl hover:bg-primary hover:text-white transition-all active:scale-95 group/btn shadow-inner">
                      <span className="text-[10px] font-black uppercase tracking-widest pl-2">Salin</span>
                      <div className="w-6 h-6 rounded-lg bg-white group-hover/btn:bg-white/20 flex items-center justify-center text-[10px]">
                         <FaCopy />
                      </div>
                   </button>
                </div>
              </div>
            ))}
          </div>

          {/* Referral Banner */}
          <div className="mt-16 bg-gray-950 p-10 rounded-6xl text-white relative overflow-hidden group">
             <div className="absolute inset-0 bg-primary/10 opacity-50"></div>
             <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-primary/20 rounded-full blur-[80px]"></div>
             <div className="relative z-10 text-center flex flex-col items-center">
                <div className="w-16 h-16 bg-white/10 rounded-3xl mb-8 flex items-center justify-center text-3xl text-primary border border-white/10 backdrop-blur-3xl">
                   <FaTag />
                </div>
                <h2 className="text-xl font-black mb-4 tracking-tight">Ajak Teman & Dapat Saldo</h2>
                <p className="text-gray-400 mb-10 text-[12px] leading-relaxed font-medium max-w-[260px]">
                   Undang temanmu ke Neura dan dapatkan saldo Rp 25.000 untuk setiap verifikasi berhasil.
                </p>
                <button className="w-full py-5 bg-white text-gray-900 rounded-2xl font-black text-[11px] uppercase tracking-widest hover:bg-primary hover:text-white transition-all active:scale-95">
                   Dapatkan Link Referral
                </button>
             </div>
          </div>
        </div>
      </main>
    </>
  );
}
