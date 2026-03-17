'use client';
import { FaChevronLeft, FaBrain, FaInfoCircle, FaCheckCircle, FaChevronRight, FaPlay, FaRegChartBar, FaShieldAlt, FaWeight } from 'react-icons/fa';
import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';

export default function ScreeningDetail() {
  const params = useParams();
  const router = useRouter();
  const [step, setStep] = useState(0); // 0: intro, 1: test, 2: result
  
  // BMI States
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmiResult, setBmiResult] = useState<number | null>(null);
  const [bmiCategory, setBmiCategory] = useState('');

  const questions = [
    { text: "Saya merasa sulit untuk beristirahat atau bersantai.", type: "Stress" },
    { text: "Saya merasa gemetar (misalnya: tangan terasa tremor).", type: "Anxiety" },
    { text: "Saya merasa tidak ada hal baik yang bisa diharapkan di masa depan.", type: "Depression" },
    { text: "Saya merasa mudah tersinggung atau marah.", type: "Stress" },
  ];

  const calculateBMI = () => {
    const w = parseFloat(weight);
    const h = parseFloat(height) / 100;
    if (w > 0 && h > 0) {
      const bmi = w / (h * h);
      setBmiResult(bmi);
      if (bmi < 18.5) setBmiCategory('Berat Badan Kurang');
      else if (bmi < 25) setBmiCategory('Normal (Ideal)');
      else if (bmi < 30) setBmiCategory('Kelebihan Berat Badan');
      else setBmiCategory('Obesitas');
      setStep(2);
    }
  };

  const isBMI = params.id === 'bmi';

  return (
    <>
      <Navbar />
      <main className="min-h-screen pb-40 pt-32 bg-white">
        {/* Back Button */}
        <div className="px-6 max-w-[450px] mx-auto mb-8 flex justify-between items-center">
          <button 
            onClick={() => router.back()} 
            className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center text-gray-900 border border-gray-100 shadow-sm active:scale-90 transition-all font-black text-xs"
          >
            <FaChevronLeft />
          </button>
          
          {step === 1 && !isBMI && (
            <div className="flex gap-1.5">
               {[0, 1, 2, 3].map(i => (
                 <div key={i} className={`h-1.5 rounded-full transition-all duration-500 ${i <= step ? 'w-8 bg-primary' : 'w-2 bg-gray-100'}`}></div>
               ))}
            </div>
          )}
        </div>

        <div className="max-w-[450px] mx-auto">
           {step === 0 && (
             <div className="px-8 animate-in fade-in slide-in-from-bottom-5 duration-700">
                <span className="text-[10px] text-primary font-black uppercase tracking-[0.4em] mb-4 block">Medical Tool</span>
                <h1 className="text-3xl font-black text-gray-900 leading-[1.2] tracking-tight mb-8">
                  {isBMI ? <>Kalkulator Indeks <br /><span className="text-primary">Massa Tubuh (BMI)</span></> : <>Skrining Mental <br /><span className="text-primary">DASS-21</span></>}
                </h1>
                
                <div className="bg-zinc-50 rounded-5xl p-8 border border-gray-100 mb-10">
                   <div className="flex gap-4 items-start mb-8">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                         <FaInfoCircle />
                      </div>
                      <p className="text-[13px] text-gray-600 font-medium leading-relaxed">
                         {isBMI 
                           ? "BMI adalah cara termudah untuk mengetahui apakah berat badan Anda berada dalam kategori sehat atau berisiko."
                           : "Tes ini membantu Anda mengidentifikasi tingkat stres, kecemasan, dan depresi dalam 7 hari terakhir."}
                      </p>
                   </div>
                   
                   <div className="space-y-4">
                      <div className="flex items-center gap-4 py-2">
                         <FaCheckCircle className="text-emerald-500 text-sm" />
                         <span className="text-[11px] font-black text-gray-900 uppercase tracking-widest">{isBMI ? "Akurat & Cepat" : "21 Pertanyaan Singkat"}</span>
                      </div>
                      <div className="flex items-center gap-4 py-2">
                         <FaShieldAlt className="text-blue-500 text-sm" />
                         <span className="text-[11px] font-black text-gray-900 uppercase tracking-widest">Data 100% Anonim</span>
                      </div>
                   </div>
                </div>

                <div className="space-y-4 mb-20 text-center">
                   <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-4">Waktu estimasi: {isBMI ? "30 Detik" : "3 Menit"}</p>
                   <button 
                     onClick={() => setStep(1)}
                     className="w-full h-16 bg-gray-900 text-white rounded-3xl text-[11px] font-black uppercase tracking-[0.2em] shadow-2xl hover:bg-primary transition-all active:scale-95 flex items-center justify-center gap-4"
                   >
                     Mulai {isBMI ? "Hitung" : "Skrining"} <FaPlay className="text-xs" />
                   </button>
                </div>
             </div>
           )}

           {step === 1 && (
              <div className="px-8 animate-in fade-in slide-in-from-right-5 duration-500">
                 {isBMI ? (
                   <div className="space-y-10">
                      <div>
                        <span className="text-[10px] text-primary font-black uppercase tracking-widest mb-4 block">Input Data</span>
                        <h2 className="text-2xl font-black text-gray-900 leading-tight">Masukkan berat dan tinggi badan Anda.</h2>
                      </div>

                      <div className="space-y-6">
                        <div className="relative group">
                          <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-4 mb-2 block">Berat Badan (kg)</label>
                          <input 
                            type="number" 
                            placeholder="Contoh: 65" 
                            value={weight}
                            onChange={(e) => setWeight(e.target.value)}
                            className="w-full bg-zinc-50 border border-gray-100 rounded-3xl py-5 px-8 text-lg font-black focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all"
                          />
                        </div>
                        <div className="relative group">
                          <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-4 mb-2 block">Tinggi Badan (cm)</label>
                          <input 
                            type="number" 
                            placeholder="Contoh: 170" 
                            value={height}
                            onChange={(e) => setHeight(e.target.value)}
                            className="w-full bg-zinc-50 border border-gray-100 rounded-3xl py-5 px-8 text-lg font-black focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all"
                          />
                        </div>
                      </div>

                      <button 
                        onClick={calculateBMI}
                        disabled={!weight || !height}
                        className="w-full h-16 bg-gray-900 text-white rounded-3xl text-[11px] font-black uppercase tracking-[0.2em] shadow-2xl hover:bg-primary disabled:opacity-30 transition-all active:scale-95"
                      >
                        Hitung BMI Sekarang
                      </button>
                   </div>
                 ) : (
                   <>
                      <div className="mb-12">
                        <span className="text-[10px] text-primary font-black uppercase tracking-widest mb-4 block">Pertanyaan 1/21</span>
                        <h2 className="text-2xl font-black text-gray-900 leading-tight">
                          {questions[0].text}
                        </h2>
                      </div>

                      <div className="space-y-4">
                         {[
                           { label: "Tidak Pernah", val: 0 },
                           { label: "Kadang-kadang", val: 1 },
                           { label: "Sering", val: 2 },
                           { label: "Sangat Sering", val: 3 },
                         ].map((opt, i) => (
                           <button 
                             key={i}
                             onClick={() => setStep(2)}
                             className="w-full p-6 text-left rounded-3xl border-2 border-gray-50 bg-gray-50/50 hover:border-primary hover:bg-white transition-all group active:scale-95"
                           >
                              <div className="flex justify-between items-center">
                                 <span className="text-[14px] font-black text-gray-600 group-hover:text-gray-900">{opt.label}</span>
                                 <div className="w-6 h-6 rounded-full border-2 border-gray-200 flex items-center justify-center group-hover:border-primary transition-colors">
                                    <div className="w-2 h-2 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                 </div>
                              </div>
                           </button>
                         ))}
                      </div>
                   </>
                 )}
              </div>
           )}

           {step === 2 && (
             <div className="px-8 animate-in zoom-in-95 duration-700">
                <div className="text-center mb-12">
                   <div className={`w-24 h-24 ${isBMI ? 'bg-blue-50 text-blue-500' : 'bg-emerald-50 text-emerald-500'} rounded-full flex items-center justify-center text-5xl mx-auto mb-6 shadow-inner border ${isBMI ? 'border-blue-100' : 'border-emerald-100'}`}>
                      {isBMI ? <FaWeight /> : <FaRegChartBar />}
                   </div>
                   <h2 className="text-2xl font-black text-gray-900 mb-2">Hasil {isBMI ? 'BMI' : 'Skrining'} Kamu</h2>
                   <p className="text-[11px] text-gray-400 font-bold uppercase tracking-widest">
                     {isBMI ? `Skor BMI: ${bmiResult?.toFixed(1)}` : 'Terdeteksi: Normal'}
                   </p>
                </div>

                <div className="grid grid-cols-1 gap-6 mb-12">
                   {isBMI ? (
                     <div className="bg-gray-50 rounded-4xl p-8 border border-gray-100 text-center">
                        <span className="text-[10px] text-primary font-black uppercase tracking-widest mb-2 block">Kategori</span>
                        <h3 className="text-2xl font-black text-gray-900 mb-4">{bmiCategory}</h3>
                        <p className="text-[12px] text-gray-500 font-medium leading-relaxed">
                          {bmiCategory === 'Normal (Ideal)' 
                            ? "Wah, keren! Pertahankan pola makan dan aktivitas fisikmu ya." 
                            : "Jangan berkecil hati. Konsultasikan dengan ahli gizi kami untuk mencapai berat badan ideal."}
                        </p>
                     </div>
                   ) : (
                     [
                       { label: "Depresi", score: "Ringan", pct: "30%", color: "bg-blue-500" },
                       { label: "Kecemasan", score: "Normal", pct: "15%", color: "bg-emerald-500" },
                       { label: "Stres", score: "Normal", pct: "22%", color: "bg-emerald-500" },
                     ].map((res, i) => (
                       <div key={i} className="bg-gray-50 rounded-4xl p-6 border border-gray-100">
                          <div className="flex justify-between items-center mb-4">
                             <span className="text-[12px] font-black text-gray-900">{res.label}</span>
                             <span className="text-[10px] font-black uppercase tracking-widest text-primary">{res.score}</span>
                          </div>
                          <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                             <div className={`h-full ${res.color} rounded-full`} style={{ width: res.pct }}></div>
                          </div>
                       </div>
                     ))
                   )}
                </div>

                <div className="bg-gray-900 p-8 rounded-[2.5rem] text-white flex items-center justify-between shadow-2xl group">
                   <div className="flex-1">
                      <h4 className="text-[14px] font-black mb-1">Konsultasi Lanjut?</h4>
                      <p className="text-[10px] text-gray-400">{isBMI ? 'Dapatkan meal plan dari nutrisionis.' : 'Hubungi psikolog untuk diskusi hasil ini.'}</p>
                   </div>
                   <button 
                     onClick={() => router.push(isBMI ? '/gizi' : '/chat')}
                     className="w-12 h-12 bg-primary text-white rounded-2xl flex items-center justify-center text-lg shadow-xl active:scale-90 transition-all"
                   >
                      <FaChevronRight />
                   </button>
                </div>

                <button 
                  onClick={() => {
                    setStep(0);
                    setWeight('');
                    setHeight('');
                  }}
                  className="w-full mt-8 py-4 text-[10px] font-black text-gray-400 uppercase tracking-widest hover:text-primary transition-colors"
                >
                  Ulangi {isBMI ? 'Hitung' : 'Skrining'}
                </button>
             </div>
           )}
        </div>
      </main>
    </>
  );
}
