/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#1E40AF', // Primary brand color
          700: '#1d4ed8',
          800: '#1e3a8a',
          900: '#1e1b4b',
        },
        secondary: {
          500: '#2563EB', // Bright blue for highlights
          600: '#1d4ed8',
        },
        danger: {
          500: '#DC2626', // Red for phishing alerts
          600: '#b91c1c',
        },
        warning: {
          500: '#FBBF24', // Amber yellow for suspicious alerts
          600: '#f59e0b',
        },
        success: {
          500: '#16A34A', // Green for safe indicators
          600: '#15803d',
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'pulse-slow': 'pulse 3s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};