'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowUpRight, Sparkles, Crown, Zap, BookOpen } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { Badge } from '@/components/ui/Badge';
import { RollingContent } from '@/components/ui/Button';

export function CuratedCourses() {
  const { t, language } = useLanguage();

  const easeCurve: [number, number, number, number] = [0.16, 1, 0.3, 1];

  const course1Features = [
    t('course1F1'),
    t('course1F2'),
    t('course1F3'),
    t('course1F4'),
    t('course1F5'),
  ];

  const course2Features = [
    { title: t('course2F1Title'), desc: t('course2F1Desc') },
    { title: t('course2F2Title'), desc: t('course2F2Desc') },
    { title: t('course2F3Title'), desc: t('course2F3Desc') },
    { title: t('course2F4Title'), desc: t('course2F4Desc') },
    { title: t('course2F5Title'), desc: t('course2F5Desc') },
    { title: t('course2F6Title'), desc: t('course2F6Desc') },
  ];

  const course3Features = [
    t('course3F1'),
    t('course3F2'),
    t('course3F3'),
    t('course3F4'),
  ];

  return (
    <section className="relative z-10 w-full py-20 md:py-28 bg-[#060606] overflow-hidden" id="courses">
      {/* Ambient glowing orb centered on middle card (Static) */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[500px] pointer-events-none opacity-20 blur-[150px]"
        style={{
          background: 'radial-gradient(circle, rgba(245, 190, 9, 0.25) 0%, transparent 70%)',
        }}
      />

      <div className="relative max-w-[1280px] mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.65, ease: easeCurve }}
          >
            <Badge text={t('coursesBadge')} isDot />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.75, ease: easeCurve, delay: 0.1 }}
            className={`font-serif text-3xl sm:text-4xl md:text-[46px] font-normal bg-gradient-to-b from-white via-[#EEEEEE] to-[#9E9E9E] bg-clip-text text-transparent mt-4 mb-4 tracking-tight max-w-[840px] text-balance ${
              language === 'BN' ? 'leading-[1.24] md:leading-[1.28]' : 'leading-[1.08] md:leading-[1.12]'
            }`}
          >
            {t('coursesTitle')}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.75, ease: easeCurve, delay: 0.2 }}
            className="text-sm sm:text-base font-normal text-[#A8A8A8] max-w-[720px] text-balance leading-relaxed"
          >
            {t('coursesSubtitle')}
          </motion.p>
        </div>

        {/* 3-Column Program Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 lg:gap-6 xl:gap-8 items-stretch max-w-[1240px] mx-auto">
          {/* ========================================================
              CARD 1: Free Course (NEUTRAL MONOCHROME)
              ======================================================== */}
          <motion.div
            initial={{ opacity: 0, y: 45, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.85, ease: easeCurve, delay: 0.2 }}
            className="order-2 lg:order-1 flex flex-col h-full"
          >
            <div className="relative p-7 sm:p-8 rounded-3xl bg-white/[0.015] border border-white/[0.08] flex flex-col justify-between hover:border-white/20 transition-all duration-300 group/card h-full">
              <div>
                {/* Neutral Badge (Cinematic Gradient) */}
                <div className="flex items-center mb-4">
                  <span className="px-3.5 py-1.5 rounded-full bg-gradient-to-b from-[#2A2A2A] via-[#161616] to-[#0A0A0A] border border-white/20 text-white text-xs font-semibold tracking-wider uppercase flex items-center gap-1.5 shadow-[0_2px_12px_rgba(0,0,0,0.6),inset_0_1px_1px_rgba(255,255,255,0.3)]">
                    <BookOpen className="w-3.5 h-3.5 text-white/90 drop-shadow" />
                    <span className="drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]">{t('course1Badge')}</span>
                  </span>
                </div>

                {/* Title with Same Gradient applied separately to Line 1 & Line 2 */}
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight mb-2.5">
                  <span className="block bg-gradient-to-b from-white via-[#EEEEEE] to-[#9E9E9E] bg-clip-text text-transparent">
                    {t('course1TitleLine1')}
                  </span>
                  <span className="block bg-gradient-to-b from-white via-[#EEEEEE] to-[#9E9E9E] bg-clip-text text-transparent">
                    {t('course1TitleLine2')}
                  </span>
                </h3>
                <p className="text-xs sm:text-sm text-[#8E8E8E] leading-relaxed mb-6">
                  {t('course1Desc')}
                </p>

                {/* Price / Fee Block (Neutral) */}
                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] mb-6">
                  <span className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-white to-[#9E9E9E] bg-clip-text text-transparent tracking-tight">
                    {t('course1Price')}
                  </span>
                </div>

                {/* Curriculum List (Neutral) */}
                <div className="mb-8">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-white/60 mb-3.5">
                    {t('course1FeatureTitle')}
                  </h4>
                  <div className="flex flex-col gap-2.5">
                    {course1Features.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-[13px] text-[#A8A8A8]">
                        <div className="w-5 h-5 rounded-full bg-white/[0.08] border border-white/10 text-white/70 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3 h-3 stroke-[2.5]" />
                        </div>
                        <span className="leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* CTA Action (Hero Secondary Style) */}
              <div className="pt-4 border-t border-white/[0.06]">
                <a
                  href="https://t.me/Asikrana41bd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn navbar-glass w-full inline-flex items-center justify-center px-7 h-12 rounded-full font-medium text-sm text-[#FFFFFF] active:scale-[0.98] transition-all duration-300"
                >
                  <RollingContent
                    icon={
                      <svg className="w-4 h-4 fill-current text-white" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.75-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
                      </svg>
                    }
                    iconRight={<ArrowUpRight className="w-4 h-4 text-[#F5BE09]" />}
                  >
                    {t('course1Cta')}
                  </RollingContent>
                </a>
              </div>
            </div>
          </motion.div>

          {/* ========================================================
              CARD 2: Complete Mentorship (FLAGSHIP - MOST POPULAR)
              ======================================================== */}
          <motion.div
            initial={{ opacity: 0, y: 55, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.85, ease: easeCurve, delay: 0.32 }}
            className="order-1 lg:order-2 flex flex-col h-full"
          >
            <div className="relative p-7 sm:p-8 rounded-3xl bg-gradient-to-b from-[#151206] via-[#080808] to-[#060606] shadow-[0_20px_60px_rgba(0,0,0,0.8),0_0_45px_rgba(245,190,9,0.25)] flex flex-col justify-between hover:shadow-[0_25px_80px_rgba(245,190,9,0.38)] transition-all duration-300 lg:-translate-y-2 group/card h-full">
              {/* Background Layers with Top Yellow Light Overlay (Reference Style) */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl z-0">
                {/* Top Yellow Spotlight & Ambient Lighting */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: `
                      radial-gradient(ellipse 95% 55% at 50% -5%, rgba(255, 230, 120, 0.55) 0%, rgba(245, 190, 9, 0.40) 30%, rgba(245, 190, 9, 0.12) 65%, transparent 85%),
                      linear-gradient(180deg, rgba(245, 190, 9, 0.25) 0%, rgba(245, 190, 9, 0.08) 35%, transparent 65%)
                    `
                  }}
                />

                {/* Background Particles Video Layer */}
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  className="w-full h-full object-cover mix-blend-screen opacity-75 pointer-events-none"
                >
                  <source src="/assets/videos/hero-particles.webm" type="video/webm" />
                </video>

                {/* Bottom Dark Gradient to keep lower content crisp */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#060606]/10 to-[#060606]/90 pointer-events-none" />
              </div>

              {/* Top highlight ribbon */}
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-[#FFE79A] via-[#F5BE09] to-[#C99700] text-black text-[11px] font-extrabold uppercase tracking-wider shadow-[0_4px_15px_rgba(245,190,9,0.45)] flex items-center gap-1.5 whitespace-nowrap z-20">
                <Sparkles className="w-3.5 h-3.5 fill-black" />
                <span>{t('course2Popular')}</span>
              </div>

              <div className="relative z-10">
                {/* Badge (Our Standard Obsidian bg with Yellow Outline) */}
                <div className="flex items-center mb-4 mt-2">
                  <span className="px-3.5 py-1.5 rounded-full bg-gradient-to-b from-[#1c1c1c] via-[#0c0c0c] to-[#000000] border border-[#F5BE09]/60 text-[#FFE79A] text-xs font-bold tracking-wide uppercase flex items-center gap-1.5 shadow-[0_4px_16px_rgba(0,0,0,0.6),inset_0_1px_1px_rgba(255,230,120,0.35)]">
                    <Zap className="w-3.5 h-3.5 text-[#F5BE09] fill-[#F5BE09] drop-shadow" />
                    <span className="drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]">{t('course2Badge')}</span>
                  </span>
                </div>

                {/* Title with White-to-Gold Gradient applied separately to Line 1 & Line 2 */}
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight mb-2.5">
                  <span className="block bg-gradient-to-b from-white via-[#FFF0BA] to-[#E5AC00] bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)]">
                    {t('course2TitleLine1')}
                  </span>
                  <span className="block bg-gradient-to-b from-white via-[#FFF0BA] to-[#E5AC00] bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)]">
                    {t('course2TitleLine2')}
                  </span>
                </h3>
                <p className="text-xs sm:text-sm text-[#C8C8C8] leading-relaxed mb-6">
                  {t('course2Desc')}
                </p>

                {/* Price / Fee Block */}
                <div className="p-4 rounded-2xl bg-[#F5BE09]/[0.06] border border-[#F5BE09]/20 mb-6">
                  <span className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-[#FFF2B5] via-[#F5BE09] to-[#C99700] bg-clip-text text-transparent tracking-tight">
                    {t('course2Price')}
                  </span>
                </div>

                {/* Curriculum List */}
                <div className="mb-8">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#F5BE09] mb-3.5 flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5" />
                    <span>{t('course2FeatureTitle')}</span>
                  </h4>
                  <div className="flex flex-col gap-3">
                    {course2Features.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5">
                        <div className="w-5 h-5 rounded-full bg-[#F5BE09]/20 text-[#F5BE09] flex items-center justify-center flex-shrink-0 mt-0.5 shadow-[0_0_8px_rgba(245,190,9,0.3)]">
                          <Check className="w-3 h-3 stroke-[2.5]" />
                        </div>
                        <div>
                          <span className="text-xs sm:text-[13.5px] font-semibold text-white block leading-snug">
                            {item.title}
                          </span>
                          <span className="text-[12.5px] sm:text-[13px] text-[#9E9E9E] leading-relaxed">
                            {item.desc}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* CTA Action (Hero Primary Style) */}
              <div className="relative z-10 pt-4 border-t border-white/[0.08]">
                <a
                  href="https://t.me/asikranaforextrading"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    background: 'linear-gradient(110deg, #F6C81A 4%, #FEFB76 18%, #FBCC0D 38%, #FFFA7A 70%, #E9AF03 94%)',
                  }}
                  className="group/btn relative w-full inline-flex items-center justify-center px-6 h-[46px] rounded-full font-semibold text-sm text-[#060606] overflow-hidden border border-white/30 shadow-[0_4px_20px_rgba(246,200,26,0.4),inset_0_1px_1.5px_rgba(255,255,255,0.75),inset_0_-1px_2px_rgba(184,130,0,0.35)] hover:shadow-[0_6px_28px_rgba(246,200,26,0.65),inset_0_1px_2px_rgba(255,255,255,0.9)] active:scale-[0.98] transition-all duration-300"
                >
                  {/* Luxury Multi-Layer Shine Flare (Slower, ultra-smooth glide) */}
                  <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-full z-0">
                    {/* Layer 1: Diffused ambient light halo */}
                    <div className="absolute inset-y-0 left-0 w-56 -translate-x-[140%] skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/30 to-transparent blur-[5px] animate-btn-shine pointer-events-none" />
                    {/* Layer 2: Ultra-crisp diamond specular core */}
                    <div className="absolute inset-y-0 left-0 w-24 -translate-x-[140%] skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/80 to-transparent animate-btn-shine pointer-events-none" />
                  </div>

                  <span className="relative z-10">
                    <RollingContent
                      icon={
                        <svg className="w-4 h-4 fill-current text-[#060606]" viewBox="0 0 24 24">
                          <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.41a8.176 8.176 0 012.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 01-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.03-1.25-.75-.67-1.26-1.5-1.41-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.38-.44.12-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.34-.76-1.84-.2-.49-.4-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.77 2.7 4.29 3.79.6.26 1.07.41 1.44.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.07-.1-.23-.17-.48-.29z"/>
                        </svg>
                      }
                      iconRight={<ArrowUpRight className="w-4 h-4 text-[#060606]" />}
                    >
                      {t('course2Cta')}
                    </RollingContent>
                  </span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* ========================================================
              CARD 3: VIP 1-on-1 Mentorship (NEUTRAL MONOCHROME)
              ======================================================== */}
          <motion.div
            initial={{ opacity: 0, y: 45, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.85, ease: easeCurve, delay: 0.44 }}
            className="order-3 lg:order-3 flex flex-col h-full"
          >
            <div className="relative p-7 sm:p-8 rounded-3xl bg-white/[0.015] border border-white/[0.08] flex flex-col justify-between hover:border-white/20 transition-all duration-300 group/card h-full">
              <div>
                {/* Neutral Badge (Cinematic Gradient) */}
                <div className="flex items-center mb-4">
                  <span className="px-3.5 py-1.5 rounded-full bg-gradient-to-b from-[#2A2A2A] via-[#161616] to-[#0A0A0A] border border-white/20 text-white text-xs font-semibold tracking-wider uppercase flex items-center gap-1.5 shadow-[0_2px_12px_rgba(0,0,0,0.6),inset_0_1px_1px_rgba(255,255,255,0.3)]">
                    <Crown className="w-3.5 h-3.5 text-white/90 drop-shadow" />
                    <span className="drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]">{t('course3Badge')}</span>
                  </span>
                </div>

                {/* Title with Same Gradient applied separately to Line 1 & Line 2 */}
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight mb-2.5">
                  <span className="block bg-gradient-to-b from-white via-[#EEEEEE] to-[#9E9E9E] bg-clip-text text-transparent">
                    {t('course3TitleLine1')}
                  </span>
                  <span className="block bg-gradient-to-b from-white via-[#EEEEEE] to-[#9E9E9E] bg-clip-text text-transparent">
                    {t('course3TitleLine2')}
                  </span>
                </h3>
                <p className="text-xs sm:text-sm text-[#8E8E8E] leading-relaxed mb-6">
                  {t('course3Desc')}
                </p>

                {/* Price / Fee Block (Neutral) */}
                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] mb-6">
                  <span className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-white to-[#9E9E9E] bg-clip-text text-transparent tracking-tight">
                    {t('course3Price')}
                  </span>
                </div>

                {/* Curriculum List (Neutral) */}
                <div className="mb-8">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-white/60 mb-3.5">
                    {t('course3FeatureTitle')}
                  </h4>
                  <div className="flex flex-col gap-2.5">
                    {course3Features.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-[13px] text-[#A8A8A8]">
                        <div className="w-5 h-5 rounded-full bg-white/[0.08] border border-white/10 text-white/70 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3 h-3 stroke-[2.5]" />
                        </div>
                        <span className="leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* CTA Action (Hero Secondary Style) */}
              <div className="pt-4 border-t border-white/[0.06]">
                <a
                  href="#contact"
                  className="group/btn navbar-glass w-full inline-flex items-center justify-center px-7 h-12 rounded-full font-medium text-sm text-[#FFFFFF] active:scale-[0.98] transition-all duration-300"
                >
                  <RollingContent iconRight={<ArrowUpRight className="w-4 h-4 text-[#F5BE09]" />}>
                    {t('course3Cta')}
                  </RollingContent>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}