'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { FaHome, FaHistory, FaCommentMedical, FaUser, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { label: 'Beranda', icon: <FaHome />, path: '/' },
  { label: 'Aktivitas', icon: <FaHistory />, path: '/aktivitas' },
  { label: 'Konsultasi', icon: <FaCommentMedical />, path: '/chat' },
  { label: 'Profil', icon: <FaUser />, path: '/profil' },
];

export default function BottomNav() {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(true);

  // Daftar path yang tidak membutuhkan BottomNav
  const hideOnPaths = ['/chat/room', '/janji/booking', '/lab/booking'];
  const shouldHide = hideOnPaths.some(p => pathname.startsWith(p));

  if (shouldHide) return null;

  return (
    <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[450px] z-50 px-6 pb-6 pointer-events-none">
      {/* Toggle Button when Hidden */}
      <AnimatePresence>
        {!isVisible && (
          <motion.button
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            onClick={() => setIsVisible(true)}
            className="absolute bottom-10 right-10 w-12 h-12 bg-gray-900 text-white rounded-2xl shadow-2xl flex items-center justify-center pointer-events-auto active:scale-95 transition-transform"
          >
            <FaChevronUp />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Main Bottom Nav */}
      <AnimatePresence>
        {isVisible && (
          <motion.div 
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: 'spring', damping: 20, stiffness: 200 }}
            className="bg-white/90 backdrop-blur-2xl border border-gray-100 shadow-[0_-8px_40px_-10px_rgba(0,0,0,0.08)] rounded-[32px] pl-4 pr-2 py-2 flex items-center justify-between pointer-events-auto relative overflow-hidden"
          >
            {/* Scrollable Container for Links */}
            <div className="flex-1 flex items-center justify-between overflow-x-auto scroll-smooth gap-1 pr-1">
              {navItems.map((item) => {
                const isActive = pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    href={item.path}
                    className={`relative flex flex-col items-center gap-1.5 px-3 py-2 rounded-2xl flex-shrink-0 flex-1 min-w-[78px] transition-all duration-500 ${
                      isActive ? 'text-primary' : 'text-gray-400 hover:text-gray-600'
                    }`}
                  >
                    <div className={`text-lg z-10 transition-transform duration-500 ${isActive ? 'scale-110' : ''}`}>
                      {item.icon}
                    </div>
                    <span className="text-[9px] font-bold uppercase tracking-wider z-10 whitespace-nowrap">
                      {item.label}
                    </span>
                    
                    {isActive && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 bg-primary/5 rounded-2xl -z-0"
                        transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </Link>
                );
              })}
            </div>
            
            {/* Separator */}
            <div className="w-[1px] h-6 bg-gray-100 mx-2 flex-shrink-0" />

            {/* Close Button */}
            <div className="flex items-center flex-shrink-0 pr-1">
              <button 
                onClick={() => setIsVisible(false)}
                className="w-8 h-8 flex items-center justify-center text-gray-300 hover:text-primary hover:bg-primary/5 rounded-full transition-all active:scale-90"
                title="Sembunyikan Navigasi"
              >
                <FaChevronDown className="text-xs" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
