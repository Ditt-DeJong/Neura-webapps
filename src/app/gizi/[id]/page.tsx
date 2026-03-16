'use client';
import { FaChevronLeft, FaClock, FaFire, FaAppleAlt, FaCheckCircle, FaExclamationCircle, FaUtensils, FaArrowRight, FaCommentMedical } from 'react-icons/fa';
import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Link from 'next/link';

export default function GiziDetail() {
  const params = useParams();
  const router = useRouter();

  // Mock data for meal plan
  const meal = {
    title: "Sarapan Fokus Mahasiswa",
    cal: "350 kcal",
    label: "Energy Boost",
    time: "10 min persiapan",
    desc: "Kombinasi karbohidrat kompleks dan protein untuk menjaga konsentrasi saat kuliah pagi tanpa rasa kantuk berlebih.",
    macros: [
      { label: "Karbohidrat", val: "45g", pct: 60 },
      { label: "Protein", val: "20g", pct: 25 },
      { label: "Lemak", val: "8g", pct: 15 },
    ],
    ingredients: [
      "Oatmeal instan 4 sendok makan",
      "Satu buah pisang ambon",
      "Susu rendah lemak 150ml",
      "Kacang almond atau selai kacang (opsional)",
      "Madu 1 sendok teh"
    ],
    steps: [
      "Campurkan oatmeal dengan susu hangat dalam mangkuk.",
      "Potong pisang tipis-tipis dan letakkan di atas oatmeal.",
      "Tambahkan selai kacang atau almond sebagai sumber lemak sehat.",
      "Beri madu sebagai pemanis alami jika diperlukan.",
      "Nikmati selagi hangat sebelum berangkat kuliah."
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
            className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center text-gray-900 border border-gray-100 shadow-sm active:scale-90 transition-all font-black text-xs"
          >
            <FaChevronLeft />
          </button>
        </div>

        <div className="max-w-[450px] mx-auto">
           {/* Header Section */}
           <div className="px-8 mb-12">
              <div className="flex items-center gap-3 mb-4">
                 <span className="bg-primary/5 px-4 py-1.5 rounded-full text-[9px] font-black text-primary uppercase tracking-widest border border-primary/10">
                   {meal.label}
                 </span>
                 <div className="w-1.5 h-1.5 bg-gray-200 rounded-full"></div>
                 <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest">{meal.time}</span>
              </div>
              <h1 className="text-3xl font-black text-gray-900 leading-[1.2] tracking-tight mb-6">
                {meal.title}
              </h1>
              <p className="text-[14px] text-gray-500 leading-relaxed font-medium capitalize">
                {meal.desc}
              </p>
           </div>

           {/* Nutritional Cards */}
           <div className="px-6 mb-12">
              <div className="bg-gray-950 p-8 rounded-5xl text-white shadow-2xl relative overflow-hidden group">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl opacity-50"></div>
                 <div className="flex justify-between items-center mb-10 relative z-10">
                    <div className="flex flex-col">
                       <span className="text-[10px] text-gray-400 font-black uppercase tracking-widest mb-1">Total Kalori</span>
                       <h3 className="text-3xl font-black text-white">{meal.cal}</h3>
                    </div>
                    <div className="w-16 h-16 bg-white/10 rounded-4xl flex items-center justify-center text-3xl text-primary border border-white/10 backdrop-blur-xl group-hover:rotate-12 transition-transform">
                       <FaFire />
                    </div>
                 </div>
                 
                 <div className="flex justify-between gap-4 relative z-10">
                    {meal.macros.map((m, i) => (
                      <div key={i} className="flex-1 space-y-3">
                         <div className="flex justify-between items-end">
                            <span className="text-[8px] font-black text-gray-400 uppercase tracking-widest">{m.label}</span>
                            <span className="text-[10px] font-black">{m.val}</span>
                         </div>
                         <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                            <div className="h-full bg-primary rounded-full transition-all duration-1000" style={{ width: `${m.pct}%` }}></div>
                         </div>
                      </div>
                    ))}
                 </div>
              </div>
           </div>

           {/* Ingredients & Steps */}
           <div className="px-8 space-y-12 mb-20">
              
              {/* Ingredients */}
              <div className="space-y-6">
                 <h2 className="text-[14px] font-black text-gray-900 uppercase tracking-widest flex items-center gap-3">
                    <FaAppleAlt className="text-primary text-xs" /> Bahan Utama
                 </h2>
                 <div className="grid grid-cols-1 gap-3">
                    {meal.ingredients.map((ing, i) => (
                      <div key={i} className="flex items-center gap-4 p-4 bg-gray-50 rounded-3xl border border-gray-100/50 group">
                         <FaCheckCircle className="text-emerald-500 text-sm opacity-30 group-hover:opacity-100 transition-opacity" />
                         <p className="text-[13px] text-gray-600 font-medium">{ing}</p>
                      </div>
                    ))}
                 </div>
              </div>

              {/* Steps */}
              <div className="space-y-6">
                 <h2 className="text-[14px] font-black text-gray-900 uppercase tracking-widest flex items-center gap-3">
                    <FaUtensils className="text-purple-500 text-xs" /> Cara Penyajian
                 </h2>
                 <div className="space-y-8 relative pl-6">
                    <div className="absolute left-2.5 top-2 bottom-6 w-0.5 bg-linear-to-b from-purple-100 via-purple-50 to-transparent"></div>
                    {meal.steps.map((step, i) => (
                      <div key={i} className="relative">
                         <div className="absolute -left-[23px] top-0 w-4 h-4 rounded-full bg-white border-4 border-purple-500 shadow-sm z-10"></div>
                         <div className="flex flex-col gap-1">
                            <span className="text-[10px] font-black text-purple-500 uppercase tracking-widest mb-1">Langkah {i + 1}</span>
                            <p className="text-[13px] text-gray-600 font-medium leading-relaxed">{step}</p>
                         </div>
                      </div>
                    ))}
                 </div>
              </div>

              {/* Dietary Note */}
              <div className="bg-orange-50 p-6 rounded-4xl border border-orange-100 flex gap-5 items-start">
                 <FaExclamationCircle className="text-orange-500 text-lg shrink-0 mt-1" />
                 <div>
                    <h4 className="text-[13px] font-black text-orange-900 mb-1">Catatan Alergi</h4>
                    <p className="text-[11px] text-orange-700 font-medium leading-relaxed">
                       Sesi ini mengandung kacang-kacangan (almond). Jika Anda memiliki alergi, ganti dengan biji chia atau kuaci sebagai alternatif lemak sehat.
                    </p>
                 </div>
              </div>
           </div>
        </div>

        {/* Floating Consultation Bar */}
        <div className="fixed bottom-10 left-6 right-6 z-50">
           <div className="max-w-[400px] mx-auto bg-gray-900 text-white p-4 rounded-4xl shadow-2xl flex items-center justify-between border border-white/10 ring-1 ring-white/10 backdrop-blur-2xl">
              <div className="flex items-center gap-4 pl-4">
                 <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center text-primary">
                    <FaCommentMedical />
                 </div>
                 <div className="flex flex-col">
                    <p className="text-[14px] font-black text-white leading-none">Butuh Diet Plan?</p>
                    <p className="text-[8px] text-white/40 font-black uppercase tracking-widest mt-1">Konsultasi Nutrisionis</p>
                 </div>
              </div>
              <Link
                href="/chat"
                className="h-12 bg-primary text-white px-6 rounded-2xl flex items-center justify-center text-[10px] font-black uppercase tracking-widest hover:opacity-90 transition-all active:scale-95 shadow-primary-sm"
              >
                Mulai <FaArrowRight className="ml-2" />
              </Link>
           </div>
        </div>
      </main>
    </>
  );
}
