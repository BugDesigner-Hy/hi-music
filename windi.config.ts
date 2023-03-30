import Typography from 'windicss/plugin/typography'
import { defineConfig } from 'windicss/helpers'

export default defineConfig({
	darkMode: 'class',
	attributify: false, // 属性化css，默认关闭
	plugins: [Typography()],
	theme: {
		extend: {
			fontFamily: {
				sans: ['deyihei'],
			},
		},
		backgroundColor: (theme) => ({
			...theme('colors'),
			primary: '#de3b3e',
			secondary: '#d3393b',
		}),
	},
})
