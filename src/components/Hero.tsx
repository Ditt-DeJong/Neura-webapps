'use client';
import { FaSearch, FaUserNurse, FaFire, FaSmile, FaFrown, FaChevronRight } from 'react-icons/fa';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-white">
      {/* Premium Background Elements */}
      <div className="absolute top-0 inset-x-0 h-80 bg-linear-to-b from-secondary to-white -z-10 opacity-70"></div>
      
      <div className="px-8 flex flex-col gap-12 max-w-[450px] mx-auto">
        {/* Hero Text */}
        <div className="relative">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-premium border border-primary/5 mb-8">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-[10px] font-black uppercase tracking-widest text-primary/80">
              #1 Student Health Partner
            </span>
          </div>

          <h1 className="text-[2.2rem] font-black leading-[1.1] mb-6 tracking-tight text-gray-900">
            Sahabat Sehat <br />
            Untuk <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-primary-light">Prestasi</span> <br />
            Gemilang
          </h1>
          
          <p className="text-gray-500 text-[13px] leading-relaxed max-w-[90%] mb-10 font-medium">
            Konsultasikan masalah akademik, stres belajar, atau kesehatan fisikmu secara rahasia kapanpun.
          </p>

          {/* Search Bar - Premium Style */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-linear-to-r from-primary/20 to-primary-light/20 rounded-2xl blur opacity-25 group-focus-within:opacity-100 transition duration-500"></div>
            <div className="relative flex items-center gap-3 p-2 bg-white rounded-2xl shadow-premium border border-gray-100 focus-within:border-primary/20 transition-all">
              <div className="pl-3 text-primary/40">
                <FaSearch className="text-sm" />
              </div>
              <input 
                type="text" 
                placeholder="Tanya gejala atau cari dokter..."
                className="flex-1 border-none bg-transparent py-3 px-1 text-sm outline-none text-gray-800 font-medium placeholder:text-gray-400 placeholder:text-xs"
              />
              <button className="bg-primary hover:bg-primary-dark text-white h-11 px-6 rounded-xl font-black text-[11px] uppercase tracking-widest transition-all shadow-primary-sm active:scale-95">
                Cari
              </button>
            </div>
          </div>
        </div>

        {/* Dynamic Stats Row */}
        <div className="flex items-center justify-between px-2">
            {[
              { label: 'PSIKOLOG', val: '500+' },
              { label: 'MAHASISWA', val: '12k+' },
              { label: 'RATING', val: '4.9★' }
            ].map((stat, i) => (
              <div key={i} className="text-center group cursor-default">
                <p className="text-xl font-black text-gray-800 group-hover:text-primary transition-colors">{stat.val}</p>
                <p className="text-[8px] font-black text-gray-400 uppercase tracking-widest mt-1">{stat.label}</p>
              </div>
            ))}
        </div>

        {/* Messaging Preview Card - Enhanced */}
        <div className="w-full relative group">
          <div className="bg-white border border-gray-100/50 rounded-6xl shadow-premium overflow-hidden transform group-hover:translate-y-[-4px] transition-all duration-500">
            {/* Header */}
            <div className="bg-linear-to-br from-secondary/50 to-white px-6 pt-6 pb-5 border-b border-gray-50/50">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="relative border-2 border-white rounded-2xl shadow-sm">
                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-2xl text-primary">
                      <FaUserNurse />
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="text-[14px] font-black text-gray-800 leading-none mb-1">Dr. Sarah Jasmine</h4>
                    <div className="flex items-center gap-1.5">
                      <span className="text-[9px] font-black text-primary uppercase tracking-widest">Psikolog Remaja</span>
                    </div>
                  </div>
                </div>
                <button className="p-2.5 text-gray-300 hover:text-primary transition-colors bg-gray-50/50 rounded-xl">
                  <FaChevronRight className="text-xs" />
                </button>
              </div>
            </div>

            {/* Chat Messages */}
            <div className="px-6 py-6 space-y-4">
              <div className="flex gap-3 items-end">
                <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-primary text-xs shrink-0 shadow-inner">
                  <FaUserNurse />
                </div>
                <div className="bg-gray-50 text-gray-800 text-[13px] py-3.5 px-5 rounded-3xl rounded-bl-sm leading-relaxed font-medium border border-gray-100 max-w-[85%]">
                  Halo! Apa yang menggangumu hari ini? Mari kita selesaikan perlahan. <FaSmile className="text-yellow-400 inline ml-1" />
                </div>
              </div>

              <div className="flex justify-end">
                <div className="bg-primary text-white text-[13px] py-3.5 px-5 rounded-3xl rounded-br-sm leading-relaxed font-medium shadow-primary-sm max-w-[80%]">
                   Tugas menumpuk banget, Kak... <FaFrown className="text-yellow-200 inline ml-1" />
                </div>
              </div>
            </div>
          </div>
          
          {/* Floating Element */}
          <div className="absolute -bottom-4 -left-4 bg-white p-3 rounded-2xl shadow-premium border border-gray-50 animate-bounce transition-all duration-1000">
             <div className="w-6 h-6 bg-green-100 text-green-600 rounded-lg flex items-center justify-center text-xs">
                <FaFire />
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}