import { useGameWord } from '@/hooks/useGameWords'
import { useWords } from '@/hooks/useWords'
import { cn } from '@/lib/utils'
import { WordsService } from '@/service/api/backend/word'
import { Button } from '@/shared/ui/button'
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/shared/ui/card'
import { Input } from '@/shared/ui/input'
import { AlertCircle, ArrowRight, CircleCheckBig, CircleX } from 'lucide-react'
import { useState } from 'react'

const WordFlipGamePage = () => {
	const { currentWord, nextWord } = useGameWord()
	const allWords = useWords()
	const [isGameStarted, setIsGameStarted] = useState<boolean>(false)
	const [input, setInput] = useState<string>('')
	const [answerType, setAnswerType] = useState<'not' | 'correct' | 'unCorrect'>(
		'not'
	)

	if (!currentWord) return

	const submit = () => {
		const answer = input

		if (!answer) return

		if (answer.toLowerCase() === currentWord?.Translate.toLowerCase()) {
			setAnswerType('correct')
			WordsService.updateScores(currentWord.scores + 1, currentWord.id)
		} else {
			setAnswerType('unCorrect')
			WordsService.updateScores(currentWord.scores - 1, currentWord.id)
		}

		setTimeout(() => {
			nextWord()
			setAnswerType('not')
			setInput('')
		}, 1000)
	}

	return (
		<main className='w-full h-screen flex justify-center items-center'>
			<Card className='rounded-2xl min-w-72 w-96'>
				<CardHeader>
					<CardTitle
						className={cn('text-2xl', isGameStarted ? 'mx-auto' : null)}
					>
						WordFlip
					</CardTitle>
					<CardDescription>
						{isGameStarted ? (
							<div className='w-full h-auto flex items-center justify-around text-sm'>
								<h3>Words count: {allWords.words.length}</h3>
								<h3>Word scores: {currentWord?.scores}</h3>
							</div>
						) : (
							'Flip words, test your vocabulary!'
						)}
					</CardDescription>
				</CardHeader>
				<CardContent>
					{isGameStarted ? (
						<div className='w-full h-full mt-3 flex gap-3 flex-col justify-center items-center'>
							{/* <div className='text-violet-500'>
								<BookA size={48} />
							</div> */}
							<h1
								className={cn(
									'font-semibold text-4xl ',
									answerType === 'not'
										? 'text-violet-500'
										: answerType === 'correct'
										? 'text-green-500'
										: answerType === 'unCorrect'
										? 'text-red-600/80'
										: null
								)}
							>
								{currentWord?.Word}
							</h1>
							<h3 className='font-medium text-lg mb-2'>Enter translation</h3>
							<div className='w-full flex items-center gap-3'>
								<Input
									placeholder='Translation..'
									value={input}
									onChange={e => setInput(e.target.value)}
								/>
								{answerType === 'not' ? (
									<Button
										className='w-13 h-10 rounded-xl bg-violet-800 cursor-pointer'
										onClick={submit}
									>
										<ArrowRight />
									</Button>
								) : answerType === 'correct' ? (
									<div className='w-13 h-10 rounded-xl bg-green-500 flex justify-center items-center'>
										<CircleCheckBig />
									</div>
								) : answerType === 'unCorrect' ? (
									<div className='w-13 h-10 rounded-xl bg-red-600/80 flex justify-center items-center'>
										<CircleX />
									</div>
								) : null}
							</div>

							<Button
								className='w-full cursor-pointer dark:text-white/90 mt-2'
								onClick={() => setIsGameStarted(false)}
							>
								Close
							</Button>
						</div>
					) : (
						<div className='w-full h-full my-5 flex gap-3 flex-col justify-center items-center'>
							<div className='text-violet-500'>
								<AlertCircle size={48} />
							</div>
							<h1 className='font-semibold text-2xl'>Description!</h1>
							<p className='text-center'>
								In this game you will be given a word and you will have to enter
								its translation. If the translation is entered correctly, you
								will get +1 score to the word, if not, -1.
							</p>

							<Button
								className='w-full bg-violet-800 cursor-pointer mt-2'
								onClick={() => setIsGameStarted(true)}
							>
								Start
							</Button>
						</div>
					)}
				</CardContent>
			</Card>
		</main>
	)
}

export default WordFlipGamePage
