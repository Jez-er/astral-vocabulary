import $PAGES from '@/app/routing/page.config'

interface IHeaderData {
	title: string
	link: string
}

export const HeaderData: IHeaderData[] = [
	{
		title: 'Home',
		link: $PAGES.HOME,
	},
	{
		title: 'About Us',
		link: $PAGES.ABOUT,
	},
]
