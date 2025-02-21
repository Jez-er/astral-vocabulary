import { IcBook } from '@/assets/icons/IcBooks'
import { useWords } from '@/hooks/useWords'
import { Input } from '@/shared/ui/input'
import { Select, SelectTrigger } from '@/shared/ui/select'
import { SelectContent, SelectItem, SelectValue } from '@radix-ui/react-select'
import AddWordDialog from './components/AddWordDialog'
import OpenWordDialog from './components/OpenWordDialog'

const DashBoard = () => {
	const wordsData = useWords()

	return (
		<section className='w-full h-screen'>
			<header className='w-full h-auto mx-10'>
				<h1 className='flex gap-2 items-center text-4xl font-semibold text-violet-500'>
					Vocabulary <IcBook />
				</h1>
				<div className='w-full items-center mt-5 flex pr-20'>
					<h2 className='font-medium text-lg text-white/50'>
						On this page, you can write and edit words.
					</h2>
					<div className='ml-auto flex items-center gap-5 dark:text-white/90'>
						<AddWordDialog />
						<div className='block'>
							<Select>
								<SelectTrigger className='w-32 rounded-xl border-2 border-violet-500 dark:border-violet-500 bg-transparent dark:bg-transparent dark:text-white/90'>
									<SelectValue
										placeholder='Filter'
										className='dark:text-white/90'
									/>
								</SelectTrigger>
								<SelectContent className='w-32 mt-1 py-1.5 px-1 h-auto border-2 rounded-xl border-violet-500'>
									<SelectItem
										value='test'
										className='px-2 py-1 w-full cursor-pointer hover:bg-white/10 rounded-lg border-0 outline-none'
									>
										Test
									</SelectItem>
									<SelectItem
										value='tesft'
										className='px-2 py-1 w-full cursor-pointer hover:bg-white/10 rounded-lg border-0 outline-none'
									>
										Test
									</SelectItem>
								</SelectContent>
							</Select>
						</div>
						<Input
							placeholder='Search'
							className='w-48 border-2 dark:border-violet-500 outline-none rounded-xl bg-transparent dark:bg-transparent'
						/>
					</div>
				</div>
			</header>
			{wordsData.loading ? (
				<main>Loading...</main>
			) : wordsData.words ? (
				<main className='w-auto h-auto grid grid-cols-[repeat(auto-fill,_minmax(22rem,_1fr))] gap-y-10 gap-x-10 ml-8 mt-5 mr-10'>
					{wordsData.words.map((data, index) => (
						<OpenWordDialog data={data} key={index} />
					))}
				</main>
			) : (
				<main>Data not found</main>
			)}
		</section>
	)
}

export default DashBoard
