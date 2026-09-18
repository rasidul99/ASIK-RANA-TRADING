'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { X, Check, AlertTriangle, ShieldCheck } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { Badge } from '@/components/ui/Badge';

export function ComparisonSection() {
  const { t, language } = useLanguage();

  const easeCurve: [number, number, number, number] = [0.16, 1, 0.3, 1];

  const badHabits = [
    t('compareBad1'),
    t('compareBad2'),
    t('compareBad3'),
    t('compareBad4'),
  ];

  const goodHabits = [
    {
      title: t('compareGood1Title'),
      desc: t('compareGood1Desc'),
    },
    {
      title: t('compareGood2Title'),
      desc: t('compareGood2Desc'),
    },
    {
      title: t('compareGood3Title'),
      desc: t('compareGood3Desc'),
    },
    {
      title: t('compareGood4Title'),
      desc: t('compareGood4Desc'),
    },
  ];

  return (
    <section className="relative z-10 w-full py-16 md:py-24 bg-[#060606] overflow-hidden" id="comparison">
      {/* Ambient background glow (Static) */}
      <div
        className="absolute top-1/2 right-10 -translate-y-1/2 w-[500px] h-[500px] pointer-events-none opacity-30 blur-[130px]"
        style={{
          background: 'radial-gradient(circle, rgba(245, 190, 9, 0.2) 0%, transparent 70%)',
        }}
      />
      <div
        className="absolute top-1/2 left-10 -translate-y-1/2 w-[450px] h-[450px] pointer-events-none opacity-20 blur-[130px]"
        style={{
          background: 'radial-gradient(circle, rgba(239, 68, 68, 0.2) 0%, transparent 70%)',
        }}
      />

      <div className="relative max-w-[1240px] mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.65, ease: easeCurve }}
          >
            <Badge text={t('compareBadge')} isDot />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.75, ease: easeCurve, delay: 0.1 }}
            className={`font-serif text-3xl sm:text-4xl md:text-[42px] lg:text-[46px] font-normal mt-4 mb-4 tracking-tight max-w-[1040px] bg-gradient-to-b from-white via-[#EEEEEE] to-[#9E9E9E] bg-clip-text text-transparent transition-all ${
              language === 'BN' ? 'leading-[1.24] md:leading-[1.28]' : 'leading-[1.1] md:leading-[1.14]'
            }`}
          >
            {t('compareTitle')}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.75, ease: easeCurve, delay: 0.2 }}
            className="text-sm sm:text-base font-normal text-[#A8A8A8] max-w-[720px] text-balance leading-relaxed"
          >
            {t('compareSubtitle')}
          </motion.p>
        </div>

        {/* 2-Column Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 max-w-[1180px] mx-auto items-stretch">
          {/* Left Column: Fatal Amateur Trader Mistakes */}
          <motion.div
            initial={{ opacity: 0, y: 45, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.85, ease: easeCurve, delay: 0.25 }}
            className="relative p-6 sm:p-8 md:p-9 rounded-3xl bg-gradient-to-b from-red-500/[0.04] via-white/[0.02] to-transparent border border-red-500/20 shadow-[0_10px_40px_rgba(0,0,0,0.6)] flex flex-col justify-between hover:border-red-500/35 transition-all duration-300"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-red-600 via-red-800 to-[#3b0707] border border-red-400/40 text-white text-[11px] sm:text-xs font-bold tracking-wider uppercase mb-3.5 shadow-[0_2px_14px_rgba(220,38,38,0.5),inset_0_1px_1px_rgba(255,255,255,0.35)]">
                <AlertTriangle className="w-3.5 h-3.5 text-white stroke-[2.5] drop-shadow" />
                <span className="drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">{t('compareBadTag')}</span>
              </div>
              <h3 className="text-2xl sm:text-[26px] font-bold text-white mb-1 tracking-tight">
                {t('compareBadTitle')}
              </h3>
              <p className="text-sm text-red-300/80 mb-6 font-medium">
                {t('compareBadSubtitle')}
              </p>

              <div className="flex flex-col gap-3.5">
                {badHabits.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3.5 p-3.5 sm:p-4 rounded-2xl bg-white/[0.02] border border-white/[0.04] hover:bg-red-500/[0.03] transition-colors"
                  >
                    <div className="w-6 h-6 rounded-full bg-red-500/15 border border-red-500/30 text-red-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <X className="w-3.5 h-3.5 stroke-[2.5]" />
                    </div>
                    <p className="text-sm sm:text-[14px] text-[#C4C4C4] leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: The Asik Rana Method & Blueprint */}
          <motion.div
            initial={{ opacity: 0, y: 45, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.85, ease: easeCurve, delay: 0.4 }}
            className="relative p-6 sm:p-8 md:p-9 rounded-3xl bg-gradient-to-b from-[#FFE79A] via-[#F5BE09] to-[#C99700] border border-[#FFE79A]/80 shadow-[0_20px_60px_rgba(245,190,9,0.35),inset_0_1px_2px_rgba(255,255,255,0.7)] flex flex-col justify-between hover:shadow-[0_25px_70px_rgba(245,190,9,0.45)] transition-all duration-300"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-b from-[#1c1c1c] via-[#0c0c0c] to-[#000000] border border-white/25 text-[#FFE79A] text-[11px] sm:text-xs font-bold tracking-wider uppercase mb-3.5 shadow-[0_4px_16px_rgba(0,0,0,0.6),inset_0_1px_1px_rgba(255,255,255,0.3)]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#F5BE09] stroke-[2.5] drop-shadow" />
                <span className="drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]">{t('compareGoodTag')}</span>
              </div>
              <h3 className="text-2xl sm:text-[26px] font-bold text-black mb-1 tracking-tight">
                {t('compareGoodTitle')}
              </h3>
              <p className="text-sm text-black/80 mb-6 font-semibold">
                {t('compareGoodSubtitle')}
              </p>

              <div className="flex flex-col gap-3.5">
                {goodHabits.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3.5 p-3.5 sm:p-4 rounded-2xl bg-white/30 border border-white/45 shadow-[0_2px_10px_rgba(0,0,0,0.04),inset_0_1px_1px_rgba(255,255,255,0.7)] backdrop-blur-sm hover:bg-white/45 hover:border-white/60 transition-all duration-200"
                  >
                    <div className="w-6 h-6 rounded-full bg-black text-[#F5BE09] flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <div>
                      <h4 className="text-sm sm:text-[15px] font-bold text-black leading-snug mb-0.5">
                        {item.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-black/85 font-medium leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
