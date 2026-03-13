'use client';
import Navbar from '@/components/Navbar';
import { FaCapsules, FaBolt, FaBrain, FaStar, FaCartPlus, FaChevronLeft, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';
import Link from 'next/link';

export default function VitaminFokus() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pb-32 pt-32 bg-white">
        <div className="px-8 max-w-[450px] mx-auto">
          {/* Back Navigation */}
           <Link href="/promo" className="inline-flex items-center gap-2 text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-8 hover:text-primary transition-colors">
              <FaChevronLeft className="text-[8px]" /> Kembali ke Promo
           </Link>

          {/* Hero Image / Icon */}
          <div className="relative mb-12">
             <div className="w-full h-72 bg-linear-to-br from-primary to-[#ff5177] rounded-[48px] flex items-center justify-center text-8xl text-white shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                <FaCapsules className="z-10 group-hover:scale-110 transition-transform duration-700" />
             </div>
             <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white px-6 py-3 rounded-2xl shadow-xl border border-gray-50 flex items-center gap-3">
                <div className="flex items-center gap-1 text-orange-400 text-xs">
                   <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
                </div>
                <span className="text-[10px] font-black text-gray-900">4.9 (1.2k+ Ulasan)</span>
             </div>
          </div>

          {/* Product Header */}
          <div className="mb-10 text-center">
            <span className="text-primary text-[10px] font-black uppercase tracking-[0.4em] mb-4 block">Best Seller for Students</span>
            <h1 className="text-3xl font-black text-gray-900 tracking-tight leading-tight mb-4">
              Vitamin Fokus <br/><span className="text-primary">Neuro-Boost</span>
            </h1>
            <div className="flex items-center justify-center gap-4">
               <span className="text-2xl font-black text-gray-900">Rp 42.500</span>
               <span className="text-sm text-gray-300 font-bold line-through">Rp 85.000</span>
               <span className="bg-rose-50 text-primary px-2 py-1 rounded-lg text-[10px] font-black uppercase">OFF 50%</span>
            </div>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-2 gap-4 mb-12">
             {[
               { icon: <FaBolt />, title: 'Energi Maksimal', desc: 'Lawan rasa ngantuk saat kuliah pagi.' },
               { icon: <FaBrain />, title: 'Fokus Belajar', desc: 'Meningkatkan daya konsentrasi.' }
             ].map((item, i) => (
               <div key={i} className="p-6 bg-gray-50 rounded-4xl border border-gray-100/50">
                  <div className="text-primary text-xl mb-4">{item.icon}</div>
                  <h3 className="text-[13px] font-black text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-[10px] text-gray-500 font-medium leading-relaxed">{item.desc}</p>
               </div>
             ))}
          </div>

          {/* Description */}
          <div className="space-y-6 mb-12">
             <h2 className="text-[12px] font-black text-gray-900 uppercase tracking-widest px-2">Deskripsi Produk</h2>
             <p className="text-[13px] text-gray-500 leading-relaxed font-medium px-2">
                Suplemen khusus mahasiswa yang dirancang untuk mendukung aktivitas akademik yang padat. Mengandung Vitamin B Kompleks, Zinc, dan Ginkgo Biloba untuk menjaga performa otak tetap tajam selama musim ujian atau pengerjaan skripsi.
             </p>
          </div>

          {/* Trust Points */}
          <div className="bg-secondary/30 p-8 rounded-5xl border border-primary/10 space-y-4 mb-12">
             <div className="flex items-center gap-3 text-primary text-[11px] font-black uppercase tracking-widest">
                <FaCheckCircle /> Aman & Halal MUI
             </div>
             <div className="flex items-center gap-3 text-primary text-[11px] font-black uppercase tracking-widest">
                <FaCheckCircle /> Rekomendasi Ahli Gizi
             </div>
             <div className="flex items-center gap-3 text-orange-500 text-[11px] font-black uppercase tracking-widest">
                <FaExclamationCircle /> Stok Sisa 8 Box Lagi
             </div>
          </div>

          {/* FAQ Small */}
          <div className="mb-12">
             <div className="bg-white border border-gray-100 rounded-3xl p-5 flex items-center justify-between group cursor-pointer hover:bg-gray-50 transition-all">
                <span className="text-[11px] font-black text-gray-900 uppercase tracking-widest">Aturan Pakai</span>
                <FaChevronArrowRight className="text-xs text-gray-300 group-hover:text-primary transition-colors" />
             </div>
          </div>
        </div>
      </main>

      {/* Primary Action Button */}
      <div className="fixed bottom-32 left-1/2 -translate-x-1/2 z-50 w-full max-w-[450px] px-8">
         <button className="w-full py-6 bg-gray-900 text-white rounded-3xl font-black text-[12px] uppercase tracking-[0.2em] shadow-2xl flex items-center justify-center gap-4 hover:shadow-primary-sm group active:scale-95 transition-all">
            <FaCartPlus className="text-lg group-hover:rotate-12 transition-transform" />
            Tambahkan ke Keranjang
         </button>
      </div>
    </>
  );
}

function FaChevronArrowRight({ className }: { className?: string }) {
  return (
    <svg 
      className={className} 
      width="12" 
      height="12" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="3" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M9 18l6-6-6-6" />
    </svg>
  );
}
