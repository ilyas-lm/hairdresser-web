export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FDFBF7',
          100: '#F5F5F0',
        },
        taupe: {
          DEFAULT: '#8C7B6C',
          dark: '#6B5D52',
        },
        charcoal: '#2D2825',
      },
      fontFamily: {
        'sans': ['ui-sans-serif', 'system-ui'],
        'serif': ['Playfair Display', 'serif'], // Keep as Playfair Display
        'arabic-font': ['Tajawal', 'sans-serif'],
      },
      animation: {
        shimmer: 'shimmer 2.5s infinite',
      },
      keyframes: {
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        },
      },
    },
  },
  plugins: [],
}