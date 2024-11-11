/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      'grey': '#f1f1f1',
      'white': '#ffffff',
      'purple': '#9663fc',
      'yellow': '#ffda7a',
      'black': '#000000',
    },
    backgroundColor: theme => ({
      'grey': '#f1f1f1',
      'white': '#ffffff',
      'purple': '#9663fc',
      'yellow': '#ffda7a',
      'black': '#000000',
    }),
    borderRadius: {
      'none': '0rem',
      'md': '0.5rem',
      'xl': '1rem',
      '2xl': '2rem',
      '3xl': '3rem',
      '4xl': '4rem',
      '5xl': '5rem',
      'full': '9999px',
    },
    extend: {
      maxHeight: {
        '90vh': '90vh',
      },
      maxWidth: {
        '90vw': '90vw',
      },
    },
  },
  plugins: [],
}

