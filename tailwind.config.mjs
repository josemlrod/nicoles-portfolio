/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		screens: {
			lg: "1280px",
			md: "1024px",
			sm: "768px",
			xs: "640px",
			xxs: "378px",
		},
		extend: {},
		fontFamily: {
			sans: ['"Poppins", sans-serif'],
		},
	},
	plugins: [],
};
