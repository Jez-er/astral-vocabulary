import DashBoardHeader from '@/shared/components/dashboardHeader'
import DashBoardSideBar from '@/shared/components/sidebar'
import { Outlet } from 'react-router'

const DashBoardLayout = () => {
	return (
		<section className='flex w-screen h-screen bg-gray-200 text-neutral-800 dark:bg-black/93 dark:text-white/90 overflow-hidden'>
			<aside className='h-screen w-1/6'>
				<DashBoardSideBar />
			</aside>
			<main className='w-5/6 h-screen'>
				<header className='w-full h-12 mt-2'>
					<DashBoardHeader />
				</header>
				<Outlet />
			</main>
		</section>
	)
}

export default DashBoardLayout
