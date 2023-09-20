/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    // './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    // './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        'primary-100': '#372744',
        'primary-200': '#BC6FF1',
        'accent-100': '#D9ACF5',
        'accent-200': '#fff4ff',
        'text-100': '#EEEEEE',
        'text-200': '#FDEBED',
        'bg-200': '#393E46',
        'bg-300': '#454e59',
      },
      fontFamily: {
        // serif: ['var(--font-dmsans)'],
        // sans: ['var(--font-poppins)'],
        // 'sans-serif': ['var(--font-crimson)'],
      },
      screens: {
        xs: '200px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        // 2xl: '1536px',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
  plugins: [],
  darkMode: ['class', '[data-theme="dark"]'],
}
