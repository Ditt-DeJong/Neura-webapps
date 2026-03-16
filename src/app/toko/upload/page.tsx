'use client';
import { FaChevronLeft, FaCloudUploadAlt, FaFilePrescription, FaCheckCircle, FaExclamationTriangle, FaArrowRight, FaCamera, FaImage, FaClock } from 'react-icons/fa';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';

export default function PrescriptionUpload() {
  const router = useRouter();
  const [step, setStep] = useState(1); // 1: Upload, 2: Review, 3: Success
  const [isUploading, setIsUploading] = useState(false);

  const handleUpload = () => {
    setIsUploading(true);
    setTimeout(() => {
      setIsUploading(false);
      setStep(2);
    }, 2000);
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen pb-32 pt-32 bg-zinc-50">
        {/* Back Button */}
        <div className="px-6 max-w-[450px] mx-auto mb-6">
          <button onClick={() => router.back()} className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-gray-900 border border-gray-100 shadow-sm active:scale-90 transition-all">
            <FaChevronLeft />
          </button>
        </div>

        <div className="px-6 max-w-[450px] mx-auto">
          {/* Header */}
          <div className="mb-12">
            <span className="text-[10px] text-primary font-black uppercase tracking-[0.4em] mb-3 block">Digitalized Rx</span>
            <h1 className="text-3xl font-black text-gray-900 tracking-tight leading-tight">
              Kirim <span className="text-primary">Resep</span> <br/>Dokter Anda
            </h1>
            <p className="text-gray-400 text-[13px] font-medium leading-relaxed mt-4">
              Apoteker kami akan memeriksa resep Anda dan menyiapkan obat dalam waktu kurang dari 30 menit.
            </p>
          </div>

          {step === 1 && (
            <div className="space-y-10 animate-in fade-in slide-in-from-bottom-5 duration-700">
               {/* Upload Zone */}
               <div 
                 onClick={handleUpload}
                 className="aspect-4/5 bg-white border-2 border-dashed border-zinc-200 rounded-5xl flex flex-col items-center justify-center text-center p-10 group cursor-pointer hover:border-primary/50 hover:bg-primary/5 transition-all shadow-premium"
               >
                  <div className="w-24 h-24 bg-zinc-50 rounded-4xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-white transition-all duration-500 shadow-inner">
                     <FaCloudUploadAlt className="text-5xl text-zinc-300 group-hover:text-primary transition-colors" />
                  </div>
                  <h3 className="text-[16px] font-black text-gray-900 mb-2">Ambil Foto atau Pilih File</h3>
                  <p className="text-[11px] text-gray-400 font-bold uppercase tracking-widest leading-relaxed">Format: JPG, PNG, PDF (Maks 5MB)</p>
                  
                  <div className="mt-12 flex gap-4 w-full">
                     <div className="flex-1 bg-gray-900 text-white p-4 rounded-2xl flex items-center justify-center gap-2 text-[10px] font-black uppercase tracking-widest">
                        <FaCamera /> Kamera
                     </div>
                     <div className="flex-1 bg-zinc-50 text-gray-400 border border-zinc-100 p-4 rounded-2xl flex items-center justify-center gap-2 text-[10px] font-black uppercase tracking-widest">
                        <FaImage /> Galeri
                     </div>
                  </div>
               </div>

               {/* Guidelines */}
               <div className="space-y-6">
                  <h2 className="text-[12px] font-black text-gray-900 uppercase tracking-widest">Panduan Foto Resep</h2>
                  <div className="grid grid-cols-1 gap-4">
                     {[
                       { text: "Nama pasien & dokter terbaca jelas", check: true },
                       { text: "Resep tidak terpotong atau blur", check: true },
                       { text: "Tanda tangan dokter terlihat", check: true },
                     ].map((item, i) => (
                       <div key={i} className="flex items-center gap-4 p-5 bg-white rounded-3xl border border-gray-100 shadow-sm">
                          <div className="w-8 h-8 rounded-full bg-green-50 text-green-500 flex items-center justify-center text-xs">
                             <FaCheckCircle />
                          </div>
                          <p className="text-[12px] font-black text-gray-900 tracking-tight">{item.text}</p>
                       </div>
                     ))}
                  </div>
               </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-10 animate-in fade-in slide-in-from-right-10 duration-700">
               {/* Review Box */}
               <div className="bg-white p-8 rounded-5xl border border-gray-100 shadow-2xl relative overflow-hidden">
                  <div className="aspect-3/4 bg-zinc-50 rounded-2xl mb-8 flex items-center justify-center overflow-hidden border border-zinc-100 shadow-inner">
                      {/* Mock Image Placeholder */}
                      <div className="text-center p-10">
                         <FaFilePrescription className="text-8xl text-zinc-100 mb-4 mx-auto" />
                         <p className="text-[10px] text-zinc-300 font-black uppercase tracking-tighter">prescription_scanned_01.jpg</p>
                      </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="flex justify-between items-center bg-zinc-50 p-5 rounded-2xl">
                       <span className="text-[10px] text-gray-400 font-black uppercase tracking-widest">Kualitas Foto</span>
                       <span className="text-[10px] text-green-500 font-black uppercase tracking-widest flex items-center gap-2">Sangat Baik <FaCheckCircle /></span>
                    </div>
                    
                    <button 
                      onClick={() => setStep(3)}
                      className="w-full h-16 bg-gray-900 text-white rounded-3xl text-[11px] font-black uppercase tracking-[0.2em] shadow-xl hover:bg-primary transition-all active:scale-95"
                    >
                       Konfirmasi & Kirim
                    </button>
                    <button 
                      onClick={() => setStep(1)}
                      className="w-full text-[10px] font-black text-gray-400 uppercase tracking-widest"
                    >
                       Ulangi Foto
                    </button>
                  </div>
               </div>
            </div>
          )}

          {step === 3 && (
            <div className="py-20 text-center space-y-10 animate-in fade-in zoom-in duration-700">
               <div className="w-32 h-32 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto shadow-inner border-8 border-green-100/50">
                  <FaCheckCircle className="text-6xl" />
               </div>
               <div>
                  <h2 className="text-2xl font-black text-gray-900 mb-4 tracking-tight">Resep Terkirim!</h2>
                  <p className="text-gray-400 text-[13px] font-medium leading-relaxed px-10">
                    Apoteker kami sedang meninjau resep Anda. Anda akan menerima notifikasi jika pesanan sudah siap.
                  </p>
               </div>
               
               <div className="max-w-[300px] mx-auto p-5 bg-white rounded-3xl border border-gray-100 shadow-premium flex items-center gap-4">
                  <div className="w-10 h-10 bg-primary/10 text-primary rounded-xl flex items-center justify-center">
                     <FaClock />
                  </div>
                  <div className="text-left">
                     <p className="text-[9px] text-gray-400 font-black uppercase">Estimasi Peninjauan</p>
                     <p className="text-[13px] font-black text-gray-900">5 - 10 Menit</p>
                  </div>
               </div>

               <div className="pt-10">
                  <button 
                    onClick={() => router.push('/toko')}
                    className="w-full h-16 bg-gray-900 text-white rounded-3xl text-[11px] font-black uppercase tracking-[0.2em] shadow-xl hover:bg-primary transition-all flex items-center justify-center gap-4"
                  >
                     Kembali ke Toko <FaArrowRight />
                  </button>
               </div>
            </div>
          )}
        </div>
      </main>

      {/* Loading Overlay */}
      {isUploading && (
        <div className="fixed inset-0 bg-white/80 backdrop-blur-md z-100 flex flex-col items-center justify-center">
           <div className="w-16 h-16 border-4 border-gray-100 border-t-primary rounded-full animate-spin mb-6"></div>
           <p className="text-[11px] font-black text-gray-900 uppercase tracking-[0.3em]">Mengupload...</p>
        </div>
      )}
    </>
  );
}
