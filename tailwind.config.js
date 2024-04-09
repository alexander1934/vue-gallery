/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	theme: {
		extend: {
			gridTemplateColumns: {
				autofill: 'repeat(auto-fill, minmax(158px, 1fr))'
			}
		},
	},
	plugins: [],
};
