import $PAGES from '@/app/routing/page.config'
import { newPass } from '@/lib/auth_schemas'
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
import { INewPassword } from '@/types/auth.types'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router'

const NewPasswordPage = () => {
	const path = useNavigate()

	const { register, handleSubmit, formState } = useForm<INewPassword>({
		defaultValues: {
			pass: '',
			double: '',
		},
		resolver: zodResolver(newPass),
	})

	const { errors } = formState

	const createProfile = (fields: INewPassword) => {
		if (fields.pass === fields.double) {
			const mutate = AuthService.newPass(fields)

			mutate.finally(() => {
				path($PAGES.AUTH.LOGIN)
			})
		}
	}

	return (
		<div className={cn('flex flex-col gap-6 w-[26rem]')}>
			<div className='mx-auto text-2xl'>
				<Logo WithText size={42} />
			</div>

			<Card className='rounded-2xl'>
				<CardHeader>
					<CardTitle className='text-2xl'>New password</CardTitle>
					<CardDescription>
						Enter your e-mail below to recovering your password
					</CardDescription>
				</CardHeader>
				<CardContent>
					<form onSubmit={handleSubmit(createProfile)}>
						<div className='flex flex-col gap-6'>
							<div className='grid gap-2'>
								<Label htmlFor='pass'>Password</Label>
								<Input
									id='pass'
									type='password'
									{...register('pass')}
									required
								/>
								<Label htmlFor='pass' className='text-red-900'>
									{errors.pass?.message}
								</Label>
							</div>
							<div className='grid gap-2'>
								<Label htmlFor='passRepeat'>Repeat password</Label>
								<Input
									id='passRepeat'
									type='password'
									{...register('double')}
									required
								/>
								<Label htmlFor='name' className='text-red-900'>
									{errors.double?.message}
								</Label>
							</div>
							<Button
								type='submit'
								className='w-full bg-violet-800 cursor-pointer'
							>
								Recover
							</Button>
						</div>
					</form>
				</CardContent>
			</Card>
		</div>
	)
}

export default NewPasswordPage
