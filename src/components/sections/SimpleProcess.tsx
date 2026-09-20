'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { Button, RollingContent } from '@/components/ui/Button';
import { useLanguage } from '@/context/LanguageContext';

export function SimpleProcess() {
  const { t, language } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isTransitionEnabled, setIsTransitionEnabled] = useState(true);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const easeCurve: [number, number, number, number] = [0.16, 1, 0.3, 1];

  const steps = [
    {
      num: t('step1Num'),
      title: t('step1Title'),
      desc: t('step1Desc'),
      desktopCol: 'md:col-span-12 lg:col-span-7',
    },
    {
      num: t('step2Num'),
      title: t('step2Title'),
      desc: t('step2Desc'),
      desktopCol: 'md:col-span-12 lg:col-span-5',
    },
    {
      num: t('step3Num'),
      title: t('step3Title'),
      desc: t('step3Desc'),
      desktopCol: 'md:col-span-12 lg:col-span-5',
    },
  ];

  // Extended steps with clones at both ends for infinite seamless loop (always right to left!)
  const extendedSteps = [
    steps[2], // clone of Step 3 at index 0
    steps[0], // Step 1 at index 1
    steps[1], // Step 2 at index 2
    steps[2], // Step 3 at index 3
    steps[0], // clone of Step 1 at index 4
  ];

  // Auto-play horizontal step slider on mobile (always right to left!)
  useEffect(() => {
    const timer = setInterval(() => {
      setIsTransitionEnabled(true);
      setCurrentIndex((prev) => prev + 1);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  // When transition is disabled for silent snap, re-enable it on next animation frame
  useEffect(() => {
    if (!isTransitionEnabled) {
      const frame = requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsTransitionEnabled(true);
        });
      });
      return () => cancelAnimationFrame(frame);
    }
  }, [isTransitionEnabled]);

  const handleTransitionEnd = (e: React.TransitionEvent) => {
    if (e.target !== e.currentTarget || e.propertyName !== 'transform') return;
    if (currentIndex === 4) {
      // Reached cloned Step 1 at the end -> silently snap to real Step 1 (index 1)
      setIsTransitionEnabled(false);
      setCurrentIndex(1);
    } else if (currentIndex === 0) {
      // Reached cloned Step 3 at the start -> silently snap to real Step 3 (index 3)
      setIsTransitionEnabled(false);
      setCurrentIndex(3);
    }
  };

  // Touch swipe support
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 45) {
      // swipe left -> advance next (right to left)
      setIsTransitionEnabled(true);
      setCurrentIndex((prev) => prev + 1);
    } else if (distance < -45) {
      // swipe right -> prev
      setIsTransitionEnabled(true);
      setCurrentIndex((prev) => prev - 1);
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const goToStep = (dotIdx: number) => {
    setIsTransitionEnabled(true);
    setCurrentIndex(dotIdx + 1);
  };

  // Calculate which dot is active
  let activeDot = 0;
  if (currentIndex === 1 || currentIndex === 4) activeDot = 0;
  else if (currentIndex === 2) activeDot = 1;
  else if (currentIndex === 3 || currentIndex === 0) activeDot = 2;

  const handleApply = () => {
    const coursesSection = document.getElementById('courses');
    if (coursesSection) {
      coursesSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.open('https://whatsapp.com/channel/0029VbBEhM77DAWzHE4HTu1b', '_blank');
    }
  };

  const renderStepCard = (step: (typeof steps)[0], isDesktop: boolean) => (
    <div
      className={`relative rounded-2xl sm:rounded-3xl bg-gradient-to-b from-[#111111]/95 via-[#0C0C0C]/95 to-[#080808]/95 border border-white/[0.08] hover:border-white/[0.18] shadow-[0_15px_40px_rgba(0,0,0,0.6)] transition-all duration-300 flex flex-col justify-between group overflow-hidden ${
        isDesktop
          ? 'h-full p-6 sm:p-8 md:p-10 min-h-[220px]'
          : 'p-5 xs:p-6 min-h-[170px]'
      }`}
    >
      {/* Watermark Step Number */}
      <div className="absolute -bottom-3 -right-1 sm:-bottom-6 sm:-right-2 text-7xl sm:text-9xl font-serif font-black text-white/[0.03] group-hover:text-[#F5BE09]/10 select-none transition-colors duration-500 pointer-events-none z-0">
        {step.num}
      </div>

      <div className="relative z-10">
        <h3 className="text-lg xs:text-xl sm:text-2xl lg:text-3xl font-bold text-white group-hover:text-[#FFE79A] transition-colors duration-300 mb-2 sm:mb-3.5 tracking-tight">
          {step.title}
        </h3>
        <p className="text-[13.5px] xs:text-[14.5px] sm:text-base text-[#C4C4C4] leading-relaxed font-normal max-w-[560px]">
          {step.desc}
        </p>
      </div>
    </div>
  );

  const renderCtaCard = () => (
    <div className="relative p-5 xs:p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl bg-[#080808] border border-white/[0.08] hover:border-white/[0.16] shadow-[0_20px_50px_rgba(0,0,0,0.6)] transition-all duration-300 flex flex-col justify-between group overflow-hidden h-full min-h-0 sm:min-h-[220px]">
      {/* Background Hero Ambient Video & Particle Video Layers */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Hero Ambient Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-1/2 left-1/2 min-w-full min-h-full -translate-x-1/2 -translate-y-1/2 object-cover opacity-75"
        >
          <source src="/assets/videos/hero-ambient.webm" type="video/webm" />
        </video>

        {/* Gold Color Blend */}
        <div className="absolute inset-0 bg-[#F5BE09] mix-blend-color opacity-85 pointer-events-none" />

        {/* Dark Gradient Overlays for optimal readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/50 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#060606]/90 via-transparent to-black/60 pointer-events-none" />

        {/* Hero Particles Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover mix-blend-screen opacity-70 pointer-events-none"
        >
          <source src="/assets/videos/hero-particles.webm" type="video/webm" />
          <source src="/assets/videos/eZhz76SS8iKlGHtrFjz8t5aA.webm" type="video/webm" />
        </video>
      </div>

      <div className="relative z-10 mb-4 sm:mb-6">
        {/* CTA Headline */}
        <h3 className="text-lg xs:text-xl sm:text-[28px] font-bold text-white tracking-tight leading-snug mb-1.5 sm:mb-2.5">
          {t('stepCtaTitle')}
        </h3>

        {/* CTA Description */}
        <p className="text-xs xs:text-[13px] sm:text-[15px] text-[#C0C0C0] leading-relaxed max-w-[540px]">
          {t('stepCtaDesc')}
        </p>
      </div>

      {/* CTA Action Buttons: stacked on mobile, flex-row on desktop */}
      <div className="relative z-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-3.5 w-full sm:w-auto">
        <Button
          variant="primary"
          onClick={handleApply}
          className="w-full sm:w-auto px-6 sm:px-7 text-xs xs:text-[13px] sm:text-sm h-11 sm:h-[46px] justify-center text-center"
        >
          {t('stepCtaPrimary')}
        </Button>

        <a
          href="https://whatsapp.com/channel/0029VbBEhM77DAWzHE4HTu1b"
          target="_blank"
          rel="noopener noreferrer"
          className="group/btn navbar-glass w-full sm:w-auto px-6 sm:px-7 h-11 sm:h-[46px] rounded-full font-medium text-xs xs:text-[13px] sm:text-sm text-white hover:text-[#F5BE09] border border-white/15 hover:border-[#F5BE09]/50 active:scale-[0.98] transition-all duration-300 flex items-center justify-center text-center"
        >
          <RollingContent iconRight={<ArrowUpRight className="w-3.5 h-3.5 text-[#F5BE09] shrink-0" />}>
            {t('stepCtaSecondary')}
          </RollingContent>
        </a>
      </div>
    </div>
  );

  return (
    <section className="relative z-10 w-full py-12 sm:py-16 md:py-28 bg-[#060606] overflow-hidden" id="process">
      {/* Ambient background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] pointer-events-none opacity-20 blur-[180px]"
        style={{
          background: 'radial-gradient(circle, rgba(245, 190, 9, 0.18) 0%, transparent 70%)',
        }}
      />

      <div className="relative max-w-[1240px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-8 sm:mb-12 md:mb-18">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.65, ease: easeCurve }}
          >
            <Badge text={t('processBadge')} isDot />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.75, ease: easeCurve, delay: 0.1 }}
            className={`font-serif text-3xl sm:text-4xl md:text-[46px] font-normal mt-4 mb-3 tracking-tight max-w-[860px] bg-gradient-to-b from-white via-[#EEEEEE] to-[#9E9E9E] bg-clip-text text-transparent ${
              language === 'BN' ? 'leading-[1.24] md:leading-[1.28]' : 'leading-[1.1] md:leading-[1.14]'
            }`}
          >
            {t('processTitle')}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.75, ease: easeCurve, delay: 0.2 }}
            className="text-[15.5px] sm:text-[17px] md:text-[18.5px] font-normal text-[#C8C8C8] max-w-[740px] text-balance leading-relaxed"
          >
            {t('processSubtitle')}
          </motion.p>
        </div>

        {/* ========================================================
            1. DESKTOP VIEW: BENTO GRID (4 CARDS: 7/5 & 5/7)
            ======================================================== */}
        <div className="hidden md:grid md:grid-cols-12 gap-5 sm:gap-6 items-stretch">
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: easeCurve, delay: 0.15 }}
            className="md:col-span-12 lg:col-span-7"
          >
            {renderStepCard(steps[0], true)}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: easeCurve, delay: 0.27 }}
            className="md:col-span-12 lg:col-span-5"
          >
            {renderStepCard(steps[1], true)}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: easeCurve, delay: 0.39 }}
            className="md:col-span-12 lg:col-span-5"
          >
            {renderStepCard(steps[2], true)}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: easeCurve, delay: 0.51 }}
            className="md:col-span-12 lg:col-span-7"
          >
            {renderCtaCard()}
          </motion.div>
        </div>

        {/* ========================================================
            2. MOBILE VIEW: 3-STEP HORIZONTAL CAROUSEL + CTA CARD BELOW
            ======================================================== */}
        <div className="md:hidden flex flex-col gap-4">
          {/* Horizontal Track Viewport */}
          <motion.div
            initial={{ opacity: 0, y: 35, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.75, ease: easeCurve, delay: 0.2 }}
            className="flex flex-col gap-4"
          >
            <div
              className="overflow-hidden rounded-2xl touch-pan-y"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <div
                onTransitionEnd={handleTransitionEnd}
                className={`flex will-change-transform ${
                  isTransitionEnabled
                    ? 'transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]'
                    : 'transition-none'
                }`}
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {extendedSteps.map((step, idx) => (
                  <div key={idx} className="w-full flex-shrink-0 px-0.5">
                    {renderStepCard(step, false)}
                  </div>
                ))}
              </div>
            </div>

            {/* Carousel Pagination Controls (Only Dots, Arrows Removed) */}
            <div className="flex items-center justify-center gap-1.5 -mt-0.5 mb-1.5">
              {steps.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => goToStep(idx)}
                  className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                    activeDot === idx
                      ? 'w-6 bg-[#F5BE09] shadow-[0_0_10px_rgba(245,190,9,0.6)]'
                      : 'w-1.5 bg-white/25 hover:bg-white/45'
                  }`}
                  aria-label={`Go to step ${idx + 1}`}
                />
              ))}
            </div>
          </motion.div>

          {/* CTA Card positioned directly below */}
          <motion.div
            initial={{ opacity: 0, y: 35, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.75, ease: easeCurve, delay: 0.35 }}
          >
            {renderCtaCard()}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
