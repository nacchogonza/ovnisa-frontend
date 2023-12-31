import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      spacing: {
        '112': '28rem',
        '128': '32rem',
        '144': '36rem',
      },
      colors: {
        ov: {
          primary: "#001748",
          primaryLight: "#194092",
        },
      },
      fontFamily: {
        sans: ["Nunito Sans", "sans-serif"],
      },
      boxShadow: {
        'contact': '0px 0px 10px rgba(0, 0, 0, 0.3)',
      }
    },
  },
  plugins: [],
};
export default config;
