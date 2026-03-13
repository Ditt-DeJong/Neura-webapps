'use client';
import { useState } from 'react';
import Link from 'next/link';
import { FaPlus, FaPhoneAlt, FaChevronLeft, FaUserGraduate, FaUserMd, FaArrowRight } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

type Step = 'role' | 'phone' | 'otp';
type Role = 'siswa' | 'konselor' | null;

export default function Login() {
  const [step, setStep] = useState<Step>('role');
  const [role, setRole] = useState<Role>(null);
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState(['', '', '', '']);

  const handleRoleSelect = (selectedRole: Role) => {
    setRole(selectedRole);
    setStep('phone');
  };

  const handleBack = () => {
    if (step === 'phone') setStep('role');
    if (step === 'otp') setStep('phone');
  };

  const handleOtpChange = (index: number, value: string) => {
    if (value.length <= 1 && /^\d*$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      
      // Auto focus next input
      if (value && index < 3) {
        const nextInput = document.getElementById(`otp-${index + 1}`);
        nextInput?.focus();
      }
    }
  };

  return (
    <div className="min-h-screen bg-white md:bg-gray-50 flex items-center justify-center relative overflow-hidden font-sans">
      {/* Aesthetic Background for Desktop */}
      <div className="hidden md:block absolute top-0 right-0 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2"></div>
      <div className="hidden md:block absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-100 rounded-full blur-[100px] -z-10 -translate-x-1/2 translate-y-1/2"></div>

      <main className="w-full max-w-[450px] min-h-screen md:min-h-0 md:h-[800px] bg-white md:rounded-[48px] md:shadow-2xl overflow-hidden flex flex-col relative border border-gray-100/50">
        
        {/* Header Section */}
        <div className="px-8 pt-16 pb-8">
          <div className="flex justify-between items-center mb-12">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="bg-primary text-white p-2 rounded-xl shadow-primary-sm group-hover:rotate-12 transition-transform">
                <FaPlus className="text-sm" />
              </div>
              <span className="text-xl font-black text-gray-900 tracking-tighter">Neura</span>
            </Link>
            {step !== 'role' && (
              <button onClick={handleBack} className="text-gray-400 hover:text-primary transition-colors flex items-center gap-2 font-black text-[10px] uppercase tracking-widest">
                <FaChevronLeft className="text-[8px]" /> Kembali
              </button>
            )}
          </div>

          <AnimatePresence mode="wait">
            {step === 'role' && (
              <motion.div 
                key="role-header"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="space-y-3"
              >
                <span className="text-primary text-[10px] font-black uppercase tracking-[0.4em]">Akses Neura</span>
                <h1 className="text-3xl font-black text-gray-900 leading-tight">Pilih Peranmu Sekarang</h1>
                <p className="text-gray-500 text-[13px] font-medium leading-relaxed">
                  Tentukan profilmu untuk mendapatkan layanan yang personal dan tepat sasaran.
                </p>
              </motion.div>
            )}

            {step === 'phone' && (
              <motion.div 
                key="phone-header"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="space-y-3"
              >
                <span className="text-primary text-[10px] font-black uppercase tracking-[0.4em]">Verifikasi</span>
                <h1 className="text-3xl font-black text-gray-900 leading-tight">Nomor Telepon</h1>
                <p className="text-gray-500 text-[13px] font-medium leading-relaxed">
                  Gunakan nomor WhatsApp aktif untuk verifikasi masuk ke sistem Neura.
                </p>
              </motion.div>
            )}

            {step === 'otp' && (
              <motion.div 
                key="otp-header"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="space-y-3"
              >
                <span className="text-primary text-[10px] font-black uppercase tracking-[0.4em]">Keamanan</span>
                <h1 className="text-3xl font-black text-gray-900 leading-tight">Masukkan OTP</h1>
                <p className="text-gray-500 text-[13px] font-medium leading-relaxed">
                  Kami telah mengirimkan 4 digit kode OTP ke nomor <span className="text-gray-900 font-bold">{phone}</span>.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Form Content */}
        <div className="px-8 flex-1">
          <AnimatePresence mode="wait">
            {step === 'role' && (
              <motion.div 
                key="role-step"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-5 py-6"
              >
                <button 
                  onClick={() => handleRoleSelect('siswa')}
                  className="w-full group bg-white border border-gray-100 rounded-4xl p-8 flex items-center gap-6 text-left hover:shadow-premium hover:-translate-y-1 transition-all active:scale-[0.98]"
                >
                  <div className="w-16 h-16 bg-blue-50 text-blue-500 rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">
                    <FaUserGraduate />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-black text-gray-900">Mahasiswa / Siswa</h3>
                    <p className="text-[11px] text-gray-400 font-bold uppercase tracking-widest mt-1">Gunakan layanan kesehatan</p>
                  </div>
                  <FaArrowRight className="text-gray-200 group-hover:text-primary transition-colors" />
                </button>

                <button 
                  onClick={() => handleRoleSelect('konselor')}
                  className="w-full group bg-white border border-gray-100 rounded-4xl p-8 flex items-center gap-6 text-left hover:shadow-premium hover:-translate-y-1 transition-all active:scale-[0.98]"
                >
                  <div className="w-16 h-16 bg-rose-50 text-primary rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">
                    <FaUserMd />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-black text-gray-900">Konselor / Dokter</h3>
                    <p className="text-[11px] text-gray-400 font-bold uppercase tracking-widest mt-1">Dampingi kesehatan pelajar</p>
                  </div>
                  <FaArrowRight className="text-gray-200 group-hover:text-primary transition-colors" />
                </button>
              </motion.div>
            )}

            {step === 'phone' && (
              <motion.div 
                key="phone-step"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="py-6 flex flex-col gap-8"
              >
                <div className="relative group">
                  <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none">
                    <FaPhoneAlt className="text-gray-400 group-focus-within:text-primary transition-colors text-sm" />
                  </div>
                  <div className="absolute inset-y-0 left-14 flex items-center pointer-events-none">
                    <span className="text-[14px] font-black text-gray-900 border-r border-gray-100 pr-3 mr-1">+62</span>
                  </div>
                  <input 
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="812-3456-7890"
                    className="w-full bg-gray-50/50 border border-gray-100 rounded-3xl py-6 pl-28 pr-6 text-[15px] font-black tracking-widest focus:ring-4 focus:ring-primary/10 focus:border-primary focus:bg-white outline-none transition-all shadow-inner"
                  />
                </div>

                <button 
                  onClick={() => setStep('otp')}
                  disabled={phone.length < 8}
                  className="w-full py-6 bg-gray-900 text-white rounded-3xl font-black text-[12px] uppercase tracking-[0.2em] shadow-xl hover:bg-black transition-all active:scale-95 disabled:opacity-50 disabled:grayscale disabled:pointer-events-none"
                >
                  Minta Kode OTP
                </button>

                <p className="text-center text-[10px] text-gray-400 font-bold uppercase tracking-widest leading-relaxed">
                  Dengan menekan tombol di atas, Anda menyetujui <br/>
                  <span className="text-primary hover:underline cursor-pointer">Syarat & Ketentuan</span> Neura.
                </p>
              </motion.div>
            )}

            {step === 'otp' && (
              <motion.div 
                key="otp-step"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="py-6 flex flex-col gap-10"
              >
                <div className="flex justify-between gap-4">
                  {otp.map((digit, idx) => (
                    <input 
                      key={idx}
                      id={`otp-${idx}`}
                      type="text"
                      inputMode="numeric"
                      value={digit}
                      onChange={(e) => handleOtpChange(idx, e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === 'Backspace' && !digit && idx > 0) {
                          document.getElementById(`otp-${idx - 1}`)?.focus();
                        }
                      }}
                      className="w-full h-20 text-center text-3xl font-black text-gray-900 bg-gray-50 border border-gray-100 rounded-3xl focus:ring-4 focus:ring-primary/10 focus:border-primary focus:bg-white outline-none transition-all shadow-inner"
                    />
                  ))}
                </div>

                <div className="space-y-6">
                  <button 
                    onClick={() => window.location.href = '/'}
                    disabled={otp.some(d => !d)}
                    className="w-full py-6 bg-primary text-white rounded-3xl font-black text-[12px] uppercase tracking-[0.2em] shadow-primary-sm hover:opacity-90 transition-all active:scale-95 disabled:opacity-50 disabled:grayscale disabled:pointer-events-none"
                  >
                    Verifikasi Akun
                  </button>
                  
                  <div className="text-center">
                    <p className="text-[11px] text-gray-400 font-bold uppercase tracking-widest">
                      Tidak menerima kode? <br/>
                      <span className="text-primary hover:underline cursor-pointer mt-2 inline-block">Kirim Ulang (45s)</span>
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Footer Area */}
        <div className="px-8 pb-12 pt-8 text-center mt-auto">
          <p className="text-[9px] text-gray-300 font-black uppercase tracking-[0.4em] leading-relaxed">
            &copy; 2026 Neura Indonesia. <br/>Aman • Rahasia • Terpercaya
          </p>
        </div>
      </main>
    </div>
  );
}
