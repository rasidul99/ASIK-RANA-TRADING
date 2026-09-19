'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight, Check } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { RollingContent } from '@/components/ui/Button';
import { useLanguage } from '@/context/LanguageContext';

export function OurEcosystem() {
  const { t, language } = useLanguage();
  const [activeIdx, setActiveIdx] = useState(0);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const easeCurve: [number, number, number, number] = [0.16, 1, 0.3, 1];

  const socialChannels = [
    {
      id: 'telegram',
      title: t('ecoTgTitle'),
      badge: t('ecoTgBadge'),
      desc: t('ecoTgDesc'),
      cta: t('ecoTgCta'),
      link: 'https://t.me/Asikrana41bd',
      accentColor: '#F5BE09',
      glowColor: 'rgba(245, 190, 9, 0.35)',
      icon: '/assets/images/Social media icons/Telegram.png',
      features:
        language === 'BN'
          ? [
              'বাইনারি চ্যানেল: @Asikrana41bd (ফ্রি সিগন্যাল ও ট্রেড)',
              'ফরেক্স চ্যানেল: @asikranaforextrading (মার্কেট আউটলুক)',
              'প্রতিদিনের লাইভ চার্ট অ্যানালাইসিস ও রিয়েল-টাইম আপডেট',
            ]
          : [
              'Binary Channel: @Asikrana41bd (Free Signals & Trades)',
              'Forex Channel: @asikranaforextrading (Market Outlook)',
              'Daily live chart analysis & instant updates',
            ],
      buttons:
        language === 'BN'
          ? [
              { label: 'বাইনারি টেলিগ্রাম', link: 'https://t.me/Asikrana41bd', isPrimary: true },
              { label: 'ফরেক্স টেলিগ্রাম', link: 'https://t.me/asikranaforextrading', isPrimary: false },
            ]
          : [
              { label: 'Binary Telegram', link: 'https://t.me/Asikrana41bd', isPrimary: true },
              { label: 'Forex Telegram', link: 'https://t.me/asikranaforextrading', isPrimary: false },
            ],
    },
    {
      id: 'youtube',
      title: t('ecoYtTitle'),
      badge: t('ecoYtBadge'),
      desc: t('ecoYtDesc'),
      cta: t('ecoYtCta'),
      link: 'https://youtube.com/@asikrana4141',
      accentColor: '#F5BE09',
      glowColor: 'rgba(245, 190, 9, 0.35)',
      icon: '/assets/images/Social media icons/Youtube.png',
      features:
        language === 'BN'
          ? [
              'মেইন বাইনারি চ্যানেল: @asikrana4141',
              'ফরেক্স চ্যানেল: @asikranafx',
              '২০০+ ফ্রি ইন-ডেপথ ভিডিও টিউটোরিয়াল ও লাইভ ক্লাস',
            ]
          : [
              'Main Binary Channel: @asikrana4141',
              'Forex Channel: @asikranafx',
              '200+ free in-depth video tutorials & live classes',
            ],
      buttons:
        language === 'BN'
          ? [
              { label: 'বাইনারি ইউটিউব', link: 'https://youtube.com/@asikrana4141', isPrimary: true },
              { label: 'ফরেক্স ইউটিউব', link: 'https://youtube.com/@asikranafx', isPrimary: false },
            ]
          : [
              { label: 'Binary YouTube', link: 'https://youtube.com/@asikrana4141', isPrimary: true },
              { label: 'Forex YouTube', link: 'https://youtube.com/@asikranafx', isPrimary: false },
            ],
    },
    {
      id: 'facebook',
      title: t('ecoFbTitle'),
      badge: t('ecoFbBadge'),
      desc: t('ecoFbDesc'),
      cta: t('ecoFbCta'),
      link: 'https://www.facebook.com/asikrana41',
      accentColor: '#F5BE09',
      glowColor: 'rgba(245, 190, 9, 0.35)',
      icon: '/assets/images/Social media icons/Facebook.png',
      features:
        language === 'BN'
          ? [
              'মেইন অফিসিয়াল পেজ: /asikrana41',
              'ফরেক্স ট্রেডিং পেজ: /asikranafx',
              'নিয়মিত মার্কেট আপডেট, ভিডিও ও ট্রেডার্স কমিউনিটি',
            ]
          : [
              'Main Official Page: /asikrana41',
              'Forex Trading Page: /asikranafx',
              'Daily market updates, videos & trader community',
            ],
      buttons:
        language === 'BN'
          ? [
              { label: 'মেইন ফেসবুক পেজ', link: 'https://www.facebook.com/asikrana41', isPrimary: true },
              { label: 'ফরেক্স ফেসবুক পেজ', link: 'https://www.facebook.com/asikranafx', isPrimary: false },
            ]
          : [
              { label: 'Main Facebook Page', link: 'https://www.facebook.com/asikrana41', isPrimary: true },
              { label: 'Forex Facebook Page', link: 'https://www.facebook.com/asikranafx', isPrimary: false },
            ],
    },
    {
      id: 'tiktok',
      title: t('ecoTtTitle'),
      badge: t('ecoTtBadge'),
      desc: t('ecoTtDesc'),
      cta: t('ecoTtCta'),
      link: 'https://www.tiktok.com/@traderasikrana41',
      accentColor: '#F5BE09',
      glowColor: 'rgba(245, 190, 9, 0.35)',
      icon: '/assets/images/Social media icons/Tiktok.png',
      features:
        language === 'BN'
          ? [
              'মেইন টিকটক: @traderasikrana41',
              '২য় টিকটক: @asik.rana.dubai',
              '৬০-সেকেন্ডের কুইক চার্ট ও সাইকোলজি টিপস',
            ]
          : [
              'Main TikTok: @traderasikrana41',
              '2nd TikTok: @asik.rana.dubai',
              '60-second rapid chart & psychology tips',
            ],
      buttons:
        language === 'BN'
          ? [
              { label: 'মেইন টিকটক', link: 'https://www.tiktok.com/@traderasikrana41', isPrimary: true },
              { label: '২য় টিকটক', link: 'https://www.tiktok.com/@asik.rana.dubai', isPrimary: false },
            ]
          : [
              { label: 'Main TikTok', link: 'https://www.tiktok.com/@traderasikrana41', isPrimary: true },
              { label: '2nd TikTok', link: 'https://www.tiktok.com/@asik.rana.dubai', isPrimary: false },
            ],
    },
    {
      id: 'whatsapp',
      title: t('ecoWaTitle'),
      badge: t('ecoWaBadge'),
      desc: t('ecoWaDesc'),
      cta: t('ecoWaCta'),
      link: 'https://whatsapp.com/channel/0029VbBEhM77DAWzHE4HTu1b',
      accentColor: '#F5BE09',
      glowColor: 'rgba(245, 190, 9, 0.35)',
      icon: '/assets/images/Social media icons/Whatsapp.png',
      features:
        language === 'BN'
          ? [
              'অফিসিয়াল হোয়াটসঅ্যাপ চ্যানেল',
              'জরুরি মার্কেট এলার্ট ও ব্রেকিং নিউজ',
              'অ্যাডমিশন ও গুরুত্বপূর্ণ নোটিফিকেশন',
            ]
          : [
              'Official WhatsApp Channel',
              'Urgent market alerts & breaking news',
              'Admission & key announcements',
            ],
      buttons:
        language === 'BN'
          ? [
              { label: 'হোয়াটসঅ্যাপ চ্যানেল', link: 'https://whatsapp.com/channel/0029VbBEhM77DAWzHE4HTu1b', isPrimary: true },
            ]
          : [
              { label: 'WhatsApp Channel', link: 'https://whatsapp.com/channel/0029VbBEhM77DAWzHE4HTu1b', isPrimary: true },
            ],
    },
    {
      id: 'linktree',
      title: t('ecoIgTitle'),
      badge: t('ecoIgBadge'),
      desc: t('ecoIgDesc'),
      cta: t('ecoIgCta'),
      link: 'https://linktr.ee/asikrana',
      accentColor: '#F5BE09',
      glowColor: 'rgba(245, 190, 9, 0.35)',
      icon: '/assets/images/Social media icons/Instagram.png',
      features:
        language === 'BN'
          ? [
              'সকল ভেরিফাইড ব্রোকার ও প্ল্যাটফর্ম লিঙ্ক',
              'টেলিগ্রাম ও ইউটিউব চ্যানেলের সম্পূর্ণ হাব',
              '১০০% ভেরিফাইড অফিসিয়াল লিঙ্কট্রি',
            ]
          : [
              'All verified broker & platform links',
              'Central hub for Telegram & YouTube',
              '100% verified official Linktree hub',
            ],
      buttons:
        language === 'BN'
          ? [
              { label: 'সকল অফিসিয়াল লিঙ্ক', link: 'https://linktr.ee/asikrana', isPrimary: true },
            ]
          : [
              { label: 'Open All Links', link: 'https://linktr.ee/asikrana', isPrimary: true },
            ],
    },
  ];

  // Scroll listener to update active item smoothly as cards scroll on the left (desktop only)
  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== 'undefined' && window.innerWidth < 1024) return;
      const viewportMiddle = window.innerHeight * 0.45;
      let closestIdx = 0;
      let minDistance = Infinity;

      cardRefs.current.forEach((card, idx) => {
        if (!card) return;
        const rect = card.getBoundingClientRect();
        const cardCenter = rect.top + rect.height / 2;
        const distance = Math.abs(cardCenter - viewportMiddle);
        if (distance < minDistance) {
          minDistance = distance;
          closestIdx = idx;
        }
      });

      setActiveIdx(closestIdx);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const currentChannel = socialChannels[activeIdx] || socialChannels[0];

  // Physics curve calculation for the circular arc motion (one curves out to the right, next curves in from the opposite side)
  const getTransformStyle = (idx: number) => {
    if (idx === activeIdx) {
      return {
        transform: 'translate3d(0px, 0px, 0px) rotate(0deg) scale(1)',
        opacity: 1,
        zIndex: 20,
        pointerEvents: 'auto' as const,
        filter: 'drop-shadow(0 25px 60px rgba(0,0,0,0.9))',
      };
    }

    // Past items curve and round out to the right along an arc
    if (idx < activeIdx) {
      return {
        transform: 'translate3d(160px, 45px, 0px) rotate(35deg) scale(0.48)',
        opacity: 0,
        zIndex: 10,
        pointerEvents: 'none' as const,
        filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.3))',
      };
    }

    // Upcoming items enter along an arc from the opposite side (top-left)
    return {
      transform: 'translate3d(-160px, -45px, 0px) rotate(-35deg) scale(0.48)',
      opacity: 0,
      zIndex: 10,
      pointerEvents: 'none' as const,
      filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.3))',
    };
  };

  const scrollToChannel = (idx: number) => {
    setActiveIdx(idx);
    const target = cardRefs.current[idx];
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <section className="relative z-10 w-full py-12 sm:py-16 md:py-32 bg-[#060606] overflow-x-clip" id="ecosystem">
      {/* Background Ambient Glows */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[550px] pointer-events-none opacity-20 blur-[180px]"
        style={{
          background: 'radial-gradient(circle, rgba(245, 190, 9, 0.16) 0%, transparent 70%)',
        }}
      />

      <div className="relative max-w-[1240px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-8 sm:mb-12 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.65, ease: easeCurve }}
          >
            <Badge text={t('ecosystemBadge')} isDot />
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
            {t('ecosystemTitle')}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.75, ease: easeCurve, delay: 0.2 }}
            className="text-sm sm:text-base font-normal text-[#A8A8A8] max-w-[680px] text-balance leading-relaxed"
          >
            {t('ecosystemSubtitle')}
          </motion.p>
        </div>

        {/* ========================================================
            MOBILE VIEW: 2-COLUMN COMPACT MINI GRID (3 ROWS × 2 CARDS)
            ======================================================== */}
        <div className="lg:hidden grid grid-cols-2 gap-3 sm:gap-4 mb-4">
          {socialChannels.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.7, ease: easeCurve, delay: 0.1 + idx * 0.06 }}
              className="relative p-3.5 xs:p-4 rounded-2xl bg-gradient-to-b from-[#141414]/95 via-[#0E0E0E]/95 to-[#080808]/95 border border-white/[0.08] hover:border-[#F5BE09]/50 shadow-[0_10px_30px_rgba(0,0,0,0.6)] hover:shadow-[0_15px_35px_rgba(245,190,9,0.15)] flex flex-col justify-between group/card overflow-hidden transition-all duration-300"
            >
              {/* Subtle ambient light aura */}
              <div
                className="absolute -top-10 -right-10 w-24 h-24 rounded-full blur-[35px] opacity-25 group-hover/card:opacity-45 pointer-events-none z-0 transition-opacity duration-500"
                style={{ background: item.glowColor }}
              />

              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  {/* Top Row: Icon + Official Verified Badge */}
                  <div className="flex items-start justify-between gap-1.5 mb-2.5">
                    {/* Platform Icon */}
                    <div className="relative w-9 h-9 xs:w-10 xs:h-10 rounded-xl p-1 bg-white/[0.04] border border-white/[0.08] flex items-center justify-center shrink-0 shadow-sm">
                      <Image
                        src={item.icon}
                        alt={item.title}
                        width={36}
                        height={36}
                        className="w-full h-full object-contain drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)]"
                      />
                    </div>

                    {/* Official Verified Badge */}
                    <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#F5BE09]/[0.08] border border-[#F5BE09]/30 text-[10px] xs:text-[11px] font-semibold text-[#FFE79A] shadow-sm max-w-[65%]">
                      <svg
                        className="w-3 h-3 text-[#F5BE09] fill-current shrink-0 drop-shadow-[0_0_4px_rgba(245,190,9,0.5)]"
                        viewBox="0 0 24 24"
                      >
                        <path d="m8.6 22.5-1.9-3.2-3.6-.8.4-3.7-2.5-2.8 2.5-2.8-.4-3.7 3.6-.8 1.9-3.2 3.4 1.5 3.4-1.5 1.9 3.2 3.6.8-.4 3.7 2.5 2.8-2.5 2.8.4 3.7-3.6.8-1.9 3.2-3.4-1.5zm2.35-7.05 5.65-5.65-1.4-1.4-4.25 4.25-2.15-2.15-1.4 1.4z" />
                      </svg>
                      <span className="truncate">{item.badge}</span>
                    </div>
                  </div>

                  {/* Platform Title */}
                  <h3 className="text-[13.5px] xs:text-[14.5px] sm:text-base font-bold text-white group-hover/card:text-[#FFE79A] tracking-tight leading-snug transition-colors line-clamp-1 mb-2.5">
                    {item.title}
                  </h3>
                </div>

                {/* Buttons (Dual or Single) - Hero Secondary Style */}
                <div className="pt-1 flex flex-col gap-1.5">
                  {item.buttons.map((btn, bIdx) => (
                    <a
                      key={bIdx}
                      href={btn.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn navbar-glass w-full h-8 xs:h-8.5 rounded-full flex items-center justify-center gap-1.5 px-2.5 text-[11px] xs:text-[11.5px] font-medium text-[#FFFFFF] hover:text-[#F5BE09] border border-white/15 hover:border-[#F5BE09]/50 active:scale-[0.98] transition-all duration-300 shadow-sm"
                    >
                      <span className="truncate">{btn.label}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#F5BE09] shrink-0" />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ========================================================
            DESKTOP VIEW: 2-COLUMN LAYOUT (SCROLL CARDS + STICKY SHOWCASE)
            ======================================================== */}
        <div className="hidden lg:grid grid-cols-12 gap-8 lg:gap-14 items-start relative">
          
          {/* ========================================================
              LEFT COLUMN: SCROLLABLE SOCIAL CARDS
              ======================================================== */}
          <div className="lg:col-span-7 flex flex-col gap-8 md:gap-12">
            {socialChannels.map((item, idx) => {
              const isActive = activeIdx === idx;

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 40, scale: 0.98 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.8, ease: easeCurve, delay: 0.15 + (idx % 3) * 0.08 }}
                >
                  <div
                    ref={(el) => {
                      cardRefs.current[idx] = el;
                    }}
                    onClick={() => scrollToChannel(idx)}
                    className={`relative p-8 sm:p-10 rounded-3xl transition-all duration-500 cursor-pointer overflow-hidden ${
                      isActive
                        ? 'bg-gradient-to-b from-[#141414]/95 via-[#0E0E0E]/95 to-[#080808]/95 border border-[#F5BE09]/50 shadow-[0_20px_50px_rgba(245,190,9,0.12)] scale-[1.01]'
                        : 'bg-[#0B0B0B]/80 border border-white/[0.08] hover:border-white/[0.18] opacity-65 hover:opacity-100 shadow-[0_10px_30px_rgba(0,0,0,0.5)]'
                    }`}
                  >
                    {/* Subtle active corner ambient light */}
                    <div
                      className={`absolute -top-16 -right-16 w-44 h-44 rounded-full blur-[60px] transition-opacity duration-500 pointer-events-none z-0 ${
                        isActive ? 'opacity-30' : 'opacity-0'
                      }`}
                      style={{ background: item.glowColor }}
                    />

                    <div className="relative z-10">
                      {/* Header: Platform Index + Official Verified Badge */}
                      <div className="flex items-center justify-between gap-4 mb-6">
                        <div className="flex items-center gap-3">
                          {/* Mobile Icon */}
                          <div className="lg:hidden relative w-10 h-10 shrink-0 drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
                            <Image
                              src={item.icon}
                              alt={item.title}
                              width={40}
                              height={40}
                              className="w-full h-full object-contain"
                            />
                          </div>

                          <span
                            className={`text-xs font-semibold px-3 py-1 rounded-full border transition-colors ${
                              isActive
                                ? 'bg-[#F5BE09]/10 text-[#F5BE09] border-[#F5BE09]/30'
                                : 'bg-white/[0.04] text-[#A8A8A8] border-white/[0.08]'
                            }`}
                          >
                            {String(idx + 1).padStart(2, '0')} • {item.title}
                          </span>
                        </div>

                        {/* Official Verified Badge */}
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F5BE09]/[0.08] border border-[#F5BE09]/30 text-xs font-semibold text-[#FFE79A] shadow-sm backdrop-blur-sm">
                          <svg
                            className="w-3.5 h-3.5 text-[#F5BE09] fill-current shrink-0 drop-shadow-[0_0_6px_rgba(245,190,9,0.5)]"
                            viewBox="0 0 24 24"
                          >
                            <path d="m8.6 22.5-1.9-3.2-3.6-.8.4-3.7-2.5-2.8 2.5-2.8-.4-3.7 3.6-.8 1.9-3.2 3.4 1.5 3.4-1.5 1.9 3.2 3.6.8-.4 3.7 2.5 2.8-2.5 2.8.4 3.7-3.6.8-1.9 3.2-3.4-1.5zm2.35-7.05 5.65-5.65-1.4-1.4-4.25 4.25-2.15-2.15-1.4 1.4z" />
                          </svg>
                          <span>{item.badge}</span>
                        </div>
                      </div>

                      {/* Platform Title */}
                      <h3
                        className={`text-2xl sm:text-3xl font-bold tracking-tight mb-3 transition-colors ${
                          isActive ? 'text-white' : 'text-[#E0E0E0]'
                        }`}
                      >
                        {item.title}
                      </h3>

                      {/* Platform Description */}
                      <p className="text-sm sm:text-base text-[#B0B0B0] leading-relaxed font-normal mb-6">
                        {item.desc}
                      </p>

                      {/* Highlights List */}
                      <div className="space-y-2.5 mb-8 pt-2">
                        {item.features.map((feat, fIdx) => (
                          <div key={fIdx} className="flex items-center gap-2.5 text-xs sm:text-sm text-[#C5C5C5]">
                            <div className="w-4 h-4 rounded-full bg-white/[0.06] border border-white/10 flex items-center justify-center shrink-0">
                              <Check className="w-2.5 h-2.5 text-[#F5BE09] stroke-[2.5]" />
                            </div>
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>

                      {/* Action Buttons Row - Hero Secondary Style */}
                      <div className="pt-2 flex flex-wrap items-center gap-3">
                        {item.buttons.map((btn, bIdx) => (
                          <a
                            key={bIdx}
                            href={btn.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="group/btn navbar-glass inline-flex items-center justify-center px-6 h-11 rounded-full font-medium text-sm text-[#FFFFFF] hover:text-[#F5BE09] border border-white/15 hover:border-[#F5BE09]/50 active:scale-[0.98] transition-all duration-300"
                          >
                            <RollingContent
                              iconRight={
                                <ArrowUpRight
                                  className="w-4 h-4 text-[#F5BE09]"
                                />
                              }
                            >
                              {btn.label}
                            </RollingContent>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* ========================================================
              RIGHT COLUMN: STICKY SHOWCASE WITH ONLY BIG ICON IMAGE
              ======================================================== */}
          <motion.div
            initial={{ opacity: 0, y: 45, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.85, ease: easeCurve, delay: 0.25 }}
            className="lg:col-span-5 hidden lg:block self-start sticky top-28 lg:top-36"
          >
            <div className="relative h-[440px] lg:h-[480px] rounded-3xl bg-[#060606] border border-white/[0.12] shadow-[0_25px_60px_rgba(0,0,0,0.85)] flex items-center justify-center p-8 overflow-hidden">
              {/* Card Background Image (adfvd.png) */}
              <div className="absolute inset-0 pointer-events-none z-0">
                <Image
                  src="/assets/images/ecosystem-icon-bg.png"
                  alt="Icon Card Background"
                  fill
                  priority
                  className="object-cover object-top"
                />
              </div>

              {/* Dynamic Smooth Ambient Aura */}
              <div
                className="absolute inset-0 pointer-events-none transition-all duration-700 blur-[85px] opacity-35 z-0"
                style={{
                  background: `radial-gradient(circle at 50% 35%, ${currentChannel.glowColor} 0%, transparent 65%)`,
                }}
              />

              {/* CURVED 3D ORBITAL ICON SHOWCASE */}
              <div className="relative z-10 w-48 h-48 sm:w-56 sm:h-56 flex items-center justify-center">
                {socialChannels.map((item, idx) => {
                  const itemStyle = getTransformStyle(idx);
                  return (
                    <div
                      key={item.id}
                      style={{
                        ...itemStyle,
                        transition:
                          'transform 0.75s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.55s cubic-bezier(0.22, 1, 0.36, 1), filter 0.55s ease-out',
                      }}
                      className="absolute inset-0 m-auto w-48 h-48 sm:w-56 sm:h-56 flex items-center justify-center will-change-transform"
                    >
                      <Image
                        src={item.icon}
                        alt={item.title}
                        width={224}
                        height={224}
                        priority
                        className="w-full h-full object-contain select-none pointer-events-none"
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
