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
			.select(`id, Word, Translate, variant`)

		return data
	},

	async getAll(userId: string) {
		const response = await $API
			.from('Words')
			.select(`id, Word, Translate, variant`)
			.eq('user_id', userId)
		return response
	},

	async update(fields: IWordFields, id: number) {
		const response = await $API
			.from('Words')
			.update({ Word: fields.word, Translate: fields.translation })
			.eq('id', id)
			.select(`id, Word, Translate, variant`)
		return response
	},

	async delete(id: number) {
		return $API.from('Words').delete().eq('id', id)
	},
}
