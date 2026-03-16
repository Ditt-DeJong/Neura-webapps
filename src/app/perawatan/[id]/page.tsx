'use client';
import { FaChevronLeft, FaStar, FaUserMd, FaShieldAlt, FaCalendarCheck, FaClinicMedical, FaCheckCircle, FaInfoCircle, FaPhoneAlt, FaCommentDots, FaArrowRight, FaClock } from 'react-icons/fa';
import { useParams, useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';

export default function TreatmentDetail() {
  const params = useParams();
  const router = useRouter();

  // Mock data for a specific treatment
  const treatment = {
    id: params.id,
    title: "Estetika & Kulit Mahasiswa",
    category: "Dermatologi",
    rating: "4.9",
    reviews: "1.8k",
    desc: "Perawatan khusus untuk kulit lelah, kusam, dan berjerawat akibat pola tidur tidak teratur (begadang) dan paparan polusi saat perjalanan ke kampus.",
    benefits: [
       "Analisis tipe kulit digital gratis",
       "Pembersihan komedo mendalam (Deep Extraction)",
       "Light Therapy untuk membunuh bakteri jerawat",
       "Konsultasi produk skincare ramah budget mahasiswa"
    ],
    doctors: [
       { name: "dr. Elena Rose, Sp.KK", role: "Spesialis Kulit & Kelamin", dist: "0.8 km" },
       { name: "dr. Kevin Sanjaya", role: "Dokter Estetika", dist: "1.5 km" },
    ],
    price: "199rb+"
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
           {/* Hero Section with Decoration */}
           <div className="px-8 mb-12">
              <div className="flex items-center gap-3 mb-4">
                 <span className="bg-rose-50 px-4 py-1.5 rounded-full text-[9px] font-black text-primary uppercase tracking-widest border border-rose-100">
                   {treatment.category}
                 </span>
                 <div className="flex items-center gap-1.5 text-[11px] font-black text-gray-900 ml-2">
                    <FaStar className="text-orange-400 text-[10px]" /> {treatment.rating}
                 </div>
              </div>
              <h1 className="text-3xl font-black text-gray-900 leading-[1.2] tracking-tight mb-6">
                {treatment.title}
              </h1>
              <p className="text-[14px] text-gray-500 leading-relaxed font-medium">
                {treatment.desc}
              </p>
           </div>

           {/* Benefit list */}
           <div className="px-6 mb-12">
              <div className="bg-gray-950 p-10 rounded-5xl text-white shadow-2xl relative overflow-hidden group">
                 <div className="absolute top-0 right-0 w-40 h-40 bg-primary/20 rounded-full blur-3xl opacity-50"></div>
                 <h3 className="text-[12px] font-black uppercase tracking-widest mb-8 flex items-center gap-3 relative z-10">
                    <FaCheckCircle className="text-primary" /> Manfaat Utama
                 </h3>
                 <div className="space-y-5 relative z-10">
                    {treatment.benefits.map((benefit, i) => (
                      <div key={i} className="flex gap-4 items-start">
                         <div className="w-5 h-5 bg-white/10 rounded-full flex items-center justify-center text-[10px] text-primary shrink-0 mt-0.5 font-black border border-white/10">
                            {i + 1}
                         </div>
                         <p className="text-[12px] text-white/80 font-medium leading-relaxed">{benefit}</p>
                      </div>
                    ))}
                 </div>
              </div>
           </div>

           {/* Doctors List */}
           <div className="px-8 space-y-8 mb-20">
              <div className="flex justify-between items-center">
                 <h2 className="text-[14px] font-black text-gray-900 uppercase tracking-widest">Pakar Terdekat</h2>
                 <button className="text-[10px] font-black text-primary uppercase tracking-widest">Maps View</button>
              </div>
              
              <div className="space-y-4">
                 {treatment.doctors.map((dr, i) => (
                   <div key={i} className="p-5 bg-white rounded-4xl border border-gray-100 shadow-premium flex items-center gap-5 group hover:border-primary/20 transition-all cursor-pointer">
                      <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center text-3xl text-primary shrink-0 group-hover:scale-105 transition-transform">
                         <FaUserMd />
                      </div>
                      <div className="flex-1 min-w-0">
                         <h4 className="text-[14px] font-black text-gray-900 leading-tight mb-1 group-hover:text-primary transition-colors">{dr.name}</h4>
                         <p className="text-[9px] text-gray-400 font-bold uppercase tracking-widest mb-2">{dr.role}</p>
                         <div className="flex items-center gap-1.5">
                            <FaClinicMedical className="text-primary text-[8px]" />
                            <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest">{dr.dist} • Tersedia</span>
                         </div>
                      </div>
                      <FaArrowRight className="text-gray-200 group-hover:text-primary group-hover:translate-x-1 transition-all text-xs" />
                   </div>
                 ))}
              </div>
           </div>

           {/* Safety Info */}
           <div className="px-8 mb-20">
              <div className="bg-emerald-50 p-6 rounded-4xl border border-emerald-100 flex gap-5 items-start">
                 <FaShieldAlt className="text-emerald-500 text-lg shrink-0 mt-1" />
                 <div>
                    <h4 className="text-[13px] font-black text-emerald-900 mb-1">Standardisasi Medis</h4>
                    <p className="text-[11px] text-emerald-700 font-medium leading-relaxed">
                       Seluruh layanan perawatan diawasi langsung oleh spesialis bersertifikat. Alat steril dan bahan yang digunakan sudah teruji BPJS/Kemenkes.
                    </p>
                 </div>
              </div>
           </div>
        </div>

        {/* Floating Action Bar */}
        <div className="fixed bottom-10 left-6 right-6 z-50">
           <div className="max-w-[400px] mx-auto bg-gray-900 text-white p-4 rounded-4xl shadow-2xl flex items-center justify-between border border-white/10 ring-1 ring-white/10 backdrop-blur-2xl">
              <div className="flex flex-col pl-4">
                 <p className="text-[8px] text-white/40 font-black uppercase tracking-widest">Sesi Konsultasi</p>
                 <p className="text-[16px] font-black text-white leading-none mt-1">Rp {treatment.price}</p>
              </div>
              <button 
                onClick={() => router.push('/chat')}
                className="h-12 bg-primary text-white px-8 rounded-2xl flex items-center justify-center gap-3 text-[10px] font-black uppercase tracking-widest hover:opacity-90 transition-all active:scale-95 shadow-primary-sm"
              >
                 Book Now <FaCalendarCheck />
              </button>
           </div>
        </div>
      </main>
    </>
  );
}
