'use client';
import { FaChevronLeft, FaStar, FaMapMarkerAlt, FaPhoneAlt, FaClock, FaCheckCircle, FaHospital, FaCalendarCheck, FaUserMd, FaArrowRight, FaShieldAlt, FaChevronRight } from 'react-icons/fa';
import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';

export default function HospitalDetail() {
  const params = useParams();
  const router = useRouter();

  // Mock data
  const hospital = {
    id: params.id,
    name: "RS Universitas Indonesia",
    type: "Rumah Sakit Umum",
    rating: "4.8",
    reviews: "2.4k",
    dist: "1.2 km",
    address: "Jl. Prof. DR. Bahder Djohan, Pondok Cina, Kecamatan Beji, Kota Depok, Jawa Barat 16424",
    phone: "(021) 50829292",
    open: "Buka 24 Jam",
    desc: "RS UI hadir sebagai rumah sakit pendidikan tinggi dengan standar internasional, menyediakan layanan kesehatan komprehensif untuk mahasiswa dan masyarakat umum.",
    specialists: [
      { name: "dr. Andi Wijaya, Sp.PD", role: "Spesialis Penyakit Dalam", availability: "Hari ini" },
      { name: "dr. Siti Aminah, Sp.A", role: "Spesialis Anak", availability: "Besok" },
      { name: "dr. Budi Santoso, Sp.Gk", role: "Spesialis Gizi Klinik", availability: "Senin, 14:00" },
    ]
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen pb-40 pt-22 bg-white">
        {/* Header Image / Back */}
        <div className="relative h-72 bg-gray-900 overflow-hidden">
           <div className="absolute inset-0 bg-primary/20 backdrop-blur-3xl"></div>
           <div className="absolute inset-0 flex items-center justify-center opacity-20">
              <FaHospital className="text-[12rem] text-white" />
           </div>
           
           <div className="absolute top-8 left-6 right-6 flex justify-between items-center z-20">
              <button 
                onClick={() => router.back()}
                className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center text-white border border-white/20 active:scale-90 transition-all"
              >
                <FaChevronLeft />
              </button>
              <button className="px-6 py-2.5 rounded-2xl bg-white/10 backdrop-blur-md text-white border border-white/20 text-[10px] font-black uppercase tracking-widest">
                 Share
              </button>
           </div>
        </div>

        <div className="max-w-[450px] mx-auto -mt-12 relative z-10">
           {/* Hospital Header info */}
           <div className="bg-white rounded-5xl p-8 shadow-2xl border border-gray-50 mx-6">
              <div className="flex items-center gap-2 mb-3">
                 <span className="text-[10px] text-primary font-black uppercase tracking-widest">{hospital.type}</span>
                 <div className="w-1 h-1 bg-gray-200 rounded-full"></div>
                 <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">{hospital.dist}</span>
              </div>
              <h1 className="text-2xl font-black text-gray-900 leading-tight mb-4">{hospital.name}</h1>
              
              <div className="flex items-center gap-6 py-6 border-y border-gray-50">
                 <div className="flex items-center gap-2">
                    <FaStar className="text-orange-400 text-sm" />
                    <span className="text-[14px] font-black text-gray-900">{hospital.rating}</span>
                    <span className="text-[10px] text-gray-400 font-medium">({hospital.reviews})</span>
                 </div>
                 <div className="w-px h-6 bg-gray-100"></div>
                 <div className="flex items-center gap-2 text-[12px] font-black text-green-500">
                    <FaClock className="text-[10px]" /> {hospital.open}
                 </div>
              </div>

              <div className="mt-8 space-y-6">
                 <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center text-primary text-sm shrink-0">
                       <FaMapMarkerAlt />
                    </div>
                    <p className="text-[12px] text-gray-500 font-medium leading-relaxed">{hospital.address}</p>
                 </div>
                 <div className="flex gap-4 items-center">
                    <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center text-primary text-sm shrink-0">
                       <FaPhoneAlt />
                    </div>
                    <p className="text-[12px] text-gray-900 font-black">{hospital.phone}</p>
                 </div>
              </div>
           </div>

           {/* About */}
           <div className="px-8 mt-12">
              <h2 className="text-[14px] font-black text-gray-900 uppercase tracking-widest mb-4">Tentang Fasilitas</h2>
              <p className="text-[13px] text-gray-500 leading-relaxed font-medium">
                 {hospital.desc}
              </p>
           </div>

           {/* Quick Actions */}
           <div className="px-8 mt-10 grid grid-cols-2 gap-4">
              <div className="p-5 bg-zinc-50 rounded-3xl border border-gray-100 flex flex-col items-center text-center gap-3">
                 <FaShieldAlt className="text-blue-500 text-xl" />
                 <span className="text-[9px] font-black text-gray-900 uppercase tracking-tight">BPJS Diterima</span>
              </div>
              <div className="p-5 bg-zinc-50 rounded-3xl border border-gray-100 flex flex-col items-center text-center gap-3">
                 <FaCalendarCheck className="text-emerald-500 text-xl" />
                 <span className="text-[9px] font-black text-gray-900 uppercase tracking-tight">Instan Booking</span>
              </div>
           </div>

           {/* Specialists List */}
           <div className="mt-12 px-8 pb-10">
              <div className="flex justify-between items-center mb-6">
                 <h2 className="text-[14px] font-black text-gray-900 uppercase tracking-widest">Dokter Tersedia</h2>
                 <button className="text-[10px] font-black text-primary uppercase tracking-widest">Lihat Semua</button>
              </div>

              <div className="space-y-4">
                 {hospital.specialists.map((dr, i) => (
                   <div key={i} className="p-5 bg-white rounded-4xl border border-gray-100 shadow-premium flex items-center gap-5 group hover:border-primary/30 transition-all cursor-pointer">
                      <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center text-3xl text-primary shrink-0 group-hover:scale-105 transition-transform">
                         <FaUserMd />
                      </div>
                      <div className="flex-1 min-w-0">
                         <h4 className="text-[14px] font-black text-gray-900 leading-tight group-hover:text-primary transition-colors">{dr.name}</h4>
                         <p className="text-[10px] text-gray-400 font-bold uppercase tracking-tight mt-1">{dr.role}</p>
                         <div className="flex items-center gap-1.5 mt-2">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                            <span className="text-[9px] font-black text-green-500 uppercase">{dr.availability}</span>
                         </div>
                      </div>
                      <FaChevronRight className="text-gray-200 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                   </div>
                 ))}
              </div>
           </div>
        </div>

        {/* Floating Action Bar */}
        <div className="fixed bottom-10 left-6 right-6 z-50">
           <div className="max-w-[400px] mx-auto bg-gray-900 text-white p-4 rounded-4xl shadow-2xl flex items-center justify-between border border-white/10 ring-1 ring-white/10 backdrop-blur-2xl">
              <div className="flex flex-col pl-4">
                 <p className="text-[8px] text-white/40 font-black uppercase tracking-widest">Estimasi Biaya</p>
                 <p className="text-[16px] font-black text-white leading-none mt-1">Rp 150rb+</p>
              </div>
              <button 
                onClick={() => router.push(`/janji/booking/${hospital.id}`)}
                className="h-12 bg-primary text-white px-8 rounded-2xl flex items-center justify-center gap-3 text-[10px] font-black uppercase tracking-widest hover:opacity-90 transition-all active:scale-95 shadow-primary-sm"
              >
                 Buat Janji <FaCalendarCheck />
              </button>
           </div>
        </div>
      </main>
    </>
  );
}
