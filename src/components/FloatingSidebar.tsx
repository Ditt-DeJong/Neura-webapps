'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaHome, FaHistory, FaCommentMedical, FaUser, FaChevronRight, FaBars } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { label: 'Beranda', icon: <FaHome />, path: '/' },
  { label: 'Aktivitas', icon: <FaHistory />, path: '/aktivitas' },
  { label: 'Konsultasi', icon: <FaCommentMedical />, path: '/chat' },
  { label: 'Profil', icon: <FaUser />, path: '/profil' },
];

export default function FloatingSidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile for conditional behavior
  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      // Auto-open on desktop, but keep state on mobile
      if (!mobile) setIsOpen(true);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="fixed top-1/2 -translate-y-1/2 z-50 flex flex-col items-end gap-4
      /* Desktop Position (Outside App Shell) */
      lg:left-[calc(50%+245px)] 
      md:left-[calc(50%+235px)] 
      /* Mobile Position (Inner Edge) */
      left-auto right-3 md:right-auto 
    ">
      {/* Mobile Toggle Button */}
      {isMobile && (
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-10 h-10 bg-gray-900/90 backdrop-blur-3xl border border-white/10 rounded-full shadow-2xl flex items-center justify-center text-white text-sm active:scale-90 transition-all"
        >
          {isOpen ? <FaChevronRight /> : <FaBars />}
        </button>
      )}

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 50, opacity: 0 }}
            className="bg-gray-900/90 backdrop-blur-3xl border border-white/10 shadow-3xl rounded-[2.5rem] p-2 flex flex-col gap-3 items-center ring-1 ring-white/5"
          >
            {navItems.map((item) => {
              const isActive = pathname === item.path;
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`group relative w-12 h-12 flex items-center justify-center rounded-full transition-all duration-500 ${
                    isActive ? 'bg-primary text-white shadow-[0_8px_20px_-5px_rgba(255,46,108,0.4)]' : 'bg-transparent text-gray-400 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  <div className={`text-lg relative z-10 transition-transform duration-500 group-hover:scale-110 ${isActive ? 'scale-110' : ''}`}>
                    {item.icon}
                  </div>
                  
                  {/* Desktop Tooltip Label */}
                  <div className="absolute left-full ml-5 px-4 py-2 bg-gray-900 text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-xl opacity-0 pointer-events-none group-hover:opacity-100 transition-all translate-x-[-15px] group-hover:translate-x-0 shadow-2xl whitespace-nowrap border border-white/5 hidden md:block">
                    {item.label}
                    <div className="absolute top-1/2 -translate-y-1/2 -left-1.5 w-3 h-3 bg-gray-900 rotate-45 rounded-sm border-l border-b border-white/5"></div>
                  </div>

                  {isActive && (
                    <motion.div
                      layoutId="sidebarActiveGlow"
                      className="absolute inset-0 bg-primary/20 blur-xl rounded-full z-0"
                    />
                  )}
                </Link>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
