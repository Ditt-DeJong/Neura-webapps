'use client';
import Navbar from '@/components/Navbar';
import { FaHeartbeat, FaBrain, FaRegChartBar, FaWeight, FaTint, FaChevronRight, FaSearch } from 'react-icons/fa';
import { useState } from 'react';

export default function CekKesehatan() {
  const [searchQuery, setSearchQuery] = useState('');

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

  const filteredTests = tests.filter(test => 
    test.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    test.desc.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <Navbar />
      <main className="min-h-screen pb-32 pt-32 bg-background-app">
        <div className="px-8 max-w-[450px] mx-auto">
          {/* Header Section */}
          <div className="mb-10">
            <span className="text-[10px] text-primary font-black uppercase tracking-[0.4em] mb-3 block">Self Screening</span>
            <h1 className="text-3xl font-black text-gray-900 tracking-tight leading-tight mb-4">
              Tes Kesehatan <br /><span className="text-primary">Mandiri</span>
            </h1>
            
            <div className="relative mt-8 group">
              <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none">
                <FaSearch className="text-gray-400 text-sm group-focus-within:text-primary transition-colors" />
              </div>
              <input 
                type="text" 
                placeholder="Cari jenis tes kesehatan..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white border border-gray-100 rounded-3xl py-5 pl-14 pr-6 text-[12px] font-medium focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all shadow-premium"
              />
            </div>
          </div>

          {/* Featured Screening - Only if no search */}
          {!searchQuery && (
            <div className="mb-12 bg-gray-900 p-10 rounded-6xl text-white relative overflow-hidden shadow-2xl group">
               <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl opacity-50"></div>
               <div className="flex items-center gap-6 mb-10">
                  <div className="w-16 h-16 bg-white/10 rounded-3xl flex items-center justify-center text-3xl text-primary border border-white/10 backdrop-blur-3xl group-hover:rotate-12 transition-transform">
                     <FaBrain />
                  </div>
                  <div>
                     <h3 className="text-[18px] font-black tracking-tight leading-tight">Tes DASS-21</h3>
                     <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-1">Mental Health Check</p>
                  </div>
               </div>
               <p className="text-[11px] text-gray-400 leading-relaxed font-medium mb-10">
                  Ukur tingkat depresi, kecemasan, dan stres akademikmu dengan instrumen medis standar internasional.
               </p>
               <button className="w-full py-5 bg-primary text-white rounded-2xl font-black text-[11px] uppercase tracking-widest hover:opacity-90 transition-all shadow-primary-sm active:scale-95">
                  Mulai Tes Mental Sekarang
               </button>
            </div>
          )}

          {/* Stats Bar - Only if no search */}
          {!searchQuery && (
            <div className="grid grid-cols-2 gap-4 mb-16">
               <div className="bg-white p-6 rounded-4xl shadow-premium border border-gray-100/50 flex flex-col items-center text-center">
                  <div className="text-2xl font-black text-gray-900 mb-1">12K+</div>
                  <div className="text-[9px] font-black text-gray-400 uppercase tracking-[0.2em]">Siswa Terbantu</div>
               </div>
               <div className="bg-white p-6 rounded-4xl shadow-premium border border-gray-100/50 flex flex-col items-center text-center">
                  <div className="text-2xl font-black text-gray-900 mb-1">100%</div>
                  <div className="text-[9px] font-black text-gray-400 uppercase tracking-[0.2em]">Privasi Aman</div>
               </div>
            </div>
          )}

          {/* List of Tools */}
          <div className="space-y-6">
             <div className="flex justify-between items-center px-2">
                <h2 className="text-[12px] font-black text-gray-900 uppercase tracking-widest">
                  {searchQuery ? `Hasil untuk "${searchQuery}"` : 'Daftar Skrining Lainnya'}
                </h2>
                {searchQuery && (
                  <button onClick={() => setSearchQuery('')} className="text-[10px] font-black text-primary uppercase tracking-widest">Reset</button>
                )}
             </div>
             
             {filteredTests.length > 0 ? (
               filteredTests.map((test, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-5xl border border-gray-100 shadow-premium hover:-translate-y-1 transition-all duration-300 group cursor-pointer">
                     <div className="flex items-center gap-6 mb-6">
                        <div className={`w-16 h-16 rounded-3xl flex items-center justify-center text-3xl shrink-0 ${test.color} shadow-sm group-hover:scale-105 transition-transform`}>
                           {test.icon}
                        </div>
                        <div className="flex-1">
                           <h3 className="text-[15px] font-black text-gray-900 mb-1 leading-tight group-hover:text-primary transition-colors">{test.title}</h3>
                           <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest">{test.users} Pengguna</span>
                        </div>
                        <FaChevronRight className="text-xs text-gray-200" />
                     </div>
                     <p className="text-[12px] text-gray-500 font-medium leading-relaxed px-1">
                        {test.desc}
                     </p>
                  </div>
               ))
             ) : (
                <div className="py-20 text-center">
                  <p className="text-gray-400 text-[12px] font-bold uppercase tracking-widest">Tes tidak ditemukan</p>
                </div>
             )}
          </div>

          {/* Bottom Card - Only if no search */}
          {!searchQuery && (
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
          )}
        </div>
      </main>
    </>
  );
}