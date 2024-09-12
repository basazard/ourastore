/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "primary" : "hsl(32.22 23.08% 54.12%)",
        "secondary" : "hsla(0 0% 12.94%)",
        "secondary-foreground" : "hsl(60 9.09% 97.84%)",
        "border" : "hsl(206.67 5.52% 31.96%)",
        "muted" : "hsl(210 6.78% 23.14%)"
      }
    },
  },
  plugins: [
  ],
};
