'use client';
import { FaSearch, FaUserMd, FaChevronRight, FaStar, FaCircle, FaHistory, FaCommentDots, FaFilter, FaVideo, FaPhoneAlt } from 'react-icons/fa';
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Link from 'next/link';

export default function ChatPage() {
  const [activeTab, setActiveTab] = useState('doctors'); // 'doctors' or 'history'
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Semua');

  const categories = ['Semua', 'Psikolog', 'Umum', 'Kulit', 'Gizi', 'Gigi'];

  const doctors = [
    { id: '1', name: "dr. Sarah Wilson", spec: "Psikolog Klinis", price: "50.000", rating: "4.9", online: true, experience: "8 thn", alumni: "UI" },
    { id: '2', name: "dr. Ahmad Fauzi", spec: "Dokter Umum", price: "35.000", rating: "4.8", online: true, experience: "5 thn", alumni: "UGM" },
    { id: '3', name: "dr. Indah Permata", spec: "Spesialis Kulit", price: "75.000", rating: "5.0", online: false, experience: "12 thn", alumni: "UNAIR" },
    { id: '4', name: "dr. Kevin Sanjaya", spec: "Nutrisionis", price: "40.000", rating: "4.7", online: true, experience: "4 thn", alumni: "UNDIP" },
    { id: '5', name: "dr. Maria Elena", spec: "Psikolog", price: "60.000", rating: "4.9", online: true, experience: "10 thn", alumni: "UI" },
  ];

  const filteredDoctors = doctors.filter(dr => {
    const matchesSearch = dr.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         dr.spec.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'Semua' || dr.spec.includes(selectedCategory);
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Navbar />
      <main className="min-h-screen pb-32 pt-40 bg-zinc-50/50">
        <div className="px-6 max-w-[450px] mx-auto">
          
          {/* Header Section */}
          <div className="mb-10">
            <div className="flex justify-between items-start mb-4">
              <div>
                <span className="text-[10px] text-primary font-black uppercase tracking-[0.4em] mb-2 block">Telemedicine</span>
                <h1 className="text-3xl font-black text-gray-900 tracking-tight leading-tight">
                  Konsultasi <span className="text-primary text-transparent bg-clip-text bg-linear-to-r from-primary to-[#ff5177]">Pakar</span>
                </h1>
              </div>
              <div className="flex gap-2">
                <button className="w-10 h-10 rounded-2xl bg-white border border-gray-100 flex items-center justify-center text-gray-400 shadow-sm hover:text-primary transition-colors">
                  <FaHistory className="text-sm" />
                </button>
              </div>
            </div>
            
            <div className="relative mt-8 group">
              <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none">
                <FaSearch className="text-gray-400 text-sm group-focus-within:text-primary transition-colors" />
              </div>
              <input 
                type="text" 
                placeholder="Cari nama dokter atau spesialisasi..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white border border-gray-100 rounded-3xl py-5 pl-14 pr-6 text-[12px] font-medium focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all shadow-premium"
              />
            </div>
          </div>

          {/* Quick Actions */}
          <div className="flex gap-3 mb-10 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden -mx-6 px-6">
             <button className="flex items-center gap-3 bg-gray-900 text-white px-5 py-4 rounded-3xl whitespace-nowrap shadow-xl active:scale-95 transition-transform">
                <FaCommentDots className="text-primary" />
                <span className="text-[11px] font-black uppercase tracking-widest">Chat Aktif</span>
                <span className="w-5 h-5 bg-primary text-white text-[10px] rounded-full flex items-center justify-center">2</span>
             </button>
             <button className="flex items-center gap-3 bg-white text-gray-900 border border-gray-100 px-5 py-4 rounded-3xl whitespace-nowrap shadow-sm hover:border-primary transition-colors">
                <FaFilter className="text-gray-300" />
                <span className="text-[11px] font-black uppercase tracking-widest">Filter</span>
             </button>
          </div>

          {/* Categories */}
          <div className="flex gap-3 overflow-x-auto pb-8 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden -mx-6 px-6">
            {categories.map((cat, i) => (
              <button 
                key={i}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-3.5 rounded-2xl whitespace-nowrap text-[10px] font-black uppercase tracking-widest transition-all duration-300 border ${
                  selectedCategory === cat 
                    ? 'bg-primary text-white border-primary shadow-primary-sm scale-105' 
                    : 'bg-white text-gray-400 border-gray-100 hover:border-primary/50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* List Header */}
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-[12px] font-black text-gray-900 tracking-widest uppercase flex items-center gap-2">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
              Dokter Tersedia
            </h2>
            <p className="text-[10px] font-bold text-gray-300 uppercase tracking-widest">{filteredDoctors.length} Ditemukan</p>
          </div>

          {/* Doctor Cards */}
          <div className="space-y-6">
            {filteredDoctors.map((dr) => (
              <Link href={`/chat/${dr.id}`} key={dr.id} className="block group">
                <div className="bg-white p-6 rounded-[2.5rem] border border-gray-100 shadow-premium hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 relative overflow-hidden">
                  {/* Glass Background patterns */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-6 mb-6">
                      <div className="relative">
                        <div className="w-20 h-20 bg-secondary rounded-3xl flex items-center justify-center text-4xl text-primary overflow-hidden border border-primary/10 shadow-inner group-hover:rotate-6 transition-transform">
                          <FaUserMd className="opacity-60" />
                        </div>
                        {dr.online ? (
                          <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-2xl border-4 border-white flex items-center justify-center shadow-lg">
                             <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
                          </div>
                        ) : (
                          <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gray-300 rounded-2xl border-4 border-white flex items-center justify-center shadow-lg">
                             <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                          </div>
                        )}
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="text-[17px] font-black text-gray-900 group-hover:text-primary transition-colors">{dr.name}</h3>
                        </div>
                        <p className="text-[11px] text-gray-400 font-bold uppercase tracking-[0.1em] mb-3">{dr.spec}</p>
                        
                        <div className="flex gap-4 items-center">
                          <div className="bg-orange-50 text-orange-500 px-3 py-1 rounded-lg flex items-center gap-1.5 text-[10px] font-black">
                             <FaStar className="text-[8px]" /> {dr.rating}
                          </div>
                          <div className="text-[11px] text-gray-300 font-black">|</div>
                          <div className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">{dr.experience} Exp</div>
                        </div>
                      </div>
                    </div>

                    <div className="pt-6 border-t border-gray-50 flex items-center justify-between">
                      <div className="flex flex-col">
                        <span className="text-[9px] text-gray-400 font-black uppercase tracking-widest mb-0.5">Mulai dari</span>
                        <span className="text-lg font-black text-gray-900">Rp {dr.price}</span>
                      </div>
                      <div className="flex gap-2">
                        <button className="w-12 h-12 rounded-2xl bg-gray-50 border border-gray-100 text-gray-400 flex items-center justify-center hover:bg-primary/5 hover:text-primary transition-all">
                          <FaVideo className="text-sm" />
                        </button>
                        <button className="flex-1 h-12 bg-gray-900 text-white rounded-2xl px-6 text-[10px] font-black uppercase tracking-widest shadow-xl hover:bg-primary transition-all active:scale-95 group-hover:shadow-primary-sm">
                          Chat
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Empty State */}
          {filteredDoctors.length === 0 && (
            <div className="py-20 text-center">
               <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl text-gray-200">
                  <FaSearch />
               </div>
               <h3 className="text-gray-900 font-black text-lg mb-2">Dokter tidak ditemukan</h3>
               <p className="text-gray-400 text-[12px] font-medium px-10">Coba gunakan kata kunci lain atau reset filter kategori.</p>
               <button onClick={() => {setSearchQuery(''); setSelectedCategory('Semua');}} className="mt-8 text-primary font-black uppercase tracking-widest text-[10px]">Reset Pencarian</button>
            </div>
          )}

          {/* Emergency Banner */}
          <div className="mt-12 bg-linear-to-r from-red-600 to-[#ff416c] p-8 rounded-[3rem] text-white relative overflow-hidden shadow-2xl group">
             <div className="absolute right-0 top-0 w-32 h-32 bg-white/10 rounded-full -mr-10 -mt-10 blur-2xl"></div>
             <div className="relative z-10 flex items-center justify-between">
                <div className="space-y-2">
                   <span className="inline-block bg-white/20 px-3 py-1 rounded-xl text-[8px] font-black tracking-widest uppercase mb-2">Darurat</span>
                   <h3 className="text-xl font-black tracking-tight leading-tight">Butuh Bantuan Segera?</h3>
                   <p className="text-[10px] text-white/70 font-bold uppercase tracking-widest">Layanan ambulans & IGD 24 Jam</p>
                </div>
                <button className="w-14 h-14 bg-white text-red-600 rounded-3xl flex items-center justify-center text-xl shadow-xl hover:scale-110 active:scale-95 transition-all">
                   <FaPhoneAlt />
                </button>
             </div>
          </div>

        </div>
      </main>
    </>
  );
}

