'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { HeroMockup } from './HeroMockup';

export function Hero() {
  const { t, language } = useLanguage();

  // Luxury smooth easing curve
  const easeCurve: [number, number, number, number] = [0.16, 1, 0.3, 1];

  return (
    <section className="relative flex flex-col items-center justify-start pt-32 md:pt-[152px] pb-0 overflow-hidden text-center">
      {/* Background Double-Height Video & Glow Layers (Static, No Entrance Animation) */}
      <div className="absolute top-0 left-0 right-0 h-full min-h-[1300px] overflow-hidden z-[1] pointer-events-none isolate">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-1/2 left-1/2 min-w-full min-h-full -translate-x-1/2 -translate-y-1/2 object-cover opacity-85"
        >
          <source src="/assets/videos/hero-ambient.webm" type="video/webm" />
        </video>

        <div className="absolute inset-0 w-full h-full bg-[#F5BE09] mix-blend-color opacity-90 z-[2] pointer-events-none" />

        <div
          className="absolute inset-0 w-full h-full mix-blend-multiply"
          style={{
            background: `radial-gradient(circle at 50% 35%, rgba(245, 190, 9, 0.15) 0%, rgba(6, 6, 6, 0.3) 55%, #060606 95%), linear-gradient(180deg, rgba(6, 6, 6, 0.5) 0%, rgba(6, 6, 6, 0.1) 45%, #060606 100%)`
          }}
        />

        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-full h-full object-cover mix-blend-screen opacity-75 z-[3] pointer-events-none"
        >
          <source src="/assets/videos/hero-particles.webm" type="video/webm" />
          <source src="/assets/videos/eZhz76SS8iKlGHtrFjz8t5aA.webm" type="video/webm" />
        </video>
      </div>

      {/* Hero Content */}
      <div className="relative z-[2] max-w-[1140px] mx-auto px-6 flex flex-col items-center">
        {/* Glowing Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: easeCurve, delay: 0.08 }}
        >
          <Badge
            text={t('heroBadge')}
            icon={<Star className="w-3.5 h-3.5 fill-[#F5BE09] text-[#F5BE09]" />}
          />
        </motion.div>

        {/* Headline with Same Gradient as Choose Your Trading Path (Applied per line separately) */}
        <motion.h1
          initial={{ opacity: 0, y: 38 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: easeCurve, delay: 0.18 }}
          className={`font-serif text-[36px] sm:text-4xl md:text-[56px] lg:text-[66px] font-normal tracking-tight mt-4 sm:mt-5 mb-3.5 sm:mb-4 max-w-[860px] text-balance ${
            language === 'BN' ? 'leading-[1.2] md:leading-[1.26]' : 'leading-[1.1] md:leading-[1.14]'
          }`}
        >
          {t('heroTitle').split('\n').map((line, idx) => (
            <span
              key={idx}
              className="block bg-gradient-to-b from-white via-[#EEEEEE] to-[#9E9E9E] bg-clip-text text-transparent pb-0.5 sm:pb-1"
            >
              {line}
            </span>
          ))}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: easeCurve, delay: 0.3 }}
          className={`font-normal text-[#D4D4D4] max-w-[920px] mb-7 sm:mb-8 px-1 sm:px-0 whitespace-pre-line ${
            language === 'BN'
              ? 'text-[17px] xs:text-[18px] sm:text-[20px] md:text-[22px] lg:text-[23px] leading-[1.65]'
              : 'text-[15px] xs:text-[16px] sm:text-[18px] md:text-[20px] lg:text-[21px] leading-relaxed'
          }`}
        >
          {t('heroSubtitle')}
        </motion.p>

        {/* CTA Buttons - Matching Equal Width on Mobile */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: easeCurve, delay: 0.42 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-3.5 mb-2 w-full sm:w-auto"
        >
          <Button
            variant="primary"
            href="https://t.me/Asikrana41bd"
            target="_blank"
            rel="noopener noreferrer"
            icon={<Star className="w-4 h-4 fill-[#060606] text-[#060606]" />}
            className="w-[220px] sm:w-auto justify-center"
          >
            {t('startToday')}
          </Button>
          <Button
            variant="secondary"
            href="#curriculum"
            className="w-[220px] sm:w-auto justify-center"
          >
            {t('exploreFeatures')}
          </Button>
        </motion.div>
      </div>

      {/* Hero 3D Mockup */}
      <HeroMockup />
    </section>
  );
}
