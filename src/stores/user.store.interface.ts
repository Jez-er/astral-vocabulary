import { IAuthFields } from '@/types/auth.types'
import { IProfile } from '@/types/profile.types'

export interface IUserStore {
	user: IProfile
	isAuth: boolean
	login: (fields: IAuthFields) => void
	logout: () => void
}
