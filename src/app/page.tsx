'use client';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import { 
  FaCommentMedical, FaPills, FaHospital, FaSyringe, FaShieldAlt, 
  FaBrain, FaRunning, FaStar, FaBookMedical, FaWeight,
  FaHeadSideVirus, FaStethoscope, 
  FaPlus, FaApple, FaGooglePlay 
} from 'react-icons/fa';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="bg-white">
        <Hero />

        {/* MAIN SERVICES GRID */}
        <section className="py-16 bg-white relative z-10">
          <div className="px-6">
            <div className="text-center mb-10 space-y-2">
              <h2 className="text-[1.3rem] font-black text-gray-800 tracking-tight">Solusi di Tanganmu</h2>
              <p className="text-[11px] text-gray-400 font-bold uppercase tracking-widest leading-none">Pilih Layanan Utama</p>
            </div>
            
            {/* fixed: rounded-4xl → rounded-3xl, shadow-xs → shadow-sm */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { title: 'Chat Dokter', icon: <FaCommentMedical />, desc: 'Tanya 24/7' },
                { title: 'Toko Obat', icon: <FaPills />, desc: 'Beli vitamin' },
                { title: 'Janji Medis', icon: <FaHospital />, desc: 'Klinik Kampus' },
                { title: 'Lab / PCR', icon: <FaSyringe />, desc: 'Cek di Kos' },
                { title: 'Asuransiku', icon: <FaShieldAlt />, desc: 'BPJS & Asuransi' },
                { title: 'Konselor', icon: <FaBrain />, desc: 'Psikolog Ahli' },
                { title: 'NeuraFit', icon: <FaRunning />, desc: 'Gizi & Diet' },
                { title: 'Anti Acne', icon: <FaStar />, desc: 'Kulit Pelajar' }
              ].map((cat, idx) => (
                <div key={idx} className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-2xl hover:border-transparent transition-all duration-300 group flex flex-col items-center text-center">
                  <div className="w-14 h-14 bg-[#FFF0F3] rounded-2xl flex items-center justify-center text-3xl text-[#FF6B8B] mb-5 shadow-inner group-hover:scale-110 transition-transform">
                    {cat.icon}
                  </div>
                  <h3 className="text-[0.85rem] font-black text-gray-800 mb-1 leading-tight">{cat.title}</h3>
                  <span className="text-[10px] text-gray-400 font-bold tracking-tight uppercase">{cat.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROMO HIGHLIGHTS */}
        <section className="py-24 bg-gray-50/50 overflow-hidden">
          <div className="px-6">
            <div className="flex justify-between items-end mb-10">
               <div className="space-y-1">
                 <h2 className="text-[1.3rem] font-black text-gray-800 tracking-tight">Promo Menarik</h2>
                 <p className="text-[10px] text-[#FF6B8B] font-black uppercase tracking-widest">Penawaran Spesial</p>
               </div>
               <a href="/promo" className="text-[11px] font-black text-gray-400 uppercase tracking-widest pb-1 border-b-2 border-transparent hover:border-[#FF6B8B] transition-all whitespace-nowrap">Semua</a>
            </div>
            
            <div className="space-y-6">
              {[
                { 
                  title: 'Flash Sale: Vitamin Fokus Belajar', 
                  badge: 'OFF 50%', 
                  time: 'Sisa waktu: 12 jam 30 menit',
                  gradient: 'linear-gradient(135deg, #FF6B8B, #fb7185)',
                  shadow: 'shadow-[#FF6B8B]/10'
                },
                { 
                  title: 'Gratis Ongkir Obat ke Asrama', 
                  badge: 'FREE DELIVERY', 
                  time: 'Tanpa minimum belanja radius 5km',
                  gradient: 'linear-gradient(135deg, #0284c7, #0ea5e9)',
                  shadow: 'shadow-blue-500/10'
                }
              ].map((promo, i) => (
                <div key={i} style={{ background: promo.gradient }} className={`p-8 rounded-[2.5rem] text-white relative overflow-hidden shadow-2xl ${promo.shadow} group`}>
                   <div className="absolute -right-6 -top-6 w-32 h-32 bg-white/10 rounded-full group-hover:scale-125 transition-transform duration-700"></div>
                   <div className="relative z-10 space-y-6">
                      <span className="inline-block bg-white text-gray-900 px-4 py-1.5 rounded-xl text-[9px] font-black shadow-sm tracking-widest uppercase">
                        {promo.badge}
                      </span>
                      <div className="space-y-2">
                        <h3 className="text-xl font-black leading-tight tracking-tight pr-4">{promo.title}</h3>
                        <p className="text-[11px] opacity-90 font-medium italic">{promo.time}</p>
                      </div>
                   </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* HEALTH TOOLS */}
        {/* fixed: rounded-4xl → rounded-3xl */}
        <section className="py-28 bg-white">
          <div className="px-6">
            <h2 className="text-[1.3rem] font-black text-gray-800 mb-10 tracking-tight text-center">Diagnosis Mandiri</h2>
            
            <div className="space-y-4">
               {[
                 { icon: <FaBookMedical />, title: 'Kamus Kesehatan', color: 'bg-rose-50 text-rose-500', desc: 'Gejala, obat & pencegahan dini' },
                 { icon: <FaWeight />, title: 'Kalkulator BMI', color: 'bg-blue-50 text-blue-500', desc: 'Cek berat badan ideal pelajar' },
                 { icon: <FaHeadSideVirus />, title: 'Tes Stres & Depresi', color: 'bg-indigo-50 text-indigo-500', desc: 'Penilaian mandiri standar medis' }
               ].map((tool, i) => (
                 <div key={i} className="flex items-center gap-5 p-5 rounded-3xl border border-gray-100 hover:bg-gray-50/80 transition-all group cursor-pointer active:shadow-inner">
                    <div className={`w-14 h-14 ${tool.color} rounded-2xl flex items-center justify-center text-3xl shadow-sm group-hover:scale-110 transition-transform`}>
                      {tool.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-[13px] font-black text-gray-800 mb-1 tracking-tight">{tool.title}</h3>
                      <p className="text-[10px] text-gray-400 font-bold uppercase tracking-tight">{tool.desc}</p>
                    </div>
                 </div>
               ))}
            </div>
          </div>
        </section>

        {/* ARTICLES SLIDER */}
        <section className="py-20 bg-gray-50/50 overflow-hidden">
          <div className="px-6">
            <div className="flex justify-between items-end mb-10">
               <h2 className="text-[1.3rem] font-black text-gray-800 tracking-tight">Bacaan Sehat</h2>
               <a href="/artikel" className="text-[11px] font-black text-[#FF6B8B] tracking-widest uppercase pb-1 whitespace-nowrap">Lihat Semua</a>
            </div>
            
            {/* scrollbar-hide requires plugin — use overflow-x-auto with hidden scrollbar via CSS */}
            <div className="flex gap-5 overflow-x-auto pb-8 -mx-6 px-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
               {[
                 { title: "Burnout Akademik: Ciri & Solusinya", tag: "Mental" },
                 { title: "Kopi vs Begadang Skripsi", tag: "Life" },
                 { title: "Diet Nutrisi Mahasiswa Kos", tag: "Nutrition" }
               ].map((art, idx) => (
                 <div key={idx} className="min-w-[220px] bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100/50 group">
                    <div className="h-32 bg-[#FFF0F3] flex items-center justify-center text-5xl text-[#FF6B8B] opacity-40 group-hover:scale-105 transition-transform duration-500">
                       <FaBookMedical />
                    </div>
                    <div className="p-6">
                        <span className="text-[9px] font-black text-[#FF6B8B] uppercase tracking-[0.2em] mb-3 block">{art.tag}</span>
                        <h4 className="text-[14px] font-black text-gray-800 leading-[1.3] mb-2">{art.title}</h4>
                        <div className="flex items-center gap-2 mt-4 text-[10px] font-bold text-gray-300">
                          <span>5 Menit Baca</span>
                        </div>
                    </div>
                 </div>
               ))}
            </div>
          </div>
        </section>

        {/* MEDICAL EXCELLENCE */}
        <section className="py-24 bg-white">
          <div className="px-6">
            <div className="bg-[#0f172a] p-10 pt-14 rounded-[3.5rem] text-center text-white relative overflow-hidden shadow-2xl border border-white/5 ring-1 ring-white/10">
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-white/10 rounded-3xl mb-10 flex items-center justify-center border border-white/20 backdrop-blur-3xl shadow-inner">
                  <FaStethoscope className="text-3xl text-[#FF6B8B]" />
                </div>
                <h2 className="text-2xl font-black mb-5 tracking-tight text-white">Board of Medical Excellence</h2>
                <div className="max-w-[280px] mx-auto">
                  <p className="text-[11px] text-gray-200 leading-relaxed font-bold tracking-widest uppercase opacity-90">
                    Dijamin oleh komite medis profesional standar internasional.
                  </p>
                </div>
                <div className="mt-12 pt-10 border-t border-white/10 w-full">
                  <span className="text-[10px] text-[#FF6B8B] font-black uppercase tracking-[0.4em] drop-shadow-sm">Verified by Kemenkes RI</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      {/* FOOTER */}
      <footer className="bg-white pt-20 pb-32 border-t border-gray-50">
        <div className="px-8 flex flex-col items-center">
           <div className="w-full space-y-16">
              {/* Branding Section */}
              <div className="flex flex-col items-center text-center gap-6">
                <div className="flex items-center gap-3">
                  <div className="bg-[#FF6B8B] text-white rounded-xl w-10 h-10 flex items-center justify-center text-lg shadow-lg">
                    <FaPlus />
                  </div>
                  <h2 className="text-2xl font-black text-gray-800 tracking-tighter">Neura</h2>
                </div>
                <p className="text-[11px] text-gray-400 leading-relaxed font-bold uppercase tracking-widest max-w-[260px] opacity-80">
                  Platform kesehatan digital masa depan untuk mahasiswa Indonesia.
                </p>
                
                {/* App Links */}
                <div className="flex flex-col gap-3 w-full max-w-[180px]">
                  <button className="flex items-center gap-4 bg-gray-900 p-3 rounded-2xl hover:bg-black transition-all">
                     <FaApple className="text-2xl text-white" />
                     <div className="text-left leading-none">
                       <p className="text-[7px] text-white/40 font-black uppercase tracking-widest">Download on</p>
                       <p className="text-[12px] text-white font-black">App Store</p>
                     </div>
                  </button>
                  <button className="flex items-center gap-4 bg-gray-900 p-3 rounded-2xl hover:bg-black transition-all">
                     <FaGooglePlay className="text-xl text-white" />
                     <div className="text-left leading-none">
                       <p className="text-[7px] text-white/40 font-black uppercase tracking-widest">Get it on</p>
                       <p className="text-[12px] text-white font-black">Google Play</p>
                     </div>
                  </button>
                </div>
              </div>
              
              {/* Links Grid */}
              <div className="grid grid-cols-2 gap-12 w-full pt-4">
                 <div className="space-y-6">
                    <h4 className="text-[9px] font-black text-gray-400 uppercase tracking-widest">Bantuan</h4>
                    <ul className="text-[11px] space-y-5 text-gray-800 font-bold uppercase tracking-tight">
                       <li className="hover:text-[#FF6B8B] transition-colors cursor-pointer">FAQ</li>
                       <li className="hover:text-[#FF6B8B] transition-colors cursor-pointer">Terms</li>
                       <li className="hover:text-[#FF6B8B] transition-colors cursor-pointer">Privacy</li>
                    </ul>
                 </div>
                 <div className="space-y-6">
                    <h4 className="text-[9px] font-black text-gray-400 uppercase tracking-widest">Neura</h4>
                    <ul className="text-[11px] space-y-5 text-gray-800 font-bold uppercase tracking-tight">
                       <li className="hover:text-[#FF6B8B] transition-colors cursor-pointer">Tentang</li>
                       <li className="hover:text-[#FF6B8B] transition-colors cursor-pointer">Karir</li>
                       <li className="hover:text-[#FF6B8B] transition-colors cursor-pointer">Kontak</li>
                    </ul>
                 </div>
              </div>
           </div>
        </div>

        <div className="mt-20 py-10 bg-gray-50/50 border-t border-gray-100 text-center">
            <p className="text-[8px] text-gray-300 font-black uppercase tracking-[0.4em] px-8 leading-relaxed">
              &copy; 2026 Neura Indonesia. <br/>All Rights Reserved.
            </p>
        </div>
      </footer>
    </>
  );
}