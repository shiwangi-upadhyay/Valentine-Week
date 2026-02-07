"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function ValentinePage() {
  const [noButtonPos, setNoButtonPos] = useState({ x: 0, y: 0 });
  const [hasAccepted, setHasAccepted] = useState(false);

  // Function to move the "No" button to a random position
  const moveButton = () => {
    const randomX = Math.random() * (window.innerWidth - 100);
    const randomY = Math.random() * (window.innerHeight - 100);
    
    // Calculate relative movement to current position
    setNoButtonPos({
      x: randomX - window.innerWidth / 2,
      y: randomY - window.innerHeight / 2,
    });
  };

  if (hasAccepted) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center bg-[#FFF0F3] p-4 text-center">
        <motion.div 
          initial={{ scale: 0 }} 
          animate={{ scale: 1 }} 
          className="rounded-3xl bg-white p-10 shadow-xl border-4 border-[#F7CAD0]"
        >
          <h1 className="text-5xl font-serif text-[#9D4444] mb-4">Yay! ❤️</h1>
          <p className="text-xl text-[#BC6C74]">I knew you'd say yes! Happy Valentine's Day!</p>
          <div className="mt-6 text-6xl">🌹✨</div>
        </motion.div>
      </main>
    );
  }

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center bg-[#FFF5F6] overflow-hidden p-6">
      {/* Decorative Floral Elements (Simplified representations) */}
      <div className="absolute top-0 left-0 p-10 opacity-20 text-8xl">🌸</div>
      <div className="absolute bottom-0 right-0 p-10 opacity-20 text-8xl">🌺</div>

      <section className="z-10 flex flex-col items-center max-w-4xl bg-white/50 backdrop-blur-sm p-12 rounded-[2rem] border border-pink-100 shadow-sm">
        <div className="bg-[#FFE5E9] text-[#BC6C74] px-4 py-1 rounded-full text-sm font-medium mb-6">
          Day 01: Rose Day
        </div>
        
        <h1 className="text-4xl md:text-6xl font-serif text-[#5C3D2E] text-center leading-tight mb-8">
          Love planted a rose,<br /> & <br />
          the world turned sweet.
        </h1>

        <p className="text-[#9D4444] text-2xl font-serif mb-12 italic">
          Will you be my Valentine?
        </p>

        <div className="flex gap-6 items-center">
          {/* YES BUTTON */}
          <button
            onClick={() => setHasAccepted(true)}
            className="bg-[#9D4444] hover:bg-[#833a3a] text-white px-10 py-3 rounded-full text-xl font-semibold transition-all shadow-lg hover:scale-110"
          >
            Yes
          </button>

          {/* NO BUTTON (The Dodger) */}
          <motion.button
            animate={{ x: noButtonPos.x, y: noButtonPos.y }}
            onMouseEnter={moveButton}
            onClick={moveButton}
            className="bg-white border-2 border-[#9D4444] text-[#9D4444] px-10 py-3 rounded-full text-xl font-semibold shadow-md"
          >
            No
          </motion.button>
        </div>
      </section>
    </main>
  );
}