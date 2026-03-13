'use client';
import Navbar from '@/components/Navbar';
import { FaSearch, FaBookMedical, FaChevronRight, FaStethoscope, FaFilter, FaArrowLeft } from 'react-icons/fa';
import Link from 'next/link';

export default function KamusKesehatan() {
  const dictionaryTopics = [
    { title: "Mental Health", desc: "Depresi, Anxiety, Burnout", icon: <FaStethoscope />, color: "bg-blue-50 text-blue-500" },
    { title: "Kulit & Estetika", desc: "Jerawat, Alergi, Ruam", icon: <FaStethoscope />, color: "bg-rose-50 text-primary" },
    { title: "Pencernaan", desc: "Maag, GERD, Diare", icon: <FaStethoscope />, color: "bg-emerald-50 text-emerald-500" },
    { title: "Virus & Bakteri", desc: "Flu, Tipes, Demam", icon: <FaStethoscope />, color: "bg-indigo-50 text-indigo-500" },
  ];

  const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  return (
    <>
      <Navbar />
      <main className="min-h-screen pb-32 pt-32 bg-background-app">
        <div className="px-8 max-w-[450px] mx-auto">
          {/* Header Section */}
          <div className="mb-10">
            <span className="text-[10px] text-primary font-black uppercase tracking-[0.4em] mb-3 block">Neura Encyclopedia</span>
            <h1 className="text-3xl font-black text-gray-900 tracking-tight leading-tight mb-4">
              Kamus <span className="text-primary">Kesehatan</span> & <br/>Informasi Medis
            </h1>
            
            <div className="relative mt-8 group">
              <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none">
                <FaSearch className="text-gray-400 text-sm group-focus-within:text-primary transition-colors" />
              </div>
              <input 
                type="text" 
                placeholder="Cari penyakit atau gejala..." 
                className="w-full bg-white border border-gray-100 rounded-3xl py-5 pl-14 pr-6 text-[12px] font-medium focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all shadow-premium"
              />
            </div>
          </div>

          {/* Quick Stats/Banner */}
          <div className="mb-12 bg-gray-900 p-8 rounded-5xl text-white relative overflow-hidden shadow-2xl group">
             <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl opacity-50"></div>
             <div className="flex items-center gap-6 mb-6">
                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-2xl text-primary border border-white/10 backdrop-blur-xl">
                   <FaBookMedical />
                </div>
                <div>
                   <h3 className="text-[16px] font-black tracking-tight leading-tight">1,000+ Artikel Medis</h3>
                   <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-1">Diverifikasi Dokter</p>
                </div>
             </div>
             <p className="text-[11px] text-gray-400 leading-relaxed font-medium">
                Cari tahu penyebab, gejala, hingga cara penanganan pertama secara medis untuk berbagai keluhan kesehatan mahasiswa.
             </p>
          </div>

          {/* A-Z Browse Scroll */}
          <div className="mb-12">
            <div className="flex justify-between items-center mb-6 px-2">
              <h2 className="text-[12px] font-black text-gray-900 uppercase tracking-widest">Cari Berdasarkan Abjad</h2>
              <FaFilter className="text-gray-300 text-xs" />
            </div>
            <div className="flex gap-3 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden -mx-8 px-8">
              {alphabets.map((char) => (
                <button 
                  key={char}
                  className="w-12 h-12 shrink-0 bg-white border border-gray-100 rounded-2xl flex items-center justify-center text-[14px] font-black text-gray-400 hover:border-primary hover:text-primary hover:shadow-premium transition-all active:scale-95"
                >
                  {char}
                </button>
              ))}
            </div>
          </div>

          {/* Categories/Topics */}
          <div className="space-y-5">
            <div className="flex justify-between items-center px-2">
              <h2 className="text-[12px] font-black text-gray-900 uppercase tracking-widest">Topik Populer</h2>
              <button className="text-[10px] font-black text-primary uppercase tracking-widest">Lihat Semua</button>
            </div>
            
            {dictionaryTopics.map((topic, idx) => (
              <div key={idx} className="bg-white p-6 rounded-4xl border border-gray-100 shadow-premium hover:-translate-y-1 transition-all duration-300 group cursor-pointer">
                <div className="flex items-center gap-5">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl shrink-0 ${topic.color} shadow-sm group-hover:scale-105 transition-transform`}>
                    {topic.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-[15px] font-black text-gray-900 mb-1 leading-tight group-hover:text-primary transition-colors">{topic.title}</h3>
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest leading-none truncate">{topic.desc}</p>
                  </div>
                  <div className="text-gray-200">
                    <FaChevronRight className="text-xs" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Help Center CTA */}
          <div className="mt-16 bg-primary/5 p-10 rounded-6xl border border-primary/10 text-center relative overflow-hidden group">
             <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000"></div>
             <h3 className="text-[15px] font-black text-gray-900 mb-2 tracking-tight">Gejala Belum Ditemukan?</h3>
             <p className="text-[11px] text-gray-500 font-medium leading-relaxed mb-10 max-w-[260px] mx-auto">
                Tanyakan langsung pada dokter kami untuk diagnosis yang lebih akurat dan terpercaya.
             </p>
             <Link href="/chat" className="w-full py-5 bg-gray-900 text-white rounded-2xl font-black text-[11px] uppercase tracking-widest hover:bg-black transition-all shadow-xl block">
                Konsultasi Sekarang
             </Link>
          </div>
        </div>
      </main>
    </>
  );
}
