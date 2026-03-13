import React from 'react';
import { FaFire, FaSearch, FaUserNurse, FaSmile, FaFrown } from 'react-icons/fa';

export default function Hero() {
  return (
    <section className="pt-10 pb-16 relative overflow-hidden bg-white">
      {/* Background gradient - fixed: bg-linear-to-b (Tailwind v4) */}
      <div className="absolute top-0 inset-x-0 h-56 bg-linear-to-b from-[#FFF0F3] to-white -z-10"></div>

      <div className="px-5 flex flex-col gap-10">
        {/* Hero Text */}
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#FFF0F3] border border-[#FF6B8B]/15 mb-6">
            <FaFire className="text-orange-500 text-[10px]" />
            <span className="text-[9px] font-black uppercase tracking-[0.18em] text-[#FF6B8B]">
              Education Health Companion
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-[1.75rem] font-black leading-[1.15] mb-4 tracking-tight text-gray-900">
            Sahabat Sehat <br />
            Untuk{' '}
            {/* fixed: bg-linear-to-r (Tailwind v4) */}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#FF6B8B] to-[#FF8E9E]">
              Prestasi
            </span>{' '}
            Gemilang
          </h1>

          {/* Subtitle */}
          <p className="text-[11px] text-gray-500 mb-7 max-w-[260px] leading-relaxed font-medium">
            Konsultasikan masalah akademik, stres belajar, atau kesehatan fisikmu secara rahasia kapanpun.
          </p>

          {/* Search Bar */}
          <div className="w-full flex items-center gap-2 p-1.5 bg-white rounded-2xl shadow-lg border border-gray-100 mb-8 focus-within:ring-2 focus-within:ring-[#FF6B8B]/20 transition-all">
            <div className="pl-3 text-gray-300">
              <FaSearch className="text-xs" />
            </div>
            <input
              type="text"
              placeholder="Tanya apa saja..."
              className="flex-1 border-none bg-transparent py-3 px-1 text-sm outline-none text-gray-800 font-medium placeholder:text-gray-400 placeholder:text-xs"
            />
            <button className="bg-[#FF6B8B] hover:bg-[#ff5177] text-white h-10 px-4 rounded-xl font-black text-[10px] uppercase tracking-widest transition-all shadow-md shadow-[#FF6B8B]/20 active:scale-95 whitespace-nowrap">
              Cari
            </button>
          </div>

          {/* Stats */}
          <div className="flex gap-8 justify-center items-center">
            <div className="flex flex-col items-center gap-0.5">
              <span className="text-xl font-black text-gray-900">500+</span>
              <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Psikolog</span>
            </div>
            <div className="w-px h-5 bg-gray-200"></div>
            <div className="flex flex-col items-center gap-0.5">
              <span className="text-xl font-black text-gray-900">12k+</span>
              <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Siswa</span>
            </div>
            <div className="w-px h-5 bg-gray-200"></div>
            <div className="flex flex-col items-center gap-0.5">
              <span className="text-xl font-black text-gray-900">4.9★</span>
              <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Rating</span>
            </div>
          </div>
        </div>

        {/* Chat Card */}
        <div className="w-full">
          <div className="bg-white border border-gray-100 rounded-[2rem] shadow-xl overflow-hidden">
            {/* Card Header - fixed: bg-linear-to-br (Tailwind v4) */}
            <div className="bg-linear-to-br from-[#FFF0F3] to-white px-5 pt-5 pb-4 border-b border-gray-50">
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-xl text-[#FF6B8B] shadow-sm border border-pink-50">
                    <FaUserNurse />
                  </div>
                  <div>
                    <h4 className="font-black text-gray-900 text-[13px] leading-tight">Dr. Sarah Jasmine</h4>
                    <span className="text-gray-400 text-[9px] font-bold uppercase tracking-wider">Psikolog Remaja</span>
                  </div>
                </div>
                <span className="flex items-center gap-1 text-[8px] font-black text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
                  ONLINE
                </span>
              </div>
            </div>

            {/* Chat Messages */}
            <div className="px-5 py-5 space-y-3">
              <div className="flex gap-3 items-end">
                <div className="w-7 h-7 bg-[#FFF0F3] rounded-full flex items-center justify-center text-[#FF6B8B] text-xs shrink-0">
                  <FaUserNurse />
                </div>
                <div className="bg-gray-50 text-gray-800 text-[12px] py-3 px-4 rounded-2xl rounded-bl-sm leading-relaxed font-medium border border-gray-100 max-w-[80%]">
                  Halo! Ada yang bisa kakak bantu soal persiapan ujianmu? <FaSmile className="text-yellow-400 inline ml-1" />
                </div>
              </div>

              <div className="flex justify-end">
                <div className="bg-[#FF6B8B] text-white text-[12px] py-3 px-4 rounded-2xl rounded-br-sm leading-relaxed font-medium shadow-md shadow-[#FF6B8B]/20 max-w-[78%]">
                  Aku ngerasa overthinking banget akhir-akhir ini <FaFrown className="text-yellow-300 inline ml-1" />
                </div>
              </div>

              <div className="flex gap-3 items-end">
                <div className="w-7 h-7 bg-[#FFF0F3] rounded-full flex items-center justify-center text-[#FF6B8B] text-xs shrink-0">
                  <FaUserNurse />
                </div>
                <div className="bg-gray-50 text-gray-800 text-[12px] py-3 px-4 rounded-2xl rounded-bl-sm leading-relaxed font-medium border border-gray-100 max-w-[80%]">
                  Tenang, kakak siap bantu. Cerita lebih lanjut yuk 💙
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="px-5 pb-5">
              <button className="w-full py-4 bg-gray-900 text-white hover:bg-black rounded-xl font-black text-[11px] uppercase tracking-[0.15em] transition-all shadow-lg active:scale-[0.98]">
                Mulai Konsultasi — Gratis
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}