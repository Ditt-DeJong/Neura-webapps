'use client';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import { 
  FaCommentMedical, FaPills, FaHospital, FaSyringe, FaShieldAlt, 
  FaBrain, FaRunning, FaStar, FaBookMedical, FaWeight,
  FaHeadSideVirus, FaStethoscope, FaPlus, FaApple, FaGooglePlay 
} from 'react-icons/fa';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="bg-white">
        <Hero />

        {/* MAIN SERVICES GRID */}
        <section className="py-10 bg-white">
          <div className="px-5">
            <div className="text-center mb-8">
              <h2 className="text-xl font-black text-gray-900 tracking-tight">Solusi di Tanganmu</h2>
              <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-1">Pilih Layanan Utama</p>
            </div>
            
            <div className="grid grid-cols-4 gap-3">
              {[
                { title: 'Chat\nDokter', icon: <FaCommentMedical />, desc: '24/7' },
                { title: 'Toko\nObat', icon: <FaPills />, desc: 'Vitamin' },
                { title: 'Janji\nMedis', icon: <FaHospital />, desc: 'Klinik' },
                { title: 'Lab\nPCR', icon: <FaSyringe />, desc: 'Di Kos' },
                { title: 'Asuransi', icon: <FaShieldAlt />, desc: 'BPJS' },
                { title: 'Konselor', icon: <FaBrain />, desc: 'Psikolog' },
                { title: 'Neura\nFit', icon: <FaRunning />, desc: 'Gizi' },
                { title: 'Anti\nAcne', icon: <FaStar />, desc: 'Kulit' },
              ].map((cat, idx) => (
                <button key={idx} className="bg-white p-3 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-pink-100 transition-all flex flex-col items-center text-center gap-2 active:scale-95">
                  <div className="w-11 h-11 bg-[#FFF0F3] rounded-xl flex items-center justify-center text-lg text-[#FF6B8B]">
                    {cat.icon}
                  </div>
                  <div>
                    <h3 className="text-[9px] font-black text-gray-800 leading-tight whitespace-pre-line">{cat.title}</h3>
                    <span className="text-[8px] text-gray-400 font-bold">{cat.desc}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* PROMO SECTION */}
        <section className="py-10 bg-gray-50">
          <div className="px-5">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-xl font-black text-gray-900 tracking-tight">Promo Menarik</h2>
                <p className="text-[10px] text-[#FF6B8B] font-black uppercase tracking-widest mt-0.5">Penawaran Spesial</p>
              </div>
              <a href="/promo" className="text-[10px] font-black text-gray-400 uppercase tracking-widest hover:text-[#FF6B8B] transition-colors">Semua →</a>
            </div>
            
            <div className="space-y-4">
              {[
                { 
                  title: 'Flash Sale: Vitamin Fokus Belajar', 
                  badge: 'OFF 50%', 
                  time: 'Sisa waktu: 12 jam 30 menit',
                  from: '#FF6B8B',
                  to: '#fb7185',
                },
                { 
                  title: 'Gratis Ongkir Obat ke Asrama', 
                  badge: 'FREE DELIVERY', 
                  time: 'Tanpa minimum belanja radius 5km',
                  from: '#0284c7',
                  to: '#0ea5e9',
                },
              ].map((promo, i) => (
                <div
                  key={i}
                  className="p-6 rounded-3xl text-white relative overflow-hidden shadow-lg"
                  style={{ background: `linear-gradient(135deg, ${promo.from}, ${promo.to})` }}
                >
                  <div className="absolute -right-4 -top-4 w-24 h-24 bg-white/10 rounded-full"></div>
                  <div className="absolute -right-1 -bottom-6 w-16 h-16 bg-white/5 rounded-full"></div>
                  <div className="relative z-10">
                    <span className="inline-block bg-white text-gray-900 px-3 py-1 rounded-lg text-[9px] font-black tracking-widest uppercase mb-4 shadow-sm">
                      {promo.badge}
                    </span>
                    <h3 className="text-base font-black leading-tight tracking-tight mb-1">{promo.title}</h3>
                    <p className="text-[10px] opacity-80 font-medium">{promo.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* HEALTH TOOLS */}
        <section className="py-10 bg-white">
          <div className="px-5">
            <h2 className="text-xl font-black text-gray-900 mb-6 tracking-tight">Diagnosis Mandiri</h2>
            
            <div className="space-y-3">
              {[
                { icon: <FaBookMedical />, title: 'Kamus Kesehatan', iconBg: 'bg-rose-50', iconColor: 'text-rose-500', desc: 'Gejala, obat & pencegahan dini' },
                { icon: <FaWeight />, title: 'Kalkulator BMI', iconBg: 'bg-blue-50', iconColor: 'text-blue-500', desc: 'Cek berat badan ideal pelajar' },
                { icon: <FaHeadSideVirus />, title: 'Tes Stres & Depresi', iconBg: 'bg-indigo-50', iconColor: 'text-indigo-500', desc: 'Penilaian mandiri standar medis' },
              ].map((tool, i) => (
                <button key={i} className="w-full flex items-center gap-4 p-4 rounded-2xl border border-gray-100 bg-white hover:bg-gray-50 transition-all text-left active:scale-[0.98] shadow-sm">
                  <div className={`w-12 h-12 ${tool.iconBg} rounded-xl flex items-center justify-center text-xl ${tool.iconColor} shrink-0`}>
                    {tool.icon}
                  </div>
                  <div>
                    <h3 className="text-sm font-black text-gray-900 leading-tight">{tool.title}</h3>
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-tight mt-0.5">{tool.desc}</p>
                  </div>
                  <div className="ml-auto text-gray-300 text-xs">›</div>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* ARTICLES */}
        <section className="py-10 bg-gray-50 overflow-hidden">
          <div className="px-5">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-black text-gray-900 tracking-tight">Bacaan Sehat</h2>
              <a href="/artikel" className="text-[10px] font-black text-[#FF6B8B] tracking-widest uppercase">Lihat Semua →</a>
            </div>
            
            <div className="flex gap-4 overflow-x-auto pb-2 -mx-5 px-5">
              {[
                { title: 'Burnout Akademik: Ciri & Solusinya', tag: 'Mental', color: 'bg-rose-50 text-rose-400' },
                { title: 'Kopi vs Begadang Skripsi', tag: 'Life', color: 'bg-amber-50 text-amber-400' },
                { title: 'Diet Nutrisi Mahasiswa Kos', tag: 'Nutrition', color: 'bg-emerald-50 text-emerald-400' },
              ].map((art, idx) => (
                <div key={idx} className="min-w-[170px] bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 shrink-0">
                  <div className="h-24 bg-gradient-to-br from-[#FFF0F3] to-pink-50 flex items-center justify-center text-4xl text-[#FF6B8B] opacity-50">
                    <FaBookMedical />
                  </div>
                  <div className="p-4">
                    <span className={`text-[8px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full ${art.color} mb-2 inline-block`}>{art.tag}</span>
                    <h4 className="text-[12px] font-black text-gray-900 leading-tight">{art.title}</h4>
                    <p className="text-[9px] text-gray-400 font-bold mt-2">5 Menit Baca</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* MEDICAL EXCELLENCE */}
        <section className="py-10 bg-white">
          <div className="px-5">
            <div className="bg-gray-900 p-8 rounded-3xl text-center text-white relative overflow-hidden">
              <div className="absolute inset-0 opacity-5" style={{backgroundImage: 'radial-gradient(circle at 20% 80%, #FF6B8B 0%, transparent 50%), radial-gradient(circle at 80% 20%, #FF6B8B 0%, transparent 50%)'}}></div>
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-14 h-14 bg-white/10 rounded-2xl mb-6 flex items-center justify-center border border-white/20">
                  <FaStethoscope className="text-2xl text-[#FF6B8B]" />
                </div>
                <h2 className="text-lg font-black mb-3 tracking-tight">Board of Medical Excellence</h2>
                <p className="text-[11px] text-gray-400 leading-relaxed max-w-[220px] font-medium">
                  Dijamin oleh komite medis profesional standar internasional.
                </p>
                <div className="mt-8 pt-6 border-t border-white/10 w-full">
                  <span className="text-[10px] text-[#FF6B8B] font-black uppercase tracking-widest">✓ Verified by Kemenkes RI</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      {/* FOOTER */}
      <footer className="bg-white pt-10 pb-24 border-t border-gray-100">
        <div className="px-5">
          {/* Branding */}
          <div className="flex flex-col items-center text-center mb-10">
            <div className="flex items-center gap-2 mb-3">
              <div className="bg-[#FF6B8B] text-white rounded-xl w-9 h-9 flex items-center justify-center shadow-sm">
                <FaPlus className="text-sm" />
              </div>
              <h2 className="text-xl font-black text-gray-900 tracking-tighter">Neura</h2>
            </div>
            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest max-w-[220px] leading-relaxed">
              Platform kesehatan digital untuk mahasiswa Indonesia.
            </p>
            
            {/* App Store Buttons */}
            <div className="flex flex-col gap-2 w-full max-w-[200px] mt-6">
              <button className="flex items-center gap-3 bg-gray-900 px-4 py-2.5 rounded-xl hover:bg-black transition-all">
                <FaApple className="text-xl text-white shrink-0" />
                <div className="text-left">
                  <p className="text-[7px] text-white/40 font-black uppercase tracking-widest leading-none">Download on</p>
                  <p className="text-[13px] text-white font-black leading-tight">App Store</p>
                </div>
              </button>
              <button className="flex items-center gap-3 bg-gray-900 px-4 py-2.5 rounded-xl hover:bg-black transition-all">
                <FaGooglePlay className="text-lg text-white shrink-0" />
                <div className="text-left">
                  <p className="text-[7px] text-white/40 font-black uppercase tracking-widest leading-none">Get it on</p>
                  <p className="text-[13px] text-white font-black leading-tight">Google Play</p>
                </div>
              </button>
            </div>
          </div>
          
          {/* Links */}
          <div className="grid grid-cols-2 gap-8 pt-8 border-t border-gray-100">
            <div>
              <h4 className="text-[9px] font-black text-gray-400 uppercase tracking-widest mb-4">Bantuan</h4>
              <ul className="space-y-3">
                {['FAQ', 'Terms', 'Privacy'].map(l => (
                  <li key={l} className="text-[11px] font-black text-gray-700 hover:text-[#FF6B8B] transition-colors cursor-pointer uppercase tracking-tight">{l}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-[9px] font-black text-gray-400 uppercase tracking-widest mb-4">Neura</h4>
              <ul className="space-y-3">
                {['Tentang', 'Karir', 'Kontak'].map(l => (
                  <li key={l} className="text-[11px] font-black text-gray-700 hover:text-[#FF6B8B] transition-colors cursor-pointer uppercase tracking-tight">{l}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 py-5 border-t border-gray-100 text-center">
          <p className="text-[9px] text-gray-300 font-bold uppercase tracking-widest">
            © 2026 Neura Indonesia. All Rights Reserved.
          </p>
        </div>
      </footer>
    </>
  );
}