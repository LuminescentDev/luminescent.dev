/** @type {import('tailwindcss').Config} */

import tailwindConfig from '@luminescent/ui/config';

const gray = {
  50: "hsl(270deg, 2%, 95%)",
 100: "hsl(270deg, 4%, 85%)",
 200: "hsl(270deg, 6%, 75%)",
 300: "hsl(270deg, 8%, 65%)",
 400: "hsl(270deg, 10%, 55%)",
 500: "hsl(270deg, 12%, 45%)",
 600: "hsl(270deg, 14%, 32%)",
 700: "hsl(270deg, 16%, 21%)",
 800: "hsl(270deg, 18%, 12%)",
 850: "hsl(270deg, 20%, 8%)",
 900: "hsl(270deg, 22%, 5%)",
};

export default {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    ...tailwindConfig.content,
  ],
  theme: {
    extend: {
      colors: {
        gray,
        ...tailwindConfig.theme.extend.colors,
      },
      animation: {
        float: "float 6s infinite",
        ...tailwindConfig.theme.extend.animation,
      },
      keyframes: {
        ...tailwindConfig.theme.extend.keyframes,
      },
    },
  },
  plugins: [
    require('@anuragroy/tailwindcss-animate'),
  ],
};