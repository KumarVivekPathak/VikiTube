/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'auto-fit-minmax': 'repeat(auto-fit, minmax(250px, 1fr))',
        'sidebar-content': '250px 1fr',
      },
      spacing: {
       
        '30': '50px',
        '15': '35px',
      },
     
    },
  },
  plugins: [],
}