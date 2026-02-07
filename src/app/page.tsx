"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function ValentinePage() {
  const [noButtonPos, setNoButtonPos] = useState<{ x: number; y: number } | null>(null);
  const [hasAccepted, setHasAccepted] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const moveButton = () => {
    const padding = 100;
    const maxWidth = window.innerWidth - padding;
    const maxHeight = window.innerHeight - padding;

    const randomX = Math.random() * (maxWidth - padding) + padding;
    const randomY = Math.random() * (maxHeight - padding) + padding;

    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    setNoButtonPos({
      x: randomX - centerX,
      y: randomY - centerY,
    });
  };

  const Petal = ({ i }: { i: number }) => (
    <motion.div
      initial={{ y: -100, x: Math.random() * 100 + "%", opacity: 0, rotate: 0 }}
      animate={{ 
        y: "110vh", 
        opacity: [0, 0.8, 0.8, 0],
        rotate: 360 
      }}
      transition={{ 
        duration: Math.random() * 5 + 7, 
        repeat: Infinity, 
        delay: i * 0.4, 
        ease: "linear" 
      }}
      // Z-INDEX set to 50 to fly ABOVE the card
      className="fixed pointer-events-none z-50 text-2xl"
      style={{ left: `${Math.random() * 100}%` }}
    >
      🌸
    </motion.div>
  );

  if (!isMounted) return null;

  if (hasAccepted) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#FFF5F6] p-6">
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="rounded-[3rem] bg-white p-12 shadow-xl border-4 border-[#F7CAD0] text-center z-10">
          <h1 className="text-6xl mb-4">🌹</h1>
          <h2 className="text-3xl font-serif text-[#5C3D2E]">It's a Date! ❤️</h2>
        </motion.div>
      </main>
    );
  }

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center bg-[#FFF5F6] overflow-hidden p-4">
      {/* Petals now fall over everything */}
      {[...Array(20)].map((_, i) => <Petal key={i} i={i} />)}

      <section className="z-10 flex flex-col items-center w-full max-w-4xl bg-white/80 backdrop-blur-sm p-10 md:p-16 rounded-[3.5rem] shadow-sm border border-white text-center">
        <div className="bg-[#FFE5E9] text-[#BC6C74] px-4 py-1 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase mb-8">
          Feb 07 • Rose Day
        </div>
        
        <h1 className="text-4xl md:text-6xl font-serif text-[#5C3D2E] leading-tight mb-8">
          Love planted a rose, & the world turned sweet.
        </h1>

        <p className="text-[#9D4444] text-xl font-serif italic mb-12">
          Will you be my Valentine? 🌹
        </p>

        <div className="flex flex-row items-center justify-center gap-8 w-full min-h-[80px]">
          {/* YES BUTTON */}
          <button
            onClick={() => setHasAccepted(true)}
            className="z-30 bg-[#9D4444] text-white px-10 md:px-14 py-3 md:py-4 rounded-full text-lg md:text-xl font-bold shadow-lg transition-transform active:scale-95 hover:scale-105"
          >
            Yes
          </button>

          {/* NO BUTTON WRAPPER - This stays in the flex row to keep "Yes" from moving */}
          <div className="w-[120px] md:w-[160px] flex justify-center items-center">
            <motion.button
              animate={noButtonPos ? { x: noButtonPos.x, y: noButtonPos.y } : { x: 0, y: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              onMouseEnter={moveButton}
              onTouchStart={(e) => {
                e.preventDefault();
                moveButton();
              }}
              style={noButtonPos ? { position: 'fixed', top: '50%', left: '50%', zIndex: 100 } : { position: 'relative', zIndex: 40 }}
              className="bg-white border-2 border-[#9D4444] text-[#9D4444] px-10 md:px-14 py-3 md:py-4 rounded-full text-lg md:text-xl font-bold shadow-md whitespace-nowrap"
            >
              No
            </motion.button>
          </div>
        </div>
      </section>

      <footer className="absolute bottom-6 text-[#BC6C74]/40 text-[10px] font-bold tracking-[0.3em] uppercase">
        Made for you with love
      </footer>
    </main>
  );
}