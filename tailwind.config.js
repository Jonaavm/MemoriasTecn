module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: {
          500: 'oklch(0.84 0.18 117.33)',
        },
      },
      spacing: {
        1: '0.25rem',
      },
    },
  },
  plugins: [],
}