import AuthLayout from '@/layout/AuthLayout'
import MainLayout from '@/layout/MainLayout'
import LoginPage from '@/pages/Auth/login'
import RegistrationPage from '@/pages/Auth/registration'
import RegistrationEmailPage from '@/pages/Auth/registration/CheckEmail'
import RegistrationProfilePage from '@/pages/Auth/registration/ProfilePage'
import HomePage from '@/pages/Home/page'
import { Route, Routes } from 'react-router'
import $PAGES from './page.config'

export const AppRoutes = () => {
	return (
		<Routes>
			<Route path={$PAGES.HOME} element={<MainLayout />}>
				<Route index element={<HomePage />} />
			</Route>

			<Route path={$PAGES.AUTH.index} element={<AuthLayout />}>
				<Route path={$PAGES.AUTH.LOGIN} element={<LoginPage />} />
				<Route
					path={$PAGES.AUTH.REGISTRATION.index}
					element={<RegistrationPage />}
				/>
				<Route
					path={$PAGES.AUTH.REGISTRATION.PROFILE}
					element={<RegistrationProfilePage />}
				/>
				<Route
					path={$PAGES.AUTH.REGISTRATION.EMAIL}
					element={<RegistrationEmailPage />}
				/>
			</Route>
		</Routes>
	)
}
