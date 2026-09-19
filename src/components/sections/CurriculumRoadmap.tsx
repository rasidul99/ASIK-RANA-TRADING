'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  TrendingUp,
  BarChart3,
  Layers,
  ShieldCheck,
  Brain,
  BookOpenCheck,
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { Badge } from '@/components/ui/Badge';

export function CurriculumRoadmap() {
  const { t, language } = useLanguage();

  const easeCurve: [number, number, number, number] = [0.16, 1, 0.3, 1];

  const pillars = [
    {
      title: t('pillar1Title'),
      desc: t('pillar1Desc'),
      icon: <TrendingUp className="w-5 h-5 text-[#060606]" />,
    },
    {
      title: t('pillar2Title'),
      desc: t('pillar2Desc'),
      icon: <BarChart3 className="w-5 h-5 text-[#060606]" />,
    },
    {
      title: t('pillar3Title'),
      desc: t('pillar3Desc'),
      icon: <Layers className="w-5 h-5 text-[#060606]" />,
    },
    {
      title: t('pillar4Title'),
      desc: t('pillar4Desc'),
      icon: <ShieldCheck className="w-5 h-5 text-[#060606]" />,
    },
    {
      title: t('pillar5Title'),
      desc: t('pillar5Desc'),
      icon: <Brain className="w-5 h-5 text-[#060606]" />,
    },
    {
      title: t('pillar6Title'),
      desc: t('pillar6Desc'),
      icon: <BookOpenCheck className="w-5 h-5 text-[#060606]" />,
    },
  ];

  return (
    <section className="relative z-10 w-full py-20 md:py-28 bg-[#060606] overflow-hidden" id="curriculum">
      {/* Subtle ambient radial backdrop glow (Static) */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] pointer-events-none opacity-20 blur-[160px]"
        style={{
          background: 'radial-gradient(circle, rgba(245, 190, 9, 0.22) 0%, transparent 70%)',
        }}
      />

      <div className="relative max-w-[1240px] mx-auto px-3.5 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-10 md:mb-18">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.65, ease: easeCurve }}
          >
            <Badge text={t('roadmapBadge')} isDot />
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
            {t('roadmapTitle')}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.75, ease: easeCurve, delay: 0.2 }}
            className="text-[15.5px] sm:text-[17px] md:text-[18.5px] font-normal text-[#C8C8C8] max-w-[760px] text-balance leading-relaxed"
          >
            {t('roadmapSubtitle')}
          </motion.p>
        </div>

        {/* 6 Core Pillars Grid: 2 columns on mobile, 3 columns on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5 md:gap-6 lg:gap-7 items-stretch">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 35, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.75,
                ease: easeCurve,
                delay: 0.15 + idx * 0.07,
              }}
              className="h-full"
            >
              <div className="relative h-full p-3.5 xs:p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl border border-white/[0.08] shadow-[0_15px_40px_rgba(0,0,0,0.6)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.85)] transition-all duration-300 flex flex-col justify-between group/card overflow-hidden">
                {/* Card Background Image */}
                <div className="absolute inset-0 pointer-events-none z-0">
                  <Image
                    src="/assets/images/core-card-bg.png"
                    alt={pillar.title}
                    fill
                    className="object-cover object-right-top scale-[1.25] group-hover/card:scale-[1.35] transition-transform duration-700 ease-out"
                  />
                </div>

                {/* Dark Overlay Layer (Dark by default, illuminates / becomes lighter on hover) */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/65 to-black/85 group-hover/card:from-black/35 group-hover/card:via-black/15 group-hover/card:to-black/35 transition-all duration-500 ease-out pointer-events-none z-0" />

                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div>
                    {/* Icon Tile */}
                    <div className="mb-3 sm:mb-5 md:mb-6">
                      <div
                        style={{
                          background: 'linear-gradient(110deg, #F6C81A 4%, #FEFB76 18%, #FBCC0D 38%, #FFFA7A 70%, #E9AF03 94%)',
                        }}
                        className="w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-xl sm:rounded-2xl border border-white/40 flex items-center justify-center shadow-[0_4px_16px_rgba(246,200,26,0.35),inset_0_1px_1.5px_rgba(255,255,255,0.75),inset_0_-1px_2px_rgba(184,130,0,0.35)] transition-all duration-300 [&>svg]:w-4 [&>svg]:h-4 sm:[&>svg]:w-5 sm:[&>svg]:h-5"
                      >
                        {pillar.icon}
                      </div>
                    </div>

                    {/* Pillar Title */}
                    <h3 className="text-[14.5px] xs:text-[15.5px] sm:text-lg md:text-xl font-bold text-white group-hover/card:text-[#FFE79A] transition-colors duration-300 mb-1.5 sm:mb-2.5 tracking-tight leading-snug">
                      {pillar.title}
                    </h3>

                    {/* Pillar Description */}
                    <p className="text-[13.5px] xs:text-[14px] sm:text-[15px] md:text-[15.5px] text-[#BEBEBE] leading-relaxed font-normal">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
