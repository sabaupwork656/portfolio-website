/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#07111f',
        navy: '#020617',
        steel: '#526174',
        line: 'rgba(255, 255, 255, 0.14)',
        mist: 'rgba(255, 255, 255, 0.06)',
        teal: '#38bdf8',
        gold: '#c084fc'
      },
      boxShadow: {
        soft: '0 24px 80px rgba(56, 189, 248, 0.16), 0 10px 36px rgba(2, 6, 23, 0.45)',
        card: '0 18px 46px rgba(2, 6, 23, 0.30)'
      },
      fontFamily: {
        sans: ['Inter', 'Geist', 'ui-sans-serif', 'system-ui', 'sans-serif']
      }
    },
  },
  plugins: [],
};
