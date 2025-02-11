/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      screens: {
        'sm-nav': {'max':'375px'},
        'sm-footer': {'max':'375px'},
        'sm-home': {'max': '640px'},
        'max-2xl': {'max':'1536px'},
        'max-xl': {'max':'1280px'},
        'max-lg': {'max':'1024px'},
        'max-md': {'max':'768px'},
        'max-sm': {'max':'640px'},
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}


