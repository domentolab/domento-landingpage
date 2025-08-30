/** @type {import('tailwindcss').Config} */
module.exports = {
	prefix: 'tw-',
	important: false,
	content: [
		"**/*.{html, jsx, js}",
		"**/*.js",
		"**/*.html",
	],
	darkMode: 'false',
	theme: {
		extend: {
			 
			fontFamily: {
				sans: ['Open Sans', "sans-serif"],
				mont: ['Montserrat', "sans-serif"],
			},

			colors: {
        		primary: '#245C9D',
        		secondary: '#3BC6C6 ',
        		background: '#ffffff',
        		text: '#333333',
      },
		},
	},
	plugins: [
		function({ addVariant }) {
			addVariant('firefox', ':-moz-any(&)')
		}
	],
}

