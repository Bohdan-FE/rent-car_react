/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
     screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1196px',
    },
    extend: {
      colors: {
        'blueText': '#3470FF',
        'greyText': 'rgba(18, 20, 23, 0.5)',
        'greySpace': 'rgba(18, 20, 23, 0.1)',
        'btnColor': '#3470FF',
        'btnHover': '#0B44CD'
      },
      
    },
  },
  plugins: [],
}

