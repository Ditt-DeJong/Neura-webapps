'use client';
import Navbar from '@/components/Navbar';
import { FaMicroscope, FaVial, FaFileMedical, FaHome, FaCheckCircle, FaChevronRight, FaClock, FaSearch, FaFlask, FaDna, FaShieldVirus, FaArrowRight } from 'react-icons/fa';
import { useState } from 'react';
import Link from 'next/link';

export default function LayananLab() {
  const [searchQuery, setSearchQuery] = useState('');

  const labServices = [
    { 
      id: '1',
      title: "Cek Darah Lengkap", 
      price: "150.000", 
      time: "Hasil 24 Jam", 
      desc: "Hematologi rutin, LED, Hitung Jenis untuk cek kondisi fisik umum.",
      icon: <FaVial />,
      color: "bg-rose-50 text-rose-500",
      fast: true
    },
    { 
      id: '2',
      title: "PCR Swab Test", 
      price: "275.000", 
      time: "Hasil 6-8 Jam", 
      desc: "Metode Real-Time PCR standar internasional untuk deteksi cepat.",
      icon: <FaDna />,
      color: "bg-blue-50 text-blue-500",
      fast: true
    },
    { 
      id: '3',
      title: "Cek Kolesterol", 
      price: "85.000", 
      time: "Hasil 2 Jam", 
      desc: "Total kolesterol, HDL, LDL, Trigliserida untuk kesehatan jantung.",
      icon: <FaShieldVirus />,
      color: "bg-emerald-50 text-emerald-500",
      fast: false
    }
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen pb-40 pt-40 bg-zinc-50/50">
        <div className="px-6 max-w-[450px] mx-auto">
          
          {/* Header */}
          <div className="mb-10">
            <div className="flex justify-between items-start mb-6">
              <div>
                <span className="text-[10px] text-primary font-black uppercase tracking-[0.4em] mb-2 block">Neura Laboratory</span>
                <h1 className="text-3xl font-black text-gray-900 tracking-tight leading-tight">
                  Layanan <span className="text-primary bg-clip-text bg-linear-to-r from-primary to-[#ff5177]">Lab</span> <br/>& Cek Medis
                </h1>
              </div>
              <div className="w-12 h-12 rounded-2xl bg-white border border-gray-100 flex items-center justify-center text-primary shadow-sm">
                 <FaMicroscope className="text-lg" />
              </div>
            </div>
            
            <div className="relative mt-8 group">
              <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none">
                <FaSearch className="text-gray-400 text-sm group-focus-within:text-primary transition-colors" />
              </div>
              <input 
                type="text" 
                placeholder="Cari jenis pemeriksaan..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white border border-gray-100 rounded-3xl py-5 pl-14 pr-6 text-[12px] font-medium focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all shadow-premium"
              />
            </div>
          </div>

          {/* Home Service Banner */}
          <div className="mb-12 bg-gray-900 p-10 rounded-[2.5rem] text-white relative overflow-hidden shadow-2xl group border border-white/5 ring-1 ring-white/10">
             <div className="absolute -right-6 -top-6 w-40 h-40 bg-primary/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000"></div>
             <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                   <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-3xl text-primary border border-white/10 backdrop-blur-3xl shadow-inner group-hover:rotate-6 transition-transform">
                      <FaHome />
                   </div>
                   <div>
                      <h3 className="text-lg font-black tracking-tight leading-tight">Home Service</h3>
                      <p className="text-[10px] text-white/40 font-bold uppercase tracking-widest mt-1">Kami Datang ke Tempatmu</p>
                   </div>
                </div>
                <p className="text-[12px] text-gray-400 leading-relaxed font-medium mb-10 pr-6">
                   Tim analis lab kami akan mendatangi kos atau asrama kamu untuk pengambilan sampel secara profesional dan aman.
                </p>
                <button className="w-full h-16 bg-white text-gray-900 rounded-3xl text-[11px] font-black uppercase tracking-[0.2em] hover:bg-primary hover:text-white transition-all shadow-xl active:scale-95 flex items-center justify-center gap-4">
                   Pesan Home Care <FaArrowRight />
                </button>
             </div>
          </div>

          {/* Service List */}
          <div className="space-y-8">
            <div className="flex justify-between items-center px-2">
              <h2 className="text-[12px] font-black text-gray-900 uppercase tracking-[0.2em]">Pilihan Paket Lab</h2>
              <button className="text-[10px] font-black text-primary uppercase tracking-widest">Lihat Semua</button>
            </div>
            
            <div className="grid grid-cols-1 gap-6">
              {labServices.map((service) => (
                <Link href={`/lab/${service.id}`} key={service.id} className="block group">
                  <div className="bg-white p-6 rounded-[2.5rem] border border-gray-100 shadow-premium hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700"></div>
                    
                    <div className="relative z-10">
                      <div className="flex items-start gap-6 mb-8">
                        <div className={`w-20 h-20 rounded-3xl flex items-center justify-center text-4xl shrink-0 ${service.color} shadow-inner group-hover:rotate-6 transition-transform`}>
                          {service.icon}
                        </div>
                        <div className="flex-1 min-w-0 pt-1">
                          <div className="flex items-center gap-3 mb-2">
                            {service.fast && (
                               <span className="text-[8px] bg-primary/10 text-primary px-2 py-1 rounded-lg font-black uppercase tracking-widest">Cepat</span>
                            )}
                            <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest flex items-center gap-1.5">
                              <FaClock className="text-[10px]" /> {service.time}
                            </span>
                          </div>
                          <h3 className="text-xl font-black text-gray-900 leading-tight mb-2 group-hover:text-primary transition-colors">{service.title}</h3>
                          <p className="text-[12px] text-gray-400 font-medium leading-relaxed line-clamp-2">{service.desc}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between pt-6 border-t border-gray-50">
                        <div className="space-y-1">
                           <p className="text-[10px] text-gray-400 font-black uppercase tracking-widest mb-0.5 leading-none">Mulai dari</p>
                           <p className="text-xl font-black text-gray-900 leading-none tracking-tight">Rp {service.price}</p>
                        </div>
                        <button className="h-14 bg-gray-900 text-white rounded-[1.2rem] px-8 text-[10px] font-black uppercase tracking-widest shadow-xl hover:bg-primary transition-all active:scale-95 group-hover:shadow-primary-sm">
                          Pesan
                        </button>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Why Neura Lab */}
          <div className="mt-12 space-y-6">
             <h2 className="text-[12px] font-black text-gray-900 uppercase tracking-[0.2em] px-2 text-center">Kenapa di Neura Lab?</h2>
             <div className="grid grid-cols-2 gap-4">
                <div className="p-6 bg-white rounded-4xl border border-gray-100 flex flex-col items-center text-center shadow-premium">
                   <div className="w-12 h-12 bg-indigo-50 text-indigo-500 rounded-2xl flex items-center justify-center text-xl mb-4">
                      <FaCheckCircle />
                   </div>
                   <span className="text-[10px] font-black text-gray-900 uppercase tracking-tight leading-tight">Analisis Pakar</span>
                </div>
                <div className="p-6 bg-white rounded-4xl border border-gray-100 flex flex-col items-center text-center shadow-premium">
                   <div className="w-12 h-12 bg-emerald-50 text-emerald-500 rounded-2xl flex items-center justify-center text-xl mb-4">
                      <FaShieldVirus />
                   </div>
                   <span className="text-[10px] font-black text-gray-900 uppercase tracking-tight leading-tight">Privasi Aman</span>
                </div>
                <div className="p-6 bg-white rounded-4xl border border-gray-100 flex flex-col items-center text-center shadow-premium">
                   <div className="w-12 h-12 bg-rose-50 text-rose-500 rounded-2xl flex items-center justify-center text-xl mb-4">
                      <FaFileMedical />
                   </div>
                   <span className="text-[10px] font-black text-gray-900 uppercase tracking-tight leading-tight">Digital Report</span>
                </div>
                <div className="p-6 bg-white rounded-4xl border border-gray-100 flex flex-col items-center text-center shadow-premium">
                   <div className="w-12 h-12 bg-amber-50 text-amber-500 rounded-2xl flex items-center justify-center text-xl mb-4">
                      <FaFlask />
                   </div>
                   <span className="text-[10px] font-black text-gray-900 uppercase tracking-tight leading-tight">Alat Modern</span>
                </div>
             </div>
          </div>
        </div>
      </main>
    </>
  );
}

