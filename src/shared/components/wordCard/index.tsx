import { Badge } from '@/shared/ui/badge'
import { IWord, TWordVariant } from '@/types/words.types'

interface props {
	data: IWord
}

const WordCard = ({ data }: props) => {
	const getBadge = (variant: TWordVariant) => {
		switch (variant) {
			case 'New':
				return (
					<Badge className='bg-white/80 dark:bg-white/80 dark:hover:bg-white transition-all duration-300'>
						New
					</Badge>
				)
			case 'Learning':
				return (
					<Badge className='bg-orange-500/80 dark:bg-orange-500/80 dark:hover:bg-orange-500 transition-all duration-300'>
						Learning
					</Badge>
				)
			case 'Master':
				return (
					<Badge className='bg-violet-500/80 dark:bg-violet-500/80 dark:hover:bg-violet-500 transition-all duration-300'>
						Master
					</Badge>
				)
			default:
				return (
					<Badge className='bg-white/80 dark:bg-white/80 dark:hover:bg-white transition-all duration-300'>
						New
					</Badge>
				)
		}
	}

	return (
		<div className='bg-neutral-950 p-5 rounded-xl 2xl:w-[22rem] lg:w-72 xl:w-[16rem] max-2xl:w-[20rem] h-28 shadow-md transition-shadow hover:shadow-sm hover:shadow-violet-500 dark:hover:shadow-violet-500 duration-300 cursor-pointer flex flex-col items-start text-start'>
			<div className='flex items-center w-full'>
				<h1 className='font-semibold text-xl w-56 truncate'>{data.Word}</h1>
				<div className='ml-auto'>{getBadge(data.variant)}</div>
			</div>

			<h2 className='font-medium text mt-1 w-64 truncate text-white/70'>
				{data.Translate}
			</h2>
		</div>
	)
}

export default WordCard
