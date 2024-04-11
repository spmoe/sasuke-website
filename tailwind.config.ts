/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      container: {
        center: true,
        padding: "2rem",
        // change the max-width to whatever value you want
        screens: {
          sm: "100%",
          md: "100%",
          lg: "992px",
          xl: "1080px",
        },
      },
      boxShadow: {
        item: "5px 5px 15px #bbc3d1, -5px -5px 15px #ffffff",
      },
    },
  },
  plugins: [],
};
