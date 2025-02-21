export type TWordVariant = 'New' | 'Learning' | 'Master'

export interface IWord {
	Word: string
	Translate: string
	variant: TWordVariant
}

export interface IWordFields {
	word: string
	translation: string
}
