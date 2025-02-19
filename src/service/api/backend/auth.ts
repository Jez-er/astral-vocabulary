import $API from '@/app/api'
import { IAuthFields } from '@/types/auth.types'

export const AuthService = {
	async signUp(fields: IAuthFields) {
		const response = await $API.auth.signUp({
			email: fields.email,
			password: fields.password,
		})
		if (response.data.user)
			localStorage.setItem('userID', response.data.user.id)
		return response
	},

	async singIn(fields: IAuthFields) {
		const response = await $API.auth.signInWithPassword({
			email: fields.email,
			password: fields.password,
		})

		return response
	},

	async logOut() {
		return $API.auth.signOut()
	},
}
