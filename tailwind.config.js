/* eslint-disable import/no-extraneous-dependencies */
const color = require('tailwindcss/colors');
const { fontSize } = require('tailwindcss/defaultTheme');

module.exports = {
	content: ['./src/**/*.{html,js}'],
	theme: {
		container: { screen: {} },
		fontSize: {
			...fontSize,
		},
		colors: {
			...color,
			primary: '#d84e4a',
			secondary: '#e27338',
			tertiary: '#ff0066',
			quaternary: '#00ff00',
			backgroundColor: '#98d9e8',
			textColor: '#231815',
		},
	},
	plugins: [],
};
