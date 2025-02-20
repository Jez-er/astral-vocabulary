import $PAGES from '@/app/routing/page.config'
import { TIcon } from '@/types/utils.types'

interface ISideBarElements {
	title: string
	path: string
	icon: TIcon
}

export const SideBarPages: ISideBarElements[] = [
	{
		title: 'Vocabulary',
		path: $PAGES.DASHBOARD.index,
		icon: 'BookA',
	},
]

export const SideBarGames: ISideBarElements[] = []
