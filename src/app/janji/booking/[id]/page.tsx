'use client';
import { FaChevronLeft, FaCalendarAlt, FaClock, FaCheckCircle, FaUser, FaNotesMedical, FaCreditCard, FaArrowRight } from 'react-icons/fa';
import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';

export default function AppointmentBooking() {
  const params = useParams();
  const router = useRouter();
  const [step, setStep] = useState(1); // 1: Schedule, 2: Info, 3: Success

  const dates = [
    { day: "Sen", date: "15", active: true },
    { day: "Sel", date: "16", active: false },
    { day: "Rab", date: "17", active: false },
    { day: "Kam", date: "18", active: false },
    { day: "Jum", date: "19", active: false },
  ];

  const times = ["09:00", "10:30", "13:00", "14:30", "16:00"];

  return (
    <>
      <Navbar />
      <main className="min-h-screen pb-40 pt-32 bg-zinc-50">
        {/* Back Button */}
        <div className="px-6 max-w-[450px] mx-auto mb-6">
          <button onClick={() => router.back()} className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-gray-900 border border-gray-100 shadow-sm active:scale-90 transition-all">
            <FaChevronLeft />
          </button>
        </div>

        <div className="px-6 max-w-[450px] mx-auto">
          {/* Progress Chips */}
          <div className="flex gap-2 mb-10">
             {[1, 2, 3].map(s => (
               <div key={s} className={`flex-1 h-1.5 rounded-full transition-all duration-500 ${step >= s ? 'bg-primary' : 'bg-gray-200'}`}></div>
             ))}
          </div>

          {step === 1 && (
            <div className="space-y-10 animate-in fade-in slide-in-from-bottom-5 duration-700">
               <div>
                  <h1 className="text-3xl font-black text-gray-900 mb-2">Pilih Jadwal</h1>
                  <p className="text-[13px] text-gray-400 font-medium tracking-tight">Tentukan waktu kunjungan yang sesuai.</p>
               </div>

               {/* Date Picker */}
               <div className="space-y-6">
                  <h2 className="text-[10px] font-black text-gray-400 uppercase tracking-widest px-2">September 2026</h2>
                  <div className="flex gap-3 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                     {dates.map((d, i) => (
                       <div 
                         key={i}
                         className={`w-16 h-20 rounded-2xl flex flex-col items-center justify-center shrink-0 border transition-all cursor-pointer ${d.active ? 'bg-primary border-primary text-white shadow-primary-sm' : 'bg-white border-gray-100 text-gray-400'}`}
                       >
                          <span className="text-[10px] font-black uppercase mb-1">{d.day}</span>
                          <span className="text-lg font-black">{d.date}</span>
                       </div>
                     ))}
                  </div>
               </div>

               {/* Time Picker */}
               <div className="space-y-6">
                  <h2 className="text-[10px] font-black text-gray-400 uppercase tracking-widest px-2">Jam Tersedia</h2>
                  <div className="grid grid-cols-3 gap-3">
                     {times.map((t, i) => (
                       <div 
                         key={i}
                         className={`py-4 rounded-xl flex items-center justify-center border text-[11px] font-black transition-all cursor-pointer ${i === 1 ? 'bg-gray-900 border-gray-900 text-white shadow-xl' : 'bg-white border-gray-100 text-gray-400'}`}
                       >
                          {t}
                       </div>
                     ))}
                  </div>
               </div>

               <div className="pt-10">
                  <button 
                    onClick={() => setStep(2)}
                    className="w-full h-16 bg-gray-900 text-white rounded-3xl text-[11px] font-black uppercase tracking-[0.2em] shadow-xl hover:bg-primary transition-all active:scale-95"
                  >
                     Lanjut Isi Data
                  </button>
               </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-8 animate-in fade-in slide-in-from-right-10 duration-700">
               <div>
                  <h1 className="text-3xl font-black text-gray-900 mb-2">Data Pasien</h1>
                  <p className="text-[13px] text-gray-400 font-medium tracking-tight">Lengkapi informasi untuk registrasi RS.</p>
               </div>

               <div className="space-y-6">
                  <div className="space-y-3">
                     <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest px-2">Nama Lengkap Pasien</label>
                     <div className="relative">
                        <FaUser className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 text-xs" />
                        <input type="text" value="Budi Sudarsono" readOnly className="w-full bg-white border border-gray-100 rounded-2xl py-5 pl-14 pr-6 text-[12px] font-bold text-gray-900 outline-none shadow-sm" />
                     </div>
                  </div>

                  <div className="space-y-3">
                     <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest px-2">Keluhan / Alasan Kunjungan</label>
                     <div className="relative">
                        <FaNotesMedical className="absolute left-6 top-6 text-gray-400 text-xs" />
                        <textarea placeholder="Tuliskan keluhan singkat Anda..." className="w-full bg-white border border-gray-100 rounded-3xl py-5 pl-14 pr-6 text-[12px] font-medium text-gray-900 min-h-32 outline-none shadow-sm focus:border-primary transition-all"></textarea>
                     </div>
                  </div>

                  <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex items-center justify-between">
                     <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-blue-50 text-blue-500 rounded-xl flex items-center justify-center">
                           <FaCreditCard />
                        </div>
                        <div>
                           <p className="text-[11px] font-black text-gray-900">Metode Pembayaran</p>
                           <p className="text-[9px] text-gray-400 font-bold uppercase">Bayar Di Tempat (RS)</p>
                        </div>
                     </div>
                     <button className="text-[10px] font-black text-primary uppercase border-b border-primary">Edit</button>
                  </div>
               </div>

               <div className="pt-10">
                  <button 
                    onClick={() => setStep(3)}
                    className="w-full h-16 bg-gray-900 text-white rounded-3xl text-[11px] font-black uppercase tracking-[0.2em] shadow-xl hover:bg-primary transition-all active:scale-95"
                  >
                     Konfirmasi Janji
                  </button>
               </div>
            </div>
          )}

          {step === 3 && (
            <div className="py-20 text-center space-y-10 animate-in fade-in zoom-in duration-700">
               <div className="w-32 h-32 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto shadow-inner border-8 border-primary/5">
                  <FaCheckCircle className="text-6xl" />
               </div>
               <div>
                  <h2 className="text-2xl font-black text-gray-900 mb-4 tracking-tight">Registrasi Berhasil!</h2>
                  <p className="text-gray-400 text-[13px] font-medium leading-relaxed px-10">
                    ID Reservasi Anda: <span className="text-gray-900 font-black">NEU-88291-RSUI</span>. Mohon datang 15 menit sebelum jam yang ditentukan.
                  </p>
               </div>

               <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-2xl space-y-4">
                  <div className="flex justify-between items-center text-[11px]">
                     <span className="text-gray-400 font-bold uppercase">Fasilitas</span>
                     <span className="text-gray-900 font-black">RS Universitas Indonesia</span>
                  </div>
                  <div className="flex justify-between items-center text-[11px]">
                     <span className="text-gray-400 font-bold uppercase">Waktu</span>
                     <span className="text-gray-900 font-black">Senin, 15 Sept • 10:30 WIB</span>
                  </div>
                  <div className="pt-4 border-t border-dashed border-gray-100 flex justify-between items-center text-[11px]">
                     <span className="text-gray-400 font-bold uppercase">Status Antrean</span>
                     <span className="text-primary font-black uppercase">Confirmed</span>
                  </div>
               </div>

               <div className="pt-10">
                  <button 
                    onClick={() => router.push('/janji')}
                    className="w-full h-16 bg-gray-900 text-white rounded-3xl text-[11px] font-black uppercase tracking-[0.2em] shadow-xl hover:bg-primary transition-all flex items-center justify-center gap-4"
                  >
                     Selesai <FaArrowRight />
                  </button>
               </div>
            </div>
          )}
        </div>
      </main>
    </>
  );
}
