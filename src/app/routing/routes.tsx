import AuthLayout from '@/layout/AuthLayout'
import DashBoardLayout from '@/layout/DashBoard'
import MainLayout from '@/layout/MainLayout'
import ForgotPasswordPage from '@/pages/Auth/forgotPass/page'
import LoginPage from '@/pages/Auth/login'
import RegistrationPage from '@/pages/Auth/registration'
import RegistrationEmailPage from '@/pages/Auth/registration/CheckEmail'
import RegistrationProfilePage from '@/pages/Auth/registration/ProfilePage'
import DashBoard from '@/pages/DashBoard/index/page'
import HomePage from '@/pages/Home/page'
import NewPasswordPage from '@/pages/utils/NewPass.tsx/page'
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
				<Route path={$PAGES.AUTH.PASS} element={<ForgotPasswordPage />} />
			</Route>

			<Route path={$PAGES.UTILS.index} element={<AuthLayout />}>
				<Route path={$PAGES.UTILS.NEW_PASS} element={<NewPasswordPage />} />
			</Route>

			<Route path={$PAGES.DASHBOARD.index} element={<DashBoardLayout />}>
				<Route index element={<DashBoard />} />
			</Route>
		</Routes>
	)
}
