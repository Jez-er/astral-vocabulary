import $PAGES from '@/app/routing/page.config'
import { toast } from '@/hooks/use-toast'
import { NameSchema } from '@/lib/auth_schemas'
import { cn } from '@/lib/utils'
import { ProfileService } from '@/service/api/backend/profile'
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
import { IProfileFields } from '@/types/profile.types'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { NavLink, useNavigate } from 'react-router'

const RegistrationProfilePage = () => {
	const path = useNavigate()

	const { register, handleSubmit, formState } = useForm<IProfileFields>({
		defaultValues: {
			name: '',
		},
		resolver: zodResolver(NameSchema),
	})

	const { errors } = formState

	const createProfile = (fields: IProfileFields) => {
		const mutate = ProfileService.create(fields)

		mutate.finally(() => {
			path($PAGES.AUTH.REGISTRATION.EMAIL)
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
					<CardTitle className='text-2xl'>Create profile</CardTitle>
					<CardDescription>
						Enter your name below to create a new account
					</CardDescription>
				</CardHeader>
				<CardContent>
					<form onSubmit={handleSubmit(createProfile)}>
						<div className='flex flex-col gap-6'>
							<div className='grid gap-2'>
								<Label htmlFor='name'>Name</Label>
								<Input
									id='name'
									type='name'
									placeholder='Jack | Jack Jeferson'
									{...register('name')}
									required
								/>
								<Label htmlFor='name' className='text-red-900'>
									{errors.name?.message}
								</Label>
							</div>
							<Button
								type='submit'
								className='w-full bg-violet-800 cursor-pointer'
							>
								Register
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

export default RegistrationProfilePage
