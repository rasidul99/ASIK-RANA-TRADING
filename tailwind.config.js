/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        'xs': '420px',
      },
      colors: {
        gold: {
          primary: '#F5BE09',
          light: '#F8F7F4',
          dark: '#B88E00',
          glow: 'rgba(245, 190, 9, 0.4)',
        },
        dark: {
          bg: '#060606',
          card: 'rgba(14, 14, 14, 0.95)',
          border: 'rgba(255, 255, 255, 0.1)',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['\"Instrument Serif\"', 'serif'],
        bangla: ['\"Li Ador Noirrit\"', 'sans-serif'],
      },
      animation: {
        'marquee': 'marqueeScroll 65s linear infinite',
        'marquee-reverse': 'marqueeReverseScroll 65s linear infinite',
      },
      keyframes: {
        marqueeScroll: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        marqueeReverseScroll: {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        }
      }
    },
  },
  plugins: [],
};
