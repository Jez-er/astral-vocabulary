import { Config } from 'tailwindcss'
import tailwindcssAnimate from 'tailwindcss-animate'

const config: Config = {
	darkMode: ['class', '[data-theme="dark"]'],
	content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		colors: {
			bg: '#161515',
		},
		extend: {
			dropShadow: {
				main: '0 4px 12px rgba(0, 45, 197, 1)',
				bold: '0 4px 250px rgba(38, 74, 196, 1)',
			},
			backgroundImage: {
				'custom-gradient': 'linear-gradient(180deg, #008DC9 6%, #002DC5 83%)',
			},
			colors: {
				bg: '#161515',
				card_bg: '#242424',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))',
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))',
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))',
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))',
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))',
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))',
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))',
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
			},
			fontFamily: {
				Fredoka: 'var(--font-fredoka)',
				Mulish: 'var(--font-mulish)',
			},
			keyframes: {
				appearance: {
					from: {
						opacity: '0',
					},
					to: {
						opacity: '1',
					},
				},
			},
			animation: {
				appearance: 'appearance 0.5s ease-out forwards',
			},
		},
	},

	// ... other configurations
	plugins: [tailwindcssAnimate],
}

export default config
