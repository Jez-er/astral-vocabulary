const $PAGES = {
	HOME: '/',
	ABOUT: '/about',
	AUTH: {
		index: '/auth',
		LOGIN: '/auth/login',
		PASS: '/auth/forgot',
		REGISTRATION: {
			index: '/auth/registration',
			PROFILE: '/auth/registration/profile',
			EMAIL: '/auth/registration/email',
		},
	},
	UTILS: {
		index: '/utils',
		NEW_PASS: '/utils/newpass',
	},
	DASHBOARD: {
		index: '/dashboard',
		GAMES: {
			index: '/dashboard/games',
			WORDFLIP: '/dashboard/games/wordflip',
			// BACKTRACK: '/dashboard/games/backtrack',
		},
	},
}

export default $PAGES
