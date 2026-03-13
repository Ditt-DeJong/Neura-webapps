'use client';
import Navbar from '@/components/Navbar';
import { FaSearch, FaBookMedical, FaHeartbeat, FaStethoscope } from 'react-icons/fa';

export default function KamusKesehatan() {
  const dictionaryTopics = [
    { title: "Kesehatan Mental", desc: "Depresi, Anxiety, Burnout, Bipolar" },
    { title: "Kesehatan Kulit & Rambut", desc: "Jerawat, Ketombe, Dermatitis, Rambut Rontok" },
    { title: "Kesehatan Reproduksi", desc: "PCOS, Nyeri Haid, Edukasi Seksual" },
    { title: "Penyakit Menular", desc: "Flu, Tipes, Demam Berdarah, COVID-19" },
    { title: "Sistem Pencernaan", desc: "Maag, Asam Lambung (GERD), Diare" },
    { title: "Gaya Hidup & Nutrisi", desc: "Obesitas, Kurang Gizi, Defisit Kalori" }
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen pb-20 pt-28 bg-[#FCFBFC]">
        <div className="container mx-auto px-6 max-w-6xl">
          {/* Header Section */}
          <div className="bg-linear-to-br from-[#FF6B8B] to-[#cc5670] rounded-[24px] p-10 text-white shadow-xl mb-12 relative overflow-hidden">
            <div className="relative z-10 w-full md:w-2/3">
              <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">Kamus Kesehatan Neura</h1>
              <p className="text-lg opacity-90 mb-8 w-3/4">
                Cari tahu informasi lengkap mengenai penyakit, gejala, dan pengobatannya yang relevan untuk pelajar dan mahasiswa.
              </p>
              
              <div className="relative flex items-center w-full max-w-md">
                <FaSearch className="absolute left-5 text-gray-400" />
                <input 
                  type="text" 
                  placeholder="Cari penyakit atau gejala (ex: Asam Lambung)" 
                  className="w-full py-4 pl-14 pr-6 rounded-full text-gray-800 shadow-md focus:outline-none focus:ring-4 focus:ring-pink-300 transition-all"
                />
              </div>
            </div>
            {/* Decoration */}
            <FaBookMedical className="absolute -right-8 -bottom-8 text-white opacity-20 text-[200px]" />
          </div>

          {/* Popular Topics */}
          <h2 className="text-2xl md:text-3xl font-bold mb-8 flex items-center gap-3 text-gray-800">
            <FaHeartbeat className="text-[#FF6B8B]" />
            Topik Kesehatan Populer
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {dictionaryTopics.map((topic, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer border border-gray-100 flex items-start gap-5">
                <div className="bg-[#FFF0F3] p-4 rounded-full text-[#FF6B8B]">
                  <FaStethoscope className="text-xl" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">{topic.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{topic.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* A-Z Browse */}
          <div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Cari Berdasarkan Abjad</h2>
            <div className="flex flex-wrap gap-3">
              {"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map(letter => (
                <button key={letter} className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center font-bold text-gray-500 hover:bg-[#FF6B8B] hover:text-white hover:border-[#FF6B8B] transition-all hover:-translate-y-1 shadow-sm">
                  {letter}
                </button>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
