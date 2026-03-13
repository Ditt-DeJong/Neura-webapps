'use client';
import Navbar from '@/components/Navbar';
import { FaSearch, FaShoppingBasket, FaPlus, FaFilter, FaStar, FaFilePrescription, FaCapsules, FaHeadSideMask, FaBandAid, FaThermometerHalf, FaTablets, FaPills, FaLeaf } from 'react-icons/fa';
import { useState } from 'react';

export default function TokoObat() {
  const [searchQuery, setSearchQuery] = useState('');
  
  const categories = [
    { name: "Resep", icon: <FaFilePrescription /> },
    { name: "Vitamin", icon: <FaCapsules /> },
    { name: "Masker", icon: <FaHeadSideMask /> },
    { name: "P3K", icon: <FaBandAid /> },
    { name: "Demam", icon: <FaThermometerHalf /> },
  ];

  const products = [
    { name: "Vitamin C 500mg", price: "25.000", rating: "4.9", category: "Vitamin", icon: <FaCapsules /> },
    { name: "Paracetamol 500mg", price: "12.000", rating: "4.8", category: "Demam", icon: <FaTablets /> },
    { name: "Masker Medical 3-Ply", price: "45.000", rating: "5.0", category: "Proteksi", icon: <FaHeadSideMask /> },
    { name: "Minyak Kayu Putih", price: "18.500", rating: "4.7", category: "P3K", icon: <FaLeaf /> },
    { name: "Sanmol Forte Syrup", price: "32.000", rating: "4.9", category: "Demam", icon: <FaThermometerHalf /> },
    { name: "Neurobion Forte", price: "55.000", rating: "4.8", category: "Vitamin", icon: <FaPills /> },
    { name: "Betadine 30ml", price: "22.500", rating: "4.7", category: "P3K", icon: <FaFilePrescription /> },
    { name: "Hansaplast Kain 10s", price: "8.000", rating: "4.9", category: "P3K", icon: <FaBandAid /> },
    { name: "Enervon-C Multivitamin", price: "38.500", rating: "5.0", category: "Vitamin", icon: <FaCapsules /> },
    { name: "Panadol Biru 10s", price: "13.500", rating: "4.8", category: "Demam", icon: <FaTablets /> }
  ];

  const filteredProducts = products.filter(product => 
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    product.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <Navbar />
      <main className="min-h-screen pb-32 pt-32 bg-background-app">
        <div className="px-8 max-w-[450px] mx-auto">
          {/* Header */}
          <div className="mb-10">
            <span className="text-[10px] text-primary font-black uppercase tracking-[0.4em] mb-3 block">Neura Pharmacy</span>
            <h1 className="text-3xl font-black text-gray-900 tracking-tight leading-tight mb-4">
              Toko <span className="text-primary">Obat</span> & <br/>Kebutuhan Sehat
            </h1>
            
            <div className="relative mt-8 group">
              <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none">
                <FaSearch className="text-gray-400 text-sm group-focus-within:text-primary transition-colors" />
              </div>
              <input 
                type="text" 
                placeholder="Cari obat, vitamin, atau alat kesehatan..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white border border-gray-100 rounded-3xl py-5 pl-14 pr-6 text-[12px] font-medium focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all shadow-premium"
              />
            </div>
          </div>

          {/* Banner Promo */}
          <div className="mb-12 bg-linear-to-br from-primary to-[#ff5177] p-8 rounded-5xl text-white relative overflow-hidden shadow-premium group cursor-pointer">
            <div className="absolute -right-6 -top-6 w-32 h-32 bg-white/10 rounded-full group-hover:scale-125 transition-transform duration-700"></div>
            <div className="relative z-10">
              <span className="inline-block bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-xl text-[8px] font-black tracking-widest uppercase border border-white/20 mb-4">
                STOK TERBATAS
              </span>
              <h3 className="text-xl font-black leading-tight tracking-tight mb-2">Unggah Resep Dokter</h3>
              <p className="text-[10px] text-white/80 font-bold uppercase tracking-widest">Dapatkan obatmu dalam 30 menit</p>
              <button className="mt-6 px-6 py-3 bg-white text-primary rounded-xl text-[10px] font-black uppercase tracking-widest shadow-xl group-hover:bg-gray-900 group-hover:text-white transition-all">
                Upload Sekarang
              </button>
            </div>
          </div>

          {/* Categories */}
          <div className="mb-12">
            <div className="flex justify-between items-center mb-6 px-2">
              <h2 className="text-[12px] font-black text-gray-900 uppercase tracking-widest">Kategori Populer</h2>
              <FaFilter className="text-gray-300 text-xs" />
            </div>
            <div className="grid grid-cols-5 gap-4">
              {categories.map((cat, i) => (
                <div key={i} className="flex flex-col items-center gap-3 cursor-pointer group" onClick={() => setSearchQuery(cat.name)}>
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-xl shadow-premium border border-gray-50 group-hover:-translate-y-1 transition-all ${searchQuery === cat.name ? 'bg-primary text-white' : 'bg-white text-gray-400'}`}>
                    {cat.icon}
                  </div>
                  <span className={`text-[9px] font-black uppercase tracking-tighter transition-colors ${searchQuery === cat.name ? 'text-primary' : 'text-gray-400'}`}>{cat.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Product Feed */}
          <div className="space-y-6">
            <div className="flex justify-between items-center px-2">
              <h2 className="text-[12px] font-black text-gray-900 uppercase tracking-widest">
                {searchQuery ? `Hasil untuk "${searchQuery}"` : 'Rekomendasi Untukmu'}
              </h2>
              {searchQuery && (
                <button onClick={() => setSearchQuery('')} className="text-[10px] font-black text-primary uppercase tracking-widest">Reset</button>
              )}
            </div>
            
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 gap-5">
                {filteredProducts.map((item, idx) => (
                  <div key={idx} className="bg-white p-5 rounded-4xl border border-gray-100 shadow-premium hover:-translate-y-1 transition-all duration-300 group cursor-pointer relative">
                    <div className="h-32 bg-secondary/30 rounded-3xl mb-5 flex items-center justify-center text-5xl text-primary group-hover:scale-105 transition-transform duration-500">
                      {item.icon}
                    </div>
                    <div className="space-y-1">
                      <p className="text-[9px] text-primary font-black uppercase tracking-widest">{item.category}</p>
                      <h3 className="text-[13px] font-black text-gray-900 leading-tight truncate">{item.name}</h3>
                      <div className="flex items-center gap-1 text-[10px] text-orange-400 font-black mb-2">
                        <FaStar className="text-[8px]" /> {item.rating}
                      </div>
                      <div className="flex justify-between items-center pt-2">
                        <p className="text-[12px] font-black text-gray-900">Rp {item.price}</p>
                        <button className="w-8 h-8 rounded-xl bg-gray-900 text-white flex items-center justify-center text-xs hover:bg-primary transition-colors shadow-lg">
                          <FaPlus />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="py-20 text-center">
                <p className="text-gray-400 text-[12px] font-bold uppercase tracking-widest">Produk tidak ditemukan</p>
              </div>
            )}
          </div>
        </div>
      </main>
      
      {/* Floating Cart (Static for UI) */}
      <div className="fixed bottom-32 left-1/2 -translate-x-1/2 z-50 pointer-events-none">
        <button className="pointer-events-auto bg-gray-900 text-white flex items-center gap-4 px-8 py-5 rounded-3xl shadow-2xl animate-bounce-subtle">
           <FaShoppingBasket className="text-xl" />
           <div className="h-6 w-px bg-white/20"></div>
           <div className="text-left">
              <p className="text-[10px] font-black uppercase tracking-widest leading-none mb-1">2 Items</p>
              <p className="text-[12px] font-black leading-none">Rp 37.000</p>
           </div>
        </button>
      </div>
    </>
  );
}
