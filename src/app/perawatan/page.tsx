'use client';
import Navbar from '@/components/Navbar';
import { FaUserNurse, FaBrain, FaSpa, FaVenusMars, FaAppleAlt, FaChevronRight, FaRobot } from 'react-icons/fa';
import Link from 'next/link';

export default function PerawatanKhusus() {
  const treatments = [
    {
      title: "Mental Health",
      desc: "Konseling rahasia untuk mengatasi stres akademik dan kecemasan.",
      icon: <FaBrain />,
      iconClass: "bg-blue-50 text-blue-500",
    },
    {
      title: "Estetika & Kulit",
      desc: "Solusi jerawat pubertas dan perawatan kulit kusam karena begadang.",
      icon: <FaSpa />,
      iconClass: "bg-rose-50 text-primary",
    },
    {
      title: "Gizi & Diet",
      desc: "Rencana makan sehat khusus mahasiswa kos bersama ahli gizi.",
      icon: <FaAppleAlt />,
      iconClass: "bg-green-50 text-green-500",
    },
    {
      title: "Reproduksi",
      desc: "Diskusi rahasia tentang siklus haid dan edukasi kesehatan.",
      icon: <FaVenusMars />,
      iconClass: "bg-purple-50 text-purple-500",
    }
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen pb-32 pt-32 bg-background-app">
        <div className="px-8 max-w-[450px] mx-auto">
          {/* Header */}
          <div className="flex flex-col gap-8 mb-16">
            <div className="space-y-4">
              <span className="text-[10px] text-primary font-black uppercase tracking-[0.4em]">Academic Care</span>
              <h1 className="text-3xl font-black text-gray-900 leading-[1.15] tracking-tight">
                Perawatan <br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-primary-light">Premium</span>
              </h1>
              <p className="text-gray-500 text-[13px] leading-relaxed font-medium">
                 Kami memahami kebutuhan spesifik para mahasiswa. Temukan layanan medis yang dipersonalisasi untukmu.
              </p>
            </div>
          </div>

          {/* Treatments Grid */}
          <div className="space-y-6">
             {treatments.map((item, idx) => (
               <Link href={`/perawatan/treatment-${idx}`} key={idx} className="group bg-white p-6 rounded-4xl shadow-premium border border-gray-100/50 hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col gap-6">
                 <div className="flex items-center gap-5">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl shrink-0 ${item.iconClass} shadow-sm group-hover:scale-105 transition-transform`}>
                       {item.icon}
                    </div>
                    <div className="flex-1">
                       <h3 className="text-[15px] font-black text-gray-900 mb-1 leading-tight">{item.title}</h3>
                       <div className="flex items-center gap-1.5 grayscale opacity-70">
                          <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest leading-none">Specialist Care</span>
                       </div>
                    </div>
                    <div className="text-gray-200">
                      <FaChevronRight className="text-xs" />
                    </div>
                 </div>
                 
                 <p className="text-gray-500 text-[12px] leading-relaxed font-medium px-1">
                   {item.desc}
                 </p>
                 
                 <div className="pt-4 border-t border-gray-50 flex items-center justify-between">
                    <div className="flex -space-x-2">
                       {[1, 2, 3].map(i => (
                         <div key={i} className="w-6 h-6 rounded-full bg-gray-100 border-2 border-white overflow-hidden shadow-sm">
                            <div className="w-full h-full bg-secondary opacity-50 flex items-center justify-center text-[6px] text-primary font-black uppercase">DR</div>
                         </div>
                       ))}
                       <div className="w-6 h-6 rounded-full bg-secondary border-2 border-white flex items-center justify-center text-[6px] text-primary font-black">+4</div>
                    </div>
                    <div className="text-primary font-black text-[10px] uppercase tracking-widest flex items-center gap-2 group-hover:gap-3 transition-all">
                       Buat Janji <FaUserNurse className="text-sm" />
                    </div>
                 </div>
               </Link>
            ))}
          </div>
          
          {/* AI Banner */}
          <div className="mt-16 bg-white p-8 rounded-5xl text-center relative overflow-hidden shadow-premium border border-gray-100 group">
             <div className="absolute top-0 right-0 w-32 h-32 bg-secondary rounded-full blur-3xl opacity-50 group-hover:scale-150 transition-transform duration-1000"></div>
             <div className="relative z-10 flex flex-col items-center">
                <div className="w-16 h-16 bg-secondary text-primary rounded-3xl mb-8 flex items-center justify-center text-3xl shadow-inner group-hover:rotate-12 transition-transform">
                   <FaRobot />
                </div>
                <h2 className="text-xl font-black mb-4 text-gray-900">Butuh Rekomendasi?</h2>
                <p className="text-gray-500 mb-10 text-[12px] leading-relaxed font-medium max-w-[240px]">
                  Diskusikan keluhanmu dengan AI Neura untuk rujukan dokter yang paling tepat.
                </p>
                <button className="w-full py-5 bg-gray-900 hover:bg-black text-white rounded-2xl font-black text-[11px] uppercase tracking-widest transition-all shadow-xl active:scale-95">
                  Tanya AI Neura Sekarang
                </button>
             </div>
          </div>
        </div>
      </main>
    </>
  );
}