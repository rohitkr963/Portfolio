/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      // ── Fonts ──
      fontFamily: {
        display: ['var(--font-syne)', 'Syne', 'sans-serif'],
        body:    ['var(--font-dm-sans)', 'DM Sans', 'system-ui', 'sans-serif'],
        sans:    ['var(--font-dm-sans)', 'DM Sans', 'system-ui', 'sans-serif'],
        mono:    ['"Fira Code"', '"Cascadia Code"', 'monospace'],
      },

      // ── Colors ──
      colors: {
        // Enterprise palette
        void:   '#050810',
        cyan:   { DEFAULT: '#00F5FF', dim: 'rgba(0,245,255,0.12)', glow: 'rgba(0,245,255,0.4)' },
        violet: { DEFAULT: '#7C3AED', dim: 'rgba(124,58,237,0.15)', glow: 'rgba(124,58,237,0.4)' },

        // Legacy primary (kept for backward compat)
        primary: {
          '50':  '#f5f3ff',
          '100': '#ede9fe',
          '200': '#ddd6fe',
          '300': '#c4b5fd',
          '400': '#a78bfa',
          '500': '#8b5cf6',
          '600': '#7c3aed',
          '700': '#6d28d9',
          '800': '#5b21b6',
          '900': '#4c1d95',
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },

        // shadcn/ui vars
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card:       { DEFAULT: 'hsl(var(--card))', foreground: 'hsl(var(--card-foreground))' },
        popover:    { DEFAULT: 'hsl(var(--popover))', foreground: 'hsl(var(--popover-foreground))' },
        secondary:  { DEFAULT: 'hsl(var(--secondary))', foreground: 'hsl(var(--secondary-foreground))' },
        muted:      { DEFAULT: 'hsl(var(--muted))', foreground: 'hsl(var(--muted-foreground))' },
        accent:     { DEFAULT: 'hsl(var(--accent))', foreground: 'hsl(var(--accent-foreground))' },
        destructive:{ DEFAULT: 'hsl(var(--destructive))', foreground: 'hsl(var(--destructive-foreground))' },
        border:  'hsl(var(--border))',
        input:   'hsl(var(--input))',
        ring:    'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
      },

      // ── Border Radius ──
      borderRadius: {
        lg:   'var(--radius)',
        md:   'calc(var(--radius) - 2px)',
        sm:   'calc(var(--radius) - 4px)',
        '2xl':'1rem',
        '3xl':'1.5rem',
        '4xl':'2rem',
      },

      // ── Animations ──
      animation: {
        'fade-in':        'fadeIn 0.5s ease-in-out',
        'slide-up':       'slideUp 0.6s cubic-bezier(0.16,1,0.3,1)',
        'bounce-slow':    'bounce 2.5s infinite',
        'gradient-shift': 'gradient-shift 5s ease infinite',
        'float':          'float 5s ease-in-out infinite',
        'pulse-glow':     'pulse-glow 2s ease-in-out infinite',
        'marquee':        'marquee-scroll 25s linear infinite',
        'grain':          'grain-anim 0.4s steps(1) infinite',
        'mesh':           'mesh-drift 12s ease-in-out infinite alternate',
        'shimmer':        'shimmer 1.8s infinite',
      },
      keyframes: {
        fadeIn:   { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        slideUp:  { '0%': { transform: 'translateY(24px)', opacity: '0' }, '100%': { transform: 'translateY(0)', opacity: '1' } },
        float:    { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-14px)' } },
        'gradient-shift': {
          '0%,100%': { backgroundPosition: '0% 50%' },
          '50%':     { backgroundPosition: '100% 50%' },
        },
        'pulse-glow': {
          '0%,100%': { boxShadow: '0 0 0 0 rgba(0,245,255,0.4)' },
          '50%':     { boxShadow: '0 0 0 8px rgba(0,245,255,0)' },
        },
      },

      // ── Backdrop blur ──
      backdropBlur: {
        xs: '4px',
        sm: '8px',
        md: '16px',
        lg: '24px',
        xl: '40px',
        '2xl': '60px',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
