/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        burgundy: {
          DEFAULT: '#7A0F16',
          50:  '#FDF2F3',
          100: '#FCE4E5',
          200: '#F8C6C9',
          300: '#F29BA0',
          400: '#E96970',
          500: '#D93E47',
          600: '#B82830',
          700: '#8F1C23',
          800: '#7A0F16',
          900: '#5C0B10',
          950: '#3D0709',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 2px 16px 0 rgba(0,0,0,0.06)',
        float: '0 8px 32px 0 rgba(0,0,0,0.12)',
      },
    },
  },
  plugins: [],
}
