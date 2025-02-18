import { Outlet } from 'react-router'

const MainLayout = () => {
	return (
		<>
			<section className='w-screen h-screen bg-black/93 text-white'>
				<header className='w-screen h-auto'>ffff</header>
				<main className='w-screen h-auto'>
					<Outlet />
				</main>
			</section>
			<footer className='w-screen h-auto'>gggg</footer>
		</>
	)
}

export default MainLayout
