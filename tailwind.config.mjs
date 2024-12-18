/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        redColor: "#e3646e",
        purpleColor: "#BB72e9",
        blueColor: "#3996db",
        greenColor: "#82bc4f",
        yellowColor: "#EABd5f",
        base100: "#0D0e11",
        base200: "#16181D",
        base300: "#292C34",
        base400: "#878EA1",
        base500: "#c0c4ce",
        base600: "#e2e4e9",
      },
      fontFamily: {
        sans: ["Maven Pro"],
        serif: ["Asap"],
        mono: ["Inconsolata"],
      },
      backgroundImage: {
        intro: "url('src/assets/images/bg-intro.png')",
        contacts: "url('src/assets/images/bg-contacts.png')",
      },
    },
  },
  plugins: [],
};
