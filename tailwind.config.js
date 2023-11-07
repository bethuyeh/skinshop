/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "navbar": '#4CBDCB',
       "heroleft": "#96D4DE",
       "herothrough":"#A69ABD",
       "gradientright": "#83BAC1",
        "gradientleft":"#E58FC6"
      },
      margin:{
        "165":"-165px",
        "100":"100px",
        "auto":"auto",
        "45":"45px",
        "124":"124px",
        "200": "200px",
        "170":"170px"
      },
      padding:{
        "90":"90px"
      },
      width:{
        "60":"60%",
        "100":"100%",
        "50" : "50%"
      },
      height:{
        "60":"60%",
        "70":"60%",
        "100":"100%",
        "50" : "50%",
        "8"  :"400px",
        "10" : "500px",
        "7"   : "70px",
        "10" : "100px"
      },
      fontFamily:{
        'yesteryear': ['Yesteryear', "cursive"]
      },
      central:{
          margin: "auto",
          width: "50%"
        }
    },
  },
  plugins: [],
}
