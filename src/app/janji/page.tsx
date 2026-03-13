'use client';
import Navbar from '@/components/Navbar';
import { FaMapMarkerAlt, FaHospital, FaCalendarAlt, FaChevronRight, FaStar, FaStethoscope, FaClinicMedical, FaUniversity } from 'react-icons/fa';

export default function JanjiMedis() {
  const hospitals = [
    { 
      name: "RS Universitas Indonesia", 
      dist: "1.2 km", 
      rating: "4.8", 
      type: "Rumah Sakit Umum",
      status: "Tersedia Hari Ini",
      icon: <FaHospital />
    },
    { 
      name: "Klinik Makara", 
      dist: "0.5 km", 
      rating: "4.7", 
      type: "Klinik Mahasiswa",
      status: "Tersedia Sekarang",
      icon: <FaClinicMedical />
    },
    { 
      name: "Puskesmas Beji", 
      dist: "2.8 km", 
      rating: "4.5", 
      type: "Pelayanan Publik",
      status: "Tutup • Buka Besok",
      icon: <FaUniversity />
    }
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen pb-32 pt-32 bg-background-app">
        <div className="px-8 max-w-[450px] mx-auto">
          {/* Header */}
          <div className="mb-10">
            <span className="text-[10px] text-primary font-black uppercase tracking-[0.4em] mb-3 block">Medical Appointment</span>
            <h1 className="text-3xl font-black text-gray-900 tracking-tight leading-tight mb-4">
              Cari <span className="text-primary">Fasilitas</span> & <br/>Buat Janji Temu
            </h1>
            
            <div className="flex gap-3 mt-8">
              <div className="flex-1 relative group">
                <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none">
                  <FaMapMarkerAlt className="text-primary text-xs" />
                </div>
                <input 
                  type="text" 
                  value="Depok, Jawa Barat" 
                  readOnly
                  className="w-full bg-white border border-gray-100 rounded-2xl py-4 pl-12 pr-4 text-[11px] font-black uppercase tracking-wider outline-none shadow-premium cursor-pointer hover:border-primary/30 transition-all"
                />
              </div>
              <button className="w-14 h-14 bg-gray-900 text-white rounded-2xl flex items-center justify-center text-sm shadow-xl hover:bg-black transition-all">
                <FaCalendarAlt />
              </button>
            </div>
          </div>

          {/* Specializations */}
          <div className="mb-12 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden -mx-8 px-8">
            <div className="flex gap-4">
              {['Semua', 'Umum', 'Gigi', 'THT', 'Internal', 'Saraf'].map((spec, i) => (
                <button 
                  key={i}
                  className={`px-6 py-3 rounded-2xl whitespace-nowrap text-[10px] font-black uppercase tracking-widest transition-all ${
                    i === 0 ? 'bg-primary text-white shadow-primary-sm' : 'bg-white text-gray-400 border border-gray-100'
                  }`}
                >
                  {spec}
                </button>
              ))}
            </div>
          </div>

          {/* Hospital List */}
          <div className="space-y-6">
            <div className="flex justify-between items-center px-2">
              <h2 className="text-[12px] font-black text-gray-900 uppercase tracking-widest">Fasilitas Terdekat</h2>
              <button className="text-[10px] font-black text-primary uppercase tracking-widest">Lihat Peta</button>
            </div>
            
            {hospitals.map((hosp, idx) => (
              <div key={idx} className="bg-white p-6 rounded-4xl border border-gray-100 shadow-premium hover:-translate-y-1 transition-all duration-300 group cursor-pointer">
                <div className="flex items-start gap-5">
                  <div className="w-20 h-20 bg-secondary rounded-3xl flex items-center justify-center text-4xl text-primary shadow-inner shrink-0 group-hover:scale-105 transition-transform">
                    {hosp.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[9px] font-black text-primary uppercase tracking-widest">{hosp.type}</span>
                      <div className="w-1 h-1 bg-gray-200 rounded-full"></div>
                      <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest">{hosp.dist}</span>
                    </div>
                    <h3 className="text-[16px] font-black text-gray-900 leading-tight mb-2 truncate group-hover:text-primary transition-colors">{hosp.name}</h3>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1 text-[10px] text-orange-400 font-black">
                        <FaStar className="text-[8px]" /> {hosp.rating}
                      </div>
                      <div className="flex items-center gap-1.5 px-2 py-0.5 bg-green-50 text-green-600 rounded-lg text-[8px] font-black uppercase tracking-tighter">
                        <div className="w-1 h-1 bg-green-500 rounded-full animate-pulse"></div>
                        {hosp.status}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 pt-5 border-t border-gray-50 flex items-center justify-between">
                   <div className="flex -space-x-2">
                      {[1, 2, 3].map(i => (
                        <div key={i} className="w-7 h-7 rounded-full bg-gray-100 border-2 border-white overflow-hidden shadow-sm flex items-center justify-center text-[7px] text-primary font-black">DR</div>
                      ))}
                   </div>
                   <button className="px-6 py-3 bg-gray-900 text-white rounded-xl text-[10px] font-black uppercase tracking-widest shadow-lg hover:bg-black transition-all flex items-center gap-2">
                     Buat Janji <FaStethoscope className="text-xs" />
                   </button>
                </div>
              </div>
            ))}
          </div>

          {/* Help Card */}
          <div className="mt-12 bg-secondary/50 p-8 rounded-5xl border-2 border-dashed border-primary/20 flex flex-col items-center text-center">
             <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-primary text-xl mb-4 shadow-sm">
                <FaHospital />
             </div>
             <h3 className="text-[14px] font-black text-gray-900 mb-2">Tidak menemukan RS terdekat?</h3>
             <p className="text-[11px] text-gray-500 font-medium leading-relaxed mb-6">
                Hubungi layanan darurat Neura untuk bantuan rujukan cepat ke fasilitas kesehatan terdekat.
             </p>
             <button className="text-primary font-black text-[10px] uppercase tracking-[0.2em] border-b border-primary pb-1 hover:tracking-[0.3em] transition-all">
                Layanan Darurat
             </button>
          </div>
        </div>
      </main>
    </>
  );
}
