'use client';
import Navbar from '@/components/Navbar';
import { FaUserNurse, FaBrain, FaSpa, FaVenusMars, FaAppleAlt } from 'react-icons/fa';

export default function PerawatanKhusus() {
  const treatments = [
    {
      title: "Psikologi & Kesehatan Mental",
      desc: "Layanan konseling rahasia dengan psikolog klinis untuk mengatasi stres akademik, kecemasan, dan masalah relasi.",
      icon: <FaBrain />,
      color: "bg-blue-50 text-blue-500 hover:border-blue-200"
    },
    {
      title: "Perawatan Estetika & Kulit",
      desc: "Konsultasi masalah jerawat pubertas, perawatan kulit kusam karena begadang, dan solusi dermatologi lainnya.",
      icon: <FaSpa />,
      color: "bg-pink-50 text-pink-500 hover:border-pink-200"
    },
    {
      title: "Gizi & Diet Sehat",
      desc: "Susun rencana makan sehat bersama ahli gizi untuk anak kos yang kekurangan nutrisi atau ingin mencapai berat badan ideal.",
      icon: <FaAppleAlt />,
      color: "bg-green-50 text-green-500 hover:border-green-200"
    },
    {
      title: "Kesehatan Reproduksi",
      desc: "Diskusi rahasia tentang siklus haid bermasalah, edukasi seksual berisiko, dan masalah reproduksi lainnya.",
      icon: <FaVenusMars />,
      color: "bg-purple-50 text-purple-500 hover:border-purple-200"
    }
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen pb-20 pt-32 bg-[#FCFBFC]">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="bg-[#FFF0F3] text-[#FF6B8B] font-bold px-6 py-2 rounded-full text-sm mb-6 inline-block">
              Layanan Premium
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-800 leading-tight">
              Perawatan Khusus Mahasiswa
            </h1>
            <p className="text-gray-500 text-lg md:text-xl leading-relaxed">
              Kami memahami kebutuhan spesifik para siswa dan mahasiswa. Temukan layanan medis khusus yang dipersonalisasi untuk menjaga potensimu tetap maksimal.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {treatments.map((item, idx) => (
              <div key={idx} className={`group border border-gray-100 p-10 rounded-3xl transition-all duration-300 hover:shadow-xl bg-white relative overflow-hidden \${item.color.split(' ').pop()}`}>
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-3xl \${item.color.split(' ').slice(0, 2).join(' ')}`}>
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">{item.title}</h3>
                <p className="text-gray-500 mb-8 leading-relaxed text-lg">
                  {item.desc}
                </p>
                <button className="font-bold text-[#FF6B8B] flex items-center gap-2 group-hover:gap-4 transition-all uppercase tracking-wide text-sm">
                  Buat Janji Temu <FaUserNurse className="text-lg" />
                </button>
              </div>
            ))}
          </div>
          
          <div className="mt-24 bg-[#FFF0F3] rounded-[32px] p-12 md:p-16 text-center relative overflow-hidden border border-pink-100 shadow-sm">
             <div className="relative z-10 max-w-2xl mx-auto">
               <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-gray-800">Butuh Rekomendasi Dokter?</h2>
               <p className="text-gray-600 mb-10 text-lg leading-relaxed">
                 Diskusikan keluhanmu terlebih dahulu dengan AI Neura untuk mendapatkan rujukan poli dan dokter spesialis yang paling tepat.
               </p>
               <button className="bg-[#FF6B8B] hover:bg-[#cc5670] text-white px-10 py-5 rounded-full font-bold transition-all hover:-translate-y-1 shadow-lg shadow-pink-200 text-lg border-2 border-transparent hover:border-pink-300">
                 Tanya AI Neura Sekarang
               </button>
             </div>
          </div>
        </div>
      </main>
    </>
  );
}
