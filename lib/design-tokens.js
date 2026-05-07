/**
 * Design Tokens — Single source of truth for the design system.
 * Used in components for inline styles and JS-driven animations.
 */

export const COLORS = {
  // Base
  void: '#050810',
  voidLight: '#0a0f1e',
  voidMid: '#0d1128',

  // Accents
  cyan: '#00F5FF',
  cyanDim: 'rgba(0, 245, 255, 0.15)',
  cyanGlow: 'rgba(0, 245, 255, 0.4)',

  violet: '#7C3AED',
  violetDim: 'rgba(124, 58, 237, 0.15)',
  violetGlow: 'rgba(124, 58, 237, 0.4)',

  pink: '#EC4899',
  pinkDim: 'rgba(236, 72, 153, 0.15)',

  // Surfaces (glassmorphism)
  surface: 'rgba(255, 255, 255, 0.04)',
  surfaceHover: 'rgba(255, 255, 255, 0.08)',
  surfaceBorder: 'rgba(255, 255, 255, 0.1)',
  surfaceBorderHover: 'rgba(255, 255, 255, 0.2)',

  // Text
  textPrimary: '#F0F4FF',
  textSecondary: 'rgba(240, 244, 255, 0.6)',
  textMuted: 'rgba(240, 244, 255, 0.35)',
}

export const GRADIENTS = {
  primary: 'linear-gradient(135deg, #00F5FF 0%, #7C3AED 50%, #EC4899 100%)',
  primarySubtle: 'linear-gradient(135deg, rgba(0,245,255,0.2) 0%, rgba(124,58,237,0.2) 100%)',
  hero: 'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(124,58,237,0.3) 0%, transparent 60%)',
  card: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
  glow: 'radial-gradient(circle at center, rgba(0,245,255,0.15) 0%, transparent 70%)',
}

export const SHADOWS = {
  cyan: '0 0 30px rgba(0,245,255,0.3), 0 0 60px rgba(0,245,255,0.15)',
  violet: '0 0 30px rgba(124,58,237,0.4), 0 0 60px rgba(124,58,237,0.2)',
  card: '0 8px 32px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.08)',
  cardHover: '0 20px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(0,245,255,0.2)',
}

export const TIMING = {
  instant: 100,
  fast: 200,
  normal: 400,
  slow: 700,
  verySlow: 1200,
  ease: [0.16, 1, 0.3, 1],        // Expo ease out
  easeIn: [0.4, 0, 1, 1],
  spring: { type: 'spring', stiffness: 300, damping: 25 },
  springGentle: { type: 'spring', stiffness: 150, damping: 20 },
}

export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
}

export const FONTS = {
  display: 'Syne, sans-serif',
  body: '"DM Sans", sans-serif',
  mono: '"Fira Code", "Cascadia Code", monospace',
}

// Motion variants — reusable across components
export const VARIANTS = {
  fadeUp: {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, delay: i * 0.1, ease: TIMING.ease },
    }),
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: (i = 0) => ({
      opacity: 1,
      transition: { duration: 0.5, delay: i * 0.08 },
    }),
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.85 },
    visible: (i = 0) => ({
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, delay: i * 0.1, ease: TIMING.ease },
    }),
  },
  slideLeft: {
    hidden: { opacity: 0, x: 50 },
    visible: (i = 0) => ({
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, delay: i * 0.1, ease: TIMING.ease },
    }),
  },
  staggerContainer: {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  },
}
