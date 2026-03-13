'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FaPlus, FaChevronDown } from 'react-icons/fa';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`sticky top-0 w-full max-w-[450px] z-50 transition-all duration-300 ${
      scrolled 
        ? 'py-3 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100' 
        : 'py-4 bg-white'
    }`}>
      <div className="px-6 flex items-center justify-between">
        {/* Left Section: Logo */}
        <Link href="/" className="flex items-center gap-2.5 group transition-transform hover:scale-[1.02]">
          <div className="bg-[#FF6B8B] text-white rounded-xl w-9 h-9 flex items-center justify-center text-xs shadow-sm group-hover:shadow-md transition-all">
            <FaPlus className="text-sm" />
          </div>
          <span className="text-2xl font-black tracking-tighter text-[#FF6B8B]">
            Neura
          </span>
        </Link>

        {/* Right Section: Auth + Menu Toggle */}
        <div className="flex items-center gap-2">
          <Link 
            href="/login" 
            className="flex-1 min-w-[80px] text-center py-2.5 bg-[#FF6B8B] text-white rounded-xl shadow-lg shadow-[#FF6B8B]/20 text-xs font-black active:scale-95 transition-all hover:bg-[#ff5177] whitespace-nowrap"
          >
            Masuk
          </Link>
          <button className="shrink-0 w-10 h-10 flex items-center justify-center bg-gray-50 text-gray-400 rounded-xl border border-gray-100 active:scale-95 transition-all">
             <div className="flex flex-col gap-1 items-end">
                <div className="w-5 h-0.5 bg-gray-400 rounded-full"></div>
                <div className="w-3 h-0.5 bg-gray-400 rounded-full"></div>
             </div>
          </button>
        </div>
      </div>
    </nav>
  );
}
