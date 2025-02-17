/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./src/**/*.{html,ts}",
      "./node_modules/@angular/material/**/*.{html,scss,ts}",
    ],
    theme: {
      extend: {
        colors: {
          primary: "#1677FF", // Custom blue
          poll: "#2BC167",
          background: "#F9F9F9", // Custom light gray
        },
      },
    },
    plugins: [require('tailwind-scrollbar-hide') ,require('tailwindcss-font-inter')({ // default settings
      a: -0.0223,
      b: 0.185,
      c: -0.1745,
      baseFontSize: 16,
      importFontFace: true,
    })],
  
    
  };
  
