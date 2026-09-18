'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';

export function CTASection() {
  const { t, language } = useLanguage();

  const easeCurve: [number, number, number, number] = [0.16, 1, 0.3, 1];

  return (
    <section className="relative z-10 w-full pt-14 sm:pt-20 md:pt-28 pb-0 bg-[#060606] overflow-hidden" id="cta">
      {/* Background Dotted Gold Ambient Atmosphere with Seamless Infinite Edge Blending (Static) */}
      <div
        className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden"
        style={{
          maskImage:
            'radial-gradient(ellipse 80% 65% at 50% 85%, black 25%, rgba(0,0,0,0.6) 60%, transparent 95%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 80% 65% at 50% 85%, black 25%, rgba(0,0,0,0.6) 60%, transparent 95%)',
        }}
      >
        <Image
          src="/assets/images/cta-bg.webp"
          alt="Golden Atmosphere"
          fill
          sizes="100vw"
          className="object-cover object-bottom opacity-85"
          priority
        />
        {/* Soft Radial Ambient Gold Glow Blend */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 65% 50% at 50% 80%, rgba(245, 190, 9, 0.28) 0%, rgba(245, 190, 9, 0.05) 55%, transparent 75%)',
          }}
        />
        {/* Left Side Smooth Infinite Feather Blend */}
        <div className="absolute inset-y-0 left-0 w-44 sm:w-72 md:w-96 lg:w-[480px] bg-gradient-to-r from-[#060606] via-[#060606]/85 to-transparent pointer-events-none z-10" />
        {/* Right Side Smooth Infinite Feather Blend */}
        <div className="absolute inset-y-0 right-0 w-44 sm:w-72 md:w-96 lg:w-[480px] bg-gradient-to-l from-[#060606] via-[#060606]/85 to-transparent pointer-events-none z-10" />
        {/* Top Smooth Edge Feather */}
        <div className="absolute inset-x-0 top-0 h-44 sm:h-60 bg-gradient-to-b from-[#060606] via-[#060606]/80 to-transparent pointer-events-none z-10" />
      </div>

      {/* Centered Content Container */}
      <div className="relative z-10 max-w-[1240px] mx-auto px-4 sm:px-6 flex flex-col items-center text-center">
        {/* Glowing Badge - Design System Standard */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65, ease: easeCurve }}
        >
          <Badge
            text={t('ctaBadge')}
            icon={<Star className="w-3.5 h-3.5 fill-[#F5BE09] text-[#F5BE09]" />}
          />
        </motion.div>

        {/* Headline - Instrument Serif with Signature Luxury Gradient */}
        <motion.h2
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.75, ease: easeCurve, delay: 0.1 }}
          className={`font-serif text-[22px] xs:text-[25px] sm:text-[32px] md:text-[36px] lg:text-[42px] font-normal tracking-tight mt-4 sm:mt-5 mb-3 sm:mb-4 text-balance max-w-[760px] bg-gradient-to-b from-white via-[#EEEEEE] to-[#9E9E9E] bg-clip-text text-transparent ${
            language === 'BN' ? 'leading-[1.26] md:leading-[1.3]' : 'leading-[1.18] md:leading-[1.2]'
          }`}
        >
          {t('ctaTitle')}
        </motion.h2>

        {/* Subtitle - Inter Display matching Hero subtitle style */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.75, ease: easeCurve, delay: 0.2 }}
          className="text-[13px] xs:text-[14px] sm:text-[16px] font-normal text-[#A8A8A8] max-w-[560px] leading-relaxed mb-7 sm:mb-9 text-balance px-2"
        >
          {t('ctaSubtitle')}
        </motion.p>

        {/* Dual Action Buttons - Utilizing Central Button Design System */}
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.75, ease: easeCurve, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 w-full sm:w-auto"
        >
          {/* Primary Gold CTA with rolling text & shimmer glide */}
          <Button
            variant="primary"
            href="https://t.me/Asikrana41bd"
            target="_blank"
            rel="noopener noreferrer"
            icon={<Star className="w-4 h-4 fill-[#060606] text-[#060606]" />}
            className="w-[230px] sm:w-auto justify-center"
          >
            {t('ctaStartCourse')}
          </Button>

          {/* Secondary Frosted Glass CTA with rolling text & gold arrow */}
          <Button
            variant="secondary"
            href="#courses"
            className="w-[230px] sm:w-auto justify-center"
          >
            {t('ctaPaidMentorship')}
          </Button>
        </motion.div>

        {/* Hero Left Gold Coin (coin-left-gold.png) Emerging from Bottom */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.94 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.95, ease: easeCurve, delay: 0.4 }}
          className="relative w-[300px] sm:w-[420px] md:w-[500px] lg:w-[560px] mt-10 -mb-[160px] sm:-mb-[220px] md:-mb-[280px] lg:-mb-[310px] pointer-events-none select-none z-10"
        >
          {/* Ambient gold aura glow behind the coin */}
          <div
            className="absolute top-12 left-1/2 -translate-x-1/2 w-4/5 h-4/5 rounded-full opacity-45 blur-[85px] pointer-events-none"
            style={{
              background: 'radial-gradient(circle, #F5BE09 0%, transparent 70%)',
            }}
          />
          <Image
            src="/assets/images/coin-left-gold.png"
            alt="Hero Left Gold Trading Coin"
            width={1280}
            height={1368}
            className="relative z-10 w-full h-auto object-contain drop-shadow-[0_25px_60px_rgba(245,190,9,0.35)] drop-shadow-[0_15px_30px_rgba(0,0,0,0.85)]"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
