/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        gray: {
          100: '#0a0a0a',
          90: '#424242',
          80: '#616161',
          70: '#757575',
          60: '#9e9e9e',
          50: '#c2c2c2',
          40: '#e0e0e0',
          30: '#ededed',
          20: '#f5f5f5',
          10: '#ffffff'
        },
        primary: {
          main: '#3b24ad',
          secondary: '#F8F5FF',
          border: '#B6ABED',
          hover: '#3918D9',
          pressed: '#230F80',
          focus: '#E7E3FC'
        },
        danger: {
          main: '#921919',
          secondary: '#E9D1D1',
          border: '#DBB2B2',
          hover: '#611111',
          pressed: '#490C0C',
          focus: '#C88C8C'
        },
        warning: {
          main: '#EABB42',
          secondary: '#FBF1D9',
          border: '#F8E8C0',
          hover: '#B69237',
          pressed: '#A9945F',
          focus: '#F8E8C0'
        },
        success: {
          main: '#35B932',
          secondary: '#D7F1D6',
          border: '#9ADC98',
          hover: '#4AAA48',
          pressed: '#6DA66C',
          focus: '#9ADC98'
        },
        info: {
          main: '#194689',
          secondary: '#D1DAE7',
          border: '#B2C1D8',
          hover: '#B2C1D8',
          pressed: '#0C2344',
          focus: '#B2C1D8'
        }
      }
    }
  },
  plugins: []
};
