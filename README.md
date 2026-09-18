# Goldify Hero Section

Extracted and adapted from `C:\Users\rasid\Downloads\goldify.framer.website`.

## 📁 Project Structure

```text
Legal Trading Website/
├── index.html              # Clean, production-ready, standalone implementation
├── style.css               # Clean modern CSS with 3D perspective & animations
├── framer-hero.html        # Raw Framer SSR Hero extract with local asset mappings
├── README.md               # Documentation
└── assets/
    ├── images/             # 3D coins, dashboard mockup, clouds, badge backgrounds, icons
    ├── videos/             # Ambient looping WebM background & particle video
    └── fonts/              # Inter & Inter Tight font families
```

## ✨ Features Included

1. **Floating Navigation Header**:
   - Translucent glassmorphic pill navbar with backdrop blur.
   - Goldify brand logo, navigation links (*About, Features, Pricing, Blog*), and "Start Now" CTA button.

2. **Hero Typography & Badge**:
   - Glowing badge: `✦ WE ANALYZE YOUR DATA` with star icon and gold border.
   - Main headline: *"Smarter gold analysis for faster, confident decisions"* in Instrument Serif.
   - Subtitle: *"Harness AI-powered insights to analyze gold trends, forecast movement, and optimize your trading strategy all in one powerful platform."* in Inter Display.

3. **Dual Call-to-Action Buttons**:
   - **Start Today** primary button with metallic gold gradient, inner highlight, sparkle icon, and hover elevation.
   - **Explore Features** secondary button with dark frosted glassmorphic backdrop, subtle gold border, diagonal arrow icon, and hover transition.

4. **3D Interactive Showcase**:
   - Isometric perspective tilt (`perspective(1200px) rotateX(22deg)`).
   - High-resolution trading terminal dashboard preview.
   - Floating 3D gold coins (left and right) with smooth infinite CSS floating keyframe animations.
   - Ambient cloud and gold aura glow effects.

5. **Looping Background Video**:
   - Looping ambient WebM video (`hero-ambient.webm`) & particle video (`hero-particles.webm`) with mix-blend modes.

6. **Fully Responsive**:
   - Optimized for mobile (<768px), tablet (768px-1024px), and desktop (>1024px) screens.

7. **Navbar Language Switcher**:
   - Translucent glassmorphic pill button (🌐 EN ⌄) right beside 'Start Now'.
   - Dropdown menu featuring English, বাংলা (Bengali), Español, العربية, Deutsch, and Français.
   - Interactive language selection with active state, gold hover highlight, and localStorage persistence.
