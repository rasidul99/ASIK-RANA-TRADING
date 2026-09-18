'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Play, ArrowUpRight, Volume2, Maximize2 } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { Badge } from '@/components/ui/Badge';

export function LiveClassPreview() {
  const { t, language } = useLanguage();
  const [isPlaying, setIsPlaying] = useState(false);

  const easeCurve: [number, number, number, number] = [0.16, 1, 0.3, 1];

  return (
    <section className="relative z-10 w-full pt-8 md:pt-10 pb-12 md:pb-16 bg-[#060606] overflow-hidden" id="classes">
      {/* Background Ambient Radial Glow (Static) */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] pointer-events-none opacity-40 blur-[120px]"
        style={{
          background: 'radial-gradient(circle, rgba(245, 190, 9, 0.25) 0%, rgba(245, 190, 9, 0.05) 50%, transparent 75%)',
        }}
      />

      <div className="relative max-w-[1240px] mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-10 md:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.65, ease: easeCurve }}
          >
            <Badge text={t('videoBadge')} isDot />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.75, ease: easeCurve, delay: 0.1 }}
            className={`font-serif text-3xl sm:text-4xl md:text-[42px] lg:text-[46px] font-normal mt-4 mb-4 tracking-tight max-w-[1020px] bg-gradient-to-b from-white via-[#EEEEEE] to-[#9E9E9E] bg-clip-text text-transparent transition-all ${
              language === 'BN'
                ? 'leading-[1.22] md:leading-[1.26]'
                : 'leading-[1.1] md:leading-[1.14]'
            }`}
          >
            {t('videoTitle')}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.75, ease: easeCurve, delay: 0.2 }}
            className="text-sm sm:text-base font-normal text-[#A8A8A8] max-w-[640px] text-balance leading-relaxed"
          >
            {t('videoSubtitle')}
          </motion.p>
        </div>

        {/* Cinematic Video Showcase Card */}
        <div className="relative max-w-[1020px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 55, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.85, ease: easeCurve, delay: 0.25 }}
            className="relative p-2 sm:p-3 rounded-3xl bg-gradient-to-b from-[#F5BE09]/20 via-white/[0.04] to-white/[0.01] border border-[#F5BE09]/30 shadow-[0_20px_70px_rgba(0,0,0,0.85),0_0_40px_rgba(245,190,9,0.1)] group"
          >
            <div className="relative aspect-[16/9.5] sm:aspect-[16/9] w-full rounded-[20px] overflow-hidden bg-[#0A0A0A] border border-white/[0.06] flex items-center justify-center">
              
              {/* Background Chart Thumbnail */}
              <Image
                src="/assets/images/dashboard-hq.png"
                alt="Live Class Preview - Chart Analysis"
                fill
                priority
                className="object-cover object-top opacity-70 group-hover:scale-[1.02] transition-transform duration-700 ease-out"
              />

              {/* Dark Gradient Vignette Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/60 pointer-events-none" />

              {/* Top Bar inside Player */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10 pointer-events-none">
                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-black/60 border border-white/15 backdrop-blur-md">
                  <span className="w-2 h-2 rounded-full bg-[#FF3B30] animate-pulse" />
                  <span className="text-[11px] sm:text-xs font-medium text-white tracking-wide uppercase">
                    {t('videoTag')}
                  </span>
                </div>

                <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-black/50 border border-white/10 backdrop-blur-md text-[11px] sm:text-xs text-white/80">
                  <span>4K UHD</span>
                  <span className="text-white/40">•</span>
                  <span>28:45 MIN</span>
                </div>
              </div>

              {/* Center Golden Play Button */}
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Play Live Class Video"
                className="relative z-10 flex items-center justify-center group/btn cursor-pointer"
              >
                {/* Glowing pulsing gold ring */}
                <div className="absolute -inset-3 rounded-full bg-[#F5BE09]/25 animate-ping pointer-events-none" />

                {/* Golden Play Button Circle */}
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-26 md:h-26 rounded-full bg-gradient-to-b from-[#FFE79A] via-[#F5BE09] to-[#C99700] text-black shadow-[0_0_50px_rgba(245,190,9,0.7),inset_0_2px_4px_rgba(255,255,255,0.7)] flex items-center justify-center group-hover/btn:scale-110 transition-transform duration-300">
                  <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-black text-black translate-x-0.5" />
                </div>
              </a>

              {/* Bottom Info & Simulated Progress Bar inside Player */}
              <div className="absolute bottom-4 left-4 right-4 z-10 pointer-events-none">
                <div className="flex items-center justify-between text-xs text-white/90 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-[#F5BE09]">Asik Rana</span>
                    <span className="text-white/40">•</span>
                    <span className="text-white/80 truncate max-w-[220px] sm:max-w-[400px]">
                      {t('videoTopic')}
                    </span>
                  </div>
                  <div className="hidden sm:flex items-center gap-3 text-white/70">
                    <Volume2 className="w-4 h-4" />
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>

                {/* Progress Bar Track */}
                <div className="w-full h-1 sm:h-1.5 bg-white/20 rounded-full overflow-hidden backdrop-blur-sm">
                  <div className="h-full w-[42%] bg-gradient-to-r from-[#FFE79A] to-[#F5BE09] rounded-full shadow-[0_0_10px_#F5BE09]" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bottom CTA Button: Watch Our 100+ Free Video Tutorials on YouTube */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: easeCurve, delay: 0.38 }}
            className="mt-8 sm:mt-10 flex justify-center"
          >
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="navbar-glass inline-flex items-center gap-3 px-7 sm:px-9 py-3.5 sm:py-4 rounded-full text-white text-sm sm:text-base font-medium hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 group/link"
            >
              {/* YouTube Icon */}
              <svg
                className="w-5 h-5 text-[#FF0000] fill-current group-hover/link:scale-110 transition-transform"
                viewBox="0 0 24 24"
              >
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>

              <span>{t('videoCta')}</span>

              <ArrowUpRight className="w-4 h-4 text-[#F5BE09] group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
