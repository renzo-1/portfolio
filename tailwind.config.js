/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        main: "#272D32",
        second: "#303941",
        wText: "#f9f9f9",
        bText: "#272D32",
        yText: "#FFC93D",
      },
      backgroundImage: {
        printeerest_cover:
          "url('../public/assets/printeerest/printeerestCover.png')",
        messageHub_cover:
          "url('../public/assets/messagehub/messageHubCover.png')",
      },
    },
  },
  plugins: [],
};
