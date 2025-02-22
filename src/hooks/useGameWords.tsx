import $PAGES from '@/app/routing/page.config'
import { WordsService } from '@/service/api/backend/word'
import { useUserStore } from '@/stores/user.store'
import { IWord, TWordVariant } from '@/types/words.types'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { toast } from './use-toast'

export const useGameWord = () => {
	const [words, setWords] = useState<IWord[]>([]) // Исходный список слов
	const [shuffledWords, setShuffledWords] = useState<IWord[]>([]) // Перемешанный список
	const [currentIndex, setCurrentIndex] = useState<number>(0) // Индекс текущего слова
	const [loading, setLoading] = useState<boolean>(true) // Состояние загрузки
	const userID = localStorage.getItem('userID') ?? ''
	const logOut = useUserStore(state => state.logout)
	const path = useNavigate()

	// Функция для перемешивания массива (Fisher-Yates)
	function shuffle(array: IWord[]): IWord[] {
		const newArray = [...array]
		for (let i = newArray.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1))
			;[newArray[i], newArray[j]] = [newArray[j], newArray[i]]
		}
		return newArray
	}

	// Функция для загрузки слов
	const fetchWords = async () => {
		setLoading(true)
		try {
			const { data, error } = await WordsService.getAll(userID)
			if (!data) throw new Error('Error loading words')
			if (error) throw new Error(error)
			setWords(data)
		} catch (err) {
			const errorMessage =
				err instanceof Error ? err.message : 'Error loading words'
			toast({
				title: errorMessage,
				variant: 'destructive',
			})
		} finally {
			setLoading(false)
		}
	}

	// Загружаем слова при монтировании компонента
	useEffect(() => {
		if (!userID) {
			logOut()
			path($PAGES.AUTH.LOGIN)
			return
		}
		fetchWords()
	}, [userID, logOut, path])

	// Обрабатываем слова и создаем перемешанный список
	useEffect(() => {
		if (words.length > 0) {
			const grouped = words.reduce(
				(acc, word) => {
					acc[word.variant] = acc[word.variant] || []
					acc[word.variant].push(word)
					return acc
				},
				{ New: [], Learning: [], Master: [] } as Record<TWordVariant, IWord[]>
			)

			const allWords = [
				...grouped['New'].flatMap(word => [word, word, word]), // New: 3 раза
				...grouped['Learning'].flatMap(word => [word, word]), // Learning: 2 раза
				...grouped['Master'], // Master: 1 раз
			]

			const shuffled = shuffle(allWords)
			setShuffledWords(shuffled)
			setCurrentIndex(0) // Сбрасываем индекс при обновлении списка
		}
	}, [words])

	// Функция для перехода к следующему слову
	const nextWord = () => {
		if (shuffledWords.length > 0) {
			setCurrentIndex(prevIndex => (prevIndex + 1) % shuffledWords.length)
		}
	}

	// Текущее слово
	const currentWord =
		shuffledWords.length > 0 ? shuffledWords[currentIndex] : null

	return { currentWord, nextWord, loading, fetch: fetchWords }
}
