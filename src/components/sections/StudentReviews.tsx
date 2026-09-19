'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/Badge';
import { useLanguage } from '@/context/LanguageContext';

export function StudentReviews() {
  const { t, language } = useLanguage();

  const easeCurve: [number, number, number, number] = [0.16, 1, 0.3, 1];

  const reviewsRow1 = [
    {
      id: 1,
      quote: t('review1Quote'),
      initials: t('review1Initials'),
      name: t('review1Name'),
      role: t('review1Role'),
    },
    {
      id: 2,
      quote: t('review2Quote'),
      initials: t('review2Initials'),
      name: t('review2Name'),
      role: t('review2Role'),
    },
    {
      id: 3,
      quote: t('review3Quote'),
      initials: t('review3Initials'),
      name: t('review3Name'),
      role: t('review3Role'),
    },
  ];

  const reviewsRow2 = [
    {
      id: 4,
      quote: t('review4Quote'),
      initials: t('review4Initials'),
      name: t('review4Name'),
      role: t('review4Role'),
    },
    {
      id: 5,
      quote: t('review5Quote'),
      initials: t('review5Initials'),
      name: t('review5Name'),
      role: t('review5Role'),
    },
    {
      id: 6,
      quote: t('review6Quote'),
      initials: t('review6Initials'),
      name: t('review6Name'),
      role: t('review6Role'),
    },
  ];

  const renderCard = (item: (typeof reviewsRow1)[0], uniqueKey: string) => (
    <div
      key={uniqueKey}
      className="w-[290px] xs:w-[330px] sm:w-[420px] md:w-[460px] shrink-0 p-5 xs:p-6 sm:p-7 rounded-2xl sm:rounded-3xl bg-[#121212] shadow-[0_12px_35px_rgba(0,0,0,0.6)] flex flex-col justify-between select-none"
    >
      {/* Review Text - Regular text, no italic */}
      <p className="text-[13px] xs:text-[13.5px] sm:text-[15px] text-[#D0D0D0] font-normal leading-relaxed mb-4 sm:mb-6 not-italic">
        &ldquo;{item.quote}&rdquo;
      </p>

      {/* Student Profile Info */}
      <div className="flex items-center gap-3">
        {/* Initials Monogram Tile */}
        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white/[0.08] flex items-center justify-center text-xs sm:text-sm font-bold text-white shrink-0">
          {item.initials}
        </div>

        {/* Name and Role */}
        <div>
          <h4 className="text-sm sm:text-[15px] font-bold text-white tracking-tight leading-tight">
            {item.name}
          </h4>
          <p className="text-[12px] sm:text-[13px] text-[#8E8E8E] font-normal mt-0.5">
            {item.role}
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <section className="relative z-10 w-full py-12 sm:py-16 md:py-28 bg-[#060606] overflow-hidden" id="reviews">
      {/* Background Ambient Glows (Static) */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[550px] pointer-events-none opacity-20 blur-[180px]"
        style={{
          background: 'radial-gradient(circle, rgba(245, 190, 9, 0.16) 0%, transparent 70%)',
        }}
      />

      <div className="relative max-w-[1240px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-8 sm:mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.65, ease: easeCurve }}
          >
            <Badge text={t('reviewsBadge')} isDot />
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
            {t('reviewsTitle')}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.75, ease: easeCurve, delay: 0.2 }}
            className="text-sm sm:text-base font-normal text-[#A8A8A8] max-w-[680px] text-balance leading-relaxed"
          >
            {t('reviewsSubtitle')}
          </motion.p>
        </div>

        {/* 2-Row Infinite Seamless Marquee with Edge Gradient Masks */}
        <div className="relative w-full space-y-4 sm:space-y-5 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
          
          {/* Row 1: Right to Left (dan theke bame) */}
          <motion.div
            initial={{ opacity: 0, y: 35, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.8, ease: easeCurve, delay: 0.25 }}
          >
            <div className="flex w-max animate-marquee hover:[animation-play-state:paused] will-change-transform transform-gpu py-1">
              <div className="flex shrink-0 gap-3.5 sm:gap-5 pr-3.5 sm:pr-5">
                {[...reviewsRow1, ...reviewsRow1].map((item, idx) =>
                  renderCard(item, `r1-a-${idx}`)
                )}
              </div>
              <div className="flex shrink-0 gap-3.5 sm:gap-5 pr-3.5 sm:pr-5" aria-hidden="true">
                {[...reviewsRow1, ...reviewsRow1].map((item, idx) =>
                  renderCard(item, `r1-b-${idx}`)
                )}
              </div>
            </div>
          </motion.div>

          {/* Row 2: Left to Right (bam theke dane) */}
          <motion.div
            initial={{ opacity: 0, y: 35, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.8, ease: easeCurve, delay: 0.38 }}
          >
            <div className="flex w-max animate-marquee-reverse hover:[animation-play-state:paused] will-change-transform transform-gpu py-1">
              <div className="flex shrink-0 gap-3.5 sm:gap-5 pr-3.5 sm:pr-5">
                {[...reviewsRow2, ...reviewsRow2].map((item, idx) =>
                  renderCard(item, `r2-a-${idx}`)
                )}
              </div>
              <div className="flex shrink-0 gap-3.5 sm:gap-5 pr-3.5 sm:pr-5" aria-hidden="true">
                {[...reviewsRow2, ...reviewsRow2].map((item, idx) =>
                  renderCard(item, `r2-b-${idx}`)
                )}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
