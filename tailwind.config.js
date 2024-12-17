/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        body: 'var(--font-body)',
        heading: 'var(--font-heading)',
      },
      transitionDuration: {
        '700': '700ms',
        '1000': '1000ms',
      },
      animation: {
        'bounce': 'bounce 2s infinite',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};