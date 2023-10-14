/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '480px',
      // => @media (min-width: 480px) { ... } 

      'sm' : '640px',
      // => @media (min-width: 640px) { ... }

      'md' : '768px',
      // => @media (min-width: 768px) { ... }

      'lg' : '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl' : '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl' : '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      backgroundImage: {
        'slide-one': "url('images/man1.jpg')",
        'slide-two': "url('images/women1.jpg')",
        'slide-three': "url('images/man2.jpg')",
        'button-men': "url('images/man3.jpg')",
        'button-women': "url('images/women2.jpg')",
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      }
    },
  },
  plugins: [],
}

