module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    theme: {
      screens: {
        sm: { min: '480px', max: '639px' },
        md: { min: '640px', max: '1023px' },
        lg: { min: '1024px', max: '1279px' },
        xl: { min: '1280px', max: '1535px' },
        '2xl': { min: '1536px' },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
