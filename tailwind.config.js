import plugin from 'tailwindcss/plugin';


module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'], // Adjust based on your project folder structure
  theme: {
    extend: {
      transform: {
        'preserve-3d': 'preserve-3d',
      },
      perspective: {
        1000: '1000px',
      },
      keyframes: {
        rotateY: {
          '0%': { transform: 'rotateY(0deg)' },
          '100%': { transform: 'rotateY(180deg)' },
        },
      },
      animation: {
        'flip-y': 'rotateY 0.5s ease-in-out',
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.transform-style-3d': {
          transformStyle: 'preserve-3d',
        },
        '.perspective-1000': {
          perspective: '1000px',
        },
        '.rotate-y-0': {
          transform: 'rotateY(0deg)',
        },
        '.rotate-y-180': {
          transform: 'rotateY(180deg)',
        },
        '.backface-hidden': {
          backfaceVisibility: 'hidden',
        },
      });
    }),
  ],
};
