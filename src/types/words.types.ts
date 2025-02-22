export type TWordVariant = 'New' | 'Learning' | 'Master'

export interface IWord {
	id: number
	Word: string
	Translate: string
	variant: TWordVariant
	scores: number
}

export interface IWordFields {
	word: string
	translation: string
}
