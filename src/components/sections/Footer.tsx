'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

export function Footer() {
  const { t, language } = useLanguage();

  const easeCurve: [number, number, number, number] = [0.16, 1, 0.3, 1];

  const socials = [
    {
      name: 'Telegram',
      icon: '/assets/images/Social media icons/Telegram.png',
      href: 'https://t.me/Asikrana41bd',
    },
    {
      name: 'YouTube',
      icon: '/assets/images/Social media icons/Youtube.png',
      href: 'https://youtube.com/@asikrana4141',
    },
    {
      name: 'WhatsApp',
      icon: '/assets/images/Social media icons/Whatsapp.png',
      href: 'https://whatsapp.com/channel/0029VbBEhM77DAWzHE4HTu1b',
    },
    {
      name: 'TikTok',
      icon: '/assets/images/Social media icons/Tiktok.png',
      href: 'https://www.tiktok.com/@traderasikrana41',
    },
    {
      name: 'Facebook',
      icon: '/assets/images/Social media icons/Facebook.png',
      href: 'https://www.facebook.com/asikrana41',
    },
    {
      name: 'All Links',
      icon: '/assets/images/Social media icons/Instagram.png',
      href: 'https://linktr.ee/asikrana',
    },
  ];

  return (
    <footer className="relative z-10 w-full bg-[#030303] border-t border-white/[0.06] pt-16 md:pt-20 pb-12 overflow-hidden" id="footer">
      {/* Background Soft Glows (Static) */}
      <div
        className="absolute top-0 left-1/4 w-[600px] h-[300px] pointer-events-none opacity-10 blur-[160px]"
        style={{
          background: 'radial-gradient(circle, #F5BE09 0%, transparent 70%)',
        }}
      />
      <div
        className="absolute bottom-0 right-1/4 w-[500px] h-[250px] pointer-events-none opacity-10 blur-[140px]"
        style={{
          background: 'radial-gradient(circle, #FFFFFF 0%, transparent 70%)',
        }}
      />

      <div className="relative max-w-[1240px] mx-auto px-6">
        {/* ========================================================
            TOP ROW: BRAND & POWER STATEMENT
            ======================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.75, ease: easeCurve, delay: 0.1 }}
          className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8 pb-12 border-b border-white/[0.06]"
        >
          <div className="flex flex-col items-start max-w-[620px]">
            {/* Logo */}
            <a href="#" className="inline-block transition-opacity hover:opacity-85 mb-4">
              <Image
                src="/assets/images/logo.svg"
                alt="ASIK RANA"
                width={138}
                height={28}
                className="w-auto h-7 object-contain"
              />
            </a>

            {/* Power Tagline */}
            <h2 className="font-serif text-3xl sm:text-4xl md:text-[42px] font-normal tracking-tight text-white leading-tight mt-1">
              {language === 'EN' ? (
                <>
                  AI Precision <span className="text-[#F5BE09]">+</span> Human Control.
                </>
              ) : (
                t('footerTagline')
              )}
            </h2>

            <p className="text-sm sm:text-base text-[#8E8E8E] leading-relaxed mt-3 font-normal">
              {t('footerDesc')}
            </p>
          </div>

          {/* Social Icons Row */}
          <div className="flex flex-col items-start lg:items-end gap-3 shrink-0">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#737373]">
              {t('footerJoinSocial')}
            </span>
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-[#0F0F0F] border border-white/[0.08] hover:border-[#F5BE09]/50 hover:bg-[#161616] flex items-center justify-center transition-all duration-300 hover:scale-105 hover:shadow-[0_4px_16px_rgba(245,190,9,0.18)] group"
                >
                  <Image
                    src={social.icon}
                    alt={social.name}
                    width={24}
                    height={24}
                    className="w-5 h-5 sm:w-6 sm:h-6 object-contain group-hover:brightness-110 transition-all"
                  />
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ========================================================
            MIDDLE ROW: NAVIGATION LINKS
            ======================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.75, ease: easeCurve, delay: 0.25 }}
          className="pt-10 pb-12"
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-12 lg:gap-24 max-w-[880px]">
            {/* Column 1: Main Platform */}
            <div className="flex flex-col gap-3">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#737373] mb-1">
                {t('footerColPlatform')}
              </span>
              <a href="#" className="text-sm text-[#A8A8A8] hover:text-white transition-colors">
                {t('footerNavHome')}
              </a>
              <a href="#comparison" className="text-sm text-[#A8A8A8] hover:text-white transition-colors">
                {t('footerNavTruth')}
              </a>
              <a href="#trusted-platforms" className="text-sm text-[#A8A8A8] hover:text-white transition-colors">
                {t('footerNavPlatforms')}
              </a>
              <a href="#classes" className="text-sm text-[#A8A8A8] hover:text-white transition-colors">
                {t('footerNavLive')}
              </a>
              <a href="#curriculum" className="text-sm text-[#A8A8A8] hover:text-white transition-colors">
                {t('footerNavCurriculum')}
              </a>
              <a href="#ecosystem" className="text-sm text-[#A8A8A8] hover:text-white transition-colors">
                {t('footerNavEcosystem')}
              </a>
            </div>

            {/* Column 2: Mentorship */}
            <div className="flex flex-col gap-3">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#737373] mb-1">
                {t('footerColMentorship')}
              </span>
              <a href="#about" className="text-sm text-[#A8A8A8] hover:text-white transition-colors">
                {t('footerNavMentor')}
              </a>
              <a href="#courses" className="text-sm text-[#A8A8A8] hover:text-white transition-colors">
                {t('footerNavCourses')}
              </a>
              <a href="#process" className="text-sm text-[#A8A8A8] hover:text-white transition-colors">
                {t('footerNavProcess')}
              </a>
              <a href="#reviews" className="text-sm text-[#A8A8A8] hover:text-white transition-colors">
                {t('footerNavReviews')}
              </a>
              <a href="#faq" className="text-sm text-[#A8A8A8] hover:text-white transition-colors">
                {t('footerNavFaq')}
              </a>
              <a
                href="https://t.me/Asikrana41bd"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#F5BE09] hover:underline transition-all"
              >
                {t('footerNavTg')}
              </a>
            </div>

            {/* Column 3: Contact & Support */}
            <div className="flex flex-col gap-3 col-span-2 sm:col-span-1">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#737373] mb-1">
                {t('footerColSupport')}
              </span>
              <a
                href="https://whatsapp.com/channel/0029VbBEhM77DAWzHE4HTu1b"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#A8A8A8] hover:text-[#25D366] transition-colors"
              >
                {t('footerNavWa')}
              </a>
              <a
                href="https://t.me/asikrana41"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#A8A8A8] hover:text-[#0088cc] transition-colors"
              >
                Telegram: @asikrana41
              </a>
              <a
                href="#courses"
                className="text-sm text-[#A8A8A8] hover:text-white transition-colors"
              >
                {t('footerNavEnroll')}
              </a>
              <span className="text-xs text-[#525252] leading-relaxed pt-2 whitespace-pre-line">
                {t('footerSupportTime')}
              </span>
            </div>
          </div>
        </motion.div>

        {/* ========================================================
            BOTTOM BAR: COPYRIGHT & LEGAL
            ======================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: easeCurve, delay: 0.38 }}
          className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#666666]"
        >
          <p>{t('footerRights')}</p>

          <div className="flex flex-wrap items-center justify-center gap-6">
            <a href="#" className="hover:text-[#A8A8A8] transition-colors">
              {t('footerPrivacy')}
            </a>
            <span className="text-white/10">•</span>
            <a href="#" className="hover:text-[#A8A8A8] transition-colors">
              {t('footerTerms')}
            </a>
            <span className="text-white/10">•</span>
            <span className="text-[#555555] max-w-[340px] text-center sm:text-right hidden md:inline">
              {t('footerDisclaimer')}
            </span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
