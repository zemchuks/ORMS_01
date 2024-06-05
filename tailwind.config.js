/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        light: '#f6f6f9',
        primary: '#1976D2',
        'light-primary': '#CFE8FF',
        grey: '#eee',
        'dark-grey': '#AAAAAA',
        dark: '#363949',
        danger: '#D32F2F',
        'light-danger': '#FECDD3',
        warning: '#FBC02D',
        'light-warning': '#FFF2C6',
        success: '#388E3C',
        'light-success': '#BBF7D0',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '48px',
      },
      zIndex: {
        '-1': '-1',
      },
    },
  },
  plugins: [],
}

