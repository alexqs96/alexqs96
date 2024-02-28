/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'main': '#3700ff',
				'body': '#fafcfd',
				'red-soft': 'hsl(0 100% 97%)',
				'red-strong': 'hsl(0 70% 40%)'
			},
			spacing: {
        '1.7': '0.4375rem',
      },
			borderWidth: {
				'6' : "6px"
			}
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}