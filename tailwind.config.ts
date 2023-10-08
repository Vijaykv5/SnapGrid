module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backdropBlur: {
        xs : '1.5px',
      },
      screens: {
        'xs': {'max': '639px'},
      },
      height: {
        '128': '37rem',
      },
    },
  },
  plugins: [],
};