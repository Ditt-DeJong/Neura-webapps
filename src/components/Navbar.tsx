'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FaPlus, FaBell } from 'react-icons/fa';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-[450px] z-50 transition-all duration-500 ${
      scrolled
        ? 'py-4 bg-white/80 backdrop-blur-xl shadow-[0_2px_20px_-10px_rgba(0,0,0,0.05)] border-b border-gray-100/50'
        : 'py-6 bg-transparent'
    }`}>
      <div className="px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="bg-primary text-white rounded-xl w-10 h-10 flex items-center justify-center shadow-primary-sm group-hover:scale-105 transition-transform duration-300">
            <FaPlus className="text-sm" />
          </div>
          <span className="text-xl font-black tracking-tighter text-primary">
            Neura
          </span>
        </Link>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          <button className="w-10 h-10 flex items-center justify-center bg-white/50 backdrop-blur-md text-gray-400 rounded-xl border border-gray-100/50 hover:border-primary/20 hover:text-primary transition-all relative">
            <FaBell className="text-lg" />
            <div className="absolute top-2.5 right-2.5 w-2 h-2 bg-primary rounded-full border-2 border-white"></div>
          </button>
          <Link
            href="/login"
            className="px-5 py-2.5 bg-primary text-white rounded-xl shadow-primary-sm text-[11px] font-black uppercase tracking-widest hover:bg-primary-dark active:scale-95 transition-all whitespace-nowrap"
          >
            Masuk
          </Link>
        </div>
      </div>
    </nav>
  );
}