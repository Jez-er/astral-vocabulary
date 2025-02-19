import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { AuthService } from '../service/api/backend/auth'
import { ProfileService } from '../service/api/backend/profile'
import { IAuthFields } from '../types/auth.types'
import { IProfile } from '../types/profile.types'
import { IUserStore } from './user.store.interface'

export const useUserStore = create<IUserStore>()(
	persist(
		set => ({
			user: {} as IProfile,
			isAuth: false,
			login: async (fields: IAuthFields) => {
				const responseLogin = await AuthService.singIn(fields)

				if (!responseLogin.data?.user) {
					throw new Error('Login failed: No user data returned.')
				}

				const responseProfile = await ProfileService.get(
					responseLogin.data.user.id
				)

				if (!responseProfile.data) {
					throw new Error('Profile fetch failed.')
				}

				set(() => ({
					isAuth: true,
					user: responseProfile.data,
				}))

				return responseProfile
			},

			logout: async () => {
				try {
					await AuthService.logOut()
					set(() => ({
						user: {} as IProfile,
						isAuth: false,
					}))
				} catch (e) {
					console.log(e)
				}
			},
		}),
		{
			name: 'userStore',
		}
	)
)
