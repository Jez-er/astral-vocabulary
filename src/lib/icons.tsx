import { TIcon } from '@/types/utils.types'
import { icons, LucideProps } from 'lucide-react'

interface Props extends LucideProps {
	name: TIcon
}

const Icon = ({ name, ...props }: Props) => {
	const IconComponent: React.ElementType = icons[name] || (
		<div className='w-6 h-6 bg-gray-300' />
	)
	return <IconComponent {...props} />
}

export default Icon
