/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
        },
        navy: {
          700: '#1e3a8a',
          800: '#172554',
          900: '#0F172A',
        },
        accent: {
          yellow: '#FCD34D',
        }
      },
      backgroundImage: {
        'network-pattern': "url('/src/assets/network-pattern.png')",
        'wave-pattern': "url('/src/assets/wave-pattern.png')",
      },
      animation: {
        'fadeIn': 'fadeIn 0.5s ease-in',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        }
      }
    },
  },
  plugins: [],
}
