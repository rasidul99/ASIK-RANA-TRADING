'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Globe, Menu, X } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { Button } from '@/components/ui/Button';

export function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const toggleLanguage = () => {
    setLanguage(language === 'EN' ? 'BN' : 'EN');
  };

  const navLinks = [
    { href: '#courses', key: 'navCourses' },
    { href: '#curriculum', key: 'navCurriculum' },
    { href: '#about', key: 'navAbout' },
    { href: '#reviews', key: 'navReviews' },
    { href: '#faq', key: 'navFaq' },
  ];

  return (
    <>
      <header className="fixed top-4 sm:top-5 left-1/2 -translate-x-1/2 z-50 w-[920px] max-w-[calc(100vw-24px)] sm:max-w-[calc(100vw-32px)]">
        {/* Main Glass Pill Navbar */}
        <nav className="navbar-glass flex items-center justify-between h-13 sm:h-14 px-3.5 sm:px-6 py-1.5 transition-all shadow-[0_10px_35px_rgba(0,0,0,0.5)] border border-white/[0.08]">
          {/* Brand Logo: Mobile shows ONLY Icon, Desktop shows Full Logo */}
          <Link href="/" className="flex items-center flex-shrink-0 hover:opacity-90 transition-opacity">
            {/* Mobile: Logo Icon only */}
            <Image
              src="/assets/images/logo-icon.svg"
              alt="ASIK RANA Logo"
              width={26}
              height={26}
              priority
              className="w-6 h-6 object-contain md:hidden"
            />
            {/* Desktop: Full Brand Logo */}
            <Image
              src="/assets/images/logo.svg"
              alt="ASIK RANA"
              width={126}
              height={26}
              priority
              className="w-auto h-[26px] object-contain hidden md:block"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <ul className="hidden md:flex items-center gap-1 lg:gap-1.5">
            {navLinks.map((item) => (
              <li key={item.key}>
                <Link
                  href={item.href}
                  className={`px-3.5 py-1.5 rounded-full transition-all duration-200 ${
                    language === 'BN'
                      ? 'text-[15px] lg:text-[15.5px] font-semibold text-[#F8F7F4]/90 hover:text-white'
                      : 'text-[13px] lg:text-sm font-medium text-[#F8F7F4]/80 hover:text-[#FFFFFF]'
                  } hover:bg-white/[0.06]`}
                >
                  {t(item.key as any)}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right Actions: Language Switcher + Desktop Action Button + Mobile Toggle */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            {/* Language Toggle Button */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-full border border-white/[0.12] bg-white/[0.04] text-xs font-medium text-[#F8F7F4] hover:border-[#F5BE09]/40 hover:bg-white/[0.08] transition-all cursor-pointer select-none"
              title={`Switch to ${language === 'EN' ? 'বাংলা' : 'English'}`}
              aria-label="Toggle language"
            >
              <Globe className="w-3.5 h-3.5 text-[#F5BE09]" />
              <span className="font-semibold tracking-wide">{language}</span>
            </button>

            {/* Desktop-Only Action Button (hidden on mobile navbar when closed) */}
            <Button
              variant="nav"
              href="https://t.me/Asikrana41bd"
              target="_blank"
              rel="noopener noreferrer"
              className={`hidden md:inline-flex ${
                language === 'BN'
                  ? '!text-[15px] !font-bold px-4 sm:px-5'
                  : '!text-xs !font-semibold'
              }`}
            >
              {t('navEnroll')}
            </Button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="md:hidden flex items-center justify-center w-9 h-9 rounded-full bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 text-[#F8F7F4] transition-all cursor-pointer"
              aria-label="Open Menu"
            >
              <Menu className="w-4 h-4" />
            </button>
          </div>
        </nav>
      </header>

      {/* Compact Luxury Mobile Menu (Zero Excessive Gap with Clean Dark Backdrop) */}
      {mobileMenuOpen && (
        <>
          {/* Ambient Backdrop Overlay - Soft light dimming with subtle 2px blur */}
          <div
            onClick={() => setMobileMenuOpen(false)}
            className="fixed inset-0 z-[998] bg-black/35 backdrop-blur-[2px] transition-opacity animate-fadeIn md:hidden"
            aria-hidden="true"
          />

          {/* Compact Floating Menu Card */}
          <div className="fixed top-4 left-3.5 right-3.5 max-w-[420px] mx-auto z-[999] rounded-3xl bg-[#0C0C0C] border border-white/[0.12] p-4 sm:p-5 shadow-[0_25px_60px_rgba(0,0,0,0.95)] flex flex-col gap-2.5 animate-fadeIn md:hidden">
            {/* Header: Full Brand Logo + Close Button */}
            <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center"
              >
                <Image
                  src="/assets/images/logo.svg"
                  alt="ASIK RANA"
                  width={126}
                  height={26}
                  priority
                  className="w-auto h-6 sm:h-[26px] object-contain"
                />
              </Link>

              <button
                onClick={() => setMobileMenuOpen(false)}
                className="w-8 h-8 rounded-full bg-white/[0.08] hover:bg-white/[0.15] border border-white/10 text-white flex items-center justify-center transition-all cursor-pointer"
                aria-label="Close menu"
              >
                <X className="w-4 h-4 text-[#F8F7F4]" />
              </button>
            </div>

            {/* Navigation Links - Clean, Compact & Beautiful */}
            <nav className="flex flex-col gap-1 py-1">
              {navLinks.map((item) => (
                <Link
                  key={item.key}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between py-2 px-3 rounded-xl hover:bg-white/[0.06] text-[#F8F7F4]/90 hover:text-[#F5BE09] transition-all ${
                    language === 'BN' ? 'text-[15.5px] font-semibold' : 'text-sm font-medium'
                  }`}
                >
                  <span>{t(item.key as any)}</span>
                  <span className="text-[#F5BE09]/50 text-xs">↗</span>
                </Link>
              ))}
            </nav>

            {/* Bottom Action Button - Tight & Prominent */}
            <div className="pt-2.5 border-t border-white/[0.08]">
              <Button
                variant="primary"
                href="https://t.me/Asikrana41bd"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full justify-center h-10 sm:h-11 text-sm font-semibold"
              >
                {t('navEnroll')}
              </Button>
            </div>
          </div>
        </>
      )}
    </>
  );
}
