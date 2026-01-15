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
        'serif': ['Playfair Display', 'serif'],
        'arabic-font': ['Tajawal', 'sans-serif'],
      },
      animation: {
        shimmer: 'shimmer 2.5s infinite',
        'fade-in': 'fadeIn 0.5s ease-in-out',
      },
      keyframes: {
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: '#333',
            lineHeight: '1.6',
          },
        },
      },
    },
  },
  plugins: [],
}