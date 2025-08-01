import tailwindcssAnimate from 'tailwindcss-animate'
import typography from '@tailwindcss/typography'
import { preset } from '@govtechmy/myds-style'

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    'node_modules/@govtechmy/myds-react/dist/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: ['selector'],
  plugins: [tailwindcssAnimate, typography],
  prefix: '',
  presets: [preset],
  safelist: [
    'lg:col-span-4',
    'lg:col-span-6',
    'lg:col-span-8',
    'lg:col-span-12',
    'border-border',
    'bg-card',
    'border-error',
    'bg-error/30',
    'border-success',
    'bg-success/30',
    'border-warning',
    'bg-warning/30',
  ],
  theme: {
    container: {
      center: true,
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
    },
    extend: {
      colors: {
        secondary: {
          50: 'rgba(var(--_secondary-50) / <alpha-value>)',
          100: 'rgba(var(--_secondary-100) / <alpha-value>)',
          200: 'rgba(var(--_secondary-200) / <alpha-value>)',
          300: 'rgba(var(--_secondary-300) / <alpha-value>)',
          400: 'rgba(var(--_secondary-400) / <alpha-value>)',
          500: 'rgba(var(--_secondary-500) / <alpha-value>)',
          600: 'rgba(var(--_secondary-600) / <alpha-value>)',
          700: 'rgba(var(--_secondary-700) / <alpha-value>)',
          800: 'rgba(var(--_secondary-800) / <alpha-value>)',
          900: 'rgba(var(--_secondary-900) / <alpha-value>)',
          950: 'rgba(var(--_secondary-950) / <alpha-value>)',
        },
        'bg-secondary-50': 'rgb(var(--bg-secondary-50))',
        'bg-secondary-100': 'rgb(var(--bg-secondary-100))',
        'bg-secondary-200': 'rgb(var(--bg-secondary-200))',
        'bg-secondary-300': 'rgb(var(--bg-secondary-300))',
        'bg-secondary-400': 'rgb(var(--bg-secondary-400))',
        'bg-secondary-500': 'rgb(var(--bg-secondary-500))',
        'bg-secondary-600': 'rgb(var(--bg-secondary-600))',
        'bg-secondary-700': 'rgb(var(--bg-secondary-700))',
        'bg-secondary-800': 'rgb(var(--bg-secondary-800))',
        'bg-secondary-900': 'rgb(var(--bg-secondary-900))',
        'bg-secondary-950': 'rgb(var(--bg-secondary-950))',
        'bg-secondary-disabled': 'rgb(var(--bg-secondary-disabled))',
        'txt-secondary': 'rgb(var(--txt-secondary))',
        'txt-secondary-disabled': 'rgb(var(--txt-secondary-disabled))',
        'otl-secondary-disabled': 'rgb(var(--otl-secondary-disabled))',
        'otl-secondary-200': 'rgb(var(--otl-secondary-200))',
        'otl-secondary-300': 'rgb(var(--otl-secondary-300))',
        'fr-secondary': 'rgb(var(--fr-secondary))',
      },
      fontFamily: {
        body: 'var(--font-body)',
        heading: 'var(--font-heading)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      typography: () => ({
        DEFAULT: {
          css: [
            {
              '--tw-prose-body': 'rgb(var(--_gray-700))',
              '--tw-prose-invert-body': 'rgb(var(--_gray-300))',
              '--tw-prose-bold': 'rgb(var(--_gray-700))',
              '--tw-prose-invert-bold': 'rgb(var(--_gray-300))',
              '--tw-prose-bullets': 'rgb(var(--_gray-700))',
              '--tw-prose-invert-bullets': 'rgb(var(--_gray-300))',
              '--tw-prose-counters': 'rgb(var(--_gray-700))',
              '--tw-prose-invert-counters': 'rgb(var(--_gray-300))',
              '--tw-prose-headings': 'rgb(var(--_gray-900))',
              '--tw-prose-invert-headings': 'rgb(var(--_white))',
              '--tw-prose-quotes': 'rgb(var(--_gray-700))',
              '--tw-prose-invert-quotes': 'rgb(var(--_gray-300))',
              '--tw-prose-quote-borders': 'rgb(var(--_gray-300))',
              '--tw-prose-invert-quote-borders': 'rgb(var(--_gray-700))',
              h2: {
                marginTop: '32px',
                marginBottom: '24px',
              },
              h3: {
                fontSize: '20px',
                lineHeight: '30px',
                marginTop: '24px',
                marginBottom: '24px',
              },
              h4: {
                fontSize: '18px',
                lineHeight: '26px',
                marginTop: '24px',
                marginBottom: '24px',
              },
              h5: {
                fontSize: '16px',
                lineHeight: '24px',
                fontWeight: '600',
                marginTop: '12px',
                marginBottom: '24px',
              },
              h6: {
                fontSize: '14px',
                lineHeight: '20px',
                fontWeight: '600',
                marginTop: '12px',
                marginBottom: '24px',
              },
              p: {
                marginTop: '24px',
                marginBottom: '24px',
              },
              a: {
                color: '#2563EB',
                fontWeight: '400',
                textUnderlinePosition: 'from-font',
              },
              blockquote: {
                fontStyle: 'normal',
              },
              strong: {
                fontWeight: '600',
              },
            },
          ],
        },
      }),
    },
  },
}

export default config
