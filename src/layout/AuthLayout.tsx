import { Outlet } from 'react-router'

const AuthLayout = () => {
	return (
		<main className='w-screen h-screen bg-black/93 text-white/90 flex justify-center items-center'>
			<Outlet />
		</main>
	)
}

export default AuthLayout
