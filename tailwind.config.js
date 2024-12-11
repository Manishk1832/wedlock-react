/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
    theme: {
    extend: {
      fontFamily: {

        'Proxima-Nova-Regular': ['Proxima-Nova-Regular', 'sans-serif'],
        'Proxima-Nova-SemiBold': ['Proxima-Nova-SemiBold', 'sans-serif'],
        'Proxima-Nova-Bold': ['Proxima-Nova-Bold', 'sans-serif'],
        'Proxima-Nova-Extrabold': ['Proxima-Nova-Extrabold', 'sans-serif'],
        'Proxima-Nova-Light': ['Proxima-Nova-Light', 'sans-serif'],
        'Proxima-Nova-Black': ['Proxima-Nova-Black', 'sans-serif'],
    },

    },
  },
  plugins: [require('@tailwindcss/line-clamp'),],
}

