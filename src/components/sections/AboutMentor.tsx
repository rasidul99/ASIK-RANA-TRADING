'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight, ShieldCheck, CandlestickChart } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { Button, RollingContent } from '@/components/ui/Button';
import { useLanguage } from '@/context/LanguageContext';

export function AboutMentor() {
  const { t } = useLanguage();

  const easeCurve: [number, number, number, number] = [0.16, 1, 0.3, 1];

  const handleApplyMentorship = () => {
    const coursesSection = document.getElementById('courses');
    if (coursesSection) {
      coursesSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.open('https://wa.me/971543675177', '_blank');
    }
  };

  return (
    <section className="relative z-10 w-full py-20 md:py-32 bg-[#060606] overflow-hidden" id="about">
      {/* Ambient background glows (Static) */}
      <div
        className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] pointer-events-none opacity-20 blur-[170px]"
        style={{
          background: 'radial-gradient(circle, rgba(245, 190, 9, 0.2) 0%, transparent 70%)',
        }}
      />
      <div
        className="absolute bottom-10 right-10 w-[500px] h-[400px] pointer-events-none opacity-15 blur-[160px]"
        style={{
          background: 'radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%)',
        }}
      />

      <div className="relative max-w-[1240px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* ========================================================
              LEFT COLUMN: MENTOR FULL PORTRAIT HERO CARD
              ======================================================== */}
          <motion.div
            initial={{ opacity: 0, y: 45, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.85, ease: easeCurve, delay: 0.15 }}
            className="lg:col-span-5 flex flex-col"
          >
            <div className="relative h-full min-h-[520px] sm:min-h-[580px] rounded-3xl overflow-hidden border border-white/[0.12] shadow-[0_25px_60px_rgba(0,0,0,0.85)] flex flex-col justify-end p-6 sm:p-8 group">
              
              {/* Full Card Background Image: Asik Rana */}
              <div className="absolute inset-0 z-0">
                <Image
                  src="/assets/images/asik-rana.png"
                  alt="Asik Rana - Professional Trader & Educator"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-top group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                />
              </div>

              {/* Luxury Cinematic Gradient Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#060606] via-[#060606]/50 to-transparent pointer-events-none z-0" />
              <div className="absolute -bottom-16 -right-16 w-56 h-56 bg-[#F5BE09]/20 rounded-full blur-[70px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0" />

              {/* Bottom Content: Name, Role & Frosted Stats Bar */}
              <div className="relative z-10">
                <div className="mb-4">
                  <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">
                    {t('mentorName')}
                  </h3>
                  <p className="text-sm sm:text-base font-semibold text-[#F5BE09] mt-0.5 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                    {t('mentorRole')}
                  </p>
                </div>

                {/* Frosted Glass Stats Card (Borderless) */}
                <div className="p-4 sm:p-5 rounded-2xl bg-black/50 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.5)] grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-2xl sm:text-3xl font-bold font-serif bg-gradient-to-b from-[#FFF9D2] via-[#F6C81A] to-[#D49E00] bg-clip-text text-transparent tracking-tight">
                      {t('mentorStat1Val')}
                    </div>
                    <div className="text-[11px] sm:text-xs text-[#D0D0D0] font-medium uppercase tracking-wider mt-1">
                      {t('mentorStat1Label')}
                    </div>
                  </div>

                  <div className="border-l border-white/10 pl-4">
                    <div className="text-2xl sm:text-3xl font-bold font-serif bg-gradient-to-b from-[#FFF9D2] via-[#F6C81A] to-[#D49E00] bg-clip-text text-transparent tracking-tight">
                      {t('mentorStat2Val')}
                    </div>
                    <div className="text-[11px] sm:text-xs text-[#D0D0D0] font-medium uppercase tracking-wider mt-1">
                      {t('mentorStat2Label')}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ========================================================
              RIGHT COLUMN: PHILOSOPHY, PILLARS & ACTION BUTTONS
              ======================================================== */}
          <div className="lg:col-span-7 flex flex-col justify-between py-2">
            <div>
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.65, ease: easeCurve, delay: 0.2 }}
                className="mb-2.5 sm:mb-4"
              >
                <Badge text={t('mentorBadge')} isDot />
              </motion.div>

              {/* Core Philosophy Headline (Separate gradient per line) */}
              <motion.blockquote
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.75, ease: easeCurve, delay: 0.28 }}
                className="font-serif text-[18px] xs:text-[20px] sm:text-3xl md:text-[32px] font-normal mb-3 sm:mb-5 tracking-tight leading-[1.22] sm:leading-[1.28]"
              >
                {t('mentorHeadline').split('\n').map((line, idx) => (
                  <span
                    key={idx}
                    className="block bg-gradient-to-b from-white via-[#EEEEEE] to-[#B0B0B0] bg-clip-text text-transparent pb-0.5"
                  >
                    {line}
                  </span>
                ))}
              </motion.blockquote>

              {/* Mentor Bio Paragraph */}
              <motion.p
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.75, ease: easeCurve, delay: 0.36 }}
                className="text-[13px] xs:text-[14px] sm:text-base text-[#A8A8A8] leading-relaxed font-normal mb-4 sm:mb-8"
              >
                {t('mentorBio')}
              </motion.p>

              {/* Two Pillars Grid: 1 row on mobile (2 cols) and 2 cols on sm+ */}
              <div className="grid grid-cols-2 gap-3 sm:gap-5 mb-8 sm:mb-10">
                {/* Pillar 1: Zero Fake Promises */}
                <motion.div
                  initial={{ opacity: 0, y: 30, scale: 0.98 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.75, ease: easeCurve, delay: 0.44 }}
                  className="p-3.5 xs:p-4 sm:p-6 rounded-2xl bg-[#0D0D0D]/90 border border-white/[0.08] hover:border-white/[0.16] shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-8 h-8 xs:w-9 xs:h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-b from-[#F6C81A] to-[#E9AF03] flex items-center justify-center mb-2.5 sm:mb-4 shadow-[0_4px_16px_rgba(246,200,26,0.3)] shrink-0">
                      <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-[#060606] stroke-[2.2]" />
                    </div>
                    <h4 className="text-[13px] xs:text-[14px] sm:text-base font-bold text-white mb-1 sm:mb-1.5 tracking-tight leading-snug">
                      {t('mentorPillar1Title')}
                    </h4>
                  </div>
                  <p className="text-[12.5px] xs:text-[13px] sm:text-sm text-[#A8A8A8] leading-relaxed mt-1">
                    {t('mentorPillar1Desc')}
                  </p>
                </motion.div>

                {/* Pillar 2: Raw Live Chart Breakdowns */}
                <motion.div
                  initial={{ opacity: 0, y: 30, scale: 0.98 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.75, ease: easeCurve, delay: 0.52 }}
                  className="p-3.5 xs:p-4 sm:p-6 rounded-2xl bg-[#0D0D0D]/90 border border-white/[0.08] hover:border-white/[0.16] shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-8 h-8 xs:w-9 xs:h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-b from-[#F6C81A] to-[#E9AF03] flex items-center justify-center mb-2.5 sm:mb-4 shadow-[0_4px_16px_rgba(246,200,26,0.3)] shrink-0">
                      <CandlestickChart className="w-4 h-4 sm:w-5 sm:h-5 text-[#060606] stroke-[2.2]" />
                    </div>
                    <h4 className="text-[13px] xs:text-[14px] sm:text-base font-bold text-white mb-1 sm:mb-1.5 tracking-tight leading-snug">
                      {t('mentorPillar2Title')}
                    </h4>
                  </div>
                  <p className="text-[12.5px] xs:text-[13px] sm:text-sm text-[#A8A8A8] leading-relaxed mt-1">
                    {t('mentorPillar2Desc')}
                  </p>
                </motion.div>
              </div>
            </div>

            {/* Action Buttons: 1 row on mobile (2 cols) and inline-flex on sm+ */}
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: easeCurve, delay: 0.6 }}
              className="grid grid-cols-2 sm:flex sm:flex-row sm:items-center gap-2.5 sm:gap-4 pt-2"
            >
              <Button
                variant="primary"
                href="https://t.me/asikrana41"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto !px-2 xs:!px-3 sm:!px-7 text-xs xs:text-[13px] sm:text-sm h-11 sm:h-[46px] justify-center text-center"
              >
                {t('mentorCtaPrimary')}
              </Button>

              <a
                href="https://t.me/Asikrana41bd"
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn navbar-glass px-2 xs:px-3 sm:px-7 h-11 sm:h-[46px] rounded-full font-medium text-xs xs:text-[13px] sm:text-sm text-white hover:text-[#F5BE09] border border-white/15 hover:border-[#F5BE09]/50 active:scale-[0.98] transition-all duration-300 flex items-center justify-center text-center truncate"
              >
                <RollingContent iconRight={<ArrowUpRight className="w-3.5 h-3.5 text-[#F5BE09] shrink-0" />}>
                  {t('mentorCtaSecondary')}
                </RollingContent>
              </a>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
