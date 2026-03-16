'use client';
import Navbar from '@/components/Navbar';
import { FaMapMarkerAlt, FaHospital, FaCalendarAlt, FaChevronRight, FaStar, FaStethoscope, FaClinicMedical, FaUniversity, FaSearch, FaFilter, FaPhoneAlt, FaClock, FaArrowRight } from 'react-icons/fa';
import { useState } from 'react';
import Link from 'next/link';

export default function JanjiMedis() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeSpec, setActiveSpec] = useState('Semua');

  const hospitals = [
    { 
      id: '1',
      name: "RS Universitas Indonesia", 
      dist: "1.2 km", 
      rating: "4.8", 
      type: "Rumah Sakit Umum",
      status: "Tersedia Hari Ini",
      icon: <FaHospital />,
      wait: "15-20 mnt",
      services: ["UGD", "Poli Umum", "Spesialis"]
    },
    { 
      id: '2',
      name: "Klinik Makara", 
      dist: "0.5 km", 
      rating: "4.7", 
      type: "Klinik Mahasiswa",
      status: "Tersedia Sekarang",
      icon: <FaClinicMedical />,
      wait: "5-10 mnt",
      services: ["Poli Umum", "Gigi"]
    },
    { 
      id: '3',
      name: "Puskesmas Beji", 
      dist: "2.8 km", 
      rating: "4.5", 
      type: "Pelayanan Publik",
      status: "Tutup • Buka Besok",
      icon: <FaUniversity />,
      wait: "-",
      services: ["Poli Umum", "KIA"]
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
                <span className="text-[10px] text-primary font-black uppercase tracking-[0.4em] mb-2 block">Healthcare Appointment</span>
                <h1 className="text-3xl font-black text-gray-900 tracking-tight leading-tight">
                  Buat <span className="text-primary bg-clip-text bg-linear-to-r from-primary to-[#ff5177]">Janji Temu</span> <br/>Medis
                </h1>
              </div>
              <button className="w-12 h-12 rounded-2xl bg-white border border-gray-100 flex items-center justify-center text-gray-400 shadow-sm">
                 <FaCalendarAlt className="text-lg" />
              </button>
            </div>
            
            <div className="space-y-4">
              <div className="relative group">
                <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none">
                  <FaSearch className="text-gray-400 text-sm group-focus-within:text-primary transition-colors" />
                </div>
                <input 
                  type="text" 
                  placeholder="Cari RS atau klinik..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-white border border-gray-100 rounded-3xl py-5 pl-14 pr-6 text-[12px] font-medium focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all shadow-premium"
                />
              </div>
              <div className="flex gap-3">
                 <div className="flex-1 bg-white border border-gray-100 rounded-2xl p-4 flex items-center gap-3 shadow-sm">
                    <FaMapMarkerAlt className="text-primary text-xs" />
                    <span className="text-[10px] font-black text-gray-900 uppercase tracking-widest truncate">Depok, Jawa Barat</span>
                 </div>
                 <button className="bg-white border border-gray-100 rounded-2xl px-5 flex items-center justify-center text-gray-400 shadow-sm hover:text-primary transition-colors">
                    <FaFilter className="text-sm" />
                 </button>
              </div>
            </div>
          </div>

          {/* Quick Stats / Emergency */}
          <div className="mb-12 bg-gray-900 p-8 rounded-[2.5rem] text-white relative overflow-hidden group shadow-2xl">
             <div className="absolute right-0 top-0 w-40 h-40 bg-primary/20 rounded-full -mr-16 -mt-16 blur-3xl group-hover:scale-150 transition-transform duration-1000"></div>
             <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                   <div className="w-10 h-10 rounded-2xl bg-white/10 flex items-center justify-center text-primary border border-white/10">
                      <FaPhoneAlt />
                   </div>
                   <h3 className="text-[14px] font-black tracking-tight leading-tight">Emergency Assistance</h3>
                </div>
                <p className="text-[11px] text-white/40 font-medium leading-relaxed mb-6">Butuh ambulans atau bantuan medis segera ke RS terdekat?</p>
                <div className="flex gap-4">
                   <button className="flex-1 bg-red-600 hover:bg-red-700 text-white py-3.5 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all">Panggil Ambulans</button>
                   <button className="flex-1 bg-white/5 border border-white/10 text-white py-3.5 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-white/10 transition-all">Cek RS SIaga</button>
                </div>
             </div>
          </div>

          {/* Specializations Horizontal Scroll */}
          <div className="mb-12">
            <h2 className="text-[12px] font-black text-gray-900 uppercase tracking-[0.2em] mb-6 px-2">Pilih Spesialisasi</h2>
            <div className="flex gap-4 overflow-x-auto pb-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden -mx-6 px-6">
               {['Semua', 'Umum', 'Gigi', 'THT', 'Internal', 'Saraf', 'Mata'].map((spec, i) => (
                 <button 
                   key={i}
                   onClick={() => setActiveSpec(spec)}
                   className={`px-8 py-4 rounded-2xl whitespace-nowrap text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300 border ${
                     activeSpec === spec 
                       ? 'bg-primary text-white border-primary shadow-primary-sm scale-110' 
                       : 'bg-white text-gray-400 border-gray-100 hover:border-primary/50'
                   }`}
                 >
                   {spec}
                 </button>
               ))}
            </div>
          </div>

          {/* Hospital List */}
          <div className="space-y-8">
            <div className="flex justify-between items-center px-2">
              <h2 className="text-[12px] font-black text-gray-900 uppercase tracking-[0.2em]">Fasilitas Populer</h2>
              <button className="text-[10px] font-black text-primary uppercase tracking-widest">Peta Interaktif</button>
            </div>
            
            {hospitals.map((hosp) => (
              <Link href={`/janji/${hosp.id}`} key={hosp.id} className="block group">
                <div className="bg-white p-6 rounded-5xl border border-gray-100 shadow-premium hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-start gap-6 mb-8">
                      <div className="w-24 h-24 bg-secondary rounded-4xl flex items-center justify-center text-5xl text-primary shadow-inner shrink-0 group-hover:rotate-6 transition-transform">
                        {hosp.icon}
                      </div>
                      <div className="flex-1 min-w-0 pt-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-[9px] font-black text-primary uppercase tracking-widest">{hosp.type}</span>
                          <div className="w-1 h-1 bg-gray-200 rounded-full"></div>
                          <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest">{hosp.dist}</span>
                        </div>
                        <h3 className="text-xl font-black text-gray-900 leading-tight mb-3 truncate group-hover:text-primary transition-colors">{hosp.name}</h3>
                        <div className="flex flex-wrap gap-2">
                           {hosp.services.map((s, i) => (
                             <span key={i} className="text-[8px] bg-zinc-50 text-gray-400 px-2 py-1 rounded-lg font-black uppercase border border-gray-100">{s}</span>
                           ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between py-4 border-y border-gray-50 mb-6">
                       <div className="flex items-center gap-6">
                          <div>
                             <p className="text-[8px] text-gray-400 font-black uppercase tracking-widest mb-1">Rating</p>
                             <div className="flex items-center gap-1.5 text-[11px] font-black text-gray-900">
                                <FaStar className="text-orange-400 text-[10px]" /> {hosp.rating}
                             </div>
                          </div>
                          <div className="w-px h-6 bg-gray-100"></div>
                          <div>
                             <p className="text-[8px] text-gray-400 font-black uppercase tracking-widest mb-1">Antrean</p>
                             <div className="flex items-center gap-1.5 text-[11px] font-black text-gray-900">
                                <FaClock className="text-primary text-[10px]" /> {hosp.wait}
                             </div>
                          </div>
                       </div>
                       <div className={`px-4 py-2 rounded-xl text-[9px] font-black uppercase tracking-tighter ${hosp.status.includes('Tersedia') ? 'bg-green-50 text-green-600' : 'bg-gray-50 text-gray-400'}`}>
                          {hosp.status}
                       </div>
                    </div>

                    <button className="w-full h-16 bg-gray-900 text-white rounded-3xl flex items-center justify-center gap-4 text-[11px] font-black uppercase tracking-[0.2em] shadow-xl hover:bg-primary transition-all active:scale-95 group-hover:shadow-primary-sm">
                       Buat Janji Medis <FaChevronRight className="text-[10px]" />
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Location Insight */}
          <div className="mt-12 p-8 bg-zinc-50 rounded-5xl border border-gray-100 text-center">
             <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-primary text-xl mb-6 shadow-sm mx-auto">
                <FaMapMarkerAlt />
             </div>
             <h3 className="text-lg font-black text-gray-900 mb-2">Punya preferensi lokasi?</h3>
             <p className="text-[12px] text-gray-500 font-medium leading-relaxed px-6">Gunakan peta untuk melihat antrean real-time di setiap fasilitas kesehatan.</p>
             <button className="mt-8 text-[11px] font-black text-primary uppercase tracking-widest flex items-center gap-3 mx-auto hover:gap-5 transition-all">
                Buka Peta Neura <FaArrowRight />
             </button>
          </div>
        </div>
      </main>
    </>
  );
}

