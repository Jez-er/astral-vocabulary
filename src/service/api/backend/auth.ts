import $API from '@/app/api'
import { IAuthFields, INewPassword, IPassRecover } from '@/types/auth.types'

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

	async recoverPass(fields: IPassRecover) {
		const response = await $API.auth.resetPasswordForEmail(fields.email, {
			redirectTo: `${import.meta.env.VITE_DOMAIN}/utils/newpass`,
		})
		if (response) localStorage.setItem('emailForRecover', fields.email)
		return response
	},

	async newPass(fields: INewPassword) {
		const email = localStorage.getItem('emailForRecover')
		if (!email) return

		const response = await $API.auth.updateUser({
			email: email,
			password: fields.pass,
		})

		if (response) localStorage.removeItem('emailForRecover')
		return response
	},
}
