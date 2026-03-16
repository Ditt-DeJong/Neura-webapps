'use client';
import { FaChevronLeft, FaPhoneAlt, FaVideo, FaInfoCircle, FaPaperPlane, FaPlus, FaSmile, FaMicrophone, FaUserMd, FaEllipsisV } from 'react-icons/fa';
import { useState, useEffect, useRef } from 'react';
import { useParams, useRouter, usePathname } from 'next/navigation';

export default function ChatRoom() {
  const params = useParams();
  const router = useRouter();
  const [messages, setMessages] = useState([
    { id: 1, text: "Halo! Saya dr. Sarah. Ada yang bisa saya bantu hari ini?", sender: 'doctor', time: '10:00' },
    { id: 2, text: "Halo dok, saya merasa sering cemas kalau mau ujian. Susah tidur sudah 3 hari.", sender: 'user', time: '10:02' },
    { id: 3, text: "Saya mengerti. Apakah ini pertama kalinya Anda merasakan kecemasan yang mengganggu tidur?", sender: 'doctor', time: '10:03' },
  ]);
  const [inputText, setInputText] = useState('');
  const messagesEndRef = useRef<null | HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (!inputText.trim()) return;
    const newMessage = {
      id: messages.length + 1,
      text: inputText,
      sender: 'user',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    setMessages([...messages, newMessage]);
    setInputText('');
    
    // Simple auto-reply mockup
    setTimeout(() => {
      const reply = {
          id: messages.length + 2,
          text: "Terima kasih atas informasinya. Saya akan mencoba memberikan beberapa saran untuk meredakan kecemasan Anda.",
          sender: 'doctor',
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, reply]);
    }, 2000);
  };

  // Mock doc data
  const doctor = {
    name: "dr. Sarah Wilson",
    status: "Sedang Online",
    avatar: <FaUserMd />
  };

  return (
    <main className="h-dvh w-full flex flex-col bg-zinc-50 overflow-hidden overscroll-none">
      <div className="flex-1 flex flex-col max-w-[450px] mx-auto w-full bg-white shadow-2xl relative overflow-hidden">
        
        {/* Chat Header - Dedicated for Chat Room */}
        <div className="px-6 py-5 bg-white border-b border-gray-100 flex items-center justify-between z-30 shadow-xs shrink-0">
           <div className="flex items-center gap-4">
              <button 
                onClick={() => router.back()} 
                className="w-10 h-10 rounded-xl bg-zinc-50 flex items-center justify-center text-gray-400 hover:text-primary transition-all active:scale-95"
              >
                 <FaChevronLeft className="text-sm" />
              </button>
              <div className="relative">
                 <div className="w-11 h-11 bg-secondary rounded-2xl flex items-center justify-center text-primary text-xl shadow-inner border border-primary/10">
                    {doctor.avatar}
                 </div>
                 <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-green-500 rounded-full border-2 border-white shadow-sm"></div>
              </div>
              <div>
                 <h2 className="text-[14px] font-black text-gray-900 tracking-tight leading-tight">{doctor.name}</h2>
                 <p className="text-[9px] text-green-500 font-black uppercase tracking-widest mt-0.5 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span> {doctor.status}
                 </p>
              </div>
           </div>
           
           <div className="flex gap-2">
              <button className="w-10 h-10 rounded-xl bg-zinc-50 text-gray-400 flex items-center justify-center hover:bg-primary/5 hover:text-primary transition-all">
                 <FaPhoneAlt className="text-sm" />
              </button>
              <button className="w-10 h-10 rounded-xl bg-zinc-50 text-gray-400 flex items-center justify-center hover:bg-primary/5 hover:text-primary transition-all">
                 <FaEllipsisV className="text-sm" />
              </button>
           </div>
        </div>

        {/* Message Area - Independent Scrollable Container */}
        <div className="flex-1 overflow-y-auto p-6 space-y-8 bg-zinc-50/30 overscroll-contain [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
           <div className="text-center mb-4">
              <span className="bg-white px-4 py-1.5 rounded-full text-[9px] font-black text-gray-300 uppercase tracking-widest border border-gray-50 shadow-xs">Hari Ini</span>
           </div>

           {messages.map((msg) => (
             <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} animate-in fade-in slide-in-from-bottom-2 duration-500`}>
                <div className={`max-w-[85%] group relative ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
                  <div className={`p-4.5 px-6 rounded-3xl shadow-sm relative transition-all hover:shadow-md ${
                    msg.sender === 'user' 
                      ? 'bg-linear-to-tr from-primary to-[#ff5177] text-white rounded-tr-none' 
                      : 'bg-white text-gray-800 rounded-tl-none border border-gray-100'
                  }`}>
                     <p className="text-[13px] font-medium leading-relaxed tracking-tight">{msg.text}</p>
                  </div>
                  <p className={`text-[8px] mt-2 font-black uppercase tracking-widest text-gray-300 group-hover:opacity-100 transition-opacity`}>
                    {msg.time}
                  </p>
                </div>
             </div>
           ))}
           <div ref={messagesEndRef} className="h-4" />
        </div>

        {/* Footer Area - Fixed with Z-index */}
        <div className="flex flex-col shrink-0 z-30 bg-white">
           {/* Sesi Info Bar */}
           <div className="px-6 pb-2 bg-linear-to-t from-white to-transparent pt-4 relative z-10">
              <div className="bg-gray-900 border border-white/10 text-white p-4 rounded-3xl flex items-center justify-between shadow-2xl backdrop-blur-3xl ring-1 ring-white/5">
                 <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary border border-primary/20">
                       <FaInfoCircle className="text-xs" />
                    </div>
                    <div>
                       <p className="text-[10px] font-black uppercase tracking-widest text-zinc-100 leading-none">Sesi Aktif</p>
                       <p className="text-[9px] font-medium text-zinc-400 mt-1">Berakhir dalam 14:20</p>
                    </div>
                 </div>
                 <button className="text-[9px] bg-white/10 hover:bg-primary text-white font-black px-4 py-2 rounded-xl uppercase tracking-widest transition-all">Perpanjang</button>
              </div>
           </div>

           {/* Input Area */}
           <div className="p-6 bg-white border-t border-gray-100 pb-10">
              <div className="flex items-center gap-3">
                 <button className="w-12 h-12 bg-zinc-50 text-gray-400 rounded-2xl flex items-center justify-center text-lg hover:bg-primary/10 hover:text-primary transition-all active:scale-95 border border-transparent hover:border-primary/20">
                    <FaPlus />
                 </button>
                 <div className="flex-1 relative group">
                    <input 
                      type="text" 
                      placeholder="Ketik pesan..." 
                      value={inputText}
                      onChange={(e) => setInputText(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                      className="w-full bg-zinc-50 border border-gray-100 rounded-3xl py-4.5 pl-6 pr-24 text-[13px] font-medium focus:bg-white focus:border-primary/30 outline-none transition-all shadow-inner"
                    />
                    <div className="absolute right-4 inset-y-0 flex items-center gap-3">
                       <button className="text-gray-300 hover:text-primary transition-colors">
                          <FaSmile className="text-lg" />
                       </button>
                       <button className="text-gray-300 hover:text-primary transition-colors">
                          <FaMicrophone className="text-lg" />
                       </button>
                    </div>
                 </div>
                 <button 
                   onClick={handleSend}
                   className="w-12 h-12 bg-gray-900 text-white rounded-2xl flex items-center justify-center shadow-xl hover:bg-primary transition-all active:scale-90 group shrink-0"
                 >
                    <FaPaperPlane className="text-sm group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                 </button>
              </div>
           </div>
        </div>

      </div>
    </main>
  );
}


