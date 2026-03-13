'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FaPlus } from 'react-icons/fa';

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
    <nav className={`sticky top-0 w-full z-50 transition-all duration-300 ${
      scrolled
        ? 'py-3 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100'
        : 'py-4 bg-white'
    }`}>
      <div className="px-5 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="bg-[#FF6B8B] text-white rounded-xl w-9 h-9 flex items-center justify-center shadow-sm group-hover:shadow-md transition-all">
            <FaPlus className="text-sm" />
          </div>
          <span className="text-xl font-black tracking-tighter text-[#FF6B8B]">
            Neura
          </span>
        </Link>

        {/* Right Actions */}
        <div className="flex items-center gap-2">
          <Link
            href="/login"
            className="px-4 py-2 bg-[#FF6B8B] text-white rounded-xl shadow-sm text-xs font-black hover:bg-[#ff5177] active:scale-95 transition-all whitespace-nowrap"
          >
            Masuk
          </Link>
          <button className="w-9 h-9 flex items-center justify-center bg-gray-50 text-gray-500 rounded-xl border border-gray-100 active:scale-95 transition-all">
            <div className="flex flex-col gap-[5px] items-end">
              <div className="w-4 h-0.5 bg-gray-400 rounded-full"></div>
              <div className="w-2.5 h-0.5 bg-gray-400 rounded-full"></div>
            </div>
          </button>
        </div>
      </div>
    </nav>
  );
}