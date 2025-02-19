import $PAGES from '@/app/routing/page.config'
import { cn } from '@/lib/utils'
import Logo from '@/shared/components/logo'
import { Button } from '@/shared/ui/button'
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/shared/ui/card'
import { useNavigate } from 'react-router'

const RegistrationEmailPage = () => {
	const path = useNavigate()

	return (
		<div className={cn('flex flex-col gap-6 w-[26rem]')}>
			<div className='mx-auto text-2xl'>
				<Logo WithText size={42} />
			</div>

			<Card className='rounded-2xl'>
				<CardHeader>
					<CardTitle className='text-2xl'>E-Mail Confirm</CardTitle>
					<CardDescription>
						Please check your e-mail and confirm registration
					</CardDescription>
				</CardHeader>
				<CardContent>
					<h1 className='text-red-800 mb-5'>
						E-Mail from the user:{' '}
						<span className='underline'>Superbase Auth</span>
					</h1>
					<Button
						type='submit'
						className='w-full bg-violet-800 cursor-pointer'
						onClick={() => path($PAGES.AUTH.LOGIN)}
					>
						I confirm it
					</Button>
				</CardContent>
			</Card>
		</div>
	)
}

export default RegistrationEmailPage
