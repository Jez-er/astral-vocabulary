import $API from '@/app/api'
import { IWordFields, TWordVariant } from '@/types/words.types'

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
			.select(`id, Word, Translate, variant, scores`)
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

	async updateScores(scores: number, id: number) {
		let variant: TWordVariant = 'New'

		if (scores >= 50) {
			variant = 'Learning'
		} else {
			variant = 'New'
		}

		if (scores >= 200) {
			variant = 'Master'
		} else {
			variant = 'New'
		}

		const response = await $API
			.from('Words')
			.update({ scores: scores, variant: variant })
			.eq('id', id)
			.select()
		return response
	},

	async delete(id: number) {
		return $API.from('Words').delete().eq('id', id)
	},
}
