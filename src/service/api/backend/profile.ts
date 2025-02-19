import $API from '../../../app/api'
import { IProfileFields } from '../../../types/profile.types'

export const ProfileService = {
	async create(fields: IProfileFields) {
		const userId = localStorage.getItem('userID')

		const data = await $API
			.from('Profiles')
			.insert([{ user_id: userId, name: fields.name }])
			.select()
		if (data.status === 200) localStorage.removeItem('userID')
		return data
	},

	async get(userId: string) {
		return $API.from('Profiles').select('*').eq('user_id', userId).single()
	},
}
