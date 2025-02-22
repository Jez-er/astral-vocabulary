import Icon from '@/lib/icons'
import { cn } from '@/lib/utils'
import { Button } from '@/shared/ui/button'
import { useLocation, useNavigate } from 'react-router'
import Logo from '../logo'
import ProfileBar from '../profileBar'
import { SideBarGames, SideBarPages } from './data'

const DashBoardSideBar = () => {
	const { pathname } = useLocation()
	const path = useNavigate()

	return (
		<section className='w-80 h-screen bg-white text-neutral-800 dark:bg-neutral-950 dark:text-white/90 border border-neutral-800 flex flex-col items-center justify-around'>
			<header className='w-full py-3 flex items-center justify-center border-b border-neutral-800 text-2xl'>
				<Logo WithText />
			</header>
			<main className='h-full w-full flex flex-col items-start px-8 my-5'>
				<div className='w-full'>
					<h3 className='mb-2 -ml-1.5 font-light dark:text-white/50'>Pages</h3>
					{SideBarPages.map((page, index) => (
						<Button
							key={index}
							variant={'noHoover'}
							onClick={() => path(page.path)}
							className={cn(
								'w-full dark:text-white/90 text-[17px] flex items-center justify-start px-5 h-12 mb-3 cursor-pointer duration-300 transition-colors dark:hover:text-violet-500 shadow',
								pathname === page.path ? 'dark:text-violet-500 ' : null
							)}
						>
							<Icon name={page.icon} size={26} /> <span>{page.title}</span>
						</Button>
					))}
				</div>
				<div className='w-full mt-5'>
					<h3 className='mb-2 -ml-1.5 font-light dark:text-white/50'>Games</h3>
					{SideBarGames.map((game, index) => (
						<Button
							key={index}
							variant={'noHoover'}
							onClick={() => path(game.path)}
							className={cn(
								'w-full dark:text-white/90 text-[17px] flex items-center justify-start px-5 h-12 mb-3 cursor-pointer duration-300 transition-colors dark:hover:text-violet-500 shadow',
								pathname === game.path ? 'dark:text-violet-500 ' : null
							)}
						>
							<Icon name={game.icon} size={26} /> <span>{game.title}</span>
						</Button>
					))}
				</div>
			</main>
			<footer className='w-full h-20 px-4 mb-4'>
				<ProfileBar />
			</footer>
		</section>
	)
}

export default DashBoardSideBar
