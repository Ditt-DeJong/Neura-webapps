'use client';
import Navbar from '@/components/Navbar';
import { FaSearch, FaBookOpen, FaClock, FaChevronRight, FaFire, FaRegBookmark, FaBrain, FaCoffee, FaAppleAlt, FaCalendarAlt } from 'react-icons/fa';
import Link from 'next/link';

export default function ArtikelPage() {
  const categories = ['Semua', 'Mental', 'Nutrisi', 'Lifestyle', 'Akademik'];

  const articles = [
    {
      slug: 'burnout-akademik-ciri-dan-solusi',
      title: "Burnout Akademik: Ciri & Solusi",
      tag: "Mental",
      time: "5 Menit Baca",
      image: <FaBrain />,
      desc: "Mengenali tanda-tanda kelelahan mental selama masa perkuliahan dan cara mengatasinya."
    },
    {
      slug: 'kopi-vs-begadang-skripsi',
      title: "Kopi vs Begadang Skripsi",
      tag: "Lifestyle",
      time: "4 Menit Baca",
      image: <FaCoffee />,
      desc: "Dampak konsumsi kafein berlebih bagi mahasiswa yang sering lembur mengerjakan tugas."
    },
    {
      slug: 'diet-nutrisi-mahasiswa-kos',
      title: "Diet Nutrisi Mahasiswa Kos",
      tag: "Nutrisi",
      time: "6 Menit Baca",
      image: <FaAppleAlt />,
      desc: "Panduan makan sehat dan bergizi dengan budget terbatas ala anak kos."
    },
    {
      slug: 'manajemen-waktu-organisasi-dan-kuliah',
      title: "Manajemen Waktu: Organisasi vs Kuliah",
      tag: "Akademik",
      time: "5 Menit Baca",
      image: <FaCalendarAlt />,
      desc: "Tips menyeimbangkan kegiatan organisasi tanpa mengorbankan nilai akademik."
    }
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen pb-32 pt-32 bg-background-app">
        <div className="px-8 max-w-[450px] mx-auto">
          {/* Header */}
          <div className="mb-10">
            <span className="text-[10px] text-primary font-black uppercase tracking-[0.4em] mb-3 block">Neura Insights</span>
            <h1 className="text-3xl font-black text-gray-900 tracking-tight leading-tight mb-4">
              Bacaan <span className="text-primary">Sehat</span> & <br/>Informasi Medis
            </h1>
            
            <div className="relative mt-8 group">
              <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none">
                <FaSearch className="text-gray-400 text-sm group-focus-within:text-primary transition-colors" />
              </div>
              <input 
                type="text" 
                placeholder="Cari artikel kesehatan..." 
                className="w-full bg-white border border-gray-100 rounded-3xl py-5 pl-14 pr-6 text-[12px] font-medium focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all shadow-premium"
              />
            </div>
          </div>

          {/* Categories */}
          <div className="mb-10 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden -mx-8 px-8">
            <div className="flex gap-3">
              {categories.map((cat, i) => (
                <button 
                  key={cat}
                  className={`px-6 py-3 rounded-2xl whitespace-nowrap text-[10px] font-black uppercase tracking-widest transition-all ${
                    i === 0 
                      ? 'bg-primary text-white shadow-primary-sm' 
                      : 'bg-white text-gray-400 border border-gray-100'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Featured Article */}
          <Link href={`/artikel/${articles[0].slug}`} className="block mb-12 group">
             <div className="relative h-64 bg-linear-to-br from-primary to-[#ff5177] rounded-[48px] overflow-hidden shadow-2xl flex items-center justify-center text-8xl text-white/20">
                <FaBookOpen />
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="absolute top-6 right-6">
                   <div className="bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-xl flex items-center gap-2 border border-white/20">
                      <FaFire className="text-orange-400 text-[10px]" />
                      <span className="text-[8px] font-black uppercase tracking-[0.2em] text-white">Trending</span>
                   </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-8 pt-20 bg-linear-to-t from-black/60 to-transparent text-white">
                   <span className="text-[9px] font-black uppercase tracking-[0.3em] text-primary-light mb-2 block">{articles[0].tag}</span>
                   <h3 className="text-xl font-black leading-tight tracking-tight">{articles[0].title}</h3>
                </div>
             </div>
          </Link>

          {/* Article List */}
          <div className="space-y-6">
             <div className="flex justify-between items-center px-2">
                <h2 className="text-[12px] font-black text-gray-900 uppercase tracking-widest">Artikel Terbaru</h2>
                <FaRegBookmark className="text-gray-300 text-sm" />
             </div>
             
             {articles.map((art, idx) => (
               <Link 
                 key={idx} 
                 href={`/artikel/${art.slug}`}
                 className="bg-white p-6 rounded-5xl border border-gray-100 shadow-premium hover:-translate-y-1 transition-all duration-300 group flex flex-col gap-6"
               >
                  <div className="flex items-center gap-5">
                    <div className="w-16 h-16 bg-secondary text-primary rounded-2xl flex items-center justify-center text-3xl group-hover:scale-105 transition-transform duration-500 shadow-sm border border-primary/5">
                       {art.image}
                    </div>
                    <div className="flex-1 min-w-0">
                       <span className="text-[8px] font-black text-primary uppercase tracking-[0.2em] mb-1 block">{art.tag}</span>
                       <h4 className="text-[15px] font-black text-gray-900 leading-tight mb-2 truncate group-hover:text-primary transition-colors">{art.title}</h4>
                       <div className="flex items-center gap-3">
                          <div className="flex items-center gap-1.5 text-[9px] font-bold text-gray-300 uppercase tracking-widest">
                             <FaClock className="text-[8px]" /> {art.time}
                          </div>
                       </div>
                    </div>
                    <FaChevronRight className="text-xs text-gray-200 group-hover:text-primary transition-all" />
                  </div>
                  <p className="text-[12px] text-gray-500 font-medium leading-relaxed px-1 line-clamp-2">
                    {art.desc}
                  </p>
               </Link>
             ))}
          </div>

          {/* Load More Mock */}
          <div className="mt-12 text-center pb-12">
             <button className="px-10 py-5 bg-white border border-gray-100 rounded-3xl text-[11px] font-black uppercase tracking-[0.3em] text-gray-400 hover:text-primary hover:border-primary transition-all shadow-sm">
                Tampilkan Lebih Banyak
             </button>
          </div>
        </div>
      </main>
    </>
  );
}
