import { WordsService } from '@/service/api/backend/word'
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
import { IWordFields } from '@/types/words.types'
import { useForm } from 'react-hook-form'

const AddWordDialog = () => {
	const { register, handleSubmit, reset } = useForm<IWordFields>({
		defaultValues: {
			word: '',
			translation: '',
		},
	})

	const newWord = (fields: IWordFields) => {
		WordsService.create(fields)
		reset()
	}

	return (
		<Dialog>
			<DialogTrigger>
				<Button
					variant={'border'}
					className='dark:text-white/90 px-6 cursor-pointer'
				>
					Add new
				</Button>
			</DialogTrigger>
			<DialogContent className='dark:text-white/90 w-96'>
				<DialogHeader>
					<DialogTitle>Add new word to your vocabulary</DialogTitle>
					<DialogDescription>
						<h1 className='text-red-800'>
							After adding words, you need to refresh the page
						</h1>
					</DialogDescription>
					<form onSubmit={handleSubmit(newWord)}>
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
								Add
							</Button>
							<DialogClose asChild>
								<Button className='dark:text-white/90'>Close</Button>
							</DialogClose>
						</div>
					</form>
				</DialogHeader>
			</DialogContent>
		</Dialog>
	)
}

export default AddWordDialog
