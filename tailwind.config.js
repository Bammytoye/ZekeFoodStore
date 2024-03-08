/** @type {import('tailwindcss').Config} */

import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xl':{'min': '1440px'},
        'lg':{'min': '976px'},
        'md':{'min': '768px'},
        'sm':{'min': '480px'},
      },
      backgroundImage: {
        'hero': "url('/src/assets/img/firstLarge.png')",
        'download': "url('/src/assets/img/seconfLarge.png')"
      }
    },
  },
  plugins: [],
});
