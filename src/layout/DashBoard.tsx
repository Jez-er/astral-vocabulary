import $PAGES from '@/app/routing/page.config'
import DashBoardHeader from '@/shared/components/dashboardHeader'
import DashBoardSideBar from '@/shared/components/sidebar'
import { useUserStore } from '@/stores/user.store'
import { Outlet, useNavigate } from 'react-router'

const DashBoardLayout = () => {
	const isAuth = useUserStore(state => state.isAuth)
	const path = useNavigate()
	const user = useUserStore(state => state.user)

	if (!isAuth && user === undefined) path($PAGES.AUTH.LOGIN)

	return (
		<section className='flex w-full h-full bg-gray-200 text-neutral-800 dark:bg-black/93 dark:text-white/90 mr-10 max-w-screen overflow-hidden'>
			<aside className='h-screen w-auto'>
				<DashBoardSideBar />
			</aside>
			<main className='w-full h-screen'>
				<header className='w-auto h-12 mt-2 mx-10'>
					<DashBoardHeader />
				</header>
				<main className='h-auto w-auto overflow-auto'>
					<Outlet />
				</main>
			</main>
		</section>
	)
}

export default DashBoardLayout
