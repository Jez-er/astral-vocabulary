import $PAGES from '@/app/routing/page.config'
import { AuthSchema } from '@/lib/auth_schemas'
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
import { Input } from '@/shared/ui/input'
import { Label } from '@/shared/ui/label'
import { useUserStore } from '@/stores/user.store'
import { IAuthFields } from '@/types/auth.types'
import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { NavLink, useNavigate } from 'react-router'

const LoginPage = () => {
	const login = useUserStore(state => state.login)
	const isAuth = useUserStore(state => state.isAuth)
	const path = useNavigate()
	const { register, handleSubmit, formState } = useForm<IAuthFields>({
		defaultValues: {
			email: '',
			password: '',
		},
		resolver: zodResolver(AuthSchema),
	})

	const { errors } = formState

	const loginFN = (fields: IAuthFields) => {
		login(fields)
	}

	useEffect(() => {
		if (isAuth) path($PAGES.DASHBOARD.index)
	}, [isAuth])

	return (
		<div className={cn('flex flex-col gap-6 w-[26rem]')}>
			<div className='mx-auto text-2xl'>
				<Logo WithText size={42} />
			</div>

			<Card className='rounded-2xl'>
				<CardHeader>
					<CardTitle className='text-2xl'>Login</CardTitle>
					<CardDescription>
						Enter your email below to login to your account
					</CardDescription>
				</CardHeader>
				<CardContent>
					<form onSubmit={handleSubmit(loginFN)}>
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
									<NavLink
										to={$PAGES.AUTH.PASS}
										className='ml-auto inline-block text-xs underline-offset-4 hover:underline hover:text-white duration-300 transition-all'
									>
										Forgot your password?
									</NavLink>
								</div>
								<Input
									id='password'
									type='password'
									{...register('password')}
									required
								/>
								<Label htmlFor='password' className='text-red-800'>
									{errors.password?.message}
								</Label>
							</div>
							<Button
								type='submit'
								className='w-full bg-violet-800 cursor-pointer'
							>
								Login
							</Button>
						</div>
						<div className='mt-4 text-center text-sm hover:text-white duration-300 transition-all'>
							Don&apos;t have an account?{' '}
							<NavLink
								to={$PAGES.AUTH.REGISTRATION.index}
								className='underline underline-offset-4 hover:text-violet-500 duration-300 transition-all'
							>
								Sign up
							</NavLink>
						</div>
					</form>
				</CardContent>
			</Card>
		</div>
	)
}

export default LoginPage
