'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Check, ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { Badge } from '@/components/ui/Badge';
import { RollingContent } from '@/components/ui/Button';

export function TrustedPlatforms() {
  const { t, language } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const easeCurve: [number, number, number, number] = [0.16, 1, 0.3, 1];

  const platforms = [
    {
      id: 'exness',
      title: t('exnessTitle'),
      subtitle: t('exnessSubtitle'),
      icon: '/assets/images/icons/platform-exness.svg',
      features: [t('exnessF1'), t('exnessF2'), t('exnessF3')],
      cta: t('exnessCta'),
      link: 'https://one.exness-track.com',
    },
    {
      id: 'xm',
      title: t('xmTitle'),
      subtitle: t('xmSubtitle'),
      icon: '/assets/images/icons/platform-xm.svg',
      features: [t('xmF1'), t('xmF2'), t('xmF3')],
      cta: t('xmCta'),
      link: 'https://www.xm.com',
    },
    {
      id: 'tradingview',
      title: t('tvTitle'),
      subtitle: t('tvSubtitle'),
      icon: '/assets/images/icons/platform-tradingview.svg',
      features: [t('tvF1'), t('tvF2'), t('tvF3')],
      cta: t('tvCta'),
      link: 'https://www.tradingview.com',
    },
  ];

  // Auto-switch carousel slide every 4.5 seconds on mobile
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % platforms.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [platforms.length]);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % platforms.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + platforms.length) % platforms.length);
  };

  // Mobile Touch Swipe Handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > 45) nextSlide(); // swipe left
    if (distance < -45) prevSlide(); // swipe right
    setTouchStart(null);
    setTouchEnd(null);
  };

  const renderCard = (item: (typeof platforms)[0]) => (
    <div className="relative h-full p-6 sm:p-7 rounded-3xl bg-gradient-to-b from-[#0b0a07] via-[#070707] to-[#030303] border border-white/[0.09] hover:border-[#F5BE09]/30 shadow-[0_20px_50px_rgba(0,0,0,0.85),inset_0_1px_1px_rgba(255,255,255,0.12)] hover:shadow-[0_25px_65px_rgba(0,0,0,0.95),0_0_25px_rgba(245,190,9,0.08)] transition-all duration-500 overflow-hidden flex flex-col justify-between group/card">
      {/* 1. CINEMATIC TOP-RIGHT CORNER LIGHT FLARE */}
      <div
        className="absolute -top-10 -right-10 w-[180px] h-[180px] pointer-events-none rounded-full blur-[40px] opacity-30 group-hover/card:opacity-45 transition-opacity duration-500 z-0"
        style={{
          background: 'radial-gradient(circle, rgba(245, 190, 9, 0.22) 0%, rgba(245, 190, 9, 0.06) 40%, transparent 70%)',
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 100% 0%, rgba(245, 190, 9, 0.08) 0%, transparent 60%)',
        }}
      />

      {/* 2. SUBTLE PIXEL GRID TEXTURE */}
      <div
        className="absolute inset-0 pointer-events-none opacity-22 mix-blend-screen z-0"
        style={{
          backgroundImage: `
            radial-gradient(rgba(255, 255, 255, 0.14) 1px, transparent 1px),
            linear-gradient(to right, rgba(255, 255, 255, 0.02) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.02) 1px, transparent 1px)
          `,
          backgroundSize: '10px 10px, 10px 10px, 10px 10px',
          maskImage: 'radial-gradient(ellipse 80% 70% at 95% 5%, black 20%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 70% at 95% 5%, black 20%, transparent 80%)',
        }}
      />

      {/* 3. CINEMATIC SUBTLE OUTLINE / CORNER ACCENTS */}
      <div className="absolute top-0 right-0 w-24 h-[1px] bg-gradient-to-l from-[#F5BE09]/50 via-white/20 to-transparent pointer-events-none z-10" />
      <div className="absolute top-0 right-0 w-[1px] h-24 bg-gradient-to-b from-[#F5BE09]/50 via-white/20 to-transparent pointer-events-none z-10" />

      {/* 4. CARD CONTENT */}
      <div className="relative z-10">
        {/* Brand Header */}
        <div className="flex items-center gap-3.5 mb-6">
          <div className="relative w-12 h-12 shrink-0 drop-shadow-[0_8px_20px_rgba(0,0,0,0.6)]">
            <Image
              src={item.icon}
              alt={item.title}
              width={48}
              height={48}
              className="w-full h-full object-contain"
            />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white tracking-tight leading-tight">
              {item.title}
            </h3>
            <p className="text-xs text-[#9E9E9E] font-normal mt-0.5">
              {item.subtitle}
            </p>
          </div>
        </div>

        {/* Concise Features */}
        <div className="border-t border-white/[0.08] pt-4 mb-6">
          <ul className="space-y-2.5">
            {item.features.map((feat, i) => (
              <li key={i} className="flex items-center gap-2.5">
                <div className="w-4 h-4 rounded-full bg-white/[0.06] border border-white/10 flex items-center justify-center shrink-0">
                  <Check className="w-2.5 h-2.5 text-[#F5BE09] stroke-[2.5]" />
                </div>
                <span className="text-xs sm:text-[13px] text-[#C5C5C5]">
                  {feat}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Secondary Action Button */}
      <div className="relative z-10 pt-2">
        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="group/btn navbar-glass w-full h-11 rounded-full font-medium text-sm text-white hover:text-[#F5BE09] border border-white/15 hover:border-[#F5BE09]/50 active:scale-[0.98] transition-all duration-300 flex items-center justify-center"
        >
          <RollingContent iconRight={<ArrowUpRight className="w-4 h-4 text-[#F5BE09]" />}>
            {item.cta}
          </RollingContent>
        </a>
      </div>
    </div>
  );

  return (
    <section className="relative z-10 w-full py-16 md:py-24 bg-[#060606] overflow-hidden" id="trusted-platforms">
      {/* Background Backdrop Image (Static) */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src="/assets/images/verified-platforms-bg-01.png"
          alt="Verified Platforms Background"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Smooth top/bottom gradient fade to merge seamlessly with adjacent sections */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#060606] via-transparent to-[#060606] pointer-events-none opacity-80" />
      </div>

      <div className="relative z-10 max-w-[1240px] mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-10 md:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.65, ease: easeCurve }}
          >
            <Badge text={t('platformsBadge')} isDot />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.75, ease: easeCurve, delay: 0.1 }}
            className={`font-serif text-3xl sm:text-4xl md:text-[44px] font-normal mt-4 mb-3 tracking-tight max-w-[860px] bg-gradient-to-b from-white via-[#EEEEEE] to-[#9E9E9E] bg-clip-text text-transparent ${
              language === 'BN' ? 'leading-[1.24] md:leading-[1.28]' : 'leading-[1.1] md:leading-[1.14]'
            }`}
          >
            {t('platformsTitle')}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.75, ease: easeCurve, delay: 0.2 }}
            className="text-sm sm:text-base font-normal text-[#A8A8A8] max-w-[620px] text-balance leading-relaxed"
          >
            {t('platformsSubtitle')}
          </motion.p>
        </div>

        {/* 1. DESKTOP VIEW: 3-Column Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-6 items-stretch max-w-[1140px] mx-auto">
          {platforms.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 45, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, ease: easeCurve, delay: 0.2 + idx * 0.12 }}
              className="h-full"
            >
              {renderCard(item)}
            </motion.div>
          ))}
        </div>

        {/* 2. MOBILE VIEW: Horizontal Swipe / Auto-Slider Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 45, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8, ease: easeCurve, delay: 0.25 }}
          className="md:hidden max-w-[420px] mx-auto"
        >
          {/* Horizontal Track Viewport */}
          <div
            className="overflow-hidden rounded-3xl touch-pan-y"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="flex transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {platforms.map((item) => (
                <div key={item.id} className="w-full flex-shrink-0 px-0.5">
                  {renderCard(item)}
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Pagination Controls (Dots & Navigation Arrows) */}
          <div className="flex items-center justify-center gap-3 mt-6">
            {/* Prev Arrow */}
            <button
              onClick={prevSlide}
              className="w-8 h-8 rounded-full bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 text-white flex items-center justify-center transition-all cursor-pointer active:scale-95"
              aria-label="Previous Platform"
            >
              <ChevronLeft className="w-4 h-4 text-[#F8F7F4]" />
            </button>

            {/* Glowing Indicator Dots */}
            <div className="flex items-center gap-1.5 px-2">
              {platforms.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    activeIndex === idx
                      ? 'w-7 bg-[#F5BE09] shadow-[0_0_10px_rgba(245,190,9,0.6)]'
                      : 'w-2 bg-white/25 hover:bg-white/45'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Next Arrow */}
            <button
              onClick={nextSlide}
              className="w-8 h-8 rounded-full bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 text-white flex items-center justify-center transition-all cursor-pointer active:scale-95"
              aria-label="Next Platform"
            >
              <ChevronRight className="w-4 h-4 text-[#F8F7F4]" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
