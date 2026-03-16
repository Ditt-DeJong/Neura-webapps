'use client';
import { FaChevronLeft, FaHospital, FaCommentMedical, FaMapMarkerAlt, FaCalendarAlt, FaClock, FaClipboardList, FaDownload, FaPrint, FaArrowRight, FaCommentDots, FaCheckCircle } from 'react-icons/fa';
import { useParams, useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';

export default function ActivityDetail() {
  const params = useParams();
  const router = useRouter();

  // Mock data for a completed activity
  const activity = {
    id: params.id,
    type: "Konsultasi",
    title: "dr. Sarah Wilson",
    specialty: "Psikolog Klinis",
    date: "12 Mar 2026",
    time: "14:00 - 14:45",
    status: "Selesai",
    location: "Chat via Neura App",
    diagnosis: "Gejala Burnout Akademik (F43.0)",
    prescription: [
      { name: "Istirahat cukup (7-8 jam/hari)", dosage: "Wajib" },
      { name: "Digital Detox", dosage: "2 jam sebelum tidur" },
      { name: "Sesi Lanjutan", dosage: "Minggu depan" }
    ],
    summary: "Pasien menunjukkan gejala stres akibat beban kuliah yang menumpuk. Disarankan untuk mengatur prioritas dan melakukan teknik pernapasan saat cemas."
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
           <div className="px-8 mb-12 flex flex-col items-center text-center">
              <div className="w-24 h-24 bg-blue-50 text-blue-500 rounded-[2.5rem] flex items-center justify-center text-4xl mb-6 shadow-inner border border-blue-100">
                 <FaCommentMedical />
              </div>
              <span className="text-[10px] text-primary font-black uppercase tracking-[0.4em] mb-4 block">{activity.type} Medis</span>
              <h1 className="text-3xl font-black text-gray-900 leading-tight tracking-tight mb-2">
                {activity.title}
              </h1>
              <p className="text-[12px] text-gray-400 font-bold uppercase tracking-widest">{activity.specialty}</p>
              
              <div className="mt-6 px-4 py-2 bg-green-50 text-green-600 rounded-full text-[9px] font-black uppercase tracking-widest border border-green-200">
                 Status: {activity.status}
              </div>
           </div>

           {/* Detail Cards */}
           <div className="px-8 space-y-6 mb-12">
              <div className="bg-gray-50 rounded-4xl p-8 border border-gray-100 flex flex-col gap-6">
                 <div className="flex items-center gap-5">
                    <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-primary shadow-sm border border-gray-50">
                       <FaCalendarAlt className="text-sm" />
                    </div>
                    <div>
                       <p className="text-[8px] text-gray-400 font-black uppercase tracking-widest mb-1">Tanggal & Waktu</p>
                       <p className="text-[13px] font-black text-gray-900">{activity.date} • {activity.time}</p>
                    </div>
                 </div>
                 
                 <div className="flex items-center gap-5">
                    <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-primary shadow-sm border border-gray-50">
                       <FaMapMarkerAlt className="text-sm" />
                    </div>
                    <div>
                       <p className="text-[8px] text-gray-400 font-black uppercase tracking-widest mb-1">Metode / Lokasi</p>
                       <p className="text-[13px] font-black text-gray-900">{activity.location}</p>
                    </div>
                 </div>
              </div>

              {/* Summary / Result */}
              <div className="bg-white rounded-4xl p-8 border border-gray-100 shadow-premium">
                 <div className="flex items-center gap-3 mb-6">
                    <FaClipboardList className="text-primary text-sm" />
                    <h2 className="text-[12px] font-black text-gray-900 uppercase tracking-widest">Laporan Medis</h2>
                 </div>
                 
                 <div className="space-y-6">
                    <div>
                       <p className="text-[9px] text-gray-400 font-black uppercase tracking-widest mb-2">Diagnosis / Analisis</p>
                       <p className="text-[14px] font-black text-gray-900 leading-relaxed bg-primary/5 p-4 rounded-2xl border border-primary/10">
                          {activity.diagnosis}
                       </p>
                    </div>
                    
                    <div>
                       <p className="text-[9px] text-gray-400 font-black uppercase tracking-widest mb-3">Catatan Dokter</p>
                       <p className="text-[13px] text-gray-500 font-medium leading-relaxed italic">
                          "{activity.summary}"
                       </p>
                    </div>
                 </div>
              </div>

              {/* Recommendations / Prescription */}
              <div className="bg-gray-900 p-8 rounded-5xl text-white relative overflow-hidden group shadow-2xl">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl opacity-50"></div>
                 <div className="relative z-10">
                    <h3 className="text-[14px] font-black uppercase tracking-widest mb-6 flex items-center gap-3">
                       <FaCheckCircle className="text-primary" /> Rekomendasi
                    </h3>
                    <div className="space-y-4">
                       {activity.prescription.map((item, i) => (
                         <div key={i} className="flex flex-col gap-1 p-4 bg-white/5 rounded-2xl border border-white/5">
                            <h4 className="text-[13px] font-black leading-tight text-white/90">{item.name}</h4>
                            <p className="text-[9px] text-gray-500 font-bold uppercase tracking-widest">{item.dosage}</p>
                         </div>
                       ))}
                    </div>
                 </div>
              </div>
           </div>

           {/* Actions */}
           <div className="px-8 grid grid-cols-2 gap-4 mb-20">
              <button className="flex items-center justify-center gap-3 py-5 bg-white border border-gray-100 rounded-3xl text-[10px] font-black uppercase tracking-widest text-gray-900 shadow-sm active:scale-95 transition-all">
                 <FaDownload /> Unduh PDF
              </button>
              <button className="flex items-center justify-center gap-3 py-5 bg-white border border-gray-100 rounded-3xl text-[10px] font-black uppercase tracking-widest text-gray-900 shadow-sm active:scale-95 transition-all">
                 <FaPrint /> Cetak
              </button>
           </div>

           {/* Follow up Action */}
           <div className="px-8 mb-20">
              <div className="bg-secondary/30 p-8 rounded-[2.5rem] border border-primary/10 flex flex-col items-center text-center">
                 <div className="w-16 h-16 bg-white rounded-3xl mb-6 shadow-sm flex items-center justify-center text-primary text-2xl">
                    <FaCommentDots />
                 </div>
                 <h3 className="text-lg font-black text-gray-900 mb-2">Ada pertanyaan tambahan?</h3>
                 <p className="text-[12px] text-gray-500 font-medium leading-relaxed">Anda masih bisa melakukan chat lanjutan gratis selama 24 jam setelah sesi berakhir.</p>
                 <button className="w-full mt-8 py-5 bg-gray-900 text-white rounded-3xl text-[11px] font-black uppercase tracking-[0.2em] shadow-xl hover:bg-primary transition-all active:scale-95 flex items-center justify-center gap-4">
                    Chat Lanjutan <FaArrowRight />
                 </button>
              </div>
           </div>
        </div>
      </main>
    </>
  );
}
