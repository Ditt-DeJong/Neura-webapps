'use client';
import { FaChevronLeft, FaSearch, FaStethoscope, FaInfoCircle, FaCheckCircle, FaExclamationTriangle, FaCommentMedical, FaArrowRight, FaBookMedical } from 'react-icons/fa';
import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Link from 'next/link';

export default function KamusDetail() {
  const params = useParams();
  const router = useRouter();

  // Mock data for specific condition
  const condition = {
    id: params.id,
    title: "GERD (Gastroesophageal Reflux Disease)",
    category: "Pencernaan",
    desc: "Kondisi ketika asam lambung naik kembali ke kerongkongan, menyebabkan iritasi pada lapisan kerongkongan. Sering terjadi pada mahasiswa karena pola makan tidak teratur dan stres.",
    symptoms: [
      "Sensasi terbakar di dada (heartburn) setelah makan",
      "Rasa asam atau pahit di pangkal tenggorokan",
      "Nyeri ulu hati",
      "Kesulitan menelan",
      "Batuk kronis atau radang tenggorokan"
    ],
    causes: [
      "Pola makan tidak teratur saat sibuk kuliah",
      "Konsumsi kopi berlebih saat lembur",
      "Langsung berbaring setelah makan",
      "Stres berlebihan (gangguan psikis)",
      "Kelebihan berat badan"
    ],
    prevention: [
      "Makan dalam porsi kecil tapi sering",
      "Hindari makan 3 jam sebelum tidur",
      "Kurangi asupan kafein dan makanan pedas",
      "Tinggikan posisi kepala saat tidur",
      "Kelola stres dengan istirahat cukup"
    ]
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen pb-40 pt-32 bg-white">
        {/* Back Button */}
        <div className="px-6 max-w-[450px] mx-auto mb-8">
          <button 
            onClick={() => router.back()} 
            className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center text-gray-900 border border-gray-100 shadow-sm active:scale-90 transition-all"
          >
            <FaChevronLeft />
          </button>
        </div>

        <div className="max-w-[450px] mx-auto">
           {/* Header Section */}
           <div className="px-8 mb-10">
              <span className="text-[10px] text-primary font-black uppercase tracking-[0.4em] mb-4 block">{condition.category}</span>
              <h1 className="text-3xl font-black text-gray-900 leading-[1.2] tracking-tight mb-6">
                {condition.title}
              </h1>
              <p className="text-[14px] text-gray-500 leading-relaxed font-medium">
                {condition.desc}
              </p>
           </div>

           {/* Hero Icon Decoration */}
           <div className="px-6 mb-12">
              <div className="w-full aspect-video bg-emerald-50 rounded-5xl flex items-center justify-center text-8xl text-emerald-500 border border-emerald-100 shadow-inner relative overflow-hidden group">
                 <div className="absolute inset-0 bg-linear-to-tr from-emerald-500/10 to-transparent"></div>
                 <FaBookMedical className="relative z-10 group-hover:scale-110 transition-transform duration-700" />
                 
                 <div className="absolute bottom-6 left-6">
                    <span className="bg-white/80 backdrop-blur-md px-4 py-2 rounded-2xl text-[9px] font-black text-emerald-600 border border-emerald-200 shadow-sm uppercase tracking-widest">Medical Literacy</span>
                 </div>
              </div>
           </div>

           {/* Content Sections */}
           <div className="px-8 space-y-12">
              
              {/* Gejala */}
              <div className="space-y-6">
                 <h2 className="text-[14px] font-black text-gray-900 uppercase tracking-widest flex items-center gap-3">
                    <FaExclamationTriangle className="text-orange-500 text-xs" /> Gejala Umum
                 </h2>
                 <div className="space-y-4">
                    {condition.symptoms.map((symptom, i) => (
                      <div key={i} className="flex gap-4 items-start p-4 bg-gray-50 rounded-3xl border border-gray-100/50">
                         <div className="w-6 h-6 rounded-lg bg-orange-100 flex items-center justify-center text-orange-500 text-[10px] shrink-0 mt-0.5 font-black">
                            {i + 1}
                         </div>
                         <p className="text-[13px] text-gray-600 font-medium leading-tight">{symptom}</p>
                      </div>
                    ))}
                 </div>
              </div>

              {/* Penyebab */}
              <div className="space-y-6">
                 <h2 className="text-[14px] font-black text-gray-900 uppercase tracking-widest flex items-center gap-3">
                    <FaInfoCircle className="text-primary text-xs" /> Mengapa Ini Terjadi?
                 </h2>
                 <div className="bg-gray-50 rounded-4xl p-8 border border-gray-100">
                    <ul className="space-y-5">
                       {condition.causes.map((cause, i) => (
                         <li key={i} className="flex gap-4 items-center">
                            <div className="w-2 h-2 bg-primary/30 rounded-full shrink-0"></div>
                            <p className="text-[13px] text-gray-600 font-medium">{cause}</p>
                         </li>
                       ))}
                    </ul>
                 </div>
              </div>

              {/* Pencegahan */}
              <div className="space-y-6 pb-10">
                 <h2 className="text-[14px] font-black text-gray-900 uppercase tracking-widest flex items-center gap-3">
                    <FaCheckCircle className="text-emerald-500 text-xs" /> Langkah Penanganan
                 </h2>
                 <div className="grid grid-cols-1 gap-4">
                    {condition.prevention.map((item, i) => (
                      <div key={i} className="flex items-center gap-5 p-5 bg-white rounded-3xl border border-gray-100 shadow-sm group hover:border-emerald-200 transition-all">
                         <FaCheckCircle className="text-emerald-400 text-lg shrink-0 group-hover:scale-110 transition-transform" />
                         <p className="text-[12px] text-gray-700 font-black tracking-tight">{item}</p>
                      </div>
                    ))}
                 </div>
              </div>

              {/* Alert Consultation */}
              <div className="bg-gray-950 p-8 rounded-6xl text-white overflow-hidden relative group">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl opacity-50"></div>
                 <div className="relative z-10">
                    <h3 className="text-lg font-black mb-2 tracking-tight">Gejala Berlanjut?</h3>
                    <p className="text-[11px] text-gray-400 font-medium leading-relaxed mb-6">
                       Informasi ini hanya bersifat edukasi. Untuk diagnosis yang akurat, konsultasikan dengan dokter kami segera.
                    </p>
                    <Link href="/chat" className="inline-flex items-center gap-3 text-primary text-[10px] font-black uppercase tracking-widest group/btn">
                       Tanya Dokter <FaArrowRight className="group-hover/btn:translate-x-2 transition-transform" />
                    </Link>
                 </div>
              </div>
           </div>
        </div>

        {/* Floating Action Bar */}
        <div className="fixed bottom-10 left-6 right-6 z-50">
           <div className="max-w-[400px] mx-auto bg-gray-900 text-white p-4 rounded-4xl shadow-2xl flex items-center justify-between border border-white/10 ring-1 ring-white/10 backdrop-blur-2xl">
              <div className="flex flex-col pl-4">
                 <p className="text-[8px] text-white/40 font-black uppercase tracking-widest">Diagnosis Lanjut</p>
                 <p className="text-[16px] font-black text-white leading-none mt-1">Konsultasi</p>
              </div>
              <button 
                onClick={() => router.push('/chat')}
                className="h-12 bg-primary text-white px-8 rounded-2xl flex items-center justify-center gap-3 text-[10px] font-black uppercase tracking-widest hover:opacity-90 transition-all active:scale-95 shadow-primary-sm"
              >
                 Mulai Konsul <FaCommentMedical />
              </button>
           </div>
        </div>
      </main>
    </>
  );
}
