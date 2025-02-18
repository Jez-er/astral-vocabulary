import { Outlet } from 'react-router'
import Header from '../shared/components/header/Header'

const MainLayout = () => {
	return (
		<>
			<section className='w-screen h-screen bg-black/93 text-white'>
				<header className='w-screen h-auto'>
					<Header />
				</header>
				<main className='w-screen h-auto'>
					<Outlet />
				</main>
			</section>
			<footer className='w-screen h-auto'>gggg</footer>
		</>
	)
}

export default MainLayout
