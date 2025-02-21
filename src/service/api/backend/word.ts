import $API from '@/app/api'
import { IWordFields } from '@/types/words.types'

export const WordsService = {
	async create(fields: IWordFields) {
		const userId = localStorage.getItem('userID')

		const data = await $API
			.from('Words')
			.insert([
				{
					user_id: userId,
					Word: fields.word,
					Translate: fields.translation,
					variant: 'New',
				},
			])
			.select(`Word, Translate, variant`)

		return data
	},

	async getAll(userId: string) {
		const response = await $API
			.from('Words')
			.select(`Word, Translate, variant`)
			.eq('user_id', userId)
		return response
	},
}
