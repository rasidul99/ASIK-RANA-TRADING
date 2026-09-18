'use client';

import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface RollingContentProps {
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconRight?: React.ReactNode;
  className?: string;
}

export function RollingContent({ children, icon, iconRight, className = '' }: RollingContentProps) {
  return (
    <span className={`relative inline-flex flex-col overflow-hidden h-[26px] leading-[26px] select-none pointer-events-none ${className}`}>
      <span className="flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover/btn:-translate-y-1/2 will-change-transform">
        {/* Layer 1: Default state */}
        <span className="inline-flex items-center justify-center gap-2 h-[26px] whitespace-nowrap">
          {icon}
          <span>{children}</span>
          {iconRight}
        </span>

        {/* Layer 2: Seamless incoming state */}
        <span className="inline-flex items-center justify-center gap-2 h-[26px] whitespace-nowrap" aria-hidden="true">
          {icon}
          <span>{children}</span>
          {iconRight}
        </span>
      </span>
    </span>
  );
}

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'nav';
  icon?: React.ReactNode;
  onClick?: () => void;
  className?: string;
  href?: string;
  target?: string;
  rel?: string;
}

export function Button({
  children,
  variant = 'primary',
  icon,
  onClick,
  className = '',
  href,
  target,
  rel,
}: ButtonProps) {
  if (variant === 'primary') {
    const content = (
      <>
        {/* Luxury Multi-Layer Shine Flare (Slower, ultra-smooth glide) */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-full z-0">
          {/* Layer 1: Diffused ambient light halo */}
          <div className="absolute inset-y-0 left-0 w-32 -translate-x-[140%] skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/30 to-transparent blur-[4px] animate-btn-shine pointer-events-none" />
          {/* Layer 2: Ultra-crisp diamond specular core */}
          <div className="absolute inset-y-0 left-0 w-16 -translate-x-[140%] skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/80 to-transparent animate-btn-shine pointer-events-none" />
        </div>

        <span className="relative z-10">
          <RollingContent icon={icon}>{children}</RollingContent>
        </span>
      </>
    );

    const primaryClasses = `group/btn relative inline-flex items-center justify-center px-7 h-[46px] rounded-full font-semibold text-sm text-[#060606] overflow-hidden border border-white/30 shadow-[0_4px_20px_rgba(246,200,26,0.4),inset_0_1px_1.5px_rgba(255,255,255,0.75),inset_0_-1px_2px_rgba(184,130,0,0.35)] hover:shadow-[0_6px_28px_rgba(246,200,26,0.65),inset_0_1px_2px_rgba(255,255,255,0.9)] active:scale-[0.98] transition-all duration-300 ${className}`;
    const primaryStyle = {
      background: 'linear-gradient(110deg, #F6C81A 4%, #FEFB76 18%, #FBCC0D 38%, #FFFA7A 70%, #E9AF03 94%)',
    };

    if (href) {
      return (
        <a href={href} target={target} rel={rel} style={primaryStyle} className={primaryClasses}>
          {content}
        </a>
      );
    }

    return (
      <button onClick={onClick} style={primaryStyle} className={primaryClasses}>
        {content}
      </button>
    );
  }

  if (variant === 'nav') {
    const navClasses = `group/btn inline-flex items-center justify-center px-4 h-9 rounded-full font-medium text-xs text-[#060606] bg-[#FFFFFF] shadow-[0_2px_8px_rgba(255,255,255,0.2)] hover:bg-[#F8F7F4] hover:shadow-[0_4px_14px_rgba(255,255,255,0.4)] active:scale-[0.98] transition-all duration-300 ${className}`;
    if (href) {
      return (
        <a href={href} target={target} rel={rel} className={navClasses}>
          <RollingContent>{children}</RollingContent>
        </a>
      );
    }
    return (
      <button onClick={onClick} className={navClasses}>
        <RollingContent>{children}</RollingContent>
      </button>
    );
  }

  const secondaryClasses = `group/btn navbar-glass inline-flex items-center justify-center px-7 h-12 rounded-full font-medium text-sm text-[#FFFFFF] active:scale-[0.98] transition-all duration-300 ${className}`;
  const secondaryContent = (
    <RollingContent iconRight={icon || <ArrowUpRight className="w-4 h-4 text-[#F5BE09]" />}>
      {children}
    </RollingContent>
  );

  if (href) {
    return (
      <a href={href} target={target} rel={rel} className={secondaryClasses}>
        {secondaryContent}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={secondaryClasses}>
      {secondaryContent}
    </button>
  );
}
