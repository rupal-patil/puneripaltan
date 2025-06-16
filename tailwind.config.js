module.exports = {
    theme: {
      extend: {
        animation: {
          scaleUp: 'scaleUp 0.5s ease-out forwards', // Define scale animation
        },
        keyframes: {
          scaleUp: {
            '0%': { transform: 'scale(0)' },  // Start from scale 0
            '100%': { transform: 'scale(1)' }, // End at scale 1
          },
        },
      },
    },
    plugins: [
      require('tailwind-scrollbar'),
    ],
  }