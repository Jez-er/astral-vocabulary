import $PAGES from '@/app/routing/page.config'
import { IcDiscord } from '@/assets/icons/IcDiscord'
import { IcTelegram } from '@/assets/icons/IcTelegram'
import { Switch } from '@/shared/ui/switch'
import { useNavigate } from 'react-router'

const DashBoardHeader = () => {
	const path = useNavigate()

	const goDiscord = () => {
		const path = import.meta.env.VITE_DISCORD
		window.location.href = path
	}

	const goTelegram = () => {
		const path = import.meta.env.VITE_TELEGRAM
		window.location.href = path
	}

	return (
		<header className='w-full h-12 flex gap-3 items-center justify-end px-10 text-white/90'>
			<div
				className='cursor-pointer hover:text-violet-500 duration-300 transition-colors'
				onClick={() => path($PAGES.HOME)}
			>
				Home
			</div>
			<div className='w-0.5 h-10 bg-neutral-600 rounded-full' />
			<Switch />
			<div className='w-0.5 h-10 bg-neutral-600 rounded-full' />
			<div
				className='cursor-pointer hover:text-violet-500 duration-300 transition-all'
				onClick={() => goDiscord()}
			>
				<IcDiscord />
			</div>
			<div
				className='cursor-pointer hover:text-violet-500 duration-300 transition-all'
				onClick={() => goTelegram()}
			>
				<IcTelegram />
			</div>
		</header>
	)
}

export default DashBoardHeader
