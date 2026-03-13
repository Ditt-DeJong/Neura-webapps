'use client';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Link from 'next/link';
import { 
  FaCommentMedical, FaPills, FaHospital, FaSyringe, FaShieldAlt, 
  FaBrain, FaRunning, FaStar, FaBookMedical, FaWeight,
  FaHeadSideVirus, FaStethoscope, 
  FaPlus, FaApple, FaGooglePlay, FaArrowRight, FaChevronRight, FaRobot 
} from 'react-icons/fa';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="bg-white">
        <Hero />

        {/* MAIN SERVICES GRID */}
        <section className="py-20 bg-white relative z-10">
          <div className="px-8 max-w-[450px] mx-auto">
            <div className="flex flex-col items-center text-center mb-12">
              <span className="text-[10px] text-primary font-black uppercase tracking-[0.3em] mb-3">Layanan Utama</span>
              <h2 className="text-2xl font-black text-gray-900 tracking-tight">Solusi di Tanganmu</h2>
            </div>
            
            <div className="grid grid-cols-4 gap-4">
              {[
                { title: 'Chat', icon: <FaCommentMedical />, desc: 'Dokter', href: '/chat' },
                { title: 'Obat', icon: <FaPills />, desc: 'Toko', href: '/toko' },
                { title: 'Janji', icon: <FaHospital />, desc: 'Medis', href: '/janji' },
                { title: 'Lab', icon: <FaSyringe />, desc: 'PCR', href: '/lab' },
                { title: 'BPJS', icon: <FaShieldAlt />, desc: 'Asuransi', href: '/bpjs' },
                { title: 'Mental', icon: <FaBrain />, desc: 'Konselor', href: '/mental' },
                { title: 'Fit', icon: <FaRunning />, desc: 'Gizi', href: '/gizi' },
                { title: 'Acne', icon: <FaStar />, desc: 'Kulit', href: '/perawatan' }
              ].map((cat, idx) => (
                <Link key={idx} href={cat.href} className="group flex flex-col items-center gap-3 cursor-pointer">
                  <div className="w-14 h-14 bg-secondary rounded-2xl flex items-center justify-center text-2xl text-primary shadow-sm group-hover:shadow-primary-sm group-hover:-translate-y-1 transition-all duration-300">
                    {cat.icon}
                  </div>
                  <div className="text-center leading-tight">
                    <p className="text-[10px] font-black text-gray-800">{cat.title}</p>
                    <p className="text-[8px] text-gray-400 font-bold uppercase tracking-tighter">{cat.desc}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* PROMO HIGHLIGHTS */}
        <section className="py-20 bg-gray-50/50 overflow-hidden">
          <div className="px-8 max-w-[450px] mx-auto">
            <div className="flex justify-between items-end mb-10 px-2">
               <div className="space-y-1">
                 <p className="text-[10px] text-primary font-black uppercase tracking-widest">Penawaran Spesial</p>
                 <h2 className="text-xl font-black text-gray-900 tracking-tight">Promo Menarik</h2>
               </div>
               <a href="/promo" className="group flex items-center gap-2 text-[10px] font-black text-gray-400 uppercase tracking-widest hover:text-primary transition-colors">
                 Semua <FaArrowRight className="text-[8px] group-hover:translate-x-1 transition-transform" />
               </a>
            </div>
            
            <div className="space-y-6">
              {[
                { 
                  title: 'Vitamin Fokus Belajar', 
                  badge: 'OFF 50%', 
                  time: 'Sisa 12 Jam Lagi',
                  gradient: 'bg-linear-to-br from-primary to-[#ff5177]',
                  href: '/promo/vitamin-fokus'
                },
                { 
                  title: 'Gratis Ongkir ke Asrama', 
                  badge: 'FREE DELIVERY', 
                  time: 'Tanpa Min. Belanja',
                  gradient: 'bg-linear-to-br from-blue-600 to-blue-400',
                  href: '/promo/gratis-ongkir'
                }
              ].map((promo, i) => (
                <Link key={i} href={promo.href} className={`${promo.gradient} block p-8 rounded-5xl text-white relative overflow-hidden shadow-premium group cursor-pointer`}>
                   <div className="absolute -right-6 -top-6 w-32 h-32 bg-white/10 rounded-full group-hover:scale-125 transition-transform duration-700"></div>
                   <div className="relative z-10 space-y-6">
                      <span className="inline-block bg-white/20 backdrop-blur-md text-white px-3 py-1.5 rounded-xl text-[8px] font-black tracking-widest uppercase border border-white/20">
                        {promo.badge}
                      </span>
                      <div className="space-y-1">
                        <h3 className="text-xl font-black leading-tight tracking-tight pr-8">{promo.title}</h3>
                        <p className="text-[10px] text-white/70 font-bold uppercase tracking-widest">{promo.time}</p>
                      </div>
                   </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* HEALTH TOOLS */}
        <section className="py-24 bg-white">
          <div className="px-8 max-w-[450px] mx-auto">
            <div className="flex flex-col items-center text-center mb-12">
               <span className="text-[10px] text-gray-400 font-black uppercase tracking-[0.4em] mb-3">Self Diagnosis</span>
               <h2 className="text-2xl font-black text-gray-900 tracking-tight">Diagnosis Mandiri</h2>
            </div>
            
            <div className="space-y-5">
               {[
                 { icon: <FaBookMedical />, title: 'Kamus Kesehatan', color: 'bg-rose-50 text-rose-500', desc: 'Gejala, obat & pencegahan', href: '/kamus' },
                 { icon: <FaWeight />, title: 'Kalkulator BMI', color: 'bg-blue-50 text-blue-500', desc: 'Cek berat badan ideal', href: '/cek-kesehatan' },
                 { icon: <FaHeadSideVirus />, title: 'Tes Stres', color: 'bg-indigo-50 text-indigo-500', desc: 'Penilaian standar medis', href: '/cek-kesehatan' }
               ].map((tool, i) => (
                 <Link href={tool.href} key={i} className="flex items-center gap-5 p-5 bg-white rounded-4xl border border-gray-100 hover:shadow-premium hover:-translate-y-1 transition-all duration-300 group cursor-pointer">
                    <div className={`w-16 h-16 ${tool.color} rounded-2xl flex items-center justify-center text-3xl shadow-sm group-hover:scale-110 transition-transform`}>
                      {tool.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-[14px] font-black text-gray-900 mb-1 tracking-tight">{tool.title}</h3>
                      <p className="text-[10px] text-gray-400 font-bold uppercase tracking-tight leading-none">{tool.desc}</p>
                    </div>
                    <div className="text-gray-200">
                      <FaChevronRight className="text-xs" />
                    </div>
                 </Link>
               ))}
            </div>
          </div>
        </section>

        {/* ARTICLES SLIDER */}
        <section className="py-20 bg-gray-50/50 overflow-hidden">
          <div className="px-8 max-w-[450px] mx-auto">
            <div className="flex justify-between items-end mb-10 px-2">
               <div className="space-y-1">
                 <p className="text-[10px] text-primary font-black uppercase tracking-widest">Informasi Medis</p>
                 <h2 className="text-xl font-black text-gray-900 tracking-tight">Bacaan Sehat</h2>
               </div>
               <a href="/artikel" className="text-[10px] font-black text-gray-400 tracking-widest uppercase hover:text-primary transition-colors">Lihat Semua</a>
            </div>
            
            <div className="flex gap-6 overflow-x-auto pb-8 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
               {[
                 { title: "Burnout Akademik: Ciri & Solusi", tag: "Mental", slug: "burnout-akademik-ciri-dan-solusi" },
                 { title: "Kopi vs Begadang Skripsi", tag: "Life", slug: "kopi-vs-begadang-skripsi" },
                 { title: "Diet Nutrisi Mahasiswa Kos", tag: "Nutrition", slug: "diet-nutrisi-mahasiswa-kos" }
               ].map((art, idx) => (
                 <Link key={idx} href={`/artikel/${art.slug}`} className="min-w-[260px] bg-white rounded-5xl overflow-hidden shadow-premium hover:shadow-2xl transition-all duration-500 border border-gray-100/50 group cursor-pointer">
                    <div className="h-40 bg-secondary flex items-center justify-center text-6xl text-primary opacity-40 group-hover:scale-105 transition-transform duration-700">
                        <FaBookMedical />
                    </div>
                    <div className="p-8">
                        <span className="text-[10px] font-black text-primary uppercase tracking-widest mb-4 block">{art.tag}</span>
                        <h4 className="text-[16px] font-black text-gray-800 leading-[1.3] mb-4">{art.title}</h4>
                        <div className="flex items-center justify-between mt-auto">
                           <span className="text-[10px] font-bold text-gray-300">5 Menit Baca</span>
                           <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-primary group-hover:text-white transition-all">
                              <FaArrowRight className="text-[10px]" />
                           </div>
                        </div>
                    </div>
                 </Link>
               ))}
            </div>
          </div>
        </section>

        {/* MEDICAL EXCELLENCE */}
        <section className="py-24 bg-white">
          <div className="px-8 max-w-[450px] mx-auto">
            <div className="bg-[#0f172a] p-12 py-16 rounded-6xl text-center text-white relative overflow-hidden shadow-2xl border border-white/5 ring-1 ring-white/10 group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[100px] z-0 opacity-50 group-hover:opacity-100 transition-opacity duration-1000"></div>
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-white/10 rounded-4xl mb-12 flex items-center justify-center border border-white/20 backdrop-blur-3xl shadow-inner group-hover:rotate-12 transition-transform duration-500">
                  <FaStethoscope className="text-4xl text-primary" />
                </div>
                <h2 className="text-2xl font-black mb-6 tracking-tight text-white leading-tight">Board of Medical Excellence</h2>
                <p className="text-[12px] text-gray-300 leading-relaxed font-medium max-w-[280px] mb-12">
                  Dijamin oleh komite medis profesional dengan standar internasional yang ketat.
                </p>
                <div className="w-full pt-10 border-t border-white/10">
                  <span className="text-[10px] text-primary-light font-black uppercase tracking-[0.5em] drop-shadow-sm">Verified by Kemenkes RI</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      {/* FOOTER */}
      <footer className="bg-white pt-24 pb-12 border-t border-gray-50">
        <div className="px-8 max-w-[450px] mx-auto flex flex-col">
           <div className="space-y-20">
              {/* Branding Section */}
              <div className="flex flex-col gap-8">
                <div className="flex items-center gap-3">
                  <div className="bg-primary text-white rounded-xl w-10 h-10 flex items-center justify-center text-lg shadow-primary-sm">
                    <FaPlus />
                  </div>
                  <h2 className="text-2xl font-black text-gray-900 tracking-tighter">Neura</h2>
                </div>
                <p className="text-[13px] text-gray-500 leading-relaxed font-medium opacity-80">
                  Platform kesehatan digital masa depan untuk mahasiswa Indonesia. Solusi sehat dalam genggaman.
                </p>
                
                {/* App Links */}
                <div className="flex gap-4">
                  <button className="flex-1 flex items-center justify-center gap-3 bg-gray-900 p-3.5 rounded-2xl hover:bg-black transition-all shadow-lg active:scale-95">
                     <FaApple className="text-xl text-white" />
                     <div className="text-left leading-none">
                       <p className="text-[7px] text-white/40 font-black uppercase tracking-widest mb-1">Download</p>
                       <p className="text-[11px] text-white font-black">App Store</p>
                     </div>
                  </button>
                  <button className="flex-1 flex items-center justify-center gap-3 bg-gray-900 p-3.5 rounded-2xl hover:bg-black transition-all shadow-lg active:scale-95">
                     <FaGooglePlay className="text-lg text-white" />
                     <div className="text-left leading-none">
                       <p className="text-[7px] text-white/40 font-black uppercase tracking-widest mb-1">Get it on</p>
                       <p className="text-[11px] text-white font-black">Play Store</p>
                     </div>
                  </button>
                </div>
              </div>
              
              {/* Links Grid */}
              <div className="grid grid-cols-2 gap-12 pt-">
                 <div className="space-y-6">
                    <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Bantuan</h4>
                    <ul className="text-[12px] space-y-4 text-gray-600 font-bold uppercase tracking-tight">
                       <li className="hover:text-primary transition-colors cursor-pointer">FAQ</li>
                       <li className="hover:text-primary transition-colors cursor-pointer">Terms</li>
                       <li className="hover:text-primary transition-colors cursor-pointer">Privacy</li>
                    </ul>
                 </div>
                 <div className="space-y-6">
                    <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Neura</h4>
                    <ul className="text-[12px] space-y-4 text-gray-600 font-bold uppercase tracking-tight">
                       <li className="hover:text-primary transition-colors cursor-pointer">Tentang</li>
                       <li className="hover:text-primary transition-colors cursor-pointer">Karir</li>
                       <li className="hover:text-primary transition-colors cursor-pointer">Kontak</li>
                    </ul>
                 </div>
              </div>
           </div>

           <div className="mt-6 pt-8 border-t border-gray-100/50 text-center">
              <p className="text-[9px] text-gray-300 font-black uppercase tracking-[0.4em] leading-relaxed">
                &copy; 2026 Neura Indonesia. <br/>Part of Education Health Companion.
              </p>
           </div>
        </div>
      </footer>
    </>
  );
}