import { Button } from '../../../../shared/ui/button'

import git from '../../../../assets/icons/github.svg'
import google from '../../../../assets/icons/google.svg'

const OAuthButtons = () => {
	return (
		<div className='flex gap-5 max-md:flex-col'>
			<Button variant='outline' className='w-full flex items-center gap-2'>
				<div className='text-violet-500'>
					<img src={google} alt='google' width={20} />
				</div>
				Login with Google
			</Button>
			<Button variant='outline' className='w-full'>
				<div className='text-violet-500'>
					<img src={git} alt='google' width={22} />
				</div>
				Login with GitHub
			</Button>
		</div>
	)
}

export default OAuthButtons
