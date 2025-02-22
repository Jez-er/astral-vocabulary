import { WordsService } from '@/service/api/backend/word'
import WordCard from '@/shared/components/wordCard'
import { Button } from '@/shared/ui/button'
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/shared/ui/dialog'
import { Input } from '@/shared/ui/input'
import { Label } from '@/shared/ui/label'
import { IWord, IWordFields } from '@/types/words.types'
import { useForm } from 'react-hook-form'

interface props {
	data: IWord
}

const OpenWordDialog = ({ data }: props) => {
	const { register, handleSubmit, reset } = useForm<IWordFields>({
		defaultValues: {
			word: data.Word,
			translation: data.Translate,
		},
	})

	const update = (fields: IWordFields) => {
		WordsService.update(fields, data.id)
		reset()
	}

	const deleteWord = () => {
		WordsService.delete(data.id)
		reset()
	}

	return (
		<Dialog>
			<DialogTrigger>
				<WordCard data={data} />
			</DialogTrigger>
			<DialogContent className='dark:text-white/90 w-96'>
				<DialogHeader>
					<DialogTitle>View & Edit</DialogTitle>
				</DialogHeader>
				<DialogDescription>
					<h1 className='text-red-800'>
						After adding words, you need to refresh the page
					</h1>
				</DialogDescription>
				<form onSubmit={handleSubmit(update)}>
					<div className='flex flex-col gap-6 mt-5'>
						<div className='grid gap-2'>
							<Label htmlFor='word'>Word</Label>
							<Input
								id='Word'
								type='text'
								placeholder='Сhatter'
								{...register('word')}
								required
							/>
							{/* <Label htmlFor='email' className='text-red-800'>
										{errors.email?.message}
									</Label> */}
						</div>
						<div className='grid gap-2'>
							<Label htmlFor='Translation'>Translation</Label>
							<Input
								id='Translation'
								type='text'
								placeholder='Балаканина'
								{...register('translation')}
								required
							/>
							{/* <Label htmlFor='password' className='text-red-800'>
										{errors.password?.message}
									</Label> */}
						</div>
						<Button
							type='submit'
							className='w-full bg-violet-800 cursor-pointer'
						>
							Save
						</Button>
						<Button
							className='dark:text-white/90 dark:hover:bg-red-600 cursor-pointer'
							onClick={() => deleteWord()}
						>
							Delete
						</Button>
						<DialogClose asChild>
							<Button className='dark:text-white/90 cursor-pointer'>
								Close
							</Button>
						</DialogClose>
					</div>
				</form>
			</DialogContent>
		</Dialog>
	)
}

export default OpenWordDialog
