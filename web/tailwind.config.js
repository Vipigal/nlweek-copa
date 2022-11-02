/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
		fontFamily: {
			sans: 'Roboto, sans-serif',
		},

		colors: {
			ignite: {
				500: '#129E57'
			},
			gray: {
				100: '#E1E1E6',
				300: '#8D8D99',
				800: '#202024',
				600: '#323238',
				900: '#09090A',

			},
			yellow: {
				500: '#F7DD43',
				600: '#E9D03D',
			}
		},

		backgroundImage: {
			app: 'url(/lines-bg.png)'
		}
	},
  },
  plugins: [],
}
