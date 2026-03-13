'use client';
import { useParams } from 'next/navigation';
import Navbar from '@/components/Navbar';
import { FaChevronLeft, FaClock, FaCalendarAlt, FaUserMd, FaShareAlt, FaRegHeart, FaRegBookmark, FaArrowRight, FaStethoscope } from 'react-icons/fa';
import Link from 'next/link';

export default function ArtikelDetail() {
  const params = useParams();
  const slug = params?.slug as string;

  // Mock function to "fetch" article data by slug
  const getArticleData = (slug: string) => {
    const data: Record<string, any> = {
      'burnout-akademik-ciri-dan-solusi': {
        title: "Burnout Akademik: Kenali Ciri & Solusinya",
        tag: "Mental Health",
        time: "5 Menit Baca",
        date: "12 Maret 2026",
        author: "dr. Sarah Wilson",
        content: [
          "Burnout akademik bukan sekadar rasa lelah biasa setelah mengerjakan tugas. Ini adalah kondisi kelelahan emosional, fisik, dan mental yang disebabkan oleh stres berkepanjangan terkait studi.",
          "Ciri-ciri utamanya meliputi hilangnya motivasi, perasaan sinis terhadap perkuliahan, hingga penurunan performa akademik secara drastis. Mahasiswa sering kali merasa 'kosong' dan tidak lagi menemukan makna dalam apa yang mereka pelajari.",
          "Solusi pertama adalah dengan melakukan 'mental break' yang terstruktur. Jangan memaksakan diri untuk terus berpacu saat otak sudah memberikan sinyal peringatan.",
          "Selain itu, mengatur ulang prioritas dan berani berkata 'tidak' pada kegiatan organisasi yang terlalu menyita waktu juga sangat krusial. Ingat, kesehatanmu adalah aset paling berharga."
        ]
      },
      'kopi-vs-begadang-skripsi': {
          title: "Kopi vs Begadang Skripsi: Mana yang Lebih Berbahaya?",
          tag: "Healthy Lifestyle",
          time: "4 Menit Baca",
          date: "10 Maret 2026",
          author: "dr. Ahmad Fauzi",
          content: [
            "Banyak mahasiswa mengandalkan kafein sebagai 'bahan bakar' utama saat mengejar tenggat waktu skripsi. Namun, apakah ini aman dalam jangka panjang?",
            "Konsumsi kopi berlebih saat begadang dapat memicu tremor, palpitasi jantung, hingga gangguan lambung yang serius seperti GERD.",
            "Begadang yang kronis juga mengganggu jam biologis tubuh (ritme sirkadian), yang berakibat pada penurunan sistem imun secara signifikan.",
            "Tips sehat: Batasi konsumsi kafein maksimal 2 cangkir sehari dan pastikan tetap terhidrasi dengan air putih yang cukup selama lembur."
          ]
      }
    };
    return data[slug] || data['burnout-akademik-ciri-dan-solusi']; // Fallback
  };

  const article = getArticleData(slug);

  return (
    <>
      <Navbar />
      <main className="min-h-screen pb-32 pt-32 bg-white">
        <div className="px-8 max-w-[450px] mx-auto">
          {/* Back Action */}
          <Link href="/artikel" className="inline-flex items-center gap-2 text-[10px] font-black text-gray-400 uppercase tracking-[0.3em] mb-10 hover:text-primary transition-colors">
             <FaChevronLeft className="text-[8px]" /> Kembali ke Artikel
          </Link>

          {/* Article Header */}
          <div className="mb-12">
             <div className="flex items-center gap-3 mb-6">
                <span className="px-4 py-2 bg-primary/5 text-primary rounded-xl text-[9px] font-black uppercase tracking-widest border border-primary/10">
                   {article.tag}
                </span>
                <div className="w-1.5 h-1.5 bg-gray-200 rounded-full"></div>
                <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">{article.time}</span>
             </div>
             <h1 className="text-3xl font-black text-gray-900 leading-[1.2] tracking-tight mb-8">
               {article.title}
             </h1>
             
             {/* Author Info */}
             <div className="flex items-center justify-between p-6 bg-gray-50 rounded-4xl border border-gray-100">
                <div className="flex items-center gap-4">
                   <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-xl text-primary shadow-sm border border-gray-100 overflow-hidden">
                      <FaUserMd />
                   </div>
                   <div>
                      <p className="text-[14px] font-black text-gray-900 leading-none mb-1">{article.author}</p>
                      <p className="text-[9px] text-gray-400 font-bold uppercase tracking-widest leading-none flex items-center gap-2">
                         <FaCalendarAlt className="text-[8px]" /> {article.date}
                      </p>
                   </div>
                </div>
                <div className="flex gap-2">
                   <button className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-gray-400 hover:text-primary shadow-sm border border-gray-100 transition-all">
                      <FaShareAlt className="text-sm" />
                   </button>
                </div>
             </div>
          </div>

          {/* Hero Decoration (Placeholder) */}
          <div className="h-64 bg-linear-to-br from-gray-50 to-gray-200 rounded-[48px] mb-12 flex items-center justify-center text-8xl text-gray-300 opacity-50 relative overflow-hidden group">
              <FaClock className="group-hover:rotate-12 transition-transform duration-700" />
              <div className="absolute inset-0 bg-linear-to-t from-white/20 to-transparent"></div>
          </div>

          {/* Article Body */}
          <article className="space-y-8 mb-16">
             {article.content.map((para: string, i: number) => (
               <p key={i} className="text-[15px] text-gray-600 leading-[1.8] font-medium">
                  {para}
               </p>
             ))}
          </article>

          {/* Interactions */}
          <div className="flex items-center justify-between py-10 border-t border-b border-gray-50 mb-16">
             <div className="flex items-center gap-6">
                <button className="flex items-center gap-3 text-gray-400 hover:text-rose-500 transition-colors group">
                   <FaRegHeart className="text-lg group-active:scale-125 transition-transform" />
                   <span className="text-[11px] font-black uppercase tracking-widest">Suka (42)</span>
                </button>
                <button className="flex items-center gap-3 text-gray-400 hover:text-primary transition-colors">
                   <FaRegBookmark className="text-lg" />
                   <span className="text-[11px] font-black uppercase tracking-widest">Simpan</span>
                </button>
             </div>
          </div>

          {/* Related Articles */}
          <div className="space-y-8">
             <h2 className="text-[12px] font-black text-gray-900 uppercase tracking-[0.3em]">Mungkin Kamu Butuh</h2>
             <div className="space-y-5">
                {[1, 2].map(i => (
                  <div key={i} className="flex items-center gap-5 p-5 bg-gray-50 rounded-4xl border border-gray-100/50 group cursor-pointer hover:bg-white hover:shadow-premium transition-all">
                     <div className="w-16 h-16 bg-white text-primary rounded-2xl flex items-center justify-center text-3xl shrink-0 shadow-sm border border-gray-50">
                        <FaStethoscope />
                     </div>
                     <div className="flex-1">
                        <h4 className="text-[14px] font-black text-gray-900 leading-tight mb-1 line-clamp-2">Tips Menjaga Mata Tetap Sehat di Depan Laptop</h4>
                        <span className="text-[9px] font-black text-primary uppercase tracking-widest leading-none">Healthy Life</span>
                     </div>
                     <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-gray-200 group-hover:text-primary transition-colors">
                        <FaArrowRight className="text-xs" />
                     </div>
                  </div>
                ))}
             </div>
          </div>

          {/* Newsletter / CTA */}
          <div className="mt-20 bg-gray-950 p-10 rounded-[56px] text-center text-white relative overflow-hidden group">
             <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl"></div>
             <h3 className="text-lg font-black mb-4 tracking-tight">Update Sehat Tiap Minggu?</h3>
             <p className="text-[11px] text-gray-400 leading-relaxed font-medium mb-10">
                Dapatkan informasi medis terbaru langsung di WhatsApp kamu. Gratis!
             </p>
             <button className="w-full py-5 bg-white text-gray-900 rounded-3xl font-black text-[11px] uppercase tracking-widest hover:bg-primary hover:text-white transition-all shadow-xl">
                Daftar Buletin Neura
             </button>
          </div>
        </div>
      </main>
    </>
  );
}
