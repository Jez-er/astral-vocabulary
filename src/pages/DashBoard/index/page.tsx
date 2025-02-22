import { IcBook } from '@/assets/icons/IcBooks'
import { useWords } from '@/hooks/useWords'
import { Input } from '@/shared/ui/input'
import { Select, SelectTrigger } from '@/shared/ui/select'
import { SelectContent, SelectItem, SelectValue } from '@radix-ui/react-select'
import { useState } from 'react'
import AddWordDialog from './components/AddWordDialog'
import OpenWordDialog from './components/OpenWordDialog'

const DashBoard = () => {
	const [filter, setFilter] = useState<string>('All')
	const [search, setSearch] = useState<string>('')
	const wordsData = useWords()

	const filteredWords = wordsData.words.filter(word => {
		const matchesSearch =
			word.Word.toLowerCase().includes(search.toLowerCase()) ||
			word.Translate.toLowerCase().includes(search.toLowerCase())
		const matchesFilter = filter === 'All' ? true : word.variant === filter // Если filter = 'All', то показываем все

		return matchesSearch && matchesFilter
	})

	return (
		<section className='w-full h-screen relative'>
			<header className='w-full h-auto mx-10 z-[9999]'>
				<h1 className='flex gap-2 items-center text-4xl font-semibold text-violet-500'>
					Vocabulary <IcBook />
				</h1>
				<div className='2xl:w-full 2xl:items-center 2xl:mt-5 2xl:flex 2xl:pr-20'>
					<h2 className='font-medium text-lg text-white/50'>
						On this page, you can write and edit words.
					</h2>
					<div className='xl:ml-auto max-2xl:mt-5 flex items-center gap-5 max-2xl:ml-auto lg:ml-0 dark:text-white/90'>
						<AddWordDialog />
						<div className='block black:text-white/90'>
							<Select onValueChange={setFilter}>
								<SelectTrigger className='w-32 rounded-xl border-2 border-violet-500 dark:border-violet-500 bg-transparent dark:bg-transparent dark:text-white/90'>
									<SelectValue
										placeholder='Filter'
										className='dark:text-white/90'
									>
										{filter}
									</SelectValue>
								</SelectTrigger>
								<SelectContent className='w-32 mt-1 py-1.5 px-1 h-auto border-2 rounded-xl border-violet-500 dark:bg-neutral-950'>
									<SelectItem
										value='All'
										className='px-2 py-1 w-full cursor-pointer hover:bg-white/10 rounded-lg border-0 outline-none'
									>
										All
									</SelectItem>
									<SelectItem
										value='New'
										className='px-2 py-1 w-full cursor-pointer hover:bg-white/10 rounded-lg border-0 outline-none'
									>
										New
									</SelectItem>
									<SelectItem
										value='Learning'
										className='px-2 py-1 w-full cursor-pointer hover:bg-white/10 rounded-lg border-0 outline-none'
									>
										Learning
									</SelectItem>
									<SelectItem
										value='Master'
										className='px-2 py-1 w-full cursor-pointer hover:bg-white/10 rounded-lg border-0 outline-none'
									>
										Master
									</SelectItem>
								</SelectContent>
							</Select>
						</div>
						<Input
							placeholder='Search'
							value={search}
							onChange={e => setSearch(e.target.value)}
							className='w-48 border-2 dark:border-violet-500 outline-none rounded-xl bg-transparent dark:bg-transparent'
						/>
					</div>
				</div>
			</header>
			{wordsData.loading ? (
				<main>Loading...</main>
			) : wordsData.words ? (
				<main className='w-auto h-auto grid 2xl:grid-cols-[repeat(auto-fill,_minmax(22rem,_1fr))] lg:grid-cols-[repeat(auto-fill,_minmax(18rem,_1fr))] xl:grid-cols-[repeat(auto-fill,_minmax(16rem,_1fr))] max-2xl:grid-cols-[repeat(auto-fill,_minmax(20rem,_1fr))] max-2xl:gap-x-2 max-2xl:gap-y-2 gap-y-10 gap-x-10 ml-8 mt-5 mr-10'>
					{filteredWords.map((data, index) => (
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
