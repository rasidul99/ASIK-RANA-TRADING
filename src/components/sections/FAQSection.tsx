'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { useLanguage } from '@/context/LanguageContext';

export function FAQSection() {
  const { t, language } = useLanguage();
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const easeCurve: [number, number, number, number] = [0.16, 1, 0.3, 1];

  const faqs = [
    {
      q: t('faq1Q'),
      a: t('faq1A'),
    },
    {
      q: t('faq2Q'),
      a: t('faq2A'),
    },
    {
      q: t('faq3Q'),
      a: t('faq3A'),
    },
    {
      q: t('faq4Q'),
      a: t('faq4A'),
    },
    {
      q: t('faq5Q'),
      a: t('faq5A'),
    },
  ];

  const toggleFAQ = (idx: number) => {
    setOpenIdx((prev) => (prev === idx ? null : idx));
  };

  return (
    <section className="relative z-10 w-full py-12 sm:py-16 md:py-24 lg:py-28 bg-[#060606] overflow-hidden" id="faq">
      {/* Background Ambient Glows (Static) */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[550px] pointer-events-none opacity-20 blur-[180px]"
        style={{
          background: 'radial-gradient(circle, rgba(245, 190, 9, 0.16) 0%, transparent 70%)',
        }}
      />

      <div className="relative max-w-[1240px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 xl:gap-14 items-start">
          {/* Left Column: Badge, Heading, Subtitle & Bull/Bear Image */}
          <div className="lg:col-span-6 xl:col-span-5 flex flex-col items-start text-left lg:sticky lg:top-24">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.65, ease: easeCurve }}
            >
              <Badge text={t('faqBadge')} isDot />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.75, ease: easeCurve, delay: 0.1 }}
              className={`font-serif text-[26px] xs:text-3xl sm:text-[34px] md:text-4xl lg:text-[38px] xl:text-[42px] font-normal mt-3.5 sm:mt-4 mb-2.5 sm:mb-3 tracking-tight bg-gradient-to-b from-white via-[#EEEEEE] to-[#9E9E9E] bg-clip-text text-transparent ${
                language === 'BN' ? 'leading-[1.24] lg:leading-[1.28]' : 'leading-[1.12] lg:leading-[1.16]'
              }`}
            >
              {t('faqTitle')}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.75, ease: easeCurve, delay: 0.2 }}
              className="text-sm sm:text-base font-normal text-[#A8A8A8] max-w-[460px] leading-relaxed"
            >
              {t('faqSubtitle')}
            </motion.p>

            {/* Bull and Bear Gold Illustration Image */}
            <motion.div
              initial={{ opacity: 0, y: 35, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.85, ease: easeCurve, delay: 0.3 }}
              className="relative mt-4 sm:mt-6 lg:mt-10 w-full flex items-center justify-center lg:justify-start"
            >
              <div
                className="absolute inset-0 w-4/5 h-4/5 pointer-events-none opacity-25 blur-[50px]"
                style={{
                  background: 'radial-gradient(circle, rgba(245, 190, 9, 0.45) 0%, transparent 70%)',
                }}
              />
              <img
                src="/assets/images/faq-illustration.webp"
                alt="Bull and Bear Market Gold Sculpture"
                className="relative z-10 w-full max-w-[220px] xs:max-w-[260px] sm:max-w-[320px] lg:max-w-[390px] h-auto object-contain drop-shadow-[0_15px_30px_rgba(245,190,9,0.14)]"
              />
            </motion.div>
          </div>

          {/* Right Column: Questions Accordion */}
          <div className="lg:col-span-6 xl:col-span-7 space-y-2.5 sm:space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openIdx === idx;

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30, scale: 0.98 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.75, ease: easeCurve, delay: 0.18 + idx * 0.08 }}
                >
                  <div
                    className={`relative rounded-[12px] sm:rounded-[14px] transition-all duration-300 overflow-hidden ${
                      isOpen
                        ? 'border border-[#F5BE09]/35 shadow-[0_4px_30px_rgba(245,190,9,0.06)]'
                        : 'bg-[#0E0E0E] border border-white/[0.08] hover:border-white/[0.16]'
                    }`}
                    style={
                      isOpen
                        ? {
                            background:
                              'radial-gradient(ellipse 90% 120% at 50% 0%, rgba(245, 190, 9, 0.18) 0%, rgba(24, 20, 10, 0.55) 45%, #0D0D0D 100%)',
                          }
                        : undefined
                    }
                  >
                    {/* Subtle Framer Glow Asset when open */}
                    {isOpen && (
                      <div
                        className="absolute inset-0 pointer-events-none opacity-40 mix-blend-screen"
                        style={{
                          backgroundImage: 'url(/assets/images/faq-glow.png)',
                          backgroundSize: '100% 100%',
                          backgroundRepeat: 'no-repeat',
                        }}
                      />
                    )}

                    {/* Question Trigger */}
                    <button
                      type="button"
                      onClick={() => toggleFAQ(idx)}
                      className="relative z-10 w-full px-4 py-3 sm:px-6 sm:py-4 lg:px-7 lg:py-5 flex items-center justify-between text-left gap-3 sm:gap-4 group transition-colors"
                      aria-expanded={isOpen}
                    >
                      <span
                        className={`text-[13.5px] xs:text-[14.5px] sm:text-[16px] lg:text-[17.5px] font-medium tracking-tight transition-colors leading-snug ${
                          isOpen ? 'text-[#FFC72C]' : 'text-white'
                        }`}
                      >
                        {faq.q}
                      </span>

                      <div className="shrink-0 transition-colors">
                        {isOpen ? (
                          <Minus className="w-4 h-4 sm:w-5 sm:h-5 text-[#FFC72C] stroke-[1.75]" />
                        ) : (
                          <Plus className="w-4 h-4 sm:w-5 sm:h-5 text-white/60 group-hover:text-white stroke-[1.75]" />
                        )}
                      </div>
                    </button>

                    {/* Collapsible Answer without divider line */}
                    {isOpen && (
                      <div className="relative z-10 px-4 pb-3.5 pt-0 sm:px-6 sm:pb-5 lg:px-7 lg:pb-6 transition-all duration-300">
                        <p className="text-[13px] xs:text-[13.5px] sm:text-sm lg:text-[14.5px] text-[#A3A3A3] leading-relaxed font-normal">
                          {faq.a}
                        </p>
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
