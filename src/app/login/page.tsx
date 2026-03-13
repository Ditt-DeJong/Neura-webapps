'use client';
import Link from 'next/link';
import { FaPlus, FaGoogle, FaApple } from 'react-icons/fa';

export default function Login() {
  return (
    <div className="min-h-screen bg-[#FCFBFC] flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background blobs for aesthetic */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FF8E9E] rounded-full blur-[100px] opacity-30 -z-10 translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#e0f2fe] rounded-full blur-[120px] opacity-40 -z-10 -translate-x-1/3 translate-y-1/3"></div>
      
      <div className="w-full max-w-6xl bg-white rounded-[32px] shadow-2xl overflow-hidden flex flex-col md:flex-row min-h-[700px]">
        
        {/* Left Informational Side */}
        <div className="w-full md:w-5/12 bg-linear-to-br from-[#FF6B8B] to-[#cc5670] p-16 text-white hidden md:flex flex-col justify-center relative">
           <div className="absolute inset-0 bg-black/5 z-0"></div>
           <div className="relative z-10">
              <Link href="/" className="inline-flex items-center gap-3 text-3xl font-extrabold mb-16 hover:opacity-90 transition-opacity">
                 <div className="bg-white p-2 rounded-xl text-[#FF6B8B]"><FaPlus /></div>
                 Neura
              </Link>
              <h2 className="text-5xl font-extrabold mb-8 leading-tight tracking-tight">
                Kesehatan Mental & Fisik Anda Prioritas
              </h2>
              <p className="text-xl opacity-90 mb-12 leading-relaxed">
                Bergabunglah dengan ribuan mahasiswa lainnya yang terhubung dengan layanan medis aman, terpercaya, dan 100% rahasia kapanpun dibutuhkan.
              </p>
              
              <div className="flex gap-6">
                 <div className="w-16 h-16 bg-white/10 rounded-full backdrop-blur-md flex items-center justify-center border border-white/20 font-bold text-lg">+50k</div>
                 <div className="w-16 h-16 bg-white/10 rounded-full backdrop-blur-md flex items-center justify-center border border-white/20 font-bold text-lg">ID</div>
              </div>
           </div>
        </div>
        
        {/* Right Form Side */}
        <div className="w-full md:w-7/12 p-12 lg:p-20 flex flex-col justify-center bg-white relative">
           
           <div className="text-center md:hidden mb-12">
              <Link href="/" className="inline-flex items-center gap-3 text-4xl font-extrabold text-gray-800">
                 <div className="bg-[#FF6B8B] p-2 rounded-xl text-white"><FaPlus /></div>
                 Neura
              </Link>
           </div>

           <h3 className="text-4xl font-extrabold text-gray-800 mb-4 tracking-tight">Selamat Datang Kembali 👋</h3>
           <p className="text-gray-500 mb-12 text-lg">Silakan masuk menggunakan akun mahasiswamu.</p>
           
           <form className="space-y-6">
              <div>
                 <label className="block text-sm font-bold text-gray-700 mb-3 uppercase tracking-wider">Email Universitas / Pribadi</label>
                 <input 
                   type="email" 
                   className="w-full px-6 py-5 rounded-2xl bg-[#FCFBFC] border border-gray-200 focus:outline-none focus:ring-4 focus:ring-pink-200 focus:border-[#FF6B8B] transition-all text-lg"
                   placeholder="nama@kampus.ac.id" 
                 />
              </div>
              
              <div className="pt-2">
                 <div className="flex justify-between items-center mb-3">
                    <label className="block text-sm font-bold text-gray-700 uppercase tracking-wider">Kata Sandi</label>
                    <a href="#" className="text-sm text-[#FF6B8B] font-bold hover:underline">Lupa sandi?</a>
                 </div>
                 <input 
                   type="password" 
                   className="w-full px-6 py-5 rounded-2xl bg-[#FCFBFC] border border-gray-200 focus:outline-none focus:ring-4 focus:ring-pink-200 focus:border-[#FF6B8B] transition-all text-lg"
                   placeholder="••••••••" 
                 />
              </div>
              
              <div className="pt-6">
                 <button 
                   type="button"
                   className="w-full py-5 bg-[#FF6B8B] hover:bg-[#cc5670] text-white font-bold rounded-2xl shadow-lg shadow-pink-200 transition-all hover:-translate-y-1 active:scale-[0.98] text-xl"
                 >
                   Masuk Sekarang
                 </button>
              </div>
           </form>
           
           <div className="mt-12 flex items-center mb-10">
              <div className="flex-1 h-px bg-gray-200"></div>
              <div className="px-6 text-sm text-gray-400 font-bold uppercase tracking-wider">atau masuk dengan</div>
              <div className="flex-1 h-px bg-gray-200"></div>
           </div>
           
           <div className="grid grid-cols-2 gap-6">
              <button className="flex items-center justify-center gap-3 py-4 border border-gray-200 rounded-2xl hover:bg-gray-50 transition-colors font-bold text-gray-700 text-lg shadow-sm">
                 <FaGoogle className="text-red-500 text-2xl" /> Google
              </button>
              <button className="flex items-center justify-center gap-3 py-4 border border-gray-200 rounded-2xl hover:bg-gray-50 transition-colors font-bold text-gray-700 text-lg shadow-sm">
                 <FaApple className="text-black text-3xl" /> Apple
              </button>
           </div>
           
           <p className="text-center mt-12 text-gray-500 text-lg">
             Belum punya akun? <Link href="/register" className="text-[#FF6B8B] font-bold hover:underline ml-2">Daftar di sini</Link>
           </p>
        </div>
        
      </div>
    </div>
  );
}
