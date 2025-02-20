import $PAGES from '@/app/routing/page.config'
import { Button } from '@/shared/ui/button'
import { useUserStore } from '@/stores/user.store'
import { NavLink, useNavigate } from 'react-router'
import Logo from '../logo'
import { HeaderData } from './data'

const Header = () => {
	const path = useNavigate()
	const isAuth = useUserStore(state => state.isAuth)

	return (
		<section className='px-52 flex h-full w-full items-center justify-around border-b-2 border-gray-400 py-2.5'>
			<div>
				<Logo WithText />
			</div>
			<nav className='flex gap-5'>
				{HeaderData.map((data, index) => (
					<NavLink
						className='hover:text-violet-500 hover:underline transition-all duration-300'
						to={data.link}
						key={index}
					>
						{data.title}
					</NavLink>
				))}
			</nav>
			<div>
				{isAuth ? (
					<Button
						variant='border'
						className='cursor-pointer px-7'
						onClick={() => path($PAGES.DASHBOARD.index)}
					>
						Dashboard
					</Button>
				) : (
					<Button
						variant='border'
						className='cursor-pointer px-7'
						onClick={() => path($PAGES.AUTH.LOGIN)}
					>
						Profile
					</Button>
				)}
			</div>
		</section>
	)
}

export default Header
