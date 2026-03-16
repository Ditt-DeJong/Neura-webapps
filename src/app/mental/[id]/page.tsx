'use client';
import { FaChevronLeft, FaPlay, FaPause, FaStepBackward, FaStepForward, FaListUl, FaHeart, FaEllipsisV, FaMoon, FaBrain, FaInfoCircle } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';

export default function MentalDetail() {
  const params = useParams();
  const router = useRouter();
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(35); // Initial progress

  // Mock data for audio guide
  const audio = {
    title: "Ketenangan Sebelum Ujian",
    author: "Neura Mind Care",
    duration: "10:00",
    currentTime: "03:42",
    icon: <FaBrain />,
    color: "bg-indigo-500",
    desc: "Sesi meditasi khusus untuk meredakan kecemasan akademik dan meningkatkan fokus sebelum menghadapi ujian besar."
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white relative overflow-hidden flex flex-col">
        {/* Background Decoration */}
        <div className={`absolute top-0 inset-x-0 h-[60vh] ${audio.color} opacity-5 blur-[120px] rounded-full -translate-y-1/2`}></div>
        
        {/* Header Action Bar */}
        <div className="pt-32 px-8 flex justify-between items-center relative z-10 w-full max-w-[450px] mx-auto">
          <button 
            onClick={() => router.back()} 
            className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-gray-900 border border-gray-100 shadow-sm active:scale-90 transition-all"
          >
            <FaChevronLeft />
          </button>
          <div className="text-center">
             <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.4em]">Listening Now</p>
             <p className="text-[12px] font-black text-gray-900 uppercase tracking-widest mt-1">Audio Therapy</p>
          </div>
          <button className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-gray-900 border border-gray-100 shadow-sm active:scale-90 transition-all">
            <FaEllipsisV />
          </button>
        </div>

        {/* Player Body */}
        <div className="flex-1 flex flex-col items-center justify-center px-8 relative z-10 w-full max-w-[450px] mx-auto mt-12 pb-20">
           
           {/* Cover Art */}
           <div className="relative mb-16 w-full aspect-square">
              <div className={`absolute inset-0 ${audio.color} rounded-[4rem] group blur-2xl opacity-20 scale-110 active:scale-125 transition-all duration-700`}></div>
              <div className={`w-full h-full ${audio.color} rounded-[4rem] shadow-2xl flex items-center justify-center text-8xl text-white relative border-8 border-white group overflow-hidden`}>
                 <div className="absolute inset-0 bg-linear-to-tr from-white/20 to-transparent"></div>
                 {audio.icon}
                 
                 {/* Decorative Particles */}
                 <div className="absolute top-10 right-10 w-4 h-4 rounded-full bg-white/20"></div>
                 <div className="absolute bottom-20 left-12 w-2 h-2 rounded-full bg-white/40"></div>
                 <div className="absolute top-1/2 left-10 w-3 h-3 rounded-full bg-white/10"></div>
              </div>
           </div>

           {/* Track Titles */}
           <div className="text-center mb-12">
              <h1 className="text-2xl font-black text-gray-900 tracking-tight leading-tight mb-3">
                {audio.title}
              </h1>
              <p className="text-[12px] text-primary font-black uppercase tracking-[0.3em]">{audio.author}</p>
           </div>

           {/* Progress Slider */}
           <div className="w-full mb-12">
              <div className="flex justify-between text-[10px] font-black text-gray-400 uppercase tracking-widest mb-4">
                 <span>{audio.currentTime}</span>
                 <span>{audio.duration}</span>
              </div>
              <div className="relative h-2 bg-gray-100 rounded-full w-full group cursor-pointer">
                 <div 
                   className={`absolute inset-y-0 left-0 ${audio.color} rounded-full transition-all`}
                   style={{ width: `${progress}%` }}
                 >
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border-primary rounded-full shadow-lg scale-110"></div>
                 </div>
              </div>
           </div>

           {/* Main Controls */}
           <div className="flex items-center justify-between w-full px-4 mb-20">
              <button className="text-gray-400 hover:text-primary transition-colors text-xl">
                 <FaListUl />
              </button>
              
              <div className="flex items-center gap-10">
                 <button className="text-gray-900 hover:text-primary transition-colors text-2xl active:scale-90">
                    <FaStepBackward />
                 </button>
                 <button 
                   onClick={() => setIsPlaying(!isPlaying)}
                   className={`w-20 h-20 rounded-[2rem] ${audio.color} text-white flex items-center justify-center text-2xl shadow-[0_15px_30px_-10px_rgba(255,46,108,0.4)] active:scale-95 transition-all`}
                 >
                    {isPlaying ? <FaPause /> : <FaPlay className="ml-1" />}
                 </button>
                 <button className="text-gray-900 hover:text-primary transition-colors text-2xl active:scale-90">
                    <FaStepForward />
                 </button>
              </div>

              <button className="text-rose-500 transition-colors text-xl">
                 <FaHeart />
              </button>
           </div>

           {/* Description Card */}
           <div className="w-full bg-gray-50 rounded-4xl p-8 border border-gray-100 border-dashed">
              <h3 className="text-[11px] font-black text-gray-900 uppercase tracking-widest mb-4 flex items-center gap-2">
                 <FaInfoCircle className="text-primary text-xs" /> About this guide
              </h3>
              <p className="text-[13px] text-gray-500 font-medium leading-relaxed italic text-center">
                 "{audio.desc}"
              </p>
           </div>
        </div>

        {/* Bottom Background Mask */}
        <div className="absolute bottom-0 inset-x-0 h-32 bg-linear-to-t from-white to-transparent pointer-events-none"></div>
      </main>
    </>
  );
}
