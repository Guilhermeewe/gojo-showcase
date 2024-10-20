import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "fade-in-up": {
          "0%": {
            opacity: '0',
            transform: "translate3d(0, 100%, 0)"
          },
          "100%": {
            opacity: '1',
            transform: "translate3d(0, 0, 0)"
          },
        },
      },
      animation: {
        fadeinup: 'fade-in-up 1.5s ease-in-out 0.25s 1',
      },
    },
  },
  plugins: [],
};
export default config;
