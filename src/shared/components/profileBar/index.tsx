import $PAGES from '@/app/routing/page.config'
import { useUserStore } from '@/stores/user.store'
import { useNavigate } from 'react-router'

const ProfileBar = () => {
	const user = useUserStore(state => state.user)
	const logOut = useUserStore(state => state.logout)
	const path = useNavigate()

	const LogOut = () => {
		logOut()
		setTimeout(() => {
			path($PAGES.HOME)
		})
	}

	return (
		<div className='bg-black/93 w-full h-20 rounded-2xl flex items-center gap-5 px-5'>
			<div>
				<div className='w-12 h-12 rounded-full bg-violet-500 flex justify-center items-center text-xl'>
					{user.name[0].toUpperCase()}
				</div>
			</div>
			<div>
				<div>{user.name}</div>
				<div className='text-xs flex items-center gap-1 text-white/50 hover:text-white cursor-pointer duration-300 transition-all'>
					You want log out?{' '}
					<span
						className='hover:text-red-500 hover:underline duration-300 transition-all'
						onClick={() => LogOut()}
					>
						LogOut
					</span>
				</div>
			</div>
		</div>
	)
}

export default ProfileBar
