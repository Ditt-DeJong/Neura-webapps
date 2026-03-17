'use client';
import Navbar from '@/components/Navbar';
import { FaShieldAlt, FaIdCard, FaHistory, FaCheckCircle, FaHospitalSymbol, FaChevronRight } from 'react-icons/fa';
import Link from 'next/link';

export default function LayananBPJS() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pb-32 pt-32 bg-background-app">
        <div className="px-8 max-w-[450px] mx-auto">
          {/* Header */}
          <div className="mb-10 text-center flex flex-col items-center">
            <div className="w-20 h-20 bg-primary/10 text-primary rounded-[40px] flex items-center justify-center text-4xl mb-8 shadow-inner ring-4 ring-primary/5">
               <FaShieldAlt />
            </div>
            <span className="text-[10px] text-primary font-black uppercase tracking-[0.4em] mb-4 block">Insurance Integration</span>
            <h1 className="text-3xl font-black text-gray-900 tracking-tight leading-tight mb-4">
              BPJS & <span className="text-primary">Asuransi</span>
            </h1>
            <p className="text-gray-500 text-[13px] font-medium leading-relaxed max-w-[300px]">
              Kelola proteksi kesehatanmu dan nikmati layanan cashless di ratusan mitra kami.
            </p>
          </div>

          {/* Card Virtual */}
          <div className="mb-12 relative overflow-hidden bg-linear-to-br from-gray-900 via-gray-800 to-gray-900 p-8 rounded-[44px] shadow-2xl group border border-white/5">
             <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-primary/20 rounded-full blur-[80px]"></div>
             <div className="relative z-10">
                <div className="flex justify-between items-start mb-12">
                   <div className="space-y-1">
                      <p className="text-[8px] text-white/40 font-black uppercase tracking-widest">Active Member Since 2024</p>
                      <h3 className="text-xl font-black text-white tracking-widest leading-none">NEURA PROTECT+</h3>
                   </div>
                   <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
                      <FaShieldAlt className="text-primary" />
                   </div>
                </div>
                
                <div className="space-y-6">
                   <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center border border-white/10">
                         <FaIdCard className="text-white/40" />
                      </div>
                      <p className="text-[14px] font-black text-white/90 tracking-[0.2em]">**** **** 8821</p>
                   </div>
                   <div className="flex justify-between items-end">
                      <div className="space-y-1">
                         <p className="text-[8px] text-white/40 font-black uppercase tracking-widest">Member Name</p>
                         <p className="text-[12px] font-black text-white uppercase tracking-wider">MAHASISWA UNGGUL</p>
                      </div>
                      <div className="flex flex-col items-end">
                         <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-[8px] font-black uppercase tracking-widest border border-green-500/20">Active</span>
                      </div>
                   </div>
                </div>
             </div>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-2 gap-4 mb-12">
             <button className="flex flex-col items-center gap-4 p-6 bg-white rounded-4xl border border-gray-100 shadow-premium hover:-translate-y-1 transition-all">
                <div className="w-12 h-12 bg-blue-50 text-blue-500 rounded-2xl flex items-center justify-center text-xl">
                   <FaCheckCircle />
                </div>
                <span className="text-[10px] font-black text-gray-900 uppercase tracking-widest leading-none">Cek Status</span>
             </button>
             <button className="flex flex-col items-center gap-4 p-6 bg-white rounded-4xl border border-gray-100 shadow-premium hover:-translate-y-1 transition-all">
                <div className="w-12 h-12 bg-purple-50 text-purple-500 rounded-2xl flex items-center justify-center text-xl">
                   <FaHistory />
                </div>
                <span className="text-[10px] font-black text-gray-900 uppercase tracking-widest leading-none">Riwayat Klaim</span>
             </button>
          </div>

          {/* Info Sections */}
          <div className="space-y-5">
             <h2 className="text-[12px] font-black text-gray-900 uppercase tracking-widest px-2 mb-6">Informasi Layanan</h2>
             
             <Link href="/bpjs/faskes" className="bg-white p-6 rounded-4xl border border-gray-100 shadow-premium flex items-center gap-5 group cursor-pointer">
                <div className="w-14 h-14 bg-secondary rounded-2xl flex items-center justify-center text-2xl text-primary shrink-0 group-hover:scale-105 transition-transform">
                   <FaHospitalSymbol />
                </div>
                <div className="flex-1">
                   <h3 className="text-[14px] font-black text-gray-900 mb-1 leading-tight">Faskes Pertama (FKTP)</h3>
                   <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Klinik Satelit UI</p>
                </div>
                <FaChevronRight className="text-xs text-gray-200" />
             </Link>

             <div className="bg-white p-6 rounded-4xl border border-gray-100 shadow-premium flex flex-col gap-6 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                <div className="flex items-start justify-between">
                   <div className="space-y-4">
                      <h3 className="text-[14px] font-black text-gray-900 leading-tight">Manfaat Neura Protect+</h3>
                      <ul className="space-y-3">
                         {['Bebas biaya konsultasi', 'Potongan obat 20%', 'Antrian prioritas RS'].map((text, i) => (
                           <li key={i} className="flex items-center gap-3 text-[11px] text-gray-500 font-medium">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                              {text}
                           </li>
                         ))}
                      </ul>
                   </div>
                </div>
                <button className="w-full py-4 bg-gray-50 text-gray-400 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-gray-900 hover:text-white transition-all">
                   Upgrade Layanan
                </button>
             </div>
          </div>
        </div>
      </main>
    </>
  );
}
