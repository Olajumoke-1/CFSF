/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green: '#397537',
        Lightgreen: '#408EC6',
        white: '#FFFFFF',
        Lightpink: '#E63946',
        black: '#000000',
        light: '#EEEEEE',
        lightgr: '#c2d4c1',
        gr: '#8bc789',
        gray: '#808080',
        orange: '#E63946',
      },
      fontFamily: {
        'roboto': ['Roboto', 'Arial', 'sans-serif'],  // Added Arial as a fallback for Roboto
        'montserrat': ['Montserrat', 'Arial', 'sans-serif'],  // Added Arial as a fallback for Montserrat
        'playfair': ['"Playfair Display"', 'Georgia', 'serif'],  // Added Georgia as a fallback for Playfair Display
      }
      
    },
    screens: {
      'xs': '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    }
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}
