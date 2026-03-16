'use client';
import { FaUserMd, FaStar, FaChevronLeft, FaCommentDots, FaVideo, FaInfoCircle, FaGraduationCap, FaBriefcase, FaCheckCircle, FaChevronRight } from 'react-icons/fa';
import Navbar from '@/components/Navbar';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';

export default function DoctorDetail() {
  const params = useParams();
  const router = useRouter();

  // Mock data - in real app would fetch by ID
  const doctor = {
    id: params.id,
    name: "dr. Sarah Wilson",
    spec: "Psikolog Klinis",
    price: "50.000",
    rating: "4.9",
    reviews: "1.2k",
    online: true,
    experience: "8 thn",
    alumni: "Universitas Indonesia",
    str: "1234567890",
    bio: "Berpengalaman dalam menangani gangguan kecemasan, depresi, dan masalah manajemen stres pada mahasiswa. Menggunakan pendekatan Cognitive Behavioral Therapy (CBT).",
    education: [
      { year: "2015 - 2018", degree: "Spesialis Psikologi Klinis", univ: "Universitas Indonesia" },
      { year: "2010 - 2014", degree: "Sarjana Kedokteran", univ: "Universitas Gadjah Mada" }
    ],
    practices: [
      "RS Medika Jaya (2018 - Sekarang)",
      "Klinik Sehat Mahasiswa (2019 - Sekarang)"
    ]
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen pb-32 pt-32 bg-white">
        {/* Back Button */}
        <div className="px-6 max-w-[450px] mx-auto mb-6">
          <button onClick={() => router.back()} className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center text-gray-900 border border-gray-100 shadow-sm active:scale-90 transition-all">
            <FaChevronLeft />
          </button>
        </div>

        <div className="px-6 max-w-[450px] mx-auto">
          {/* Hero Profile */}
          <div className="flex flex-col items-center text-center mb-10">
            <div className="relative mb-6">
               <div className="w-32 h-32 bg-secondary rounded-5xl flex items-center justify-center text-6xl text-primary border-4 border-white shadow-premium relative overflow-hidden">
                  <FaUserMd className="opacity-60" />
               </div>
               {doctor.online && (
                 <div className="absolute bottom-2 right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white flex items-center justify-center shadow-lg">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                 </div>
               )}
            </div>
            
            <h1 className="text-2xl font-black text-gray-900 mb-2 tracking-tight">{doctor.name}</h1>
            <p className="text-[11px] text-primary font-black uppercase tracking-[0.2em] mb-6">{doctor.spec}</p>
            
            <div className="flex gap-4">
               <div className="bg-zinc-50 px-6 py-4 rounded-3xl text-center border border-zinc-100 flex-1">
                  <p className="text-[9px] text-gray-400 font-black uppercase tracking-widest mb-1">Pasien</p>
                  <p className="text-[14px] font-black text-gray-900">2k+</p>
               </div>
               <div className="bg-zinc-50 px-6 py-4 rounded-3xl text-center border border-zinc-100 flex-1">
                  <p className="text-[9px] text-gray-400 font-black uppercase tracking-widest mb-1">Pengalaman</p>
                  <p className="text-[14px] font-black text-gray-900">{doctor.experience}</p>
               </div>
               <div className="bg-zinc-50 px-6 py-4 rounded-3xl text-center border border-zinc-100 flex-1">
                  <p className="text-[9px] text-gray-400 font-black uppercase tracking-widest mb-1">Rating</p>
                  <p className="text-[14px] font-black text-gray-900 flex items-center justify-center gap-1">
                    {doctor.rating} <FaStar className="text-orange-400 text-[10px]" />
                  </p>
               </div>
            </div>
          </div>

          {/* Section Tabs (Visual Only for now) */}
          <div className="flex gap-8 border-b border-gray-100 mb-10">
             <button className="pb-4 text-[11px] font-black uppercase tracking-widest text-primary border-b-2 border-primary">Profil</button>
             <button className="pb-4 text-[11px] font-black uppercase tracking-widest text-gray-300">Ulasan</button>
             <button className="pb-4 text-[11px] font-black uppercase tracking-widest text-gray-300">Jadwal</button>
          </div>

          {/* Content */}
          <div className="space-y-10">
            {/* Bio */}
            <div className="space-y-4">
               <h2 className="text-[14px] font-black text-gray-900 tracking-tight uppercase flex items-center gap-3">
                 <FaInfoCircle className="text-primary" /> Tentang Dokter
               </h2>
               <p className="text-[13px] text-gray-500 leading-relaxed font-medium">
                 {doctor.bio}
               </p>
            </div>

            {/* STR */}
            <div className="p-6 bg-zinc-50 rounded-4xl border border-zinc-100 flex items-center justify-between">
               <div>
                  <p className="text-[9px] text-gray-400 font-black uppercase tracking-widest mb-1">Nomor STR</p>
                  <p className="text-[13px] font-black text-gray-900">{doctor.str}</p>
               </div>
               <div className="w-10 h-10 bg-green-50 text-green-500 rounded-full flex items-center justify-center">
                  <FaCheckCircle />
               </div>
            </div>

            {/* Education */}
            <div className="space-y-6">
               <h2 className="text-[14px] font-black text-gray-900 tracking-tight uppercase flex items-center gap-3">
                 <FaGraduationCap className="text-primary" /> Riwayat Pendidikan
               </h2>
               <div className="space-y-6 pl-4 border-l-2 border-gray-50">
                  {doctor.education.map((edu, i) => (
                    <div key={i} className="relative">
                       <div className="absolute -left-[25px] top-0 w-4 h-4 rounded-full bg-white border-4 border-primary shadow-sm"></div>
                       <p className="text-[10px] text-primary font-black mb-1">{edu.year}</p>
                       <h3 className="text-[13px] font-black text-gray-900 mb-1">{edu.degree}</h3>
                       <p className="text-[11px] text-gray-400 font-bold uppercase tracking-tight">{edu.univ}</p>
                    </div>
                  ))}
               </div>
            </div>

            {/* Practice Locations */}
            <div className="space-y-6">
               <h2 className="text-[14px] font-black text-gray-900 tracking-tight uppercase flex items-center gap-3">
                 <FaBriefcase className="text-primary" /> Tempat Praktik
               </h2>
               <div className="space-y-4">
                  {doctor.practices.map((loc, i) => (
                    <div key={i} className="flex gap-4 p-5 bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-premium transition-shadow">
                       <div className="w-10 h-10 bg-secondary/30 rounded-xl flex items-center justify-center text-primary">
                          <FaBriefcase />
                       </div>
                       <div>
                          <p className="text-[13px] font-black text-gray-900">{loc}</p>
                          <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-1">Aktif</p>
                       </div>
                    </div>
                  ))}
               </div>
            </div>
          </div>
        </div>

        {/* Floating Action Bar */}
        <div className="fixed bottom-10 left-6 right-6 z-50">
           <div className="max-w-[400px] mx-auto bg-gray-900 text-white p-4 rounded-4xl shadow-2xl flex items-center justify-between border border-white/10 ring-1 ring-white/10 backdrop-blur-2xl">
              <div className="flex flex-col pl-4">
                 <p className="text-[8px] text-white/40 font-black uppercase tracking-widest">Mulai Sesi</p>
                 <p className="text-[16px] font-black text-white leading-none mt-1">Rp {doctor.price}</p>
              </div>
              <div className="flex items-center gap-3">
                 <button className="w-12 h-12 bg-white/10 border border-white/10 rounded-2xl flex items-center justify-center text-white hover:bg-white/20 transition-all">
                    <FaVideo className="text-sm" />
                 </button>
                 <Link href={`/chat/room/${doctor.id}`}>
                    <button className="h-12 bg-primary text-white px-8 rounded-2xl flex items-center justify-center gap-3 text-[10px] font-black uppercase tracking-widest hover:opacity-90 transition-all active:scale-95 shadow-primary-sm">
                       Chat <FaCommentDots />
                    </button>
                 </Link>
              </div>
           </div>
        </div>
      </main>
    </>
  );
}
