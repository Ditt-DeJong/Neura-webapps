'use client';
import { FaChevronLeft, FaSearch, FaUserCircle, FaWallet, FaStethoscope, FaTools, FaChevronRight, FaWhatsapp, FaEnvelope, FaHeadset, FaCommentDots, FaQuestionCircle } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';
import { useState } from 'react';

export default function HelpCenter() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('Akun');

  const categories = [
    { name: "Akun", icon: <FaUserCircle /> },
    { name: "Bayar", icon: <FaWallet /> },
    { name: "Medis", icon: <FaStethoscope /> },
    { name: "Teknis", icon: <FaTools /> },
  ];

  const faqs = [
    { q: "Bagaimana cara mengganti nomor telepon?", a: "Kamu bisa mengganti nomor telepon di menu Pengaturan Akun > Informasi Pribadi. Pastikan nomor baru aktif untuk menerima OTP." },
    { q: "Apakah data medis saya aman?", a: "Ya, Neura menggunakan enkripsi end-to-end standar medis internasional untuk menjamin kerahasiaan data pasien." },
    { q: "Metode pembayaran apa saja yang tersedia?", a: "Kami mendukung berbagai e-wallet (GoPay, OVO, Neura Wallet), Transfer Bank, dan Kartu Kredit." },
    { q: "Berapa lama estimasi obat sampai?", a: "Untuk layanan Instant, obat akan sampai dalam 30-60 menit tergantung lokasi apotek mitra terdekat." },
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen pb-40 pt-32 bg-white overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute top-0 right-0 w-full h-[50vh] bg-linear-to-b from-primary/5 to-transparent -z-10"></div>
        
        {/* Back Button */}
        <div className="px-6 max-w-[450px] mx-auto mb-8">
          <button 
            onClick={() => router.back()} 
            className="w-12 h-12 rounded-2xl bg-white border border-gray-100 shadow-sm flex items-center justify-center text-gray-900 active:scale-90 transition-all font-black text-xs"
          >
            <FaChevronLeft />
          </button>
        </div>

        <div className="max-w-[450px] mx-auto">
           {/* Header Section */}
           <div className="px-8 mb-10">
              <span className="text-[10px] text-primary font-black uppercase tracking-[0.4em] mb-4 block">Customer Support</span>
              <h1 className="text-3xl font-black text-gray-900 leading-[1.2] tracking-tight mb-8">
                Ada yang bisa <br /><span className="text-primary">kami bantu?</span>
              </h1>
              
              <div className="relative group">
                 <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none">
                    <FaSearch className="text-gray-400 text-sm group-focus-within:text-primary transition-colors" />
                 </div>
                 <input 
                   type="text" 
                   placeholder="Cari kendala atau pertanyaan..." 
                   className="w-full bg-gray-50 border border-gray-100 rounded-3xl py-5 pl-14 pr-6 text-[12px] font-medium outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all shadow-inner"
                 />
              </div>
           </div>

           {/* Category Chips */}
           <div className="px-8 mb-12">
              <div className="flex gap-4 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                 {categories.map((cat, i) => (
                   <button 
                    key={i} 
                    onClick={() => setActiveTab(cat.name)}
                    className={`flex items-center gap-3 px-6 py-4 rounded-2xl border transition-all shrink-0 font-black text-[11px] uppercase tracking-widest ${activeTab === cat.name ? 'bg-primary border-primary text-white shadow-primary-sm' : 'bg-white border-gray-100 text-gray-400'}`}
                   >
                      <span className="text-sm">{cat.icon}</span>
                      {cat.name}
                   </button>
                 ))}
              </div>
           </div>

           {/* FAQ Section */}
           <div className="px-8 mb-12">
              <h2 className="text-[12px] font-black text-gray-900 uppercase tracking-widest px-2 mb-6">Pertanyaan Populer</h2>
              <div className="space-y-4">
                 {faqs.map((faq, i) => (
                   <div key={i} className="p-6 bg-white rounded-3xl border border-gray-50 shadow-premium group cursor-pointer hover:border-primary/20 transition-all">
                      <div className="flex justify-between items-start gap-4">
                         <div className="flex items-start gap-4">
                            <FaQuestionCircle className="text-primary text-sm mt-1 shrink-0" />
                            <div>
                               <h4 className="text-[13px] font-black text-gray-800 leading-tight mb-3">{faq.q}</h4>
                               <p className="text-[11px] text-gray-400 font-medium leading-relaxed group-hover:text-gray-500 transition-colors">
                                  {faq.a}
                               </p>
                            </div>
                         </div>
                      </div>
                   </div>
                 ))}
              </div>
           </div>

           {/* Support Channels */}
           <div className="px-8 pb-32">
              <div className="bg-gray-950 p-10 rounded-6xl text-white relative overflow-hidden shadow-2xl">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl opacity-50"></div>
                 <h3 className="text-xl font-black mb-2 tracking-tight">Hubungi Tim Neura</h3>
                 <p className="text-[11px] text-white/40 font-medium leading-relaxed mb-10">CS kami tersedia 24/7 untuk memastikan kesehatanmu tetap prioritas.</p>
                 
                 <div className="grid grid-cols-3 gap-4">
                    <div className="flex flex-col items-center gap-3 p-4 bg-white/5 rounded-2xl border border-white/5 hover:bg-white/10 transition-all cursor-pointer">
                       <div className="w-10 h-10 bg-emerald-500 text-white rounded-xl flex items-center justify-center text-lg">
                          <FaWhatsapp />
                       </div>
                       <span className="text-[8px] font-black uppercase tracking-widest">WhatsApp</span>
                    </div>
                    <div className="flex flex-col items-center gap-3 p-4 bg-white/5 rounded-2xl border border-white/5 hover:bg-white/10 transition-all cursor-pointer">
                       <div className="w-10 h-10 bg-blue-500 text-white rounded-xl flex items-center justify-center text-lg">
                          <FaHeadset />
                       </div>
                       <span className="text-[8px] font-black uppercase tracking-widest">Call Center</span>
                    </div>
                    <div className="flex flex-col items-center gap-3 p-4 bg-white/5 rounded-2xl border border-white/5 hover:bg-white/10 transition-all cursor-pointer">
                       <div className="w-10 h-10 bg-rose-500 text-white rounded-xl flex items-center justify-center text-lg">
                          <FaEnvelope />
                       </div>
                       <span className="text-[8px] font-black uppercase tracking-widest">Email</span>
                    </div>
                 </div>
                 
                 <button className="w-full mt-10 py-5 bg-primary text-white rounded-2xl font-black text-[10px] uppercase tracking-[0.3em] shadow-primary-sm flex items-center justify-center gap-3 hover:opacity-90 transition-all">
                    <FaCommentDots /> Mulai Live Chat
                 </button>
              </div>
           </div>
        </div>
      </main>
    </>
  );
}
