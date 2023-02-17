/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "pages/tentang.html", "pages/artikel.html", "pages/galeri.html", "pages/detail_artikel.html", "pages/kontak.html"],
  theme: {
    container: {
      center: true,
      padding: {
        lg: "40px",
        md: "20px",
        sm: "12px",
      },
    },
    extend: {
      colors: {
        prp: "#AE39FF",
        blu: "#19245F",
        drk: "#2E334E",
        cyn: "#4FACF6",
        yel: "#F2B828",
        mut: "#A3A6A6",
        txt: "#3A3B41",
        lnk: "#404040",
        fot: "#FAFAFA",
      },
      screens: {
        sm: "320px",
        // => @media (min-width: 370px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1080px",
        // => @media (min-width: 991px) { ... }
      },
    },
  },
  plugins: [],
};
