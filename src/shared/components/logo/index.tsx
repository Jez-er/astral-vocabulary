import { BookMarked } from 'lucide-react'
import { useNavigate } from 'react-router'

interface props {
	WithText: boolean
}

const Logo = ({ WithText }: props) => {
	const path = useNavigate()

	return (
		<div
			className='flex items-center gap-2 cursor-pointer'
			onClick={() => path('/')}
		>
			<div className='text-violet-500 hover:text-white transition-all duration-300'>
				<BookMarked size={36} />
			</div>
			{WithText ? (
				<div>
					<div className='-mb-2 text-white/85 hover:text-violet-500/85 transition-all duration-300'>
						Astral
					</div>
					<div className='-mt-2 font-semibold hover:text-violet-500 transition-all duration-300'>
						Vocabulary
					</div>
				</div>
			) : null}
		</div>
	)
}

export default Logo
