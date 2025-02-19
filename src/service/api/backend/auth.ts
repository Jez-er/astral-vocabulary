import $API from '../../../app/api'
import { IAuthFields } from '../../../types/auth.types'

export const AuthService = {
	async signUp(fields: IAuthFields) {
		const { data } = await $API.auth.signUp({
			email: fields.email,
			password: fields.password,
		})
		if (data.user) localStorage.setItem('userID', data.user.id)
	},

	async singIn(fields: IAuthFields) {
		return $API.auth.signInWithPassword({
			email: fields.email,
			password: fields.password,
		})
	},

	async logOut() {
		return $API.auth.signOut()
	},
}
