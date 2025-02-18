import { Route, Routes } from 'react-router'
import MainLayout from '../../layout/MainLayout'
import HomePage from '../../pages/Home/page'
import $PAGES from './page.config'

export const AppRoutes = () => {
	return (
		<Routes>
			<Route path={$PAGES.HOME} element={<MainLayout />}>
				<Route index element={<HomePage />} />
			</Route>
		</Routes>
	)
}
