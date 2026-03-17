'use client';
import { FaChevronLeft, FaHospital, FaMapMarkerAlt, FaPhoneAlt, FaClock, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';

export default function FaskesDetail() {
  const router = useRouter();

  const faskes = {
    name: "Klinik Satelit UI",
    type: "Faskes Tingkat Pertama (FKTP)",
    code: "0112U001",
    address: "Jl. Lingkar Kampus, Pondok Cina, Beji, Kota Depok, Jawa Barat 16424",
    phone: "(021) 78881034",
    hours: "Senin - Sabtu (08:00 - 20:00)",
    status: "Aktif",
    services: [
      "Poli Umum",
      "Poli Gigi",
      "Laboratorium Dasar",
      "Farmasi/Apotek",
      "KIA (Kesehatan Ibu & Anak)"
    ]
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen pb-40 pt-32 bg-white">
        {/* Back Button */}
        <div className="px-6 max-w-[450px] mx-auto mb-8">
          <button 
            onClick={() => router.back()} 
            className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center text-gray-900 border border-gray-100 shadow-sm active:scale-90 transition-all font-black text-xs"
          >
            <FaChevronLeft />
          </button>
        </div>

        <div className="max-w-[450px] mx-auto">
           {/* Header Section */}
           <div className="px-8 mb-10">
              <span className="text-[10px] text-primary font-black uppercase tracking-[0.4em] mb-4 block">{faskes.type}</span>
              <h1 className="text-3xl font-black text-gray-900 leading-[1.2] tracking-tight mb-6">
                {faskes.name}
              </h1>
              <div className="flex items-center gap-3">
                 <span className="px-3 py-1 bg-emerald-50 text-emerald-500 rounded-full text-[9px] font-black uppercase tracking-widest border border-emerald-100 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></div>
                    {faskes.status}
                 </span>
                 <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Kode: {faskes.code}</span>
              </div>
           </div>

           {/* Quick Info Grid */}
           <div className="px-8 space-y-4 mb-12">
              <div className="p-6 bg-zinc-50 rounded-4xl border border-gray-100 space-y-6">
                 <div className="flex gap-5 items-start">
                    <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-primary shadow-sm border border-gray-100 shrink-0">
                       <FaMapMarkerAlt />
                    </div>
                    <div>
                       <p className="text-[10px] text-gray-400 font-black uppercase tracking-widest mb-1">Alamat</p>
                       <p className="text-[13px] text-gray-600 font-medium leading-relaxed">{faskes.address}</p>
                    </div>
                 </div>
                 
                 <div className="flex gap-5 items-start">
                    <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-blue-500 shadow-sm border border-gray-100 shrink-0">
                       <FaPhoneAlt />
                    </div>
                    <div>
                       <p className="text-[10px] text-gray-400 font-black uppercase tracking-widest mb-1">Telepon</p>
                       <p className="text-[13px] text-gray-600 font-medium leading-relaxed">{faskes.phone}</p>
                    </div>
                 </div>

                 <div className="flex gap-5 items-start">
                    <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-orange-500 shadow-sm border border-gray-100 shrink-0">
                       <FaClock />
                    </div>
                    <div>
                       <p className="text-[10px] text-gray-400 font-black uppercase tracking-widest mb-1">Jam Operasional</p>
                       <p className="text-[13px] text-gray-600 font-medium leading-relaxed">{faskes.hours}</p>
                    </div>
                 </div>
              </div>
           </div>

           {/* Services Section */}
           <div className="px-8 mb-12">
              <h2 className="text-[12px] font-black text-gray-900 uppercase tracking-widest px-2 mb-6">Layanan Tersedia</h2>
              <div className="grid grid-cols-1 gap-3">
                 {faskes.services.map((service, i) => (
                   <div key={i} className="flex items-center gap-4 p-5 bg-white rounded-3xl border border-gray-100 shadow-sm group">
                      <FaCheckCircle className="text-primary text-lg shrink-0" />
                      <p className="text-[13px] text-gray-700 font-black tracking-tight">{service}</p>
                   </div>
                 ))}
              </div>
           </div>

           {/* Alert Section */}
           <div className="px-8">
              <div className="bg-rose-50 border border-rose-100 p-8 rounded-5xl flex gap-6 items-start">
                 <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-primary shadow-sm border border-rose-200 shrink-0">
                    <FaExclamationCircle />
                 </div>
                 <div>
                    <h3 className="text-[14px] font-black text-rose-900 mb-1 leading-tight">Pindah Faskes?</h3>
                    <p className="text-[11px] text-rose-700/70 font-medium leading-relaxed">
                       Kamu dapat merubah faskes pertama setiap 3 bulan sekali melalui aplikasi JKN Mobile atau datang langsung ke kantor BPJS terdekat.
                    </p>
                 </div>
              </div>
           </div>
        </div>

        {/* Floating Action Bar */}
        <div className="fixed bottom-10 left-6 right-6 z-50">
           <div className="max-w-[400px] mx-auto bg-gray-900 text-white p-4 rounded-4xl shadow-2xl flex items-center justify-between border border-white/10 ring-1 ring-white/10 backdrop-blur-2xl">
              <div className="flex flex-col pl-4">
                 <p className="text-[8px] text-white/40 font-black uppercase tracking-widest">Butuh Rujukan?</p>
                 <p className="text-[16px] font-black text-white leading-none mt-1">Chat Dokter</p>
              </div>
              <button 
                onClick={() => router.push('/chat')}
                className="h-12 bg-primary text-white px-8 rounded-2xl flex items-center justify-center gap-3 text-[10px] font-black uppercase tracking-widest hover:opacity-90 transition-all active:scale-95 shadow-primary-sm"
              >
                 Mulai Konsul <FaPhoneAlt className="text-xs rotate-90" />
              </button>
           </div>
        </div>
      </main>
    </>
  );
}
