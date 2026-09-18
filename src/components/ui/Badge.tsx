'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

interface BadgeProps {
  text: string;
  icon?: React.ReactNode;
  isDot?: boolean;
}

export function Badge({ text, icon, isDot }: BadgeProps) {
  const { language } = useLanguage();

  return (
    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg badge-gradient-border transition-all duration-300 hover:-translate-y-0.5 cursor-pointer">
      {isDot && (
        <span className="w-1.5 h-1.5 rounded-full bg-[#F5BE09] shadow-[0_0_8px_#F5BE09]" />
      )}
      {icon}
      <span
        className={`font-semibold uppercase text-[#F8F7F4] ${
          language === 'BN'
            ? 'text-[13.5px] tracking-wide'
            : 'text-[11px] tracking-wider'
        }`}
      >
        {text}
      </span>
    </div>
  );
}
