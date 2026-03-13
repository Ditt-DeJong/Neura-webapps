'use client';
import { FaUserCircle, FaShieldAlt, FaRegQuestionCircle, FaSignOutAlt, FaChevronRight, FaHeart, FaWallet, FaTicketAlt } from 'react-icons/fa';

export default function ProfilPage() {
  const menuItems = [
    { icon: <FaShieldAlt />, label: "Keamanan Akun", color: "text-blue-500", bg: "bg-blue-50" },
    { icon: <FaHeart />, label: "Favorit Saya", color: "text-rose-500", bg: "bg-rose-50" },
    { icon: <FaRegQuestionCircle />, label: "Pusat Bantuan", color: "text-green-500", bg: "bg-green-50" },
  ];

  return (
    <main className="min-h-screen pb-40 pt-16 bg-white overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[450px] h-[350px] bg-linear-to-b from-primary/5 to-transparent -z-10"></div>
      
      <div className="px-8 max-w-[450px] mx-auto">
        {/* Profile Header */}
        <div className="flex flex-col items-center text-center mt-12 mb-16">
          <div className="relative mb-6">
            <div className="w-28 h-28 bg-white p-2 rounded-[40px] shadow-premium">
               <div className="w-full h-full bg-secondary rounded-[32px] flex items-center justify-center text-5xl text-primary overflow-hidden">
                  <FaUserCircle className="opacity-40" />
               </div>
            </div>
            <div className="absolute -bottom-1 -right-1 w-10 h-10 bg-primary text-white rounded-2xl flex items-center justify-center border-4 border-white shadow-lg text-xs">
               95%
            </div>
          </div>
          <h1 className="text-2xl font-black text-gray-900 tracking-tight mb-1">Budi Setiawan</h1>
          <p className="text-[10px] text-gray-400 font-black uppercase tracking-[0.3em]">Mahasiswa • Universitas Indonesia</p>
        </div>

        {/* Quick Stats/Wallet */}
        <div className="grid grid-cols-2 gap-4 mb-12">
           <div className="bg-gray-900 p-6 rounded-4xl text-white shadow-xl relative overflow-hidden group">
              <div className="absolute -right-4 -top-4 w-16 h-16 bg-white/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-1000"></div>
              <div className="relative z-10">
                 <FaWallet className="text-primary text-xl mb-4" />
                 <p className="text-[8px] text-gray-400 font-black uppercase tracking-widest mb-1">Saldo Neura</p>
                 <p className="text-lg font-black tracking-tight leading-none">Rp 125.000</p>
              </div>
           </div>
           <div className="bg-white p-6 rounded-4xl border border-gray-100 shadow-premium flex flex-col justify-between">
              <FaTicketAlt className="text-primary text-xl mb-4" />
              <div>
                 <p className="text-[8px] text-gray-400 font-black uppercase tracking-widest mb-1">Voucher Saya</p>
                 <p className="text-lg font-black tracking-tight leading-none text-gray-900">4 Promo</p>
              </div>
           </div>
        </div>

        {/* Settings List */}
        <div className="space-y-3 mb-12">
           <h2 className="text-[10px] font-black text-gray-300 uppercase tracking-[0.4em] mb-6 px-2">Pengaturan Akun</h2>
           {menuItems.map((item, i) => (
             <div key={i} className="flex items-center gap-5 p-5 bg-white rounded-3xl border border-gray-50 hover:bg-gray-50 hover:scale-[1.02] transition-all cursor-pointer group">
                <div className={`w-12 h-12 ${item.bg} ${item.color} rounded-2xl flex items-center justify-center text-lg shadow-sm group-hover:scale-110 transition-transform`}>
                   {item.icon}
                </div>
                <span className="flex-1 text-[13px] font-black text-gray-800 tracking-tight">{item.label}</span>
                <FaChevronRight className="text-gray-200 text-[10px]" />
             </div>
           ))}
        </div>

        {/* Logout Button */}
        <button className="w-full py-5 bg-white border-2 border-primary/10 text-primary rounded-3xl font-black text-[11px] uppercase tracking-[0.3em] flex items-center justify-center gap-3 hover:bg-rose-50 transition-all active:scale-95 shadow-sm mb-12">
           <FaSignOutAlt className="text-sm" /> Keluar Aplikasi
        </button>

        <p className="text-center text-[9px] text-gray-300 font-black uppercase tracking-[0.5em] pb-8">
           Neura v1.0.4-Alpha
        </p>
      </div>
    </main>
  );
}
