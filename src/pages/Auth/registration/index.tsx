import { useForm } from 'react-hook-form'
import { NavLink, useNavigate } from 'react-router'
import $PAGES from '../../../app/routing/page.config'
import { cn } from '../../../lib/utils'
import { AuthService } from '../../../service/api/backend/auth'
import Logo from '../../../shared/components/logo'
import { Button } from '../../../shared/ui/button'
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '../../../shared/ui/card'
import { Input } from '../../../shared/ui/input'
import { Label } from '../../../shared/ui/label'
import { IAuthFields } from '../../../types/auth.types'
import OAuthButtons from '../components/oauth/OAuthButtons'

const RegistrationPage = () => {
	const path = useNavigate()

	const { register, handleSubmit } = useForm<IAuthFields>({
		defaultValues: {
			email: '',
			password: '',
		},
	})

	const addUser = (fields: IAuthFields) => {
		const mutate = AuthService.signUp(fields)

		mutate.finally(() => {
			path($PAGES.AUTH.REGISTRATION.PROFILE)
		})
	}

	return (
		<div className={cn('flex flex-col gap-6 w-[26rem]')}>
			<div className='mx-auto text-2xl'>
				<Logo WithText size={42} />
			</div>

			<Card className='rounded-2xl'>
				<CardHeader>
					<CardTitle className='text-2xl'>Registration</CardTitle>
					<CardDescription>
						Enter your email below to create a new account
					</CardDescription>
				</CardHeader>
				<CardContent>
					<form onSubmit={handleSubmit(addUser)}>
						<div className='flex flex-col gap-6'>
							<div className='grid gap-2'>
								<Label htmlFor='email'>Email</Label>
								<Input
									id='email'
									type='email'
									placeholder='J.Jeferson@example.com'
									{...register('email')}
									required
								/>
							</div>
							<div className='grid gap-2'>
								<div className='flex items-center'>
									<Label htmlFor='password'>Password</Label>
									<a
										href='#'
										className='ml-auto inline-block text-sm underline-offset-4 hover:underline hover:text-white duration-300 transition-all'
									>
										Forgot your password?
									</a>
								</div>
								<Input
									id='password'
									type='password'
									required
									{...register('password')}
								/>
							</div>
							<Button
								type='submit'
								className='w-full bg-violet-800 cursor-pointer'
							>
								Next
							</Button>
							<OAuthButtons />
						</div>
						<div className='mt-4 text-center text-sm hover:text-white duration-300 transition-all'>
							Already have an account?{' '}
							<NavLink
								to={$PAGES.AUTH.LOGIN}
								className='underline underline-offset-4 hover:text-violet-500 duration-300 transition-all'
							>
								Sign in
							</NavLink>
						</div>
					</form>
				</CardContent>
			</Card>
		</div>
	)
}

export default RegistrationPage
