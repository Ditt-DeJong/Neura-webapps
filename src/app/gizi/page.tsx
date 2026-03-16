'use client';
import Navbar from '@/components/Navbar';
import { FaAppleAlt, FaUtensils, FaWeight, FaChartLine, FaChevronRight, FaPlus, FaCheckCircle } from 'react-icons/fa';
import Link from 'next/link';

export default function GiziDiet() {
  const mealPlans = [
    { title: "Sarapan Fokus", cal: "350 kcal", label: "Energy Boost" },
    { title: "Makan Siang Hemat", cal: "600 kcal", label: "High Protein" },
    { title: "Snack Belajar", cal: "150 kcal", label: "Low Glycemic" },
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen pb-32 pt-32 bg-background-app">
        <div className="px-8 max-w-[450px] mx-auto">
          {/* Header */}
          <div className="mb-10">
            <span className="text-[10px] text-primary font-black uppercase tracking-[0.4em] mb-3 block">Neura Nutrition</span>
            <h1 className="text-3xl font-black text-gray-900 tracking-tight leading-tight mb-4">
              Atur Pola <span className="text-primary">Makan</span> & <br/>Nutrisi Pelajar
            </h1>
            <p className="text-gray-500 text-[13px] font-medium leading-relaxed">
               Nutrisi yang tepat adalah kunci performa akademis maksimal. Dapatkan rencana makan sehat sesuai budget mahasiswa.
            </p>
          </div>

          {/* Calorie Progress */}
          <div className="mb-12 bg-gray-900 p-8 rounded-5xl text-white relative overflow-hidden shadow-2xl">
             <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl"></div>
             <div className="relative z-10">
                <div className="flex justify-between items-end mb-8">
                   <div className="space-y-1">
                      <p className="text-[10px] text-gray-400 font-black uppercase tracking-widest">Asupan Hari Ini</p>
                      <h3 className="text-3xl font-black text-white leading-none">1,240 <span className="text-sm text-gray-400 font-bold uppercase tracking-tight">kcal</span></h3>
                   </div>
                   <div className="text-right">
                      <p className="text-[10px] text-primary font-black uppercase tracking-widest mb-1">Target</p>
                      <p className="text-[12px] font-black text-white">2,100 kcal</p>
                   </div>
                </div>
                
                <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden mb-8">
                   <div className="h-full bg-primary w-[60%] rounded-full shadow-primary-sm"></div>
                </div>
                
                <div className="grid grid-cols-3 gap-4">
                   {[
                     { label: 'Prot', val: '45g', color: 'bg-blue-500/20 text-blue-400' },
                     { label: 'Carb', val: '120g', color: 'bg-emerald-500/20 text-emerald-400' },
                     { label: 'Fat', val: '32g', color: 'bg-orange-500/20 text-orange-400' }
                   ].map((item, i) => (
                     <div key={i} className={`p-3 rounded-2xl ${item.color.split(' ')[0]} border border-white/5 text-center`}>
                        <p className="text-[8px] font-black uppercase tracking-widest mb-1 opacity-60">{item.label}</p>
                        <p className={`text-[12px] font-black ${item.color.split(' ')[1]}`}>{item.val}</p>
                     </div>
                   ))}
                </div>
             </div>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-2 gap-4 mb-12">
            <button className="flex items-center gap-4 p-5 bg-white rounded-4xl border border-gray-100 shadow-premium hover:-translate-y-1 transition-all group">
               <div className="w-12 h-12 bg-secondary text-primary rounded-2xl flex items-center justify-center text-xl group-hover:bg-primary group-hover:text-white transition-all">
                  <FaPlus />
               </div>
               <span className="text-[10px] font-black text-gray-900 uppercase tracking-widest text-left">Input<br/>Makanan</span>
            </button>
            <button className="flex items-center gap-4 p-5 bg-white rounded-4xl border border-gray-100 shadow-premium hover:-translate-y-1 transition-all group">
               <div className="w-12 h-12 bg-secondary text-primary rounded-2xl flex items-center justify-center text-xl group-hover:bg-primary group-hover:text-white transition-all">
                  <FaChartLine />
               </div>
               <span className="text-[10px] font-black text-gray-900 uppercase tracking-widest text-left">Analisis<br/>Gizi</span>
            </button>
          </div>

          {/* Meal Plans */}
          <div className="space-y-6">
             <div className="flex justify-between items-center px-2">
                <h2 className="text-[12px] font-black text-gray-900 uppercase tracking-widest">Rencana Makan Hari Ini</h2>
                <button className="text-[10px] font-black text-primary uppercase tracking-widest">Atur Ulang</button>
             </div>
             
             {mealPlans.map((item, idx) => (
               <Link key={idx} href={`/gizi/sarapan-fokus`} className="bg-white p-6 rounded-4xl border border-gray-100 shadow-premium flex items-center gap-5 group cursor-pointer relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-3">
                     <FaCheckCircle className="text-gray-100 text-lg group-hover:text-green-500 transition-colors" />
                  </div>
                  <div className="w-14 h-14 bg-secondary rounded-2xl flex items-center justify-center text-2xl text-primary shrink-0 group-hover:scale-105 transition-transform">
                     {idx % 2 === 0 ? <FaAppleAlt /> : <FaUtensils />}
                  </div>
                  <div className="flex-1 min-w-0">
                     <span className="text-[8px] font-black text-primary uppercase tracking-[0.2em] mb-1 block">{item.label}</span>
                     <h4 className="text-[15px] font-black text-gray-900 leading-tight mb-1 truncate">{item.title}</h4>
                     <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">{item.cal}</p>
                  </div>
                  <FaChevronRight className="text-xs text-gray-200" />
               </Link>
             ))}
          </div>

          {/* Expert Consultation */}
          <div className="mt-12 bg-primary/5 p-8 rounded-5xl border border-primary/10 text-center">
             <div className="w-16 h-16 bg-white rounded-3xl mx-auto mb-6 flex items-center justify-center text-primary text-3xl shadow-sm">
                <FaWeight />
             </div>
             <h3 className="text-[15px] font-black text-gray-900 mb-2">Punya Target Berat Badan?</h3>
             <p className="text-[12px] text-gray-500 font-medium leading-relaxed mb-8">
                Konsultasikan kebutuhan nutrisimu dengan nutrisionis profesional Neura.
             </p>
             <button className="w-full py-4 bg-gray-900 text-white rounded-2xl text-[11px] font-black uppercase tracking-widest hover:bg-black transition-all shadow-xl">
                Jadwalkan Konsultasi Gizi
             </button>
          </div>
        </div>
      </main>
    </>
  );
}
