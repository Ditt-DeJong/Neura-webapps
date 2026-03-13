'use client';
import Navbar from '@/components/Navbar';
import { FaMicroscope, FaVial, FaFileMedical, FaHome, FaCheckCircle, FaChevronRight, FaClock } from 'react-icons/fa';

export default function LayananLab() {
  const labServices = [
    { 
      title: "Cek Darah Lengkap", 
      price: "150.000", 
      time: "Hasil 24 Jam", 
      desc: "Hematologi rutin, LED, Hitung Jenis.",
      icon: <FaVial />,
      color: "bg-rose-50 text-rose-500"
    },
    { 
      title: "PCR Swab Test", 
      price: "275.000", 
      time: "Hasil 6-8 Jam", 
      desc: "Metode Real-Time PCR standar internasional.",
      icon: <FaMicroscope />,
      color: "bg-blue-50 text-blue-500"
    },
    { 
      title: "Cek Kolesterol", 
      price: "85.000", 
      time: "Hasil 2 Jam", 
      desc: "Total kolesterol, HDL, LDL, Trigliserida.",
      icon: <FaFileMedical />,
      color: "bg-emerald-50 text-emerald-500"
    }
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen pb-32 pt-32 bg-background-app">
        <div className="px-8 max-w-[450px] mx-auto">
          {/* Header */}
          <div className="mb-10">
            <span className="text-[10px] text-primary font-black uppercase tracking-[0.4em] mb-3 block">Neura Lab Services</span>
            <h1 className="text-3xl font-black text-gray-900 tracking-tight leading-tight mb-4">
              Layanan <span className="text-primary">Lab</span> & <br/>Cek Kesehatan
            </h1>
            <p className="text-gray-500 text-[13px] font-medium leading-relaxed">
              Pemeriksaan laboratorium akurat tanpa perlu keluar asrama. Tenaga medis kami akan datang ke tempatmu.
            </p>
          </div>

          {/* Home Service Banner */}
          <div className="mb-12 bg-gray-900 p-8 rounded-5xl text-white relative overflow-hidden shadow-2xl group">
             <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl"></div>
             <div className="flex items-center gap-6 mb-8">
                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-2xl text-primary border border-white/10 backdrop-blur-xl">
                   <FaHome />
                </div>
                <div>
                   <h3 className="text-[16px] font-black tracking-tight leading-tight">Layanan Home Care</h3>
                   <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-1">Tanpa Biaya Transport</p>
                </div>
             </div>
             <p className="text-[11px] text-gray-300 leading-relaxed font-medium mb-8">
                Tim analis lab kami siap mendatangi kos atau asrama kamu dengan protokol kesehatan ketat.
             </p>
             <button className="w-full py-4 bg-primary text-white rounded-2xl text-[11px] font-black uppercase tracking-widest hover:opacity-90 transition-all shadow-primary-sm active:scale-95">
                Pesan Home Service
             </button>
          </div>

          {/* Service List */}
          <div className="space-y-5">
            <div className="flex justify-between items-center px-2">
              <h2 className="text-[12px] font-black text-gray-900 uppercase tracking-widest">Pilihan Pemeriksaan</h2>
              <button className="text-[10px] font-black text-primary uppercase tracking-widest">Semua Tes</button>
            </div>
            
            {labServices.map((service, idx) => (
              <div key={idx} className="bg-white p-6 rounded-4xl border border-gray-100 shadow-premium hover:-translate-y-1 transition-all duration-300 group cursor-pointer">
                <div className="flex items-start gap-5 mb-6">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl shrink-0 ${service.color} shadow-sm group-hover:scale-105 transition-transform`}>
                    {service.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-[15px] font-black text-gray-900 mb-1 leading-tight group-hover:text-primary transition-colors">{service.title}</h3>
                    <p className="text-[11px] text-gray-400 font-medium leading-tight">{service.desc}</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-between pt-5 border-t border-gray-50">
                  <div className="space-y-1">
                     <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider flex items-center gap-1.5 leading-none">
                        <FaClock className="text-[9px]" /> {service.time}
                     </p>
                     <p className="text-[14px] font-black text-gray-900 leading-none">Rp {service.price}</p>
                  </div>
                  <button className="w-10 h-10 bg-gray-50 text-gray-400 rounded-xl flex items-center justify-center text-xs group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                    <FaChevronRight />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 grid grid-cols-2 gap-4">
             <div className="p-5 bg-white rounded-3xl border border-gray-50 flex flex-col items-center text-center shadow-sm">
                <FaCheckCircle className="text-primary text-xl mb-3" />
                <span className="text-[9px] font-black text-gray-900 uppercase tracking-widest">Terakreditasi KAN</span>
             </div>
             <div className="p-5 bg-white rounded-3xl border border-gray-50 flex flex-col items-center text-center shadow-sm">
                <FaCheckCircle className="text-primary text-xl mb-3" />
                <span className="text-[9px] font-black text-gray-900 uppercase tracking-widest">Hasil Digital Resmi</span>
             </div>
          </div>
        </div>
      </main>
    </>
  );
}
