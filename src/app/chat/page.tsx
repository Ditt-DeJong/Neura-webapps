'use client';
import { FaSearch, FaUserMd, FaChevronRight, FaStar, FaCircle } from 'react-icons/fa';

export default function ChatPage() {
  const doctors = [
    { name: "dr. Sarah Wilson", spec: "Psikolog Klinis", price: "50.000", rating: "4.9", online: true },
    { name: "dr. Ahmad Fauzi", spec: "Dokter Umum", price: "35.000", rating: "4.8", online: true },
    { name: "dr. Indah Permata", spec: "Spesialis Kulit", price: "75.000", rating: "5.0", online: false },
    { name: "dr. Kevin Sanjaya", spec: "Nutrisionis", price: "40.000", rating: "4.7", online: true },
  ];

  return (
    <main className="min-h-screen pb-32 pt-40 bg-gray-50/50">
      <div className="px-6 max-w-[450px] mx-auto">
        {/* Header Section */}
        <div className="mb-10">
          <span className="text-[10px] text-primary font-black uppercase tracking-[0.4em] mb-3 block">Konsultasi</span>
          <h1 className="text-3xl font-black text-gray-900 tracking-tight leading-tight mb-4">
            Tanya <span className="text-primary">Dokter</span> & <br/>Konselor
          </h1>
          <p className="text-gray-500 text-[13px] font-medium leading-relaxed">
            Pilih tenaga medis profesional untuk konsultasi privat 24/7.
          </p>
        </div>

        {/* Categories Horizontal Scroll */}
        <div className="flex gap-4 overflow-x-auto pb-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden -mx-6 px-6">
          {['Semua', 'Psikolog', 'Umum', 'Kulit', 'Gizi', 'Gigi'].map((cat, i) => (
            <button 
              key={i}
              className={`px-6 py-3 rounded-2xl whitespace-nowrap text-[11px] font-black uppercase tracking-widest transition-all ${
                i === 0 ? 'bg-primary text-white shadow-primary-sm' : 'bg-white text-gray-400 border border-gray-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Doctor List */}
        <div className="space-y-4">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-[14px] font-black text-gray-900 tracking-tight uppercase">Rekomendasi Terbaik</h2>
            <button className="text-[10px] font-black text-primary uppercase tracking-widest">Lihat Semua</button>
          </div>

          {doctors.map((dr, idx) => (
            <div key={idx} className="bg-white p-5 rounded-4xl border border-gray-100 shadow-premium hover:-translate-y-1 transition-all duration-300 group cursor-pointer">
              <div className="flex items-center gap-5">
                <div className="relative">
                  <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center text-3xl text-primary overflow-hidden">
                    <FaUserMd className="opacity-40" />
                  </div>
                  {dr.online && (
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-4 border-white animate-pulse"></div>
                  )}
                </div>
                
                <div className="flex-1">
                  <h3 className="text-[15px] font-black text-gray-900 mb-1 leading-tight group-hover:text-primary transition-colors">{dr.name}</h3>
                  <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-2">{dr.spec}</p>
                  
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1 text-[10px] font-black text-orange-400 uppercase">
                      <FaStar /> {dr.rating}
                    </div>
                    <div className="w-1 h-1 bg-gray-200 rounded-full"></div>
                    <div className="text-[10px] font-black text-gray-900 uppercase tracking-widest">
                      Rp {dr.price}
                    </div>
                  </div>
                </div>
                
                <div className="text-gray-200">
                  <FaChevronRight className="text-xs" />
                </div>
              </div>
              
              <div className="mt-5 pt-4 border-t border-gray-50 flex gap-3">
                <button className="flex-1 py-3 bg-primary text-white rounded-xl text-[10px] font-black uppercase tracking-widest shadow-primary-sm hover:opacity-90 transition-all active:scale-95">
                  Chat Sekarang
                </button>
                <button className="px-5 py-3 bg-gray-50 text-gray-400 rounded-xl text-[10px] font-black uppercase tracking-widest border border-gray-100 hover:bg-white hover:text-primary transition-all">
                  Jadwal
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Mental Health Prompt */}
        <div className="mt-12 bg-gray-900 p-10 rounded-5xl text-white relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-40 h-40 bg-primary/20 rounded-full blur-[80px]"></div>
          <div className="relative z-10">
            <h3 className="text-xl font-black mb-2 tracking-tight">Butuh teman bicara?</h3>
            <p className="text-[12px] text-gray-400 font-medium leading-relaxed mb-8 pr-10">
              Layanan kesehatan mental gratis khusus mahasiswa tingkat akhir.
            </p>
            <button className="w-full py-4 bg-white text-gray-900 rounded-2xl text-[11px] font-black uppercase tracking-widest hover:bg-primary hover:text-white transition-all shadow-xl">
              Cek Kuota Gratis
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
