const fs = require('fs');
const path = require('path');

const iconsDir = path.join(process.cwd(), 'public', 'assets', 'images', 'icons');

function getBaseSvg(brandColor, glowRx, glowRy, emblemSvg, brandGradStops, specularStops) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none">
  <foreignObject width="88" height="88" x="-4" y="-4">
    <div xmlns="http://www.w3.org/1999/xhtml" style="backdrop-filter:blur(2px);clip-path:url(#a);height:100%;width:100%"/>
  </foreignObject>
  <g data-figma-bg-blur-radius="4">
    <g clip-path="url(#b)">
      <!-- Squircle glass base -->
      <path fill="#fff" fill-opacity=".05" d="M0 40c0-14.954 0-22.43 3.215-28A24 24 0 0 1 12 3.215C17.57 0 25.046 0 40 0s22.43 0 28 3.215A24 24 0 0 1 76.785 12C80 17.57 80 25.046 80 40s0 22.43-3.215 28A24 24 0 0 1 68 76.785C62.43 80 54.954 80 40 80s-22.43 0-28-3.215A24 24 0 0 1 3.215 68C0 62.43 0 54.954 0 40"/>
      <path fill="url(#c)" fill-opacity=".1" d="M0 40c0-14.954 0-22.43 3.215-28A24 24 0 0 1 12 3.215C17.57 0 25.046 0 40 0s22.43 0 28 3.215A24 24 0 0 1 76.785 12C80 17.57 80 25.046 80 40s0 22.43-3.215 28A24 24 0 0 1 68 76.785C62.43 80 54.954 80 40 80s-22.43 0-28-3.215A24 24 0 0 1 3.215 68C0 62.43 0 54.954 0 40"/>
      <path fill="url(#d)" fill-opacity=".06" d="M0 40c0-14.954 0-22.43 3.215-28A24 24 0 0 1 12 3.215C17.57 0 25.046 0 40 0s22.43 0 28 3.215A24 24 0 0 1 76.785 12C80 17.57 80 25.046 80 40s0 22.43-3.215 28A24 24 0 0 1 68 76.785C62.43 80 54.954 80 40 80s-22.43 0-28-3.215A24 24 0 0 1 3.215 68C0 62.43 0 54.954 0 40" style="mix-blend-mode:screen"/>
      
      <!-- Ambient Brand Glow -->
      <g filter="url(#e)">
        <ellipse cx="40" cy="18" fill="${brandColor}" rx="${glowRx}" ry="${glowRy}"/>
      </g>
      
      <!-- Emblem with drop shadow -->
      <g filter="url(#f)">
        ${emblemSvg}
      </g>
    </g>
    <!-- Beveled glass rim stroke -->
    <path stroke="url(#l)" d="M40 .5c7.486 0 13.067 0 17.474.4 4.124.373 7.178 1.094 9.764 2.465l.512.283a23.5 23.5 0 0 1 8.602 8.602c1.556 2.696 2.35 5.876 2.749 10.276.399 4.407.399 9.988.399 17.474s0 13.067-.4 17.474c-.373 4.124-1.094 7.178-2.465 9.764l-.283.512a23.5 23.5 0 0 1-7.939 8.204l-.663.398c-2.696 1.556-5.876 2.35-10.276 2.749-4.407.399-9.988.399-17.474.399s-13.067 0-17.474-.4c-4.4-.398-7.58-1.192-10.276-2.748a23.5 23.5 0 0 1-8.204-7.939l-.398-.663C2.092 65.054 1.298 61.874.9 57.474.5 53.067.5 47.486.5 40s0-13.067.4-17.474c.398-4.4 1.192-7.58 2.748-10.276a23.5 23.5 0 0 1 8.602-8.602C14.946 2.092 18.126 1.298 22.526.9 26.933.5 32.514.5 40 .5Z"/>
  </g>
  <defs>
    <clipPath id="a" transform="translate(4 4)">
      <path d="M0 40c0-14.954 0-22.43 3.215-28A24 24 0 0 1 12 3.215C17.57 0 25.046 0 40 0s22.43 0 28 3.215A24 24 0 0 1 76.785 12C80 17.57 80 25.046 80 40s0 22.43-3.215 28A24 24 0 0 1 68 76.785C62.43 80 54.954 80 40 80s-22.43 0-28-3.215A24 24 0 0 1 3.215 68C0 62.43 0 54.954 0 40"/>
    </clipPath>
    <clipPath id="b">
      <path fill="#fff" d="M0 40c0-14.954 0-22.43 3.215-28A24 24 0 0 1 12 3.215C17.57 0 25.046 0 40 0s22.43 0 28 3.215A24 24 0 0 1 76.785 12C80 17.57 80 25.046 80 40s0 22.43-3.215 28A24 24 0 0 1 68 76.785C62.43 80 54.954 80 40 80s-22.43 0-28-3.215A24 24 0 0 1 3.215 68C0 62.43 0 54.954 0 40"/>
    </clipPath>
    <linearGradient id="c" x1="40" x2="40" y1="18.889" y2="110" gradientUnits="userSpaceOnUse">
      <stop stop-color="#fff" stop-opacity="0"/>
      <stop offset="1" stop-color="#EAE9ED"/>
    </linearGradient>
    <radialGradient id="d" cx="0" cy="0" r="1" gradientTransform="matrix(21.6 0 0 75.0997 12.48 0)" gradientUnits="userSpaceOnUse">
      <stop stop-color="#EAE9ED"/>
      <stop offset="1" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="l" cx="0" cy="0" r="1" gradientTransform="rotate(65.333 -.938 16.938)scale(61.2604)" gradientUnits="userSpaceOnUse">
      <stop stop-color="#fff"/>
      <stop offset="1" stop-color="#fff" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="brandGrad" x1="20" x2="60" y1="20" y2="60" gradientUnits="userSpaceOnUse">
      ${brandGradStops}
    </linearGradient>
    <linearGradient id="specularStroke" x1="20" x2="60" y1="18" y2="36" gradientUnits="userSpaceOnUse">
      ${specularStops}
    </linearGradient>
    <filter id="e" width="200" height="120" x="-60" y="-42" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
      <feGaussianBlur result="effect1_foregroundBlur" stdDeviation="22"/>
    </filter>
    <filter id="f" width="70" height="70" x="5" y="5" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
      <feOffset dy="3.5"/>
      <feGaussianBlur stdDeviation="3"/>
      <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"/>
      <feBlend in2="BackgroundImageFix" result="effect1_dropShadow"/>
      <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
    </filter>
  </defs>
</svg>`;
}

// 1. Telegram
const telegramEmblem = `
  <circle cx="40" cy="40" r="19" fill="url(#brandGrad)"/>
  <path fill="#fff" d="M48.2 31.8L28.8 39.3c-1.3.5-1.3 1.3-.2 1.6l5 1.5 11.6-7.3c.5-.3 1-.1.6.2l-9.4 8.5-.4 5.4c.5 0 .8-.2 1.1-.5l2.6-2.5 5.4 4c1 .6 1.7.3 1.9-.9l3.5-16.6c.4-1.4-.5-2-2.3-1.4z"/>
  <circle cx="40" cy="40" r="19" stroke="url(#specularStroke)" stroke-width=".75"/>
`;
const telegramSvg = getBaseSvg(
  '#229ED9', 42, 18,
  telegramEmblem,
  '<stop stop-color="#38B9F5"/><stop offset=".5" stop-color="#229ED9"/><stop offset="1" stop-color="#1878B3"/>',
  '<stop stop-color="#E0F2FE" stop-opacity=".8"/><stop offset="1" stop-color="#0284C7" stop-opacity="0"/>'
);
fs.writeFileSync(path.join(iconsDir, 'social-telegram.svg'), telegramSvg, 'utf8');

// 2. YouTube
const youtubeEmblem = `
  <rect x="21" y="26.5" width="38" height="27" rx="7" fill="url(#brandGrad)"/>
  <path fill="#fff" d="M36 34.5l11 5.5-11 5.5V34.5z"/>
  <rect x="21" y="26.5" width="38" height="27" rx="7" stroke="url(#specularStroke)" stroke-width=".75"/>
`;
const youtubeSvg = getBaseSvg(
  '#FF0000', 44, 20,
  youtubeEmblem,
  '<stop stop-color="#FF4D4D"/><stop offset=".5" stop-color="#FF0000"/><stop offset="1" stop-color="#B30000"/>',
  '<stop stop-color="#FFE4E6" stop-opacity=".85"/><stop offset="1" stop-color="#991B1B" stop-opacity="0"/>'
);
fs.writeFileSync(path.join(iconsDir, 'social-youtube.svg'), youtubeSvg, 'utf8');

// 3. Facebook
const facebookEmblem = `
  <circle cx="40" cy="40" r="19" fill="url(#brandGrad)"/>
  <path fill="#fff" d="M41.5 59V40.2h5.2l.8-6.1h-6v-3.9c0-1.8.5-3 3.1-3h3.3v-5.4c-.6-.1-2.5-.2-4.8-.2-4.8 0-8 2.9-8 8.3v4.2h-5.2v6.1h5.2V59h6.4z"/>
  <circle cx="40" cy="40" r="19" stroke="url(#specularStroke)" stroke-width=".75"/>
`;
const facebookSvg = getBaseSvg(
  '#1877F2', 42, 18,
  facebookEmblem,
  '<stop stop-color="#4599FF"/><stop offset=".5" stop-color="#1877F2"/><stop offset="1" stop-color="#0C54B8"/>',
  '<stop stop-color="#EFF6FF" stop-opacity=".8"/><stop offset="1" stop-color="#1D4ED8" stop-opacity="0"/>'
);
fs.writeFileSync(path.join(iconsDir, 'social-facebook.svg'), facebookSvg, 'utf8');

// 4. TikTok
const tiktokEmblem = `
  <rect x="21" y="21" width="38" height="38" rx="10" fill="#0D0D0D"/>
  <path fill="#00F2FE" opacity=".85" d="M39.5 23.5h4.2c.2 2 .9 3.8 2.2 4.9 1.4 1 3.2 1.4 4.6 1.4v4.5c-1.8 0-3.6-.5-5.1-1.4v10.5c0 5.8-4.7 10.5-10.5 10.5s-10.5-4.7-10.5-10.5 4.7-10.5 10.5-10.5c.9 0 1.8.1 2.6.4v4.8c-.8-.3-1.7-.5-2.6-.5-3.2 0-5.8 2.6-5.8 5.8s2.6 5.8 5.8 5.8 5.8-2.6 5.8-5.8V23.5z"/>
  <path fill="#FE2C55" opacity=".85" d="M41.5 25.5h4.2c.2 2 .9 3.8 2.2 4.9 1.4 1 3.2 1.4 4.6 1.4v4.5c-1.8 0-3.6-.5-5.1-1.4v10.5c0 5.8-4.7 10.5-10.5 10.5s-10.5-4.7-10.5-10.5 4.7-10.5 10.5-10.5c.9 0 1.8.1 2.6.4v4.8c-.8-.3-1.7-.5-2.6-.5-3.2 0-5.8 2.6-5.8 5.8s2.6 5.8 5.8 5.8 5.8-2.6 5.8-5.8V25.5z"/>
  <path fill="#FFFFFF" d="M40.5 24.5h4.2c.2 2 .9 3.8 2.2 4.9 1.4 1 3.2 1.4 4.6 1.4v4.5c-1.8 0-3.6-.5-5.1-1.4v10.5c0 5.8-4.7 10.5-10.5 10.5s-10.5-4.7-10.5-10.5 4.7-10.5 10.5-10.5c.9 0 1.8.1 2.6.4v4.8c-.8-.3-1.7-.5-2.6-.5-3.2 0-5.8 2.6-5.8 5.8s2.6 5.8 5.8 5.8 5.8-2.6 5.8-5.8V24.5z"/>
  <rect x="21" y="21" width="38" height="38" rx="10" stroke="url(#specularStroke)" stroke-width=".75"/>
`;
const tiktokSvg = getBaseSvg(
  '#00F2FE', 42, 18,
  tiktokEmblem,
  '<stop stop-color="#1A1A1A"/><stop offset="1" stop-color="#050505"/>',
  '<stop stop-color="#FFFFFF" stop-opacity=".4"/><stop offset="1" stop-color="#333333" stop-opacity="0"/>'
);
fs.writeFileSync(path.join(iconsDir, 'social-tiktok.svg'), tiktokSvg, 'utf8');

// 5. Instagram
const instagramEmblem = `
  <rect x="22" y="22" width="36" height="36" rx="10" fill="url(#brandGrad)"/>
  <rect x="28" y="28" width="24" height="24" rx="6.5" stroke="#fff" stroke-width="2.4" fill="none"/>
  <circle cx="40" cy="40" r="5.5" stroke="#fff" stroke-width="2.4" fill="none"/>
  <circle cx="47" cy="33" r="1.4" fill="#fff"/>
  <rect x="22" y="22" width="36" height="36" rx="10" stroke="url(#specularStroke)" stroke-width=".75"/>
`;
const instagramSvg = getBaseSvg(
  '#E1306C', 44, 20,
  instagramEmblem,
  '<stop stop-color="#F58529"/><stop offset=".35" stop-color="#DD2A7B"/><stop offset=".7" stop-color="#8134AF"/><stop offset="1" stop-color="#515BD4"/>',
  '<stop stop-color="#FED7AA" stop-opacity=".85"/><stop offset="1" stop-color="#8134AF" stop-opacity="0"/>'
);
fs.writeFileSync(path.join(iconsDir, 'social-instagram.svg'), instagramSvg, 'utf8');

// 6. WhatsApp
const whatsappEmblem = `
  <circle cx="40" cy="40" r="19" fill="url(#brandGrad)"/>
  <path fill="#fff" d="M40 26.5c-7.5 0-13.5 6-13.5 13.5 0 2.4.6 4.7 1.8 6.7L26.5 53.5l7-1.8c1.9 1 4.1 1.6 6.5 1.6 7.5 0 13.5-6 13.5-13.5s-6-13.3-13.5-13.3zm6.8 19c-.3.8-1.7 1.6-2.4 1.7-.6.1-1.4.1-4.2-1-3.6-1.5-5.9-5.1-6.1-5.3-.2-.3-1.6-2.1-1.6-4.1 0-1.9 1-2.9 1.4-3.3.4-.4.8-.5 1.1-.5h.8c.3 0 .6 0 .8.6.3.7 1 2.5 1.1 2.7.1.2.1.4 0 .6-.1.2-.2.4-.4.6-.2.2-.4.4-.6.6-.2.2-.4.4-.2.8.3.5 1.2 2 2.6 3.2 1.8 1.6 3.3 2.1 3.7 2.3.4.2.6.2.9-.1.2-.3 1-1.2 1.3-1.6.3-.4.6-.3.9-.2.4.1 2.4 1.1 2.8 1.3.4.2.7.3.8.5.1.2.1 1.2-.2 2z"/>
  <circle cx="40" cy="40" r="19" stroke="url(#specularStroke)" stroke-width=".75"/>
`;
const whatsappSvg = getBaseSvg(
  '#25D366', 42, 18,
  whatsappEmblem,
  '<stop stop-color="#34D399"/><stop offset=".5" stop-color="#25D366"/><stop offset="1" stop-color="#059669"/>',
  '<stop stop-color="#ECFDF5" stop-opacity=".8"/><stop offset="1" stop-color="#047857" stop-opacity="0"/>'
);
fs.writeFileSync(path.join(iconsDir, 'social-whatsapp.svg'), whatsappSvg, 'utf8');

console.log('ALL_ICONS_GENERATED_SUCCESSFULLY');
