export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    container: {
      center: true,
      padding: '1.5rem',
    },
    extend: {
      colors: {
        jungle: {
          DEFAULT: '#1B4332',
          dark: '#122E22',
          light: '#2D5A45',
        },
        sand: {
          DEFAULT: '#F3EAD8',
          dark: '#E4D5B7',
        },
        sunset: {
          DEFAULT: '#D9662C',
          dark: '#B94F1E',
        },
        ocean: {
          DEFAULT: '#1E6B7A',
          light: '#2E8B9E',
        },
        offwhite: '#FBF8F3',
        charcoal: '#2B2825',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};