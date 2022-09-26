module.exports = {
  content: ['./src/pages/**/*.tsx', './src/components/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        'orange-light': '#EFBB36',
        'orange-dark': '#E7750B',
        'primary-blue': '#31B2E8',
        'primary-orange': '#E99532',
        'off-white': '#E8E8E8',
        cyan: '#31B2E8'
      }
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif']
    }
  },
  plugins: []
};
