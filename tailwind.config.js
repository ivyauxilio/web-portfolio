/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        midnight: { 950: "#1A0E2E", 900: "#241340", 800: "#33205C", 700: "#4A2E85", 600: "#5F3DB0" },
        lavender: { 50: "#FAF8FF", 100: "#F1ECFC", 200: "#E1D7F8", 300: "#CBBBF2", 400: "#B09CE8" },
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', "system-ui", "sans-serif"],
        sans: ['"DM Sans"', "system-ui", "sans-serif"],
      },
      keyframes: {
        rise: { "0%": { opacity: "0", transform: "translateY(14px)" }, "100%": { opacity: "1", transform: "none" } },
      },
      animation: { rise: "rise .8s cubic-bezier(.2,.7,.2,1) both" },
    },
  },
  plugins: [],
};
