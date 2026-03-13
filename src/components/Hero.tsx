import React from 'react';
import { FaFire, FaSearch, FaUserNurse, FaSmile, FaFrown } from 'react-icons/fa';

export default function Hero() {
  return (
    <section className="pt-12 pb-24 relative overflow-hidden bg-white">
      {/* Background Decor */}
      <div className="absolute top-0 inset-x-0 h-64 bg-linear-to-b from-[#FFF0F3] to-white -z-20"></div>
      <div className="px-6 flex flex-col gap-14 items-center">
        {/* Content Section */}
        <div className="flex flex-col items-center text-center w-full">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#FFF0F3] text-[9px] font-black uppercase tracking-[0.2em] text-[#FF6B8B] mb-8 shadow-xs border border-[#FF6B8B]/10">
            <FaFire className="text-orange-500 mr-2" /> 
            Education Health Companion
          </div>
          
          <h1 className="text-[1.8rem] font-black leading-[1.2] mb-6 tracking-tight text-gray-800">
            Sahabat Sehat <br/>
            Untuk <span className="text-transparent bg-clip-text bg-linear-to-r from-[#FF6B8B] to-[#FF8E9E]">Prestasi</span> Gemilang
          </h1>
          
          <p className="text-xs text-gray-500 mb-8 max-w-[280px] mx-auto leading-relaxed font-bold uppercase tracking-tight opacity-70">
            Konsultasikan masalah akademik, stres belajar, atau kesehatan fisikmu secara rahasia.
          </p>
          
          {/* Premium Search Bar */}
          <div className="w-full flex items-center p-1 bg-white rounded-3xl shadow-xl border border-gray-100 mb-10 group focus-within:ring-4 focus-within:ring-[#FF6B8B]/5 transition-all">
            <div className="pl-4 text-gray-300">
              <FaSearch className="text-sm" />
            </div>
            <input 
               type="text" 
               placeholder="Tanya apa saja..."
               className="flex-1 border-none bg-transparent py-4 px-3 text-sm outline-none text-gray-800 font-bold placeholder:text-gray-400"
            />
            <button className="bg-[#FF6B8B] hover:bg-[#ff5177] text-white h-12 px-5 rounded-2xl font-black text-[10px] uppercase tracking-widest transition-all shadow-lg shadow-[#FF6B8B]/10 active:scale-95 whitespace-nowrap">
              Cari
            </button>
          </div>
          
          {/* Stats Breakdown */}
          <div className="flex gap-10 justify-center items-center">
            <div className="flex flex-col items-center">
              <span className="text-2xl font-black text-gray-800 tabular-nums">500+</span>
              <span className="text-[8px] font-black text-gray-400 uppercase tracking-widest">Psikolog</span>
            </div>
            <div className="w-px h-6 bg-gray-100"></div>
            <div className="flex flex-col items-center">
              <span className="text-2xl font-black text-gray-800 tabular-nums">12k+</span>
              <span className="text-[8px] font-black text-gray-400 uppercase tracking-widest">Siswa</span>
            </div>
          </div>
        </div>

        {/* Visual Section: Interactive Card (ABSOLUTE FIX) */}
        <div className="w-full px-2 mt-12 pb-10">
          
          <div className="w-full bg-white border border-gray-100/80 p-6 pt-12 rounded-[2.5rem] shadow-2xl relative group">
             {/* Floating Online Badge */}
             <div className="absolute top-6 right-6 z-20">
                <span className="flex items-center gap-1.5 text-[8px] font-black text-emerald-600 bg-white px-3 py-1.5 rounded-full shadow-md border border-emerald-50">
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span> ONLINE
                </span>
             </div>

             <div className="flex items-center gap-4 mb-10 pt-2">
                 <div className="w-12 h-12 bg-linear-to-br from-[#FFF0F3] to-[#FFE0E6] rounded-2xl flex items-center justify-center text-2xl text-[#FF6B8B] shadow-inner shrink-0">
                    <FaUserNurse />
                 </div>
                 <div className="overflow-hidden">
                     <h4 className="font-black text-gray-800 text-sm tracking-tight truncate">Dr. Sarah Jasmine</h4>
                     <span className="text-gray-400 text-[10px] font-black uppercase tracking-widest block mt-0.5">Psikolog Remaja</span>
                 </div>
             </div>
             
             <div className="flex flex-col gap-6">
                <div className="bg-gray-50 text-gray-800 text-[11px] py-4 px-5 rounded-3xl rounded-bl-none leading-relaxed font-bold border border-gray-100/50">
                  Halo! Ada yang bisa kakak bantu soal persiapan ujianmu? <FaSmile className="text-yellow-500 inline ml-1" />
                </div>
                <div className="bg-[#FF6B8B] text-white text-[11px] py-4 px-5 rounded-3xl rounded-br-none ml-auto max-w-[80%] leading-relaxed shadow-lg shadow-[#FF6B8B]/20 font-bold border border-[#FF6B8B]/10">
                  Aku ngerasa overthinking banget akhir-akhir ini <FaFrown className="text-yellow-500 inline ml-1" />
                </div>
             </div>
             
             <div className="mt-20">
               <button className="w-full py-5 bg-gray-900 text-white hover:bg-black rounded-[1.5rem] font-black text-[11px] uppercase tracking-[0.2em] transition-all shadow-2xl shadow-gray-300 active:scale-[0.98] relative z-30">
                 Mulai Konsultasi (Rp. 0)
               </button>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
