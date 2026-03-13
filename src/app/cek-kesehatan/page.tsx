'use client';
import Navbar from '@/components/Navbar';
import { FaHeartbeat, FaBrain, FaRegChartBar, FaWeight, FaTint, FaArrowRight } from 'react-icons/fa';

export default function CekKesehatan() {
  const tests = [
    {
       title: "Skrining Gangguan Kesehatan Mental DASS-21",
       desc: "Ukur tingkat Depresi, Kecemasan (Anxiety), dan Stres dengan tes yang divalidasi.",
       users: "12,500+",
       icon: <FaBrain />,
       color: "bg-purple-100 text-purple-600 border-purple-200",
    },
    {
        title: "Kalkulator Indeks Massa Tubuh (BMI)",
        desc: "Ketahui berat badan idealmu dan cegah risiko obesitas di usia muda.",
        users: "8,200+",
        icon: <FaWeight />,
        color: "bg-blue-100 text-blue-600 border-blue-200",
     },
     {
        title: "Pemantau Siklus Haid & Masa Subur",
        desc: "Catat riwayat menstruasimu untuk memprediksi periode berikutnya.",
        users: "5,300+",
        icon: <FaTint />,
        color: "bg-pink-100 text-[#FF6B8B] border-pink-200",
     },
     {
        title: "Tes Risiko Kebugaran Tubuh (FitTest)",
        desc: "Apakah kamu terlalu banyak duduk saat mengerjakan tugas? Cek di sini.",
        users: "3,100+",
        icon: <FaHeartbeat />,
        color: "bg-orange-100 text-orange-600 border-orange-200",
     }
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen pb-20 pt-32 bg-[#FCFBFC]">
        <div className="container mx-auto px-6 max-w-6xl">
          {/* Header */}
          <div className="flex flex-col lg:flex-row gap-16 items-center mb-24">
             <div className="lg:w-1/2">
                {/* fixed: bg-linear-to-r (Tailwind v4) */}
                <h1 className="text-5xl lg:text-6xl font-extrabold text-gray-800 mb-8 leading-tight tracking-tight">
                  <span className="text-transparent bg-clip-text bg-linear-to-r from-[#FF6B8B] to-[#FF8E9E]">Pilah-pilih</span> Tes Kesehatan yang Pas Buat Kamu
                </h1>
                <p className="text-gray-500 text-xl mb-10 leading-relaxed">
                  Kenali kondisimu sejak dini. Hasil tes mandiri berbasis medis ini bisa jadi referensi awal sebelum kamu konsultasi langsung ke dokter atau psikolog Neura.
                </p>
                <div className="flex gap-6">
                   <div className="bg-white px-8 py-5 rounded-[20px] shadow-sm border border-gray-100 text-center flex-1 transition-all hover:-translate-y-1">
                      <div className="text-3xl font-extrabold text-[#FF6B8B] mb-1">4+</div>
                      <div className="text-sm font-bold text-gray-500 uppercase tracking-widest">Jenis Tes</div>
                   </div>
                   <div className="bg-white px-8 py-5 rounded-[20px] shadow-sm border border-gray-100 text-center flex-1 transition-all hover:-translate-y-1">
                      <div className="text-3xl font-extrabold text-[#FF6B8B] mb-1">30rb+</div>
                      <div className="text-sm font-bold text-gray-500 uppercase tracking-widest">Pengguna</div>
                   </div>
                </div>
             </div>
             
             <div className="lg:w-1/2 flex justify-center mt-12 lg:mt-0 relative">
                <div className="absolute inset-0 bg-[#FF8E9E] rounded-full blur-[80px] opacity-20 animate-pulse w-72 h-72 m-auto"></div>
                <div className="bg-white p-8 rounded-[32px] shadow-2xl border border-gray-100 relative z-10 hidden md:block w-96">
                   <h3 className="font-bold flex items-center gap-3 mb-6 border-b pb-6 text-gray-800 text-lg">
                     <FaRegChartBar className="text-[#FF6B8B] text-2xl"/> Riwayat Tes Terakhir
                   </h3>
                   <div className="space-y-6">
                      <div className="flex items-center gap-4">
                         <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 text-xl"><FaBrain /></div>
                         <div>
                            <h4 className="font-bold text-gray-800">DASS-21</h4>
                            <p className="text-sm text-green-500 font-bold bg-green-50 px-2 py-1 rounded-md inline-block mt-1">Resiko Stres Rendah</p>
                         </div>
                      </div>
                   </div>
                </div>
             </div>
          </div>

          <h2 className="text-3xl font-bold mb-10 text-gray-800 border-l-[6px] border-[#FF6B8B] pl-5 rounded-sm">
            Daftar Skrining Aktif
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
             {tests.map((test, idx) => (
                <div key={idx} className="bg-white p-10 rounded-[32px] shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group border border-gray-100">
                   {/* fixed: removed backslash before $ in template literal */}
                   <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-8 ${test.color}`}>
                      {test.icon}
                   </div>
                   <h3 className="text-2xl font-bold mb-4 text-gray-800">{test.title}</h3>
                   <p className="text-gray-500 mb-8 min-h-[60px] text-lg leading-relaxed">{test.desc}</p>
                   
                   <div className="flex justify-between items-center pt-6 border-t border-gray-50">
                      <span className="text-sm font-bold text-gray-400 bg-gray-50 px-4 py-2 rounded-full border border-gray-100">{test.users} tes dilakukan</span>
                      <button className="text-[#FF6B8B] font-bold flex items-center gap-2 group-hover:gap-4 transition-all hover:text-[#cc5670]">
                         Mulai Tes <FaArrowRight />
                      </button>
                   </div>
                </div>
             ))}
          </div>
        </div>
      </main>
    </>
  );
}