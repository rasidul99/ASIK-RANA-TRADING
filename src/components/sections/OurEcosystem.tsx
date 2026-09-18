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
      link: 'https://t.me/your_telegram_channel',
      accentColor: '#F5BE09',
      glowColor: 'rgba(245, 190, 9, 0.35)',
      icon: '/assets/images/Social media icons/Telegram.png',
      features:
        language === 'BN'
          ? [
              'প্রতিদিনের লাইভ চার্ট ব্রেকডাউন',
              'ফরেক্স ও গোল্ড ট্রেন্ড অ্যানালাইসিস',
              'ইনস্ট্যান্ট অর্থনৈতিক নিউজ আপডেট',
            ]
          : [
              'Daily live chart breakdowns',
              'Forex & Gold market outlooks',
              'Instant high-impact news updates',
            ],
    },
    {
      id: 'youtube',
      title: t('ecoYtTitle'),
      badge: t('ecoYtBadge'),
      desc: t('ecoYtDesc'),
      cta: t('ecoYtCta'),
      link: 'https://youtube.com',
      accentColor: '#F5BE09',
      glowColor: 'rgba(245, 190, 9, 0.35)',
      icon: '/assets/images/Social media icons/Youtube.png',
      features:
        language === 'BN'
          ? [
              '১০০+ ফ্রি ইন-ডেপথ ভিডিও টিউটোরিয়াল',
              'লাইভ স্ট্র্যাটেজি ও সেশন ব্যাকটেস্টিং',
              'ট্রেডিং মাইন্ডসেট ও সাইকোলজি গাইড',
            ]
          : [
              '100+ free in-depth video tutorials',
              'Live strategy & session backtesting',
              'Trading mindset & emotional guides',
            ],
    },
    {
      id: 'facebook',
      title: t('ecoFbTitle'),
      badge: t('ecoFbBadge'),
      desc: t('ecoFbDesc'),
      cta: t('ecoFbCta'),
      link: 'https://facebook.com',
      accentColor: '#F5BE09',
      glowColor: 'rgba(245, 190, 9, 0.35)',
      icon: '/assets/images/Social media icons/Facebook.png',
      features:
        language === 'BN'
          ? [
              'শিক্ষার্থীদের সক্রিয় চার্ট শেয়ারিং',
              'নিয়মিত প্রশ্নোত্তর ও সল্যুশন সেশন',
              'সহযোগী ট্রেডার্স কমিউনিটি নেটওয়ার্ক',
            ]
          : [
              'Student chart & setup sharing',
              'Active community Q&A discussions',
              'Supportive peer trader network',
            ],
    },
    {
      id: 'tiktok',
      title: t('ecoTtTitle'),
      badge: t('ecoTtBadge'),
      desc: t('ecoTtDesc'),
      cta: t('ecoTtCta'),
      link: 'https://tiktok.com',
      accentColor: '#F5BE09',
      glowColor: 'rgba(245, 190, 9, 0.35)',
      icon: '/assets/images/Social media icons/Tiktok.png',
      features:
        language === 'BN'
          ? [
              '৬০-সেকেন্ডের কুইক চার্ট টিপস',
              'ট্রেডিং সাইকোলজি ও ডিসিপ্লিন রিলস',
              'সহজ ক্যান্ডেলস্টিক প্যাটার্ন গাইড',
            ]
          : [
              '60-second rapid chart breakdowns',
              'Trading psychology & discipline reels',
              'Simple candlestick pattern guides',
            ],
    },
    {
      id: 'instagram',
      title: t('ecoIgTitle'),
      badge: t('ecoIgBadge'),
      desc: t('ecoIgDesc'),
      cta: t('ecoIgCta'),
      link: 'https://instagram.com',
      accentColor: '#F5BE09',
      glowColor: 'rgba(245, 190, 9, 0.35)',
      icon: '/assets/images/Social media icons/Instagram.png',
      features:
        language === 'BN'
          ? [
              'ভিজুয়াল ইনফোগ্রাফিক চিট-শিট',
              'প্রতিদিনের ট্রেডিং ডিসিপ্লিন মোটিভেশন',
              'মেন্টর আশিক রানার রেগুলার আপডেট',
            ]
          : [
              'Visual infographic cheat-sheets',
              'Daily discipline & focus motivation',
              'Exclusive stories from mentor Asik Rana',
            ],
    },
    {
      id: 'whatsapp',
      title: t('ecoWaTitle'),
      badge: t('ecoWaBadge'),
      desc: t('ecoWaDesc'),
      cta: t('ecoWaCta'),
      link: 'https://wa.me/8801700000000',
      accentColor: '#F5BE09',
      glowColor: 'rgba(245, 190, 9, 0.35)',
      icon: '/assets/images/Social media icons/Whatsapp.png',
      features:
        language === 'BN'
          ? [
              'অফিসিয়াল টিমের সাথে ১-অন-১ চ্যাট',
              'ভর্তি ও পেমেন্ট সংক্রান্ত তথ্য',
              'তাৎক্ষণিক গাইডেন্স ও সহায়তা',
            ]
          : [
              'Direct one-on-one official support',
              'Instant admission & payment guidance',
              'Personalized onboarding assistance',
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
            className={`font-serif text-2xl sm:text-3xl md:text-[46px] font-normal mt-3 sm:mt-4 mb-2.5 sm:mb-3 tracking-tight max-w-[860px] bg-gradient-to-b from-white via-[#EEEEEE] to-[#9E9E9E] bg-clip-text text-transparent ${
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
            className="text-xs sm:text-sm md:text-base font-normal text-[#A8A8A8] max-w-[680px] text-balance leading-relaxed"
          >
            {t('ecosystemSubtitle')}
          </motion.p>
        </div>

        {/* ========================================================
            MOBILE VIEW: 2-COLUMN COMPACT MINI GRID (3 ROWS × 2 CARDS)
            ======================================================== */}
        <div className="lg:hidden grid grid-cols-2 gap-3 sm:gap-4 mb-4">
          {socialChannels.map((item, idx) => (
            <motion.a
              key={item.id}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.7, ease: easeCurve, delay: 0.1 + idx * 0.06 }}
              className="relative p-3.5 xs:p-4 rounded-2xl bg-gradient-to-b from-[#141414]/95 via-[#0E0E0E]/95 to-[#080808]/95 border border-white/[0.08] hover:border-[#F5BE09]/50 shadow-[0_10px_30px_rgba(0,0,0,0.6)] hover:shadow-[0_15px_35px_rgba(245,190,9,0.15)] flex flex-col justify-between group/card overflow-hidden transition-all duration-300 active:scale-[0.98]"
            >
              {/* Subtle ambient light aura */}
              <div
                className="absolute -top-10 -right-10 w-24 h-24 rounded-full blur-[35px] opacity-25 group-hover/card:opacity-45 pointer-events-none z-0 transition-opacity duration-500"
                style={{ background: item.glowColor }}
              />

              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  {/* Top Row: Icon + Follower/Member Badge */}
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

                    {/* Member / Audience Badge */}
                    <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-[12px] xs:text-[13px] font-medium text-[#D5D5D5] shadow-sm max-w-[62%]">
                      <span
                        className="w-1.5 h-1.5 rounded-full animate-pulse shrink-0"
                        style={{ backgroundColor: item.accentColor }}
                      />
                      <span className="truncate">{item.badge}</span>
                    </div>
                  </div>

                  {/* Platform Title */}
                  <h3 className="text-[13.5px] xs:text-[14.5px] sm:text-base font-bold text-white group-hover/card:text-[#FFE79A] tracking-tight leading-snug transition-colors line-clamp-1 mb-3">
                    {item.title}
                  </h3>
                </div>

                {/* Small Join/CTA Button */}
                <div className="pt-1">
                  <div className="w-full h-8 xs:h-8.5 rounded-full bg-white/[0.04] group-hover/card:bg-[#F5BE09]/15 border border-white/[0.12] group-hover/card:border-[#F5BE09]/50 flex items-center justify-center gap-1 px-2.5 text-[12.5px] xs:text-[13px] font-medium text-[#E0E0E0] group-hover/card:text-[#FFE79A] transition-all duration-300 shadow-sm">
                    <span className="truncate">{item.cta}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#F5BE09] shrink-0" />
                  </div>
                </div>
              </div>
            </motion.a>
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
                      {/* Header: Platform Index + Member Pill Badge */}
                      <div className="flex items-center justify-between gap-4 mb-6">
                        <div className="flex items-center gap-3">
                          {/* Mobile Icon (visible on small screens when sticky side is hidden) */}
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

                        {/* Stat / Member Pill Badge */}
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-medium text-[#E0E0E0] shadow-sm backdrop-blur-sm">
                          <span
                            className="w-1.5 h-1.5 rounded-full animate-pulse"
                            style={{ backgroundColor: item.accentColor }}
                          />
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

                      {/* CTA Button */}
                      <div className="pt-2">
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="group/btn navbar-glass inline-flex items-center justify-center px-7 h-11 rounded-full font-medium text-sm text-white hover:text-[#F5BE09] border border-white/15 hover:border-[#F5BE09]/50 active:scale-[0.98] transition-all duration-300"
                        >
                          <RollingContent iconRight={<ArrowUpRight className="w-4 h-4 text-[#F5BE09]" />}>
                            {item.cta}
                          </RollingContent>
                        </a>
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
