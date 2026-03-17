'use client';
import { FaChevronLeft, FaShieldAlt, FaKey, FaFingerprint, FaMobileAlt, FaHistory, FaChevronRight, FaExclamationTriangle, FaCheckCircle, FaTrashAlt, FaArrowRight } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';
import { useState } from 'react';

export default function SecuritySettings() {
  const router = useRouter();
  const [twoFactor, setTwoFactor] = useState(true);
  const [biometric, setBiometric] = useState(false);

  return (
    <>
      <Navbar />
      <main className="min-h-screen pb-40 pt-32 bg-zinc-50">
        {/* Back Button */}
        <div className="px-6 max-w-[450px] mx-auto mb-8">
          <button 
            onClick={() => router.back()} 
            className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-gray-900 border border-gray-100 shadow-sm active:scale-90 transition-all font-black text-xs"
          >
            <FaChevronLeft />
          </button>
        </div>

        <div className="max-w-[450px] mx-auto">
           {/* Header Section */}
           <div className="px-8 mb-12">
              <span className="text-[10px] text-primary font-black uppercase tracking-[0.4em] mb-4 block">Privacy & Protection</span>
              <h1 className="text-3xl font-black text-gray-900 leading-[1.2] tracking-tight mb-6">
                Keamanan <span className="text-primary">Akun</span>
              </h1>
              <p className="text-[14px] text-gray-500 leading-relaxed font-medium">
                Kelola metode autentikasi dan pantau akses akun Neura kamu untuk keamanan data medis yang maksimal.
              </p>
           </div>

           {/* Security Status Card */}
           <div className="px-8 mb-12">
              <div className="bg-gray-900 p-8 rounded-5xl text-white relative overflow-hidden group shadow-2xl">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl opacity-50"></div>
                 <div className="flex items-center gap-6 mb-8 relative z-10">
                    <div className="w-16 h-16 bg-white/10 rounded-3xl flex items-center justify-center text-3xl text-primary border border-white/10 backdrop-blur-3xl group-hover:rotate-12 transition-transform">
                       <FaShieldAlt />
                    </div>
                    <div>
                       <h3 className="text-[18px] font-black tracking-tight leading-tight">Status Keamanan</h3>
                       <p className="text-[10px] text-emerald-400 font-bold uppercase tracking-widest mt-1 flex items-center gap-2">
                          <FaCheckCircle /> Sangat Kuat
                       </p>
                    </div>
                 </div>
                 <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden mb-4">
                    <div className="w-[85%] h-full bg-primary rounded-full"></div>
                 </div>
                 <p className="text-[9px] text-white/40 font-black uppercase tracking-widest leading-none">Terakhir dicek: 12 Menit Yang Lalu</p>
              </div>
           </div>

           {/* Security Options */}
           <div className="px-8 space-y-4 mb-12">
              <h2 className="text-[12px] font-black text-gray-900 uppercase tracking-widest px-2">Autentikasi & Akses</h2>
              
              {/* 2FA Toggle */}
              <div className="bg-white p-6 rounded-4xl border border-gray-100 shadow-premium flex items-center justify-between group">
                 <div className="flex items-center gap-5">
                    <div className="w-12 h-12 bg-blue-50 text-blue-500 rounded-2xl flex items-center justify-center text-xl">
                       <FaMobileAlt />
                    </div>
                    <div>
                       <h4 className="text-[14px] font-black text-gray-900 mb-0.5">Autentikasi 2 Faktor</h4>
                       <p className="text-[10px] text-gray-400 font-medium">Amankan via WhatsApp/SMS</p>
                    </div>
                 </div>
                 <button 
                  onClick={() => setTwoFactor(!twoFactor)}
                  className={`w-14 h-8 rounded-full transition-all relative flex items-center p-1 ${twoFactor ? 'bg-primary' : 'bg-gray-200'}`}
                 >
                    <div className={`w-6 h-6 bg-white rounded-full shadow-md transition-all ${twoFactor ? 'translate-x-6' : 'translate-x-0'}`}></div>
                 </button>
              </div>

              {/* Biometric Toggle */}
              <div className="bg-white p-6 rounded-4xl border border-gray-100 shadow-premium flex items-center justify-between group">
                 <div className="flex items-center gap-5">
                    <div className="w-12 h-12 bg-indigo-50 text-indigo-500 rounded-2xl flex items-center justify-center text-xl">
                       <FaFingerprint />
                    </div>
                    <div>
                       <h4 className="text-[14px] font-black text-gray-900 mb-0.5">Kunci Biometrik</h4>
                       <p className="text-[10px] text-gray-400 font-medium">Gunakan FaceID / Sidik Jari</p>
                    </div>
                 </div>
                 <button 
                  onClick={() => setBiometric(!biometric)}
                  className={`w-14 h-8 rounded-full transition-all relative flex items-center p-1 ${biometric ? 'bg-primary' : 'bg-gray-200'}`}
                 >
                    <div className={`w-6 h-6 bg-white rounded-full shadow-md transition-all ${biometric ? 'translate-x-6' : 'translate-x-0'}`}></div>
                 </button>
              </div>

              {/* Change Password */}
              <div className="bg-white p-6 rounded-4xl border border-gray-100 shadow-premium flex items-center justify-between group cursor-pointer hover:bg-gray-50 transition-all">
                 <div className="flex items-center gap-5">
                    <div className="w-12 h-12 bg-orange-50 text-orange-500 rounded-2xl flex items-center justify-center text-xl">
                       <FaKey />
                    </div>
                    <div>
                       <h4 className="text-[14px] font-black text-gray-900 mb-0.5">Ubah Password</h4>
                       <p className="text-[10px] text-gray-400 font-medium">Ganti password secara berkala</p>
                    </div>
                 </div>
                 <FaChevronRight className="text-xs text-gray-200" />
              </div>
           </div>

           {/* Device History */}
           <div className="px-8 mb-12">
              <h2 className="text-[12px] font-black text-gray-900 uppercase tracking-widest px-2 mb-6">Login Terakhir</h2>
              <div className="space-y-4">
                 {[
                   { name: "iPhone 15 Pro", location: "Depok, Indonesia", time: "Sekarang", active: true },
                   { name: "MacBook Pro M2", location: "Jakarta, Indonesia", time: "Kemarin, 20:45", active: false },
                 ].map((dev, i) => (
                   <div key={i} className="flex items-center gap-5 p-5 bg-white rounded-3xl border border-gray-100">
                      <div className="w-12 h-12 bg-zinc-50 text-gray-400 rounded-2xl flex items-center justify-center text-xl shrink-0">
                         <FaMobileAlt />
                      </div>
                      <div className="flex-1 min-w-0">
                         <h4 className="text-[13px] font-black text-gray-900 flex items-center gap-2">
                           {dev.name} {dev.active && <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>}
                         </h4>
                         <p className="text-[9px] text-gray-400 font-bold uppercase tracking-widest">{dev.location} • {dev.time}</p>
                      </div>
                      <button className="text-[10px] font-black text-primary uppercase tracking-widest px-4 py-2 hover:bg-primary/5 rounded-xl transition-all">Log Out</button>
                   </div>
                 ))}
                 <button className="w-full py-4 text-[10px] font-black text-gray-300 uppercase tracking-widest hover:text-primary transition-colors flex items-center justify-center gap-3">
                    <FaHistory /> Lihat Seluruh Riwayat
                 </button>
              </div>
           </div>

           {/* Danger Zone */}
           <div className="px-8 pb-32">
              <div className="p-8 bg-rose-50 border border-rose-100 rounded-[2.5rem] group cursor-pointer hover:bg-rose-100 transition-all">
                 <div className="flex items-center gap-5 mb-4">
                    <div className="w-12 h-12 bg-white text-primary rounded-2xl flex items-center justify-center text-xl shadow-sm border border-rose-200">
                       <FaTrashAlt />
                    </div>
                    <div>
                       <h3 className="text-[14px] font-black text-rose-900 leading-tight">Hapus Akun Neura</h3>
                       <p className="text-[11px] text-rose-700/60 font-medium">Tindakan ini permanen dan tidak dapat dibatalkan.</p>
                    </div>
                 </div>
                 <div className="flex items-center gap-2 text-[10px] font-black text-primary uppercase tracking-widest ml-17 group-hover:gap-4 transition-all">
                    Hapus Selamanya <FaArrowRight />
                 </div>
              </div>
           </div>
        </div>
      </main>
    </>
  );
}
