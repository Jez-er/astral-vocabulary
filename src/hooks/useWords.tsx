import $PAGES from '@/app/routing/page.config'
import { WordsService } from '@/service/api/backend/word'
import { useUserStore } from '@/stores/user.store'
import { IWord } from '@/types/words.types'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { toast } from './use-toast'

export const useWords = () => {
	const [words, setWords] = useState<IWord[]>([])
	const [loading, setLoading] = useState<boolean>(true)
	const userID = localStorage.getItem('userID') ?? ''
	const logOut = useUserStore(state => state.logout)
	const path = useNavigate()

	const fetchWords = async () => {
		setLoading(true)
		try {
			const { data, error } = await WordsService.getAll(userID)
			console.log(data)
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

	useEffect(() => {
		if (!userID) {
			logOut()
			path($PAGES.AUTH.LOGIN)
			return
		}

		fetchWords()
	}, [userID, logOut, path])

	return { words, loading, fetch: fetchWords }
}
