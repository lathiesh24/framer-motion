/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'customGradient': 'linear-gradient(to bottom right, #E0F7FA, #C8E6C9)',
      })
    },
  },
  plugins: [],
};
