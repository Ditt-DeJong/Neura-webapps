'use client';
import { FaChevronLeft, FaPhoneAlt, FaMapMarkerAlt, FaTruckLoading, FaShieldAlt, FaClock, FaCheckCircle, FaExclamationTriangle, FaAmbulance, FaArrowRight, FaCommentDots } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';

export default function AmbulanceService() {
  const router = useRouter();
  const [isSearching, setIsSearching] = useState(false);
  const [estimatedTime, setEstimatedTime] = useState('8-12');

  const facilities = [
    { name: "RS Universitas Indonesia", status: "Tersedia", dist: "1.2 km", type: "Pusat Medis" },
    { name: "RS Bhayangkara Brimob", status: "Tersedia", dist: "3.5 km", type: "Rumah Sakit Umum" },
    { name: "Puskesmas Beji", status: "Terbatas", dist: "2.8 km", type: "Klinik Publik" },
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen pb-40 pt-32 bg-white relative overflow-hidden">
        {/* Urgent Background Glow */}
        <div className="absolute top-0 inset-x-0 h-[50vh] bg-red-500/5 blur-[120px] rounded-full -translate-y-1/2"></div>
        
        {/* Back Button */}
        <div className="px-6 max-w-[450px] mx-auto mb-8 relative z-10">
          <button 
            onClick={() => router.back()} 
            className="w-12 h-12 rounded-2xl bg-white border border-gray-100 shadow-sm flex items-center justify-center text-gray-900 active:scale-90 transition-all font-black text-xs"
          >
            <FaChevronLeft />
          </button>
        </div>

        <div className="max-w-[450px] mx-auto relative z-10">
           {/* Header Section */}
           <div className="px-8 mb-12">
              <span className="text-[10px] text-red-500 font-black uppercase tracking-[0.4em] mb-4 block flex items-center gap-3">
                 <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></div> Emergency 24/7
              </span>
              <h1 className="text-3xl font-black text-gray-900 leading-[1.2] tracking-tight mb-6">
                Layanan <br /><span className="text-red-600">Ambulans</span> Darurat
              </h1>
              <p className="text-[14px] text-gray-500 leading-relaxed font-medium">
                Panggilan darurat terintegrasi dengan RS dan Klinik terdekat dari lokasi kamu secara otomatis.
              </p>
           </div>

           {/* Quick Actions */}
           <div className="px-6 mb-12">
              <button 
                onClick={() => setIsSearching(true)}
                className="w-full bg-red-600 hover:bg-red-700 text-white p-10 rounded-[3rem] shadow-[0_20px_40px_-15px_rgba(220,38,38,0.4)] transition-all active:scale-95 group relative overflow-hidden flex flex-col items-center gap-6"
              >
                 <div className="absolute inset-0 bg-linear-to-tr from-white/10 to-transparent"></div>
                 <div className="w-24 h-24 bg-white/20 rounded-[2.5rem] flex items-center justify-center text-5xl relative z-10 group-hover:rotate-12 transition-transform">
                    <FaPhoneAlt />
                 </div>
                 <div className="relative z-10 text-center">
                    <h3 className="text-2xl font-black uppercase tracking-widest mb-2 leading-none">Panggil Sekarang</h3>
                    <p className="text-[10px] text-white/60 font-black uppercase tracking-widest leading-none mt-3">Respon Cepat &lt; 15 Menit</p>
                 </div>
              </button>
           </div>

           {/* Nearby Facilities */}
           <div className="px-8 space-y-6 mb-20">
              <div className="flex justify-between items-center">
                 <h2 className="text-[12px] font-black text-gray-900 uppercase tracking-widest">Fasilitas Siaga Terdekat</h2>
                 <span className="text-[10px] font-black text-emerald-500 uppercase tracking-widest bg-emerald-50 px-3 py-1 rounded-full">Aktif</span>
              </div>
              
              <div className="space-y-4">
                 {facilities.map((fac, i) => (
                   <div key={i} className="p-5 bg-white rounded-4xl border border-gray-100 shadow-premium flex items-center gap-5">
                      <div className="w-14 h-14 bg-gray-50 text-gray-400 rounded-2xl flex items-center justify-center text-xl shrink-0">
                         <FaMapMarkerAlt className={i === 0 ? "text-red-500" : "text-gray-300"} />
                      </div>
                      <div className="flex-1 min-w-0">
                         <h4 className="text-[14px] font-black text-gray-900 leading-tight mb-1 truncate">{fac.name}</h4>
                         <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest leading-none">{fac.dist} • {fac.type}</p>
                      </div>
                      <div className={`px-3 py-1 rounded-full text-[8px] font-black uppercase tracking-widest ${fac.status === 'Tersedia' ? 'bg-emerald-50 text-emerald-600' : 'bg-orange-50 text-orange-600'}`}>
                         {fac.status}
                      </div>
                   </div>
                 ))}
              </div>
           </div>

           {/* Procedure Info */}
           <div className="px-8 mb-20">
              <div className="bg-gray-900 p-8 rounded-5xl text-white relative overflow-hidden group">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl"></div>
                 <h3 className="text-[14px] font-black uppercase tracking-widest mb-8 flex items-center gap-3">
                    <FaCheckCircle className="text-primary" /> SOP Penanganan
                 </h3>
                 <div className="space-y-6">
                    {[
                      { icon: <FaClock />, title: "Dispatched In 2 Mins", desc: "Sistem Neura langsung mengirimkan koordinat GPS Anda ke armada Ambulans." },
                      { icon: <FaShieldAlt />, title: "Paramedic Equipped", desc: "Setiap armada dilengkapi alat bantuan hidup dasar (AED, Oksigen, Med-Kit)." },
                      { icon: <FaArrowRight />, title: "Live Tracking", desc: "Lacak posisi ambulans secara real-time dari layar smartphone Anda." },
                    ].map((step, i) => (
                      <div key={i} className="flex gap-5">
                         <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-primary text-sm shrink-0 mt-1 border border-white/10">
                            {step.icon}
                         </div>
                         <div>
                            <h4 className="text-[13px] font-black leading-tight text-white/90 mb-1">{step.title}</h4>
                            <p className="text-[11px] text-white/40 font-medium leading-relaxed">{step.desc}</p>
                         </div>
                      </div>
                    ))}
                 </div>
              </div>
           </div>

           {/* Note Banner */}
           <div className="px-8 pb-32">
              <div className="p-6 bg-orange-50 rounded-4xl border border-orange-100 flex gap-4 items-start">
                 <FaExclamationTriangle className="text-orange-500 text-lg shrink-0 mt-1" />
                 <p className="text-[11px] text-orange-700 font-medium leading-relaxed">
                    <strong>Penting:</strong> Layanan ambulans diutamakan untuk kondisi kritis seperti sesak napas, nyeri dada hebat, atau luka parah. Gunakan dengan bijak.
                 </p>
              </div>
           </div>
        </div>

        {/* Searching Overlay (Mock) */}
        {isSearching && (
           <div className="fixed inset-0 bg-white/95 backdrop-blur-xl z-[100] flex flex-col items-center justify-center px-10 text-center animate-in fade-in duration-500">
              <div className="relative mb-12">
                 <div className="w-40 h-40 bg-red-100 rounded-full animate-ping opacity-20 absolute inset-0"></div>
                 <div className="w-40 h-40 bg-red-500 rounded-full flex items-center justify-center text-64 text-white relative shadow-2xl animate-bounce">
                    <FaAmbulance className="text-5xl" />
                 </div>
              </div>
              <h2 className="text-2xl font-black text-gray-900 mb-4 tracking-tight">Menghubungkan ke Pusat Darurat...</h2>
              <p className="text-[13px] text-gray-400 font-medium leading-relaxed max-w-[280px] mb-12">
                 Harap tetap tenang. GPS Anda sedang diteruskan ke RS Universitas Indonesia dan armada Ambulans terdekat.
              </p>
              <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden mb-12 max-w-[200px]">
                 <div className="h-full bg-red-500 rounded-full animate-[progress_3s_ease-in-out_infinite]"></div>
              </div>
              <button 
                onClick={() => setIsSearching(false)}
                className="w-full max-w-[300px] h-16 border-2 border-gray-100 rounded-3xl text-[11px] font-black uppercase tracking-widest text-gray-400 hover:text-red-500 hover:border-red-100 transition-all"
              >
                 Batalkan Panggilan
              </button>
           </div>
        )}
      </main>
      
      <style jsx>{`
        @keyframes progress {
          0% { width: 0%; }
          100% { width: 100%; }
        }
      `}</style>
    </>
  );
}
