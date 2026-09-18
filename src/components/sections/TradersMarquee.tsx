'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

function toBanglaDigits(str: string): string {
  const bnDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
  return str.replace(/[0-9]/g, (d) => bnDigits[Number(d)]);
}

interface StatCounterProps {
  target: number;
  duration?: number;
  format: (val: number, isBn: boolean) => string;
  isBn: boolean;
  isInView: boolean;
}

function StatCounter({ target, duration = 2, format, isBn, isInView }: StatCounterProps) {
  const [count, setCount] = useState(0);
  const hasStarted = useRef(false);

  useEffect(() => {
    if (isInView && !hasStarted.current) {
      hasStarted.current = true;
      let startTimestamp: number | null = null;

      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
        // Smooth ease-out cubic curve
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const current = Math.round(easeOut * target);

        setCount(current);

        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
          setCount(target);
        }
      };

      requestAnimationFrame(step);
    }
  }, [isInView, target, duration]);

  return <span>{format(count, isBn)}</span>;
}

const statsConfig = [
  {
    target: 100,
    format: (val: number, isBn: boolean) =>
      isBn ? `${toBanglaDigits(val.toString())}K+` : `${val}K+`,
    labelKey: 'stat1Label' as const,
  },
  {
    target: 15000,
    format: (val: number, isBn: boolean) => {
      const formatted = val.toLocaleString('en-US');
      return isBn ? `${toBanglaDigits(formatted)}+` : `${formatted}+`;
    },
    labelKey: 'stat2Label' as const,
  },
  {
    target: 5,
    format: (val: number, isBn: boolean) =>
      isBn ? `${toBanglaDigits(val.toString())}+ বছর` : `${val}+ Years`,
    labelKey: 'stat3Label' as const,
  },
  {
    target: 3,
    format: (val: number, isBn: boolean) =>
      isBn ? `১:${toBanglaDigits(val.toString())}+` : `1:${val}+`,
    labelKey: 'stat4Label' as const,
  },
];

export function TradersMarquee() {
  const { t, language } = useLanguage();
  const isBn = language === 'BN';
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.25 });

  const easeCurve: [number, number, number, number] = [0.16, 1, 0.3, 1];

  return (
    <section className="relative z-10 w-full pt-16 md:pt-24 pb-8 md:pb-10 bg-[#060606]">
      <div ref={containerRef} className="max-w-[1240px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
          transition={{ duration: 0.85, ease: easeCurve }}
          className="grid grid-cols-2 md:grid-cols-4 md:divide-x divide-white/[0.12]"
        >
          {statsConfig.map((stat, idx) => (
            <div
              key={idx}
              className={`flex flex-col items-center justify-center text-center px-4 py-6 md:py-3 ${
                idx % 2 === 0 ? 'border-r border-white/[0.12] md:border-r-0' : ''
              } ${
                idx < 2 ? 'border-b border-white/[0.12] md:border-b-0' : ''
              }`}
            >
              <h3 className="text-4xl sm:text-5xl lg:text-[50px] font-bold tracking-tight bg-gradient-to-b from-[#FFE79A] via-[#F5BE09] to-[#9E6E00] bg-clip-text text-transparent leading-none mb-3 tabular-nums">
                <StatCounter
                  target={stat.target}
                  format={stat.format}
                  isBn={isBn}
                  isInView={isInView}
                  duration={1.8 + idx * 0.15}
                />
              </h3>
              <p className="text-xs sm:text-sm text-[#B3B3B3] font-normal tracking-wide max-w-[200px] leading-relaxed">
                {t(stat.labelKey)}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export { TradersMarquee as StatsSection };
