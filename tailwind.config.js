/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        Sour: ['Sour Gummy', 'sans-serif'],
      },
      height: {
        'new-screen': 'calc(100vh - 41px)',
      },
    },
  },
  plugins: [],
};
