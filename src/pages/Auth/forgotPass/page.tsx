import $PAGES from '@/app/routing/page.config'
import { passSchema } from '@/lib/auth_schemas'
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
import { IPassRecover } from '@/types/auth.types'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { NavLink } from 'react-router'

const ForgotPasswordPage = () => {
	const [emailSend, setEmailSend] = useState<boolean>(false)

	const { register, handleSubmit, formState, watch } = useForm<IPassRecover>({
		defaultValues: {
			email: '',
		},
		resolver: zodResolver(passSchema),
	})

	const email = watch('email')
	const { errors } = formState

	const createProfile = (fields: IPassRecover) => {
		const mutate = AuthService.recoverPass(fields)

		mutate.finally(() => setEmailSend(true))
	}

	return (
		<div className={cn('flex flex-col gap-6 w-[26rem]')}>
			<div className='mx-auto text-2xl'>
				<Logo WithText size={42} />
			</div>

			<Card className='rounded-2xl'>
				<CardHeader>
					<CardTitle className='text-2xl'>Password recovering</CardTitle>
					<CardDescription>
						Enter your e-mail below to recovering your password
					</CardDescription>
				</CardHeader>
				<CardContent>
					<h1 className='text-red-800 mb-5'>
						E-Mail from the user:{' '}
						<span className='underline'>Superbase Auth</span>
					</h1>
					{emailSend ? (
						<h1 className='mb-5'>
							Mail was send to: <span className='underline'>{email}</span>
						</h1>
					) : (
						<form onSubmit={handleSubmit(createProfile)}>
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
									<Label htmlFor='name' className='text-red-900'>
										{errors.email?.message}
									</Label>
								</div>
								<Button
									type='submit'
									className='w-full bg-violet-800 cursor-pointer'
								>
									Recover
								</Button>
							</div>
							<div className='mt-4 text-center text-sm hover:text-white duration-300 transition-all'>
								Back to login?{' '}
								<NavLink
									to={$PAGES.AUTH.LOGIN}
									className='underline underline-offset-4 hover:text-violet-500 duration-300 transition-all'
								>
									Sign in
								</NavLink>
							</div>
						</form>
					)}
				</CardContent>
			</Card>
		</div>
	)
}

export default ForgotPasswordPage
