'use client';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlus, FaBolt, FaLock, FaStethoscope, FaRunning, FaBrain, FaStar, FaRocket } from 'react-icons/fa';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
}

interface Ripple {
  id: number;
  x: number;
  y: number;
}

interface Stage {
  min: number;
  max: number;
  text: string;
  icon: React.ReactNode;
}

const STAGES: Stage[] = [
  { min: 0, max: 20, text: 'Mengamankan koneksi terenkripsi...', icon: <FaLock className="text-xs text-primary" /> },
  { min: 21, max: 45, text: 'Menghubungkan jaringan medis & psikolog...', icon: <FaStethoscope className="text-xs text-primary" /> },
  { min: 46, max: 70, text: 'Menyinkronkan data gizi & kebugaran...', icon: <FaRunning className="text-xs text-primary" /> },
  { min: 71, max: 90, text: 'Mengaktifkan asisten AI Neura...', icon: <FaBrain className="text-xs text-primary" /> },
  { min: 91, max: 99, text: 'Menyiapkan ruang konsultasi pribadi...', icon: <FaStar className="text-xs text-primary" /> },
  { min: 100, max: 100, text: 'Sistem siap! Selamat datang...', icon: <FaRocket className="text-xs text-green-400" /> }
];

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isExiting, setIsExiting] = useState(false);
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const progressRef = useRef(0);
  const requestRef = useRef<number | null>(null);

  // Set progressRef to match progress state to use in interval safely
  useEffect(() => {
    progressRef.current = progress;
  }, [progress]);

  // Check if session already loaded and set mounted state
  useEffect(() => {
    setMounted(true);
    const isLoaded = sessionStorage.getItem('neura_loaded');
    if (isLoaded === 'true') {
      setIsVisible(false);
    }
  }, []);

  // Neural network particle animation
  useEffect(() => {
    if (!isVisible) return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    const maxParticles = 40;
    const connectionDist = 100;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      for (let i = 0; i < maxParticles; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.8,
          vy: (Math.random() - 0.5) * 0.8,
          size: Math.random() * 2 + 1,
          alpha: Math.random() * 0.5 + 0.3
        });
      }
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      particles.forEach((p, index) => {
        p.x += p.vx;
        p.y += p.vy;

        // Boundary collision
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        // Draw particle node
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 107, 139, ${p.alpha})`;
        ctx.fill();

        // Check distance to other particles and draw lines
        for (let j = index + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDist) {
            const alpha = (1 - dist / connectionDist) * 0.15;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(255, 107, 139, ${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }

        // Draw connections to mouse
        if (isHovered) {
          const dx = p.x - mousePos.x;
          const dy = p.y - mousePos.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 150) {
            const alpha = (1 - dist / 150) * 0.25;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mousePos.x, mousePos.y);
            ctx.strokeStyle = `rgba(255, 107, 139, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isVisible, mousePos, isHovered]);

  // Loading progress calculation
  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          handleLoadingComplete();
          return 100;
        }
        // Organic slowing down as we get closer to 100% to build anticipation
        const remaining = 100 - prev;
        const increment = Math.max(1, Math.min(5, Math.ceil(remaining * 0.05 + Math.random() * 2)));
        return prev + increment;
      });
    }, 150);

    return () => clearInterval(interval);
  }, [isVisible]);

  const handleLoadingComplete = () => {
    setIsExiting(true);
    sessionStorage.setItem('neura_loaded', 'true');
    setTimeout(() => {
      setIsVisible(false);
    }, 800); // match framer-motion exit duration
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePos({ x: e.clientX, y: e.clientY });
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleTap = (e: React.MouseEvent<HTMLDivElement>) => {
    const x = e.clientX;
    const y = e.clientY;
    
    // Add ripple
    const id = Date.now() + Math.random();
    setRipples((prev) => [...prev, { id, x, y }]);

    // Speed up loading progress
    if (progress < 100) {
      setProgress((prev) => Math.min(100, prev + Math.floor(Math.random() * 8) + 8));
    }
  };

  // Clean up ripples after animation finishes
  const removeRipple = (id: number) => {
    setRipples((prev) => prev.filter((r) => r.id !== id));
  };

  // Get active stage text
  const currentStage = STAGES.find(s => progress >= s.min && progress <= s.max) || STAGES[0];

  if (!mounted || !isVisible) return null;

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            y: '-100vh',
            transition: { 
              duration: 0.8, 
              ease: [0.76, 0, 0.24, 1], // Custom cubic-bezier for smooth slide up
              when: "afterChildren"
            }
          }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          onClick={handleTap}
          className="fixed inset-0 z-[99999] bg-slate-950 text-white flex flex-col items-center justify-center select-none overflow-hidden touch-none"
        >
          {/* Neural Net Canvas Background */}
          <canvas 
            ref={canvasRef} 
            className="absolute inset-0 w-full h-full pointer-events-none opacity-40" 
          />

          {/* Interactive Mouse Glow Aura */}
          {isHovered && (
            <div 
              className="absolute pointer-events-none w-[350px] h-[350px] rounded-full blur-[100px] opacity-20 transition-all duration-300 ease-out"
              style={{
                left: mousePos.x - 175,
                top: mousePos.y - 175,
                background: 'radial-gradient(circle, var(--color-primary) 0%, transparent 70%)'
              }}
            />
          )}

          {/* Floating Blobs (Background Design) */}
          <motion.div 
            animate={{
              x: [0, 40, -20, 0],
              y: [0, -30, 20, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-1/4 left-1/4 w-[300px] h-[300px] rounded-full bg-primary/10 blur-[80px] pointer-events-none"
          />
          <motion.div 
            animate={{
              x: [0, -30, 40, 0],
              y: [0, 40, -30, 0],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
            className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] rounded-full bg-blue-500/10 blur-[90px] pointer-events-none"
          />

          {/* Interactive Click Ripples */}
          {ripples.map((ripple) => (
            <motion.span
              key={ripple.id}
              initial={{ scale: 0, opacity: 0.8 }}
              animate={{ scale: 6, opacity: 0 }}
              transition={{ duration: 1.0, ease: 'easeOut' }}
              onAnimationComplete={() => removeRipple(ripple.id)}
              className="absolute w-8 h-8 rounded-full border border-primary/40 pointer-events-none bg-primary/5 shadow-[0_0_20px_var(--color-primary-glow)]"
              style={{
                left: ripple.x - 16,
                top: ripple.y - 16,
              }}
            />
          ))}

          {/* Main Loading Panel */}
          <div className="relative z-10 flex flex-col items-center justify-center text-center max-w-[320px] px-4 pointer-events-none">
            
            {/* Pulsing Brand Logo */}
            <motion.div
              animate={{
                scale: progress === 100 ? [1, 1.15, 0.8, 1.2, 0] : [1, 1.04, 1],
                rotate: progress === 100 ? [0, 5, -5, 360, 360] : 0,
                boxShadow: progress === 100 
                  ? "0 0 80px rgba(255, 107, 139, 1)" 
                  : ["0 0 20px rgba(255, 107, 139, 0.3)", "0 0 45px rgba(255, 107, 139, 0.6)", "0 0 20px rgba(255, 107, 139, 0.3)"]
              }}
              transition={{
                duration: progress === 100 ? 0.7 : 2,
                repeat: progress === 100 ? 0 : Infinity,
                ease: "easeInOut"
              }}
              className="w-24 h-24 bg-primary text-white rounded-[2rem] flex items-center justify-center text-4xl border border-white/10 relative shadow-premium cursor-pointer"
            >
              <FaPlus className="text-3xl drop-shadow-[0_2px_8px_rgba(0,0,0,0.2)]" />
              
              {/* Ripple Ring effects from Logo */}
              <motion.div
                className="absolute inset-[-12px] rounded-[2.3rem] border border-primary/20"
                animate={{ scale: [1, 1.25, 1], opacity: [0.4, 0.1, 0.4] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute inset-[-24px] rounded-[2.6rem] border border-primary/5"
                animate={{ scale: [1, 1.45, 1], opacity: [0.2, 0, 0.2] }}
                transition={{ duration: 2, delay: 0.4, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>

            {/* Application Title */}
            <div className="mt-8 space-y-2 overflow-hidden">
              <motion.h1 
                initial={{ letterSpacing: '0.1em', opacity: 0 }}
                animate={{ letterSpacing: '0.25em', opacity: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="text-4xl font-extrabold tracking-[0.25em] text-transparent bg-clip-text bg-gradient-to-r from-white via-pink-100 to-primary font-poppins pl-[0.25em]"
              >
                NEURA
              </motion.h1>
              <p className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.3em] pl-[0.3em]">
                Student Health Companion
              </p>
            </div>

            {/* Circular Progress & Percentage */}
            <div className="relative w-20 h-20 mt-10 flex items-center justify-center">
              {/* Outer track */}
              <svg className="absolute w-full h-full -rotate-90">
                <circle
                  cx="40"
                  cy="40"
                  r="34"
                  className="stroke-white/5 fill-none"
                  strokeWidth="3"
                />
                <motion.circle
                  cx="40"
                  cy="40"
                  r="34"
                  className="stroke-primary fill-none"
                  strokeWidth="3"
                  strokeDasharray="213.6"
                  strokeDashoffset={213.6}
                  animate={{ strokeDashoffset: 213.6 - (213.6 * progress) / 100 }}
                  transition={{ ease: "easeOut", duration: 0.2 }}
                  strokeLinecap="round"
                />
              </svg>
              
              {/* Centered Percentage */}
              <div className="flex flex-col items-center">
                <span className="text-xl font-black font-poppins">{progress}%</span>
              </div>
            </div>

            {/* Loading Stages Text */}
            <div className="h-16 mt-6 flex flex-col items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStage.text}
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -10, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-center gap-2 text-center"
                >
                  <span className="text-sm">{currentStage.icon}</span>
                  <span className="text-[11px] text-gray-300 font-semibold tracking-wide">
                    {currentStage.text}
                  </span>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Interactive hint */}
            <motion.div 
              animate={{ opacity: [0.4, 0.9, 0.4] }}
              transition={{ duration: 1.8, repeat: Infinity }}
              className="mt-8 flex items-center gap-1.5 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-[9px] text-primary-light font-bold uppercase tracking-widest"
            >
              <FaBolt className="text-[8px] text-yellow-400" />
              Ketuk Layar Untuk Mempercepat
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
