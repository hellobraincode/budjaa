/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eef5ff',
          100: '#d9e9ff',
          200: '#bcd8ff',
          300: '#8dc0ff',
          400: '#599eff',
          500: '#3b7eff',
          600: '#1c57f5',
          700: '#1544e0',
          800: '#1739b5',
          900: '#18368f',
          950: '#13215e',
        },
        secondary: {
          50: '#fefbe8',
          100: '#fef6c3',
          200: '#fee989',
          300: '#fed744',
          400: '#fec111',
          500: '#f09f06',
          600: '#cc7903',
          700: '#a15507',
          800: '#85420c',
          900: '#72380f',
          950: '#431c05',
        },
        accent: {
          50: '#fff1f0',
          100: '#ffe0de',
          200: '#ffc5c2',
          300: '#ff9b97',
          400: '#ff655e',
          500: '#ff3a31',
          600: '#ed1c12',
          700: '#c7130a',
          800: '#a3130c',
          900: '#86150f',
          950: '#490702',
        },
        success: {
          50: '#f0fdf4',
          500: '#22c55e',
          900: '#14532d',
        },
        warning: {
          50: '#fffbeb',
          500: '#f59e0b',
          900: '#78350f',
        },
        error: {
          50: '#fef2f2',
          500: '#ef4444',
          900: '#7f1d1d',
        },
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};