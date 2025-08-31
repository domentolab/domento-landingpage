/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: 'tw-',
  important: false,
  content: [
    "./index.html",
    "./*.html",
    "./**/*.{html,js,jsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
        mont: ['Montserrat', 'sans-serif'],
      },
      colors: {
        primary: 'var(--color-primary)',
        'primary-hover': 'var(--color-primary-hover)',
        'primary-active': 'var(--color-primary-active)',
        'primary-disabled': 'var(--color-primary-disabled)',

        accent: 'var(--color-accent)',
        'accent-hover': 'var(--color-accent-hover)',
        'accent-active': 'var(--color-accent-active)',

        'text-primary': 'var(--color-text-primary)',
        'text-secondary': 'var(--color-text-secondary)',
        bg: 'var(--color-bg)',
        'bg-section': 'var(--color-bg-section)',
        'bg-hover': 'var(--color-bg-hover)',

        success: 'var(--status-success)',
        warning: 'var(--status-warning)',
        error: 'var(--status-error)',
      },
      boxShadow: {
        DEFAULT: 'var(--shadow-default)',
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('firefox', ':-moz-any(&)')
    }
  ],
}
