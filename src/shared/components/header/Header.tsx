import { NavLink } from 'react-router'
import { Button } from '../../ui/button'
import Logo from '../logo'
import { HeaderData } from './data'

const Header = () => {
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
				<Button className='cursor-pointer'>Profile</Button>
			</div>
		</section>
	)
}

export default Header
