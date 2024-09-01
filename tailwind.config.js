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
    screens: {
      'sm' : {'max' : '500px'},
      'md': {'max': '900px'}, // Medium screens (default: min-width: 768px)
      'xl': '1280px', // Extra large screens (default: min-width: 1280px)
      // You can add custom breakpoints if needed
      '2xl': '1536px', // Optional custom breakpoint
    },
  },
  plugins: [],
}