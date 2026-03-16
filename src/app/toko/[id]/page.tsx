'use client';
import { FaChevronLeft, FaStar, FaShoppingBasket, FaPlus, FaMinus, FaInfoCircle, FaShieldAlt, FaTruck, FaStore, FaCapsules } from 'react-icons/fa';
import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Link from 'next/link';

export default function ProductDetail() {
  const params = useParams();
  const router = useRouter();
  const [quantity, setQuantity] = useState(1);

  // Mock data
  const product = {
    id: params.id,
    name: "Vitamin C 500mg",
    price: "25.000",
    rating: "4.9",
    reviews: "1.2k",
    category: "Vitamin",
    stock: "50+",
    sold: "1.5k",
    desc: "Suplemen Vitamin C berkualitas tinggi untuk menjaga daya tahan tubuh mahasiswa tetap prima saat musim ujian atau cuaca tidak menentu. Cocok untuk konsumsi harian.",
    ingredients: "Vitamin C (Ascorbic Acid) 500mg",
    dosage: "1 kali sehari sesudah makan",
    sideEffects: "Gunakan sesuai dosis. Konsultasikan dengan dokter jika memiliki riwayat maag akut."
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen pb-40 pt-32 bg-white">
        {/* Back Button */}
        <div className="px-6 max-w-[450px] mx-auto mb-6">
          <button onClick={() => router.back()} className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center text-gray-900 border border-gray-100 shadow-sm active:scale-90 transition-all">
            <FaChevronLeft />
          </button>
        </div>

        <div className="max-w-[450px] mx-auto">
           {/* Product Image Section */}
           <div className="px-6 mb-10">
              <div className="w-full aspect-square bg-zinc-50 rounded-5xl flex items-center justify-center text-8xl text-primary border border-zinc-100 shadow-inner relative overflow-hidden group">
                 <div className="absolute inset-0 bg-linear-to-tr from-primary/5 to-transparent"></div>
                 <FaCapsules className="relative z-10 group-hover:scale-110 transition-transform duration-700" />
                 
                 <div className="absolute top-6 left-6 flex flex-col gap-2">
                    <span className="bg-white/80 backdrop-blur-md px-3 py-1.5 rounded-xl text-[8px] font-black text-primary border border-primary/20 shadow-sm">ORIGINAL</span>
                    <span className="bg-gray-900 border border-white/10 px-3 py-1.5 rounded-xl text-[8px] font-black text-white shadow-sm">BEST SELLER</span>
                 </div>
              </div>
           </div>

           {/* Product Info */}
           <div className="px-8 space-y-8">
              <div>
                 <div className="flex justify-between items-start mb-4">
                    <div>
                       <p className="text-[10px] text-primary font-black uppercase tracking-[0.2em] mb-2">{product.category}</p>
                       <h1 className="text-2xl font-black text-gray-900 tracking-tight leading-tight">{product.name}</h1>
                    </div>
                    <div className="text-right">
                       <p className="text-[20px] font-black text-gray-900">Rp {product.price}</p>
                       <p className="text-[10px] text-gray-400 font-bold uppercase mt-1">Stok {product.stock}</p>
                    </div>
                 </div>
                 
                 <div className="flex items-center gap-6 py-4 border-y border-gray-50">
                    <div className="flex items-center gap-2">
                       <FaStar className="text-orange-400 text-sm" />
                       <span className="text-[12px] font-black text-gray-900">{product.rating}</span>
                       <span className="text-[10px] text-gray-400 font-medium">({product.reviews} ulasan)</span>
                    </div>
                    <div className="w-1 h-1 bg-gray-200 rounded-full"></div>
                    <div className="text-[12px] font-black text-gray-900">
                      {product.sold} <span className="text-gray-400 font-medium">Terjual</span>
                    </div>
                 </div>
              </div>

              {/* Quantity Selector */}
              <div className="flex items-center justify-between p-6 bg-zinc-50 rounded-4xl border border-zinc-100">
                 <span className="text-[12px] font-black text-gray-900 uppercase tracking-widest">Jumlah</span>
                 <div className="flex items-center gap-6">
                    <button 
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-10 h-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-gray-400 hover:text-primary transition-colors active:scale-90"
                    >
                       <FaMinus />
                    </button>
                    <span className="text-[16px] font-black text-gray-900 w-4 text-center">{quantity}</span>
                    <button 
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-10 h-10 rounded-xl bg-gray-900 text-white flex items-center justify-center hover:bg-primary transition-all active:scale-90"
                    >
                       <FaPlus />
                    </button>
                 </div>
              </div>

              {/* Details Tabs */}
              <div className="space-y-8 pb-10">
                 <div className="space-y-3">
                    <h2 className="text-[14px] font-black text-gray-900 uppercase flex items-center gap-3">
                       <FaInfoCircle className="text-primary text-xs" /> Deskripsi
                    </h2>
                    <p className="text-[13px] text-gray-500 leading-relaxed font-medium">
                       {product.desc}
                    </p>
                 </div>

                 <div className="grid grid-cols-1 gap-6">
                    <div className="space-y-2">
                       <p className="text-[10px] text-gray-400 font-black uppercase tracking-widest">Komposisi</p>
                       <p className="text-[13px] text-gray-900 font-bold">{product.ingredients}</p>
                    </div>
                    <div className="space-y-2">
                       <p className="text-[10px] text-gray-400 font-black uppercase tracking-widest">Dosis Penggunaan</p>
                       <p className="text-[13px] text-gray-900 font-bold">{product.dosage}</p>
                    </div>
                 </div>

                 {/* Trust Badges */}
                 <div className="grid grid-cols-3 gap-4 border-t border-gray-50 pt-8">
                    <div className="flex flex-col items-center text-center gap-3">
                       <div className="w-12 h-12 bg-blue-50 text-blue-500 rounded-2xl flex items-center justify-center text-xl">
                          <FaShieldAlt />
                       </div>
                       <p className="text-[8px] font-black uppercase tracking-widest text-gray-400 leading-tight">100% Original</p>
                    </div>
                    <div className="flex flex-col items-center text-center gap-3">
                       <div className="w-12 h-12 bg-green-50 text-green-500 rounded-2xl flex items-center justify-center text-xl">
                          <FaTruck />
                       </div>
                       <p className="text-[8px] font-black uppercase tracking-widest text-gray-400 leading-tight">Pengiriman Cepat</p>
                    </div>
                    <div className="flex flex-col items-center text-center gap-3">
                       <div className="w-12 h-12 bg-purple-50 text-purple-500 rounded-2xl flex items-center justify-center text-xl">
                          <FaStore />
                       </div>
                       <p className="text-[8px] font-black uppercase tracking-widest text-gray-400 leading-tight">Apotek Berizin</p>
                    </div>
                 </div>
              </div>
           </div>
        </div>

        {/* Floating Action Bar */}
         <div className="fixed bottom-10 left-6 right-6 z-50">
            <div className="max-w-[400px] mx-auto bg-gray-900 text-white p-4 rounded-4xl shadow-2xl flex items-center gap-3 border border-white/10 ring-1 ring-white/10 backdrop-blur-2xl">
               <Link href="/toko/cart" className="w-12 h-12 bg-white/10 border border-white/10 rounded-2xl flex items-center justify-center text-white hover:bg-white/20 transition-all">
                  <FaShoppingBasket className="text-sm" />
               </Link>
               <button 
                 onClick={() => router.push('/toko/cart')}
                 className="flex-1 h-12 bg-primary text-white rounded-2xl text-[10px] font-black uppercase tracking-widest hover:opacity-90 transition-all active:scale-95 shadow-primary-sm"
               >
                  Tambah ke Keranjang
               </button>
            </div>
         </div>
      </main>
    </>
  );
}
