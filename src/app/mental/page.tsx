'use client';
import Navbar from '@/components/Navbar';
import { FaBrain, FaHeart, FaMoon, FaLeaf, FaChevronRight, FaPlay, FaCommentDots, FaRegSadTear, FaRegMeh, FaRegSmile, FaRegGrinBeam, FaRegGrinStars } from 'react-icons/fa';

export default function MentalHealth() {
  const meditation = [
    { title: "Ketenangan Sebelum Ujian", duration: "10 min", icon: <FaBrain />, color: "bg-indigo-50 text-indigo-500" },
    { title: "Mengatasi Insomnia Begadang", duration: "15 min", icon: <FaMoon />, color: "bg-blue-50 text-blue-500" },
    { title: "Self-Love Affirmation", duration: "5 min", icon: <FaHeart />, color: "bg-rose-50 text-rose-500" },
  ];

  const moodIcons = [
    { icon: <FaRegSadTear />, label: "Sedih" },
    { icon: <FaRegMeh />, label: "Biasa" },
    { icon: <FaRegSmile />, label: "Senang" },
    { icon: <FaRegGrinBeam />, label: "Ceria" },
    { icon: <FaRegGrinStars />, label: "Sempurna" },
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen pb-32 pt-32 bg-background-app">
        <div className="px-8 max-w-[450px] mx-auto">
          {/* Header */}
          <div className="mb-10">
            <span className="text-[10px] text-primary font-black uppercase tracking-[0.4em] mb-3 block">Neura Mind Care</span>
            <h1 className="text-3xl font-black text-gray-900 tracking-tight leading-tight mb-4">
              Tenangkan <span className="text-primary">Pikiran</span>, <br/>Jaga Kesehatan Jiwa
            </h1>
            <p className="text-gray-500 text-[13px] font-medium leading-relaxed">
              Dukungan kesehatan mental yang aman dan terpercaya khusus untuk perjalanan akademikmu.
            </p>
          </div>

          {/* Mood Tracker */}
          <div className="mb-12 bg-white p-8 rounded-5xl shadow-premium border border-gray-100 flex flex-col items-center text-center">
             <h3 className="text-[12px] font-black text-gray-900 uppercase tracking-widest mb-8">Apa kabarmu hari ini?</h3>
             <div className="flex justify-between w-full px-4 mb-2">
                {moodIcons.map((mood, i) => (
                  <button key={i} className="text-3xl text-gray-300 hover:text-primary hover:scale-125 transition-all duration-300 transform active:scale-90">
                    {mood.icon}
                  </button>
                ))}
             </div>
             <div className="w-full flex justify-between px-2">
                <span className="text-[8px] font-black text-gray-300 uppercase tracking-tighter">Sedih</span>
                <span className="text-[8px] font-black text-gray-300 uppercase tracking-tighter">Sempurna</span>
             </div>
          </div>

          {/* Quick Consultation */}
          <div className="mb-12 bg-gray-900 p-10 rounded-5xl text-white relative overflow-hidden group">
             <div className="absolute top-0 right-0 w-32 h-32 bg-primary/30 rounded-full blur-3xl opacity-50"></div>
             <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                   <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-xl text-primary border border-white/10 backdrop-blur-xl">
                      <FaCommentDots />
                   </div>
                   <h3 className="text-[17px] font-black tracking-tight">Konseling Darurat</h3>
                </div>
                <p className="text-[11px] text-gray-400 font-medium leading-relaxed mb-10">
                   Sedang merasa sangat cemas atau butuh bicara sekarang? Hubungi psikolog siaga kami.
                </p>
                <button className="w-full py-5 bg-primary text-white rounded-2xl text-[11px] font-black uppercase tracking-widest shadow-primary-sm hover:opacity-90 transition-all">
                   Chat Psikolog Sekarang
                </button>
             </div>
          </div>

          {/* Meditation & Audio */}
          <div className="space-y-6">
             <div className="flex justify-between items-center px-2">
                <h2 className="text-[12px] font-black text-gray-900 uppercase tracking-widest">Self-Healing Audio</h2>
                <button className="text-[10px] font-black text-primary uppercase tracking-widest">Eksplor</button>
             </div>
             
             {meditation.map((item, idx) => (
               <div key={idx} className="bg-white p-5 rounded-4xl border border-gray-100 shadow-premium flex items-center gap-5 group cursor-pointer hover:shadow-2xl transition-all">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-xl shrink-0 ${item.color} group-hover:scale-105 transition-transform`}>
                     {item.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                     <h4 className="text-[14px] font-black text-gray-900 leading-tight mb-1 truncate">{item.title}</h4>
                     <p className="text-[9px] text-gray-400 font-bold uppercase tracking-widest">{item.duration} • Audio Guide</p>
                  </div>
                  <div className="w-10 h-10 bg-gray-900 text-white rounded-full flex items-center justify-center text-xs group-hover:bg-primary transition-colors">
                     <FaPlay className="ml-0.5" />
                  </div>
               </div>
             ))}
          </div>

          {/* Daily Quote */}
          <div className="mt-16 p-8 bg-secondary/30 rounded-4xl text-center border border-primary/10">
             <FaLeaf className="text-primary text-2xl mx-auto mb-6 opacity-40" />
             <p className="text-[15px] italic font-medium text-gray-800 leading-relaxed mb-6">
                "Tidak apa-apa untuk beristirahat sebentar. Langit yang tenang akan menyambutmu saat kau siap untuk terbang lagi."
             </p>
             <span className="text-[9px] font-black text-primary uppercase tracking-[0.3em]">Mental Wellness Neura</span>
          </div>
        </div>
      </main>
    </>
  );
}
