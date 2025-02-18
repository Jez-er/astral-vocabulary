import { Route, Routes } from 'react-router'
import AuthLayout from '../../layout/AuthLayout'
import MainLayout from '../../layout/MainLayout'
import LoginPage from '../../pages/Auth/login'
import RegistrationPage from '../../pages/Auth/registration'
import HomePage from '../../pages/Home/page'
import $PAGES from './page.config'

export const AppRoutes = () => {
	return (
		<Routes>
			<Route path={$PAGES.HOME} element={<MainLayout />}>
				<Route index element={<HomePage />} />
			</Route>

			<Route path={$PAGES.AUTH.index} element={<AuthLayout />}>
				<Route path={$PAGES.AUTH.LOGIN} element={<LoginPage />} />
				<Route path={$PAGES.AUTH.REGISTRATION} element={<RegistrationPage />} />
			</Route>
		</Routes>
	)
}
