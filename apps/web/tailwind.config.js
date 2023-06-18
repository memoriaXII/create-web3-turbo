/** @type {import('tailwindcss').Config} */

const colors = {
  // system
  primary: '#6C3AF6',
  secondary: '#FF645A',

  // TODO: review
  primaryHover: '#9774F9',
  secondaryHover: '#FF938C',
  error: '#E14F46',

  // primary color variation (creators)
  primaryD1: '#402294',
  primaryD2: '#562EC6',
  primaryL1: '#7A4DF8',
  primaryL2: '#9774F9',
  primaryL3: '#B59CFB',
  primaryL4: '#DDD1FF',
  primaryL5: '#F4F0FF',
  primaryL6: '#F7F4FF',

  // secondary color variation (fans)
  secondaryD1: '#993C36',
  secondaryD2: '#CC5048',
  secondaryL1: '#FF746B',
  secondaryL2: '#FF938C',
  secondaryL3: '#FFB2AD',
  secondaryL4: '#FFD8D6',
  secondaryL5: '#FFE1DF',
  secondaryL6: '#FFF1F0',

  // other colors
  green: '#21D272',
  gold: '#F9AB2D',
  blue: '#1574BD',

  // dark shades
  black: '#000',
  gray1: '#626262',
  gray2: '#7B7B7B',
  gray3: '#858585',
  gray4: '#B0B7C3',

  // light shades
  white: '#fff',
  lightGray: '#F1F1F1',
  lightGray1: '#CFD9E2',
  lightGray2: '#F3F3F3',
  lightGray3: '#F9F9F9',
  lightGray4: '#FAFBFC',
  lightGray5: '#FBFBFB',

  // TODO: component - cleanup later and try to reuse colors from above list after align with designer
  sidebarTopBg: '#FBE9EE',
  sidebarBottomBg: '#DECCFF',
  collapseBg: '#FAF8FF',

  // ------------------ below is for dark theme
  // black shades
  black2: '#191A1D',
  black3: '#1D1F22',
  black4: '#272A30',
  black5: '#30353E',
  black6: '#3A404A',
};

module.exports = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      screens: {
        DEFAULT: '1400px',
        sm: '1400px',
        lg: '1150px',
        xl: '1400px',
        '2xl': '1400px',
      },
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)'],
      },
      minHeight: {
        screen: '100vh',
      },
      minWidth: {
        screen: '100vw',
      },
      spacing: {},
      screens: {
        mobile: { max: '767px' },
        '3xl': '1440px',
        '4xl': '1920px',
      },
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        ...colors,
      },
      borderRadius: {
        box: '20px',
      },
      backgroundImage: {
        'rv-gradient':
          'linear-gradient(142.97deg, #C3F53C 57.95%, #00C805 116.9%);',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('tailwindcss-animate')],
};
