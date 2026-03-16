'use client';
import { FaChevronLeft, FaClock, FaCheckCircle, FaVial, FaHome, FaShieldAlt, FaFileMedical, FaUserMd, FaPlus, FaMinus, FaInfoCircle } from 'react-icons/fa';
import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';

export default function LabDetail() {
  const params = useParams();
  const router = useRouter();
  const [method, setMethod] = useState('home'); // 'home' or 'lab'

  // Mock data
  const service = {
    id: params.id,
    title: "PCR Swab Test",
    price: "275.000",
    time: "Hasil 6 - 8 Jam",
    desc: "Metode Real-Time PCR (Polymerase Chain Reaction) untuk mendeteksi materi genetik virus dengan akurasi tinggi. Hasil diakui resmi untuk syarat perjalanan dan medis.",
    prep: "Tidak ada persiapan khusus. Disarankan istirahat cukup sebelum pengambilan sampel.",
    includes: [
       "Peralatan swab steril sekali pakai",
       "Analisis laboratorium biologi molekuler",
       "Surat hasil digital (PDF) & Hardcopy (Opsional)",
       "Verifikasi akun PeduliLindungi / SATUSEHAT"
    ]
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen pb-40 pt-32 bg-white">
        {/* Back Button */}
        <div className="px-6 max-w-[450px] mx-auto mb-6">
          <button onClick={() => router.back()} className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center text-gray-900 border border-gray-100 shadow-sm active:scale-90 transition-all">
            <FaChevronLeft />
          </button>
        </div>

        <div className="max-w-[450px] mx-auto">
           {/* Service Icon Section */}
           <div className="px-6 mb-10">
              <div className="w-full aspect-video bg-indigo-50 rounded-5xl flex items-center justify-center text-7xl text-indigo-500 border border-indigo-100 shadow-inner relative overflow-hidden group">
                 <div className="absolute inset-0 bg-linear-to-tr from-indigo-500/10 to-transparent"></div>
                 <FaVial className="relative z-10 group-hover:scale-110 transition-transform duration-700" />
                 
                 <div className="absolute top-6 left-6">
                    <span className="bg-white/80 backdrop-blur-md px-4 py-2 rounded-2xl text-[9px] font-black text-indigo-500 border border-indigo-200 shadow-sm uppercase tracking-widest">Lab Standard</span>
                 </div>
              </div>
           </div>

           {/* Service Info */}
           <div className="px-8 space-y-8">
              <div>
                 <div className="flex justify-between items-start mb-4">
                    <h1 className="text-3xl font-black text-gray-900 tracking-tight leading-tight">{service.title}</h1>
                    <div className="text-right">
                       <p className="text-[22px] font-black text-gray-900">Rp {service.price}</p>
                       <p className="text-[10px] text-gray-400 font-bold uppercase mt-1 flex items-center gap-1 justify-end"><FaClock /> {service.time}</p>
                    </div>
                 </div>
                 
                 <p className="text-[13px] text-gray-500 leading-relaxed font-medium mt-6">
                    {service.desc}
                 </p>
              </div>

              {/* Service Method Toggle */}
              <div className="space-y-4">
                 <h3 className="text-[12px] font-black text-gray-900 uppercase tracking-widest px-2">Metode Pengambilan</h3>
                 <div className="grid grid-cols-2 gap-4">
                    <div 
                      onClick={() => setMethod('home')}
                      className={`p-6 rounded-4xl border-2 transition-all cursor-pointer flex flex-col items-center text-center gap-3 ${method === 'home' ? 'border-primary bg-primary/5' : 'border-gray-50 bg-gray-50/50'}`}
                    >
                       <FaHome className={`text-2xl ${method === 'home' ? 'text-primary' : 'text-gray-300'}`} />
                       <span className={`text-[10px] font-black uppercase ${method === 'home' ? 'text-primary' : 'text-gray-400'}`}>Home Service</span>
                    </div>
                    <div 
                      onClick={() => setMethod('lab')}
                      className={`p-6 rounded-4xl border-2 transition-all cursor-pointer flex flex-col items-center text-center gap-3 ${method === 'lab' ? 'border-primary bg-primary/5' : 'border-gray-50 bg-gray-50/50'}`}
                    >
                       <FaShieldAlt className={`text-2xl ${method === 'lab' ? 'text-primary' : 'text-gray-300'}`} />
                       <span className={`text-[10px] font-black uppercase ${method === 'lab' ? 'text-primary' : 'text-gray-400'}`}>Datang ke Lab</span>
                    </div>
                 </div>
                 <p className="text-[10px] text-gray-400 font-bold text-center italic mt-2">
                    {method === 'home' ? '*Petugas akan datang ke lokasi Anda tanpa biaya tambahan.' : '*Kunjungi outlet Neura Lab terdekat di area Anda.'}
                 </p>
              </div>

              {/* Requirements & Info */}
              <div className="space-y-8 pb-10">
                 <div className="space-y-3">
                    <h2 className="text-[14px] font-black text-gray-900 uppercase flex items-center gap-3">
                       <FaInfoCircle className="text-primary text-xs" /> Persiapan
                    </h2>
                    <p className="text-[13px] text-gray-500 leading-relaxed font-medium">
                       {service.prep}
                    </p>
                 </div>

                 <div className="space-y-4">
                    <h2 className="text-[14px] font-black text-gray-900 uppercase tracking-widest">Paket Termasuk</h2>
                    <div className="space-y-3">
                       {service.includes.map((item, i) => (
                         <div key={i} className="flex gap-4 items-start">
                            <FaCheckCircle className="text-primary text-xs mt-1 shrink-0" />
                            <p className="text-[12px] text-gray-600 font-medium leading-tight">{item}</p>
                         </div>
                       ))}
                    </div>
                 </div>

                 {/* Safety Banner */}
                 <div className="bg-gray-900 p-8 rounded-[2.5rem] text-white flex items-center gap-6 overflow-hidden relative group">
                    <div className="absolute right-0 top-0 w-24 h-24 bg-primary/20 rounded-full blur-2xl group-hover:scale-150 transition-transform"></div>
                    <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-3xl shrink-0">
                       <FaUserMd className="text-primary" />
                    </div>
                    <div>
                       <h4 className="text-[14px] font-black leading-tight mb-1">Analis Profesional</h4>
                       <p className="text-[11px] text-gray-400 font-medium leading-tight">Pengambilan sampel oleh tenaga medis bersertifikat.</p>
                    </div>
                 </div>
              </div>
           </div>
        </div>

        {/* Floating Action Bar */}
        <div className="fixed bottom-10 left-6 right-6 z-50">
           <div className="max-w-[400px] mx-auto bg-gray-900 text-white p-4 rounded-4xl shadow-2xl flex items-center justify-between border border-white/10 ring-1 ring-white/10 backdrop-blur-2xl">
              <div className="flex flex-col pl-4">
                 <p className="text-[8px] text-white/40 font-black uppercase tracking-widest">Total Bayar</p>
                 <p className="text-[16px] font-black text-white leading-none mt-1">Rp {service.price}</p>
              </div>
              <button 
                className="h-12 bg-primary text-white px-8 rounded-2xl flex items-center justify-center gap-3 text-[10px] font-black uppercase tracking-widest hover:opacity-90 transition-all active:scale-95 shadow-primary-sm"
              >
                 Pesan Sekarang <FaFileMedical />
              </button>
           </div>
        </div>
      </main>
    </>
  );
}
