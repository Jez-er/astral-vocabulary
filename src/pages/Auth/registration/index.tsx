import $PAGES from '@/app/routing/page.config'
import { toast } from '@/hooks/use-toast'
import { AuthSchema } from '@/lib/auth_schemas'
import { cn } from '@/lib/utils'
import { AuthService } from '@/service/api/backend/auth'
import Logo from '@/shared/components/logo'
import { Button } from '@/shared/ui/button'
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/shared/ui/card'
import { Input } from '@/shared/ui/input'
import { Label } from '@/shared/ui/label'
import { IAuthFields } from '@/types/auth.types'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { NavLink, useNavigate } from 'react-router'

const RegistrationPage = () => {
	const path = useNavigate()

	const { register, handleSubmit, formState } = useForm<IAuthFields>({
		defaultValues: {
			email: '',
			password: '',
		},
		resolver: zodResolver(AuthSchema),
	})

	const { errors } = formState

	const addUser = (fields: IAuthFields) => {
		const mutate = AuthService.signUp(fields)

		mutate.finally(() => {
			path($PAGES.AUTH.REGISTRATION.PROFILE)
		})
		mutate.then(data => {
			if (data.error?.message) {
				toast({
					title: data.error?.message,
					variant: 'destructive',
				})
			}
		})
		mutate.catch(e => {
			toast({
				title: 'Query error',
				description: e,
				variant: 'destructive',
			})
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
									type='text'
									placeholder='J.Jeferson@example.com'
									{...register('email')}
									required
								/>
								<Label htmlFor='email' className='text-red-800'>
									{errors.email?.message}
								</Label>
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
								<Label htmlFor='password' className='text-red-800'>
									{errors.password?.message}
								</Label>
							</div>
							<Button
								type='submit'
								className='w-full bg-violet-800 cursor-pointer'
							>
								Next
							</Button>
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
