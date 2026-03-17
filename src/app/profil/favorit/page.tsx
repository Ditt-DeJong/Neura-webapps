'use client';
import { FaChevronLeft, FaHeart, FaUserMd, FaPills, FaBookMedical, FaChevronRight, FaStar, FaTrashAlt } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';
import { useState } from 'react';
import Link from 'next/link';

export default function FavoritesPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('Dokter');

  const favorites = {
    'Dokter': [
      { id: '1', name: "dr. Sarah Wilson", role: "Psikolog Klinis", rating: "4.9" },
      { id: '2', name: "dr. Andi Wijaya", role: "Spesialis Penyakit Dalam", rating: "4.8" },
    ],
    'Produk': [
      { id: '1', name: "Vitamin C 500mg", price: "25.000", brand: "Enervon-C" },
      { id: '2', name: "Masker Medical 3-Ply", price: "45.000", brand: "Sensi" },
    ],
    'Artikel': [
      { id: '1', title: "Burnout Akademik: Ciri & Solusi", tag: "Mental", time: "5m" },
      { id: '2', title: "Kopi vs Begadang Skripsi", tag: "Life", time: "3m" },
    ]
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen pb-40 pt-32 bg-zinc-50">
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
              <span className="text-[10px] text-primary font-black uppercase tracking-[0.4em] mb-4 block">Saved Interests</span>
              <h1 className="text-3xl font-black text-gray-900 leading-[1.2] tracking-tight mb-8">
                Favorit <span className="text-primary">Saya</span>
              </h1>
              
              {/* Tabs */}
              <div className="flex bg-white p-1.5 rounded-2xl border border-gray-100 shadow-sm">
                 {['Dokter', 'Produk', 'Artikel'].map((tab) => (
                   <button 
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`flex-1 py-3.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${activeTab === tab ? 'bg-gray-900 text-white shadow-lg' : 'text-gray-400 hover:text-gray-900'}`}
                   >
                      {tab}
                   </button>
                 ))}
              </div>
           </div>

           {/* Favorites List */}
           <div className="px-8 space-y-4 pb-32">
              {activeTab === 'Dokter' && favorites['Dokter'].map((dr, i) => (
                <div key={i} className="p-5 bg-white rounded-4xl border border-gray-100 shadow-premium flex items-center gap-5 group">
                   <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center text-3xl text-primary group-hover:scale-105 transition-transform">
                      <FaUserMd />
                   </div>
                   <div className="flex-1 min-w-0">
                      <h4 className="text-[14px] font-black text-gray-900 leading-tight">{dr.name}</h4>
                      <p className="text-[10px] text-gray-400 font-bold uppercase mt-1">{dr.role}</p>
                      <div className="flex items-center gap-1 mt-2 text-orange-400 text-[10px] font-black">
                         <FaStar className="text-[8px]" /> {dr.rating}
                      </div>
                   </div>
                   <button className="w-10 h-10 rounded-xl bg-rose-50 text-primary flex items-center justify-center text-xs opacity-0 group-hover:opacity-100 transition-all">
                      <FaTrashAlt />
                   </button>
                </div>
              ))}

              {activeTab === 'Produk' && favorites['Produk'].map((prod, i) => (
                <div key={i} className="p-5 bg-white rounded-4xl border border-gray-100 shadow-premium flex items-center gap-5 group">
                   <div className="w-16 h-16 bg-blue-50 text-blue-500 rounded-2xl flex items-center justify-center text-3xl group-hover:scale-105 transition-transform">
                      <FaPills />
                   </div>
                   <div className="flex-1 min-w-0">
                      <h4 className="text-[14px] font-black text-gray-900 leading-tight">{prod.name}</h4>
                      <p className="text-[10px] text-gray-400 font-bold uppercase mt-1">{prod.brand}</p>
                      <p className="text-[14px] font-black text-gray-900 mt-2">Rp {prod.price}</p>
                   </div>
                   <button className="w-10 h-10 rounded-xl bg-rose-50 text-primary flex items-center justify-center text-xs opacity-0 group-hover:opacity-100 transition-all">
                      <FaTrashAlt />
                   </button>
                </div>
              ))}

              {activeTab === 'Artikel' && favorites['Artikel'].map((art, i) => (
                <div key={i} className="p-5 bg-white rounded-4xl border border-gray-100 shadow-premium flex items-center gap-5 group">
                   <div className="w-16 h-16 bg-indigo-50 text-indigo-500 rounded-2xl flex items-center justify-center text-3xl group-hover:scale-105 transition-transform">
                      <FaBookMedical />
                   </div>
                   <div className="flex-1 min-w-0">
                      <h4 className="text-[14px] font-black text-gray-900 leading-tight">{art.title}</h4>
                      <div className="flex items-center gap-3 mt-2">
                        <span className="text-[9px] font-black text-primary uppercase tracking-widest">{art.tag}</span>
                        <div className="w-1 h-1 bg-gray-200 rounded-full"></div>
                        <span className="text-[9px] text-gray-400 font-bold uppercase">{art.time} Read</span>
                      </div>
                   </div>
                   <button className="w-10 h-10 rounded-xl bg-rose-50 text-primary flex items-center justify-center text-xs opacity-0 group-hover:opacity-100 transition-all">
                      <FaTrashAlt />
                   </button>
                </div>
              ))}
              
              {favorites[activeTab as keyof typeof favorites].length === 0 && (
                <div className="py-20 text-center flex flex-col items-center">
                   <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center text-gray-200 text-4xl mb-6">
                      <FaHeart />
                   </div>
                   <p className="text-[12px] text-gray-400 font-medium">Belum ada {activeTab} favorit.</p>
                </div>
              )}
           </div>
        </div>
      </main>
    </>
  );
}
