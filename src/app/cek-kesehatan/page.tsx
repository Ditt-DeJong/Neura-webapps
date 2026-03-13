'use client';
import Navbar from '@/components/Navbar';
import { FaHeartbeat, FaBrain, FaRegChartBar, FaWeight, FaTint, FaArrowRight, FaChevronRight } from 'react-icons/fa';

export default function CekKesehatan() {
  const tests = [
    {
       title: "Skrining Mental DASS-21",
       desc: "Ukur tingkat Depresi, Kecemasan, dan Stres secara medis.",
       users: "12,500+",
       icon: <FaBrain />,
       color: "bg-purple-50 text-purple-500",
    },
    {
        title: "Kalkulator Indeks BMI",
        desc: "Ketahui berat badan idealmu dan cegah risiko obesitas dini.",
        users: "8,200+",
        icon: <FaWeight />,
        color: "bg-blue-50 text-blue-500",
     },
     {
        title: "Pemantau Siklus Haid",
        desc: "Catat riwayat menstruasimu untuk memprediksi periode berikutnya.",
        users: "5,300+",
        icon: <FaTint />,
        color: "bg-rose-50 text-primary",
     },
     {
        title: "Tes Risiko Kebugaran",
        desc: "Apakah kamu terlalu banyak duduk saat mengerjakan tugas?",
        users: "3,100+",
        icon: <FaHeartbeat />,
        color: "bg-orange-50 text-orange-500",
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
              <span className="text-[10px] text-primary font-black uppercase tracking-[0.4em]">Health Screening</span>
              <h1 className="text-3xl font-black text-gray-900 leading-[1.15] tracking-tight">
                Tes Kesehatan <br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-primary-light">Mandiri</span>
              </h1>
              <p className="text-gray-500 text-[13px] leading-relaxed font-medium">
                Kenali kondisimu sejak dini. Hasil tes mandiri ini bisa jadi referensi awal sebelum kamu ke dokter.
              </p>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-2 gap-4">
               <div className="bg-white p-6 rounded-3xl shadow-premium border border-gray-100/50 flex flex-col items-center text-center">
                  <div className="text-2xl font-black text-primary mb-1">4+</div>
                  <div className="text-[9px] font-black text-gray-400 uppercase tracking-widest">Jenis Tes</div>
               </div>
               <div className="bg-white p-6 rounded-3xl shadow-premium border border-gray-100/50 flex flex-col items-center text-center">
                  <div className="text-2xl font-black text-primary mb-1">30k+</div>
                  <div className="text-[9px] font-black text-gray-400 uppercase tracking-widest">Pengguna</div>
               </div>
            </div>
          </div>

          {/* Screening List */}
          <div className="flex flex-col items-center mb-10 text-center">
            <h2 className="text-xl font-black text-gray-900 tracking-tight">Daftar Skrining Aktif</h2>
          </div>
          
          <div className="space-y-6">
             {tests.map((test, idx) => (
                <div key={idx} className="bg-white p-6 rounded-4xl shadow-premium border border-gray-100/50 hover:-translate-y-1 transition-all duration-300 group cursor-pointer flex flex-col gap-6">
                   <div className="flex items-center gap-5">
                      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl shrink-0 ${test.color} shadow-sm group-hover:scale-105 transition-transform`}>
                         {test.icon}
                      </div>
                      <div className="flex-1">
                         <h3 className="text-[15px] font-black text-gray-900 mb-1 leading-tight">{test.title}</h3>
                         <div className="flex items-center gap-1.5 grayscale opacity-70">
                            <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest">{test.users} Done</span>
                         </div>
                      </div>
                      <div className="text-gray-200">
                        <FaChevronRight className="text-xs" />
                      </div>
                   </div>
                   
                   <p className="text-gray-500 text-[12px] leading-relaxed font-medium px-1">
                      {test.desc}
                   </p>
                   
                   <div className="pt-4 border-t border-gray-50">
                      <button className="w-full py-4 bg-primary text-white rounded-2xl font-black text-[11px] uppercase tracking-widest shadow-primary-sm group-hover:bg-primary-dark transition-all active:scale-[0.98]">
                         Mulai Tes Sekarang
                      </button>
                   </div>
                </div>
             ))}
          </div>

          {/* Bottom Card */}
          <div className="mt-16 bg-[#0f172a] p-10 rounded-5xl text-center text-white relative overflow-hidden shadow-2xl group">
             <div className="absolute inset-0 bg-primary/20 blur-[80px] opacity-20 z-0"></div>
             <div className="relative z-10 flex flex-col items-center">
                <div className="w-16 h-16 bg-white/10 rounded-3xl mb-8 flex items-center justify-center border border-white/20 backdrop-blur-3xl group-hover:scale-110 transition-transform">
                   <FaRegChartBar className="text-3xl text-primary" />
                </div>
                <h3 className="text-xl font-black mb-4">Riwayat Tes Kamu</h3>
                <p className="text-[11px] text-gray-400 leading-relaxed font-bold uppercase tracking-widest mb-8">
                   Belum ada data riwayat tes. Mulai tes pertamamu sekarang!
                </p>
                <div className="w-full pt-8 border-t border-white/10">
                   <span className="text-[10px] text-primary-light font-black uppercase tracking-[0.4em]">Privacy Secured</span>
                </div>
             </div>
          </div>
        </div>
      </main>
    </>
  );
}