'use client';
import Navbar from '@/components/Navbar';
import { FaTruck, FaMapMarkerAlt, FaCheckCircle, FaHospital, FaClock, FaChevronLeft, FaUniversity, FaBoxOpen } from 'react-icons/fa';
import Link from 'next/link';

export default function GratisOngkirAsrama() {
  const steps = [
    { title: "Pilih Produk", desc: "Pilih obat atau vitamin yang kamu butuhkan di Toko Neura.", icon: <FaBoxOpen /> },
    { title: "Alamat Asrama", desc: "Pastikan lokasi pengiriman adalah asrama atau kos terverifikasi.", icon: <FaMapMarkerAlt /> },
    { title: "Otomatis Gratis", desc: "Ongkir otomatis Rp 0 tanpa perlu masukkan kode voucher.", icon: <FaCheckCircle /> }
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen pb-32 pt-32 bg-background-app">
        <div className="px-8 max-w-[450px] mx-auto">
          {/* Back Navigation */}
           <Link href="/promo" className="inline-flex items-center gap-2 text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-8 hover:text-primary transition-colors">
              <FaChevronLeft className="text-[8px]" /> Kembali ke Promo
           </Link>

          {/* Hero Banner */}
          <div className="mb-12 bg-linear-to-br from-blue-600 to-blue-400 p-12 rounded-[56px] text-white relative overflow-hidden shadow-2xl group text-center">
             <div className="absolute -right-10 -top-10 w-48 h-48 bg-white/20 rounded-full blur-[80px]"></div>
             <div className="relative z-10">
                <div className="w-24 h-24 bg-white/10 rounded-[40px] flex items-center justify-center text-5xl mx-auto mb-8 border border-white/20 backdrop-blur-md group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                   <FaTruck />
                </div>
                <span className="inline-block bg-white/20 backdrop-blur-md px-4 py-2 rounded-2xl text-[9px] font-black tracking-[0.3em] uppercase border border-white/20 mb-6">
                   Student Exclusive
                </span>
                <h1 className="text-3xl font-black mb-4 leading-tight tracking-tight">Gratis Ongkir <br/>Tanpa Batas</h1>
                <p className="text-[12px] text-white/80 font-medium leading-relaxed max-w-[240px] mx-auto">
                   Khusus pengiriman ke seluruh asrama dan kos di sekitar area kampus partner Neura.
                </p>
             </div>
          </div>

          {/* How it Works */}
          <div className="space-y-6 mb-16">
             <h2 className="text-[12px] font-black text-gray-900 uppercase tracking-[0.3em] text-center mb-10">Cara Menikmati Promo</h2>
             <div className="space-y-4">
                {steps.map((step, i) => (
                  <div key={i} className="bg-white p-6 rounded-4xl border border-gray-100/50 flex items-center gap-6 shadow-premium relative group">
                     <div className="w-14 h-14 bg-blue-50 text-blue-500 rounded-2xl flex items-center justify-center text-2xl shrink-0 group-hover:scale-110 transition-transform">
                        {step.icon}
                     </div>
                     <div className="flex-1">
                        <h3 className="text-[14px] font-black text-gray-900 mb-1 leading-tight">{step.title}</h3>
                        <p className="text-[11px] text-gray-400 font-medium leading-relaxed">{step.desc}</p>
                     </div>
                     <div className="absolute top-4 right-6 text-gray-100 font-black text-2xl">0{i+1}</div>
                  </div>
                ))}
             </div>
          </div>

          {/* Coverage Areas */}
          <div className="bg-white p-10 rounded-6xl border border-gray-100 shadow-premium mb-12 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full blur-3xl opacity-50"></div>
             <div className="relative z-10 flex flex-col items-center text-center">
                <FaUniversity className="text-blue-500 text-3xl mb-6" />
                <h3 className="text-[17px] font-black text-gray-900 mb-4 tracking-tight">Kampus Partner</h3>
                <div className="flex flex-wrap justify-center gap-2 mb-8">
                   {['Universitas Indonesia', 'ITB', 'UGM', 'IPB', 'Unpad'].map((univ, idx) => (
                     <span key={idx} className="px-4 py-2 bg-gray-50 text-gray-500 rounded-full text-[9px] font-black uppercase tracking-wider">
                        {univ}
                     </span>
                   ))}
                </div>
                <p className="text-[11px] text-gray-400 font-medium leading-relaxed italic">
                   "Asrama kampus dan kos radius 3km dari gerbang utama kampus partner."
                </p>
             </div>
          </div>

          {/* Notification Card */}
          <div className="bg-gray-950 p-8 rounded-5xl text-white flex items-center gap-6 mb-12 shadow-2xl">
             <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-xl text-primary border border-white/10 shrink-0">
                <FaClock />
             </div>
             <div className="flex-1">
                <h4 className="text-[14px] font-black leading-tight mb-1">Berlaku Setiap Hari</h4>
                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Senin - Minggu (08.00 - 21.00)</p>
             </div>
          </div>

          <button className="w-full py-6 bg-primary text-white rounded-3xl font-black text-[12px] uppercase tracking-[0.2em] shadow-primary-sm hover:opacity-90 transition-all active:scale-95">
             Buka Toko Sekarang
          </button>
        </div>
      </main>
    </>
  );
}
