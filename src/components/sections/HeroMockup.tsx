'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export function HeroMockup() {
  const [rotateX, setRotateX] = useState(24);

  useEffect(() => {
    let ticking = false;
    const initialRotate = 24;
    const maxScroll = 450;

    function handleScroll() {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.pageYOffset || document.documentElement.scrollTop;
          const progress = Math.min(Math.max(scrollY / maxScroll, 0), 1);
          setRotateX(initialRotate * (1 - progress));
          ticking = false;
        });
        ticking = true;
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Luxury smooth easing curve
  const easeCurve: [number, number, number, number] = [0.16, 1, 0.3, 1];

  return (
    <div className="relative w-full max-w-[1720px] mx-auto mt-7 sm:mt-10 md:mt-14 p-0 z-10 flex justify-center [perspective:1200px] isolate">
      {/* 1. Main Trading Dashboard Card (Rises smoothly from bottom to top) */}
      <motion.div
        initial={{ opacity: 0, y: 160, scale: 0.94 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.25, ease: easeCurve, delay: 0.35 }}
        className="w-full relative z-[1]"
      >
        <div
          className="relative w-full aspect-[2.14] rounded-[22px] sm:rounded-[42px] border border-[#F5BE09]/[0.22] bg-[#0E0E0E]/95 pt-3 px-3 sm:pt-6 sm:px-6 pb-0 shadow-[0_30px_100px_rgba(0,0,0,0.95),0_0_60px_rgba(245,190,9,0.15),inset_1px_1px_1.5px_rgba(255,255,255,0.2)] overflow-hidden origin-top transition-all duration-150"
          style={{
            transform: `perspective(1200px) rotateX(${rotateX.toFixed(2)}deg)`,
          }}
        >
          <Image
            src="/assets/images/dashboard.webp"
            alt="Legal Trading Live Platform"
            width={2422}
            height={1778}
            priority
            className="block w-full h-auto rounded-t-[12px] sm:rounded-t-[20px] object-cover"
          />
          <div className="absolute inset-0 bg-[#F5BE09] mix-blend-color opacity-95 pointer-events-none z-[2] rounded-inherit" />
        </div>
      </motion.div>

      {/* 2. 3D Gold Coins (Middle Layer, rising smoothly with dashboard) */}
      <motion.div
        initial={{ opacity: 0, y: 130, x: -20 }}
        animate={{ opacity: 1, y: 0, x: 0 }}
        transition={{ duration: 1.25, ease: easeCurve, delay: 0.45 }}
        className="absolute -left-[40px] -bottom-[50px] w-[380px] max-w-[30vw] z-[2] pointer-events-none select-none drop-shadow-[0_15px_35px_rgba(0,0,0,0.7)] drop-shadow-[0_0_30px_rgba(245,190,9,0.35)]"
      >
        <Image
          src="/assets/images/coin-left-gold.png"
          alt="Gold Coin Left"
          width={1280}
          height={1368}
          priority
          className="w-full h-auto"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 130, x: 20 }}
        animate={{ opacity: 1, y: 0, x: 0 }}
        transition={{ duration: 1.25, ease: easeCurve, delay: 0.45 }}
        className="absolute -right-[40px] bottom-[40px] w-[380px] max-w-[30vw] z-[2] pointer-events-none select-none drop-shadow-[0_15px_35px_rgba(0,0,0,0.7)] drop-shadow-[0_0_30px_rgba(245,190,9,0.35)]"
      >
        <Image
          src="/assets/images/coin-right-gold.png"
          alt="Gold Coin Right"
          width={1116}
          height={1208}
          priority
          className="w-full h-auto"
        />
      </motion.div>

      {/* 3. Hero Bottom Background (Above Coins, Below Cloud) */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-screen min-w-full max-w-[100vw] h-auto z-[3] pointer-events-none select-none">
        <Image
          src="/assets/images/hero-bottom-bg.webp"
          alt="Hero Bottom Background"
          width={2048}
          height={1099}
          priority
          className="w-full h-auto block object-cover"
        />
      </div>

      {/* 4. Bottom Golden Cloud (Top Layer, spans 100vw edge to edge) */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-screen min-w-full max-w-[100vw] h-auto z-[4] pointer-events-none select-none">
        <Image
          src="/assets/images/hero-cloud-gold.png"
          alt="Golden Cloud Atmosphere"
          width={2048}
          height={430}
          priority
          className="w-full h-auto block"
        />
      </div>
    </div>
  );
}
