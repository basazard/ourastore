const { transform } = require('next/dist/build/swc')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slideUp : {
          '0%' : {
            transform : 'translateY(10%)',
            opacity : '0'
          },
          '100%' : {
            transform : 'translateY(0)',
            opacity : '1'
          }
        }
      },
      animation: {
        slideUp : 'slideUp 0.5s forwards'
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "card" : "url('/assets/card-bg.jpg')"
      },
      colors: {
        "background" : "hsl(180 1.3% 15.1%)",
        "primary" : "hsl(32.22 23.08% 54.12%)",
        "secondary" : "hsla(0 0% 12.94%)",
        "secondary-foreground" : "hsl(60 9.09% 97.84%)",
        "border" : "hsl(206.67 5.52% 31.96%)",
        "muted" : "hsl(210 6.78% 23.14%)",
        "input" : "hsl(210 6.86% 40%)",
        "authorization" : "hsl(0 0% 47.84%)"
      }
    },
  },
  plugins: [
  ],
};
