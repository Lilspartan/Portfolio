module.exports = {
	darkMode: 'class', // or 'media' or 'class'
	content: [
		'./pages/**/*.{js,jsx,ts,tsx}',
		'./components/**/*.{js,jsx,ts,tsx}',
	],
	theme: {
		extend: {
			colors: {
				primary: "#273043",
        		danger: "#FB2343",
				accent: "#6CD4FF",
				background: "#171C27",
				twitter: "#1DA1F2",
				github: "#6e5494",
				gmail: "#DB4437",
				kofi: "#13C3FF",
				linkedin: "#0077B5",
				replit: "#F8640A",
				discord: "#5865F2",
				bluesky: "#1185fe",
			}
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}
