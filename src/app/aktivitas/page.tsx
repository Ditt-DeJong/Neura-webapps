'use client';
import { FaHistory, FaCommentMedical, FaHospital, FaArrowRight, FaChevronRight } from 'react-icons/fa';
import Link from 'next/link';

export default function AktivitasPage() {
  const activities = [
    { 
      type: "Konsultasi", 
      title: "dr. Sarah Wilson", 
      date: "12 Mar 2026, 14:00", 
      status: "Selesai", 
      icon: <FaCommentMedical />,
      color: "bg-blue-50 text-blue-500"
    },
    { 
      type: "Janji Temu", 
      title: "RS Universitas Indonesia", 
      date: "15 Mar 2026, 09:00", 
      status: "Mendatang", 
      icon: <FaHospital />,
      color: "bg-rose-50 text-primary"
    }
  ];

  return (
    <main className="min-h-screen pb-32 pt-16 bg-gray-50/50">
      <div className="px-6 max-w-[450px] mx-auto">
        <div className="mb-10">
          <span className="text-[10px] text-gray-400 font-black uppercase tracking-[0.4em] mb-3 block">Timeline</span>
          <h1 className="text-3xl font-black text-gray-900 tracking-tight leading-tight">
            Aktivitas <span className="text-primary">Kamu</span>
          </h1>
        </div>

        {/* Status Tabs */}
        <div className="flex gap-4 mb-10 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden -mx-6 px-6">
          {['Semua', 'Berlangsung', 'Selesai', 'Dibatalkan'].map((status, i) => (
            <button 
              key={i}
              className={`px-6 py-2.5 rounded-2xl whitespace-nowrap text-[10px] font-black uppercase tracking-widest transition-all ${
                i === 0 ? 'bg-gray-900 text-white shadow-lg' : 'bg-white text-gray-400 border border-gray-100'
              }`}
            >
              {status}
            </button>
          ))}
        </div>

        {/* Activity List */}
        <div className="space-y-6">
          {activities.map((act, idx) => (
            <Link href={`/aktivitas/activity-${idx}`} key={idx} className="block bg-white p-6 rounded-4xl border border-gray-100 shadow-premium group cursor-pointer hover:-translate-y-1 transition-all duration-300">
               <div className="flex items-center gap-5 mb-6">
                 <div className={`w-14 h-14 ${act.color} rounded-2xl flex items-center justify-center text-2xl shadow-sm group-hover:scale-105 transition-transform`}>
                   {act.icon}
                 </div>
                 <div className="flex-1">
                   <div className="flex justify-between items-start mb-1">
                     <span className="text-[9px] font-black text-primary uppercase tracking-[0.2em]">{act.type}</span>
                     <span className={`text-[8px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full ${
                       act.status === 'Selesai' ? 'bg-green-50 text-green-500' : 'bg-primary/10 text-primary'
                     }`}>
                       {act.status}
                     </span>
                   </div>
                   <h3 className="text-[14px] font-black text-gray-900 tracking-tight">{act.title}</h3>
                   <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">{act.date}</p>
                 </div>
               </div>
               
               <div className="pt-4 border-t border-gray-50 flex items-center justify-between">
                 <p className="text-[10px] text-gray-400 font-medium">Lihat detail riwayat medis</p>
                 <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-300 group-hover:bg-primary group-hover:text-white transition-all">
                   <FaArrowRight className="text-[10px]" />
                 </div>
               </div>
            </Link>
          ))}
        </div>

        {/* Empty State Mockup */}
        <div className="mt-16 text-center opacity-30">
          <div className="w-20 h-20 bg-gray-100 rounded-full mx-auto mb-6 flex items-center justify-center text-3xl text-gray-400">
             <FaHistory />
          </div>
          <p className="text-[11px] font-black uppercase tracking-[0.3em] text-gray-400 leading-relaxed">
            Tidak ada aktivitas <br/>lebih lama ditemukan
          </p>
        </div>
      </div>
    </main>
  );
}
