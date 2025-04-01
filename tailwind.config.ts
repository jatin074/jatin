const tailwindConfig = {
  darkMode: "class", 
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: 'Poppins',
        tourney_regular:'Tourney-Regular'
      },
      colors: {
        lightBg: "#ffffff",
        darkBg: "#1e293b",
        lightText: "#1e293b",
        darkText: "#f8fafc",
        primary: "#2563eb",
        purple1: '#B83CFF',
        purple2: '#B771E5',
        alphaGray: '#7F7F7F',
        alphaOffWhite: '#D1D5DB',
        alphaDarkBlue: '#0A1D4B',
        alphaGray2: '#919191'
      },
      screens: {
        'max-xxs': { 'max': '376px' },
        'max-xs': { 'max': '520px' },
        'max-sm': { 'max': '640px' },
        'xsm': { 'max': '440px' },
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '1xl': '1400px',
        '2xl': '1536px',
      },
    },
  },
};

export default tailwindConfig;
