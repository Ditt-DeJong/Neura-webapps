'use client';
import Navbar from '@/components/Navbar';
import { FaSearch, FaShoppingBasket, FaPlus, FaFilter, FaStar, FaFilePrescription, FaCapsules, FaHeadSideMask, FaBandAid, FaThermometerHalf, FaTablets, FaPills, FaLeaf, FaChevronRight, FaArrowRight, FaClock } from 'react-icons/fa';
import { useState } from 'react';
import Link from 'next/link';

export default function TokoObat() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Semua');
  
  const categories = [
    { name: "Semua", icon: <FaTablets /> },
    { name: "Resep", icon: <FaFilePrescription /> },
    { name: "Vitamin", icon: <FaCapsules /> },
    { name: "Masker", icon: <FaHeadSideMask /> },
    { name: "P3K", icon: <FaBandAid /> },
    { name: "Demam", icon: <FaThermometerHalf /> },
  ];

  const products = [
    { id: '1', name: "Vitamin C 500mg", price: "25.000", rating: "4.9", category: "Vitamin", icon: <FaCapsules />, stock: "50+", sold: "1k+" },
    { id: '2', name: "Paracetamol 500mg", price: "12.000", rating: "4.8", category: "Demam", icon: <FaTablets />, stock: "100+", sold: "5k+" },
    { id: '3', name: "Masker Medical 3-Ply", price: "45.000", rating: "5.0", category: "Masker", icon: <FaHeadSideMask />, stock: "20+", sold: "800" },
    { id: '4', name: "Minyak Kayu Putih", price: "18.500", rating: "4.7", category: "P3K", icon: <FaLeaf />, stock: "15", sold: "200" },
    { id: '5', name: "Sanmol Forte Syrup", price: "32.000", rating: "4.9", category: "Demam", icon: <FaThermometerHalf />, stock: "30", sold: "450" },
    { id: '6', name: "Neurobion Forte", price: "55.000", rating: "4.8", category: "Vitamin", icon: <FaPills />, stock: "12", sold: "150" },
    { id: '7', name: "Betadine 30ml", price: "22.500", rating: "4.7", category: "P3K", icon: <FaFilePrescription />, stock: "25", sold: "340" },
    { id: '8', name: "Hansaplast Kain 10s", price: "8.000", rating: "4.9", category: "P3K", icon: <FaBandAid />, stock: "200+", sold: "10k+" },
    { id: '9', name: "Enervon-C Multivitamin", price: "38.500", rating: "5.0", category: "Vitamin", icon: <FaCapsules />, stock: "45", sold: "2k+" },
    { id: '10', name: "Panadol Biru 10s", price: "13.500", rating: "4.8", category: "Demam", icon: <FaTablets />, stock: "80", sold: "4k+" }
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'Semua' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Navbar />
      <main className="min-h-screen pb-40 pt-32 bg-zinc-50">
        <div className="px-6 max-w-[450px] mx-auto">
          
          {/* Header */}
          <div className="mb-10">
            <div className="flex justify-between items-start mb-6">
              <div>
                <span className="text-[10px] text-primary font-black uppercase tracking-[0.4em] mb-3 block">Neura Pharmacy</span>
                <h1 className="text-3xl font-black text-gray-900 tracking-tight leading-tight">
                  Toko <span className="text-primary bg-clip-text bg-linear-to-r from-primary to-[#ff5177]">Obat</span> & <br/>Kesehatan
                </h1>
              </div>
              <div className="flex gap-2">
                 <Link href="/toko/cart" className="w-12 h-12 rounded-2xl bg-white border border-gray-100 flex items-center justify-center text-gray-400 shadow-sm relative active:scale-95 transition-all">
                    <FaShoppingBasket className="text-lg" />
                    <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-white text-[9px] font-black rounded-full flex items-center justify-center border-2 border-white">2</span>
                 </Link>
              </div>
            </div>
            
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
          <Link href="/toko/upload">
            <div className="mb-12 bg-linear-to-br from-[#0f172a] to-[#1e293b] p-8 rounded-5xl text-white relative overflow-hidden shadow-2xl group cursor-pointer border border-white/5 ring-1 ring-white/10">
              <div className="absolute -right-6 -top-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-block bg-primary/20 backdrop-blur-md px-3 py-1.5 rounded-xl text-[8px] font-black tracking-widest uppercase border border-primary/20 text-primary">
                    PRIORITAS
                  </span>
                  <div className="flex items-center gap-1.5 text-[8px] text-white/40 font-black uppercase tracking-widest">
                    <FaClock className="text-primary" /> 30 Menit Sampai
                  </div>
                </div>
                <h3 className="text-xl font-black leading-tight tracking-tight mb-2">Unggah Resep Dokter</h3>
                <p className="text-[11px] text-white/50 font-medium leading-relaxed pr-8">Punya resep dari dokter? Unggah foto resepmu dan biar kami yang siapkan obatnya.</p>
                <div className="mt-8 flex items-center gap-2 text-[10px] font-black text-primary uppercase tracking-[0.2em] group-hover:gap-4 transition-all">
                  Upload Sekarang <FaArrowRight />
                </div>
              </div>
            </div>
          </Link>

          {/* Categories */}
          <div className="mb-12">
            <div className="flex justify-between items-center mb-8 px-2">
              <h2 className="text-[12px] font-black text-gray-900 uppercase tracking-[0.2em]">Kategori Produk</h2>
              <button className="text-[10px] font-black text-gray-300 uppercase tracking-widest">Lihat Semua</button>
            </div>
            <div className="flex gap-4 overflow-x-auto pb-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden -mx-6 px-6">
              {categories.map((cat, i) => (
                <div key={i} className="flex flex-col items-center gap-3 cursor-pointer group" onClick={() => setSelectedCategory(cat.name)}>
                  <div className={`w-16 h-16 rounded-3xl flex items-center justify-center text-2xl shadow-premium border transition-all duration-300 group-hover:-translate-y-2 ${selectedCategory === cat.name ? 'bg-primary text-white border-primary shadow-primary-sm ring-4 ring-primary/10' : 'bg-white text-gray-400 border-gray-100'}`}>
                    {cat.icon}
                  </div>
                  <span className={`text-[10px] font-black uppercase tracking-tight transition-colors ${selectedCategory === cat.name ? 'text-primary' : 'text-gray-400'}`}>{cat.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Product Feed */}
          <div className="space-y-8">
            <div className="flex justify-between items-center px-2">
              <h2 className="text-[12px] font-black text-gray-900 uppercase tracking-[0.2em]">
                {searchQuery ? `Hasil Cari: "${searchQuery}"` : 'Unggulan Untukmu'}
              </h2>
              <div className="flex items-center gap-2 text-[10px] font-black text-gray-300 uppercase">
                Urutkan <FaFilter />
              </div>
            </div>
            
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 gap-6">
                {filteredProducts.map((item) => (
                  <Link href={`/toko/${item.id}`} key={item.id} className="block group">
                    <div className="bg-white p-5 rounded-4xl border border-gray-100 shadow-premium hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 relative flex flex-col h-full">
                      <div className="h-36 bg-zinc-50/50 rounded-4xl mb-5 flex items-center justify-center text-6xl text-primary/40 group-hover:text-primary/60 group-hover:scale-105 transition-all duration-700 relative overflow-hidden">
                        {item.icon}
                        <div className="absolute top-3 right-3 bg-white/80 backdrop-blur-md px-2 py-1 rounded-lg text-[8px] font-black text-gray-400">
                          {item.sold} Terjual
                        </div>
                      </div>
                      
                      <div className="flex-1 space-y-2">
                        <p className="text-[9px] text-primary font-black uppercase tracking-widest">{item.category}</p>
                        <h3 className="text-[14px] font-black text-gray-900 leading-tight group-hover:text-primary transition-colors">{item.name}</h3>
                        
                        <div className="flex items-center gap-3">
                           <div className="flex items-center gap-1 text-[10px] text-orange-400 font-black">
                             <FaStar className="text-[8px]" /> {item.rating}
                           </div>
                           <div className="w-1 h-1 bg-gray-200 rounded-full"></div>
                           <p className="text-[9px] text-gray-400 font-bold uppercase">Stok {item.stock}</p>
                        </div>
                        
                        <div className="flex justify-between items-center pt-4 mt-auto">
                          <p className="text-[16px] font-black text-gray-900 tracking-tight">Rp {item.price}</p>
                          <button className="w-10 h-10 rounded-2xl bg-gray-900 text-white flex items-center justify-center text-sm hover:bg-primary transition-all shadow-xl active:scale-90 group-hover:shadow-primary-sm">
                            <FaPlus />
                          </button>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="py-20 text-center bg-white rounded-5xl border border-gray-100 border-dashed">
                <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl text-gray-200">
                    <FaTablets />
                </div>
                <h3 className="text-gray-900 font-black text-lg mb-2">Produk Tidak Ada</h3>
                <p className="text-gray-400 text-[12px] font-medium px-10 leading-relaxed">Maaf, item yang Anda cari belum tersedia di Neura Pharmacy.</p>
                <button onClick={() => {setSearchQuery(''); setSelectedCategory('Semua');}} className="mt-8 text-primary font-black uppercase tracking-widest text-[10px]">Refresh Toko</button>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Static Order Bar Mockup */}
      <div className="fixed bottom-10 left-6 right-6 z-50">
         <div className="max-w-[400px] mx-auto bg-gray-900 text-white p-5 rounded-4xl shadow-2xl flex items-center justify-between border border-white/10 ring-1 ring-white/10">
            <Link href="/toko/cart" className="flex items-center gap-4 group">
               <div className="w-12 h-12 bg-primary/20 rounded-2xl flex items-center justify-center text-primary text-xl relative group-hover:scale-110 transition-transform">
                  <FaShoppingBasket />
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-white text-gray-900 text-[9px] font-black rounded-full flex items-center justify-center">2</span>
               </div>
               <div>
                  <p className="text-[10px] text-white/40 font-black uppercase tracking-widest mb-1">Total Pembayaran</p>
                  <p className="text-[16px] font-black leading-none tracking-tight">Rp 37.000</p>
               </div>
            </Link>
            <Link href="/toko/checkout">
               <button className="bg-primary text-white px-6 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:opacity-90 transition-all active:scale-95 shadow-xl">
                  Checkout
               </button>
            </Link>
         </div>
      </div>
    </>
  );
}

