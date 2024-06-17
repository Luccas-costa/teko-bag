import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        md2: "890px",
        md3: "853px",
        sm1: "740px",
        xm1: "600px",
        menuxm: "550px",
        xm2: "512px",
        menuxm2: "500px",
        xm3: "470px",
        xm4: "450px",
        menuxm3: "420px",
        xm5: "400px",
        xm6: "381px",
        xm7: "342px",
        sm2: "410px",
        sm3: "100px",

        dash1: "1300px",
        dash2: "1200px",
        dash3: "1100px",
        dash4: "1000px",
        dash5: "900px",
        dash6: "800px",
        dash7: "700px",
        dash8: "600px",
        dash8_5: "550px",
        dash9: "500px",
        dash9_5: "450px",
        dash10: "400px",
        dash11: "300px",
      },
      colors: {
        green1: "#B9D19D",
        green2: "#86B27A",
        green3: "#3E4D3D",
        green4: "#3B3802",
        pink1: "#FFB9E9",
        pink2: "#e0b1d1",
        yellow1: "#F6EDD9",
        brown1: "#3D291C",
        dourado: "#ccb596",

        // Cores banners transition pages

        banner1: "#B39E7B",
        banner2: "#B37BA8",
        banner3: "#86B27A",
        banner4: "#7B98B3",
        banner5: "#4D5E49",

        vblue: "#225485",
        vsand: "#B39E7B",

        // txtcart: "rgb(212 212 216)",
        txtcart: "#000",

        darkgreen: "#3F493D",
        lightpurple: "#9999CC",
        vitrinegreen: "#227428",
      },
    },
  },
  plugins: [],
};
export default config;
