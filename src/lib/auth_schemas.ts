import { z } from 'zod'

export const AuthSchema = z.object({
	email: z.string().email('Invalid e-mail'),
	password: z
		.string()
		.min(8, 'Min 8 characters')
		.regex(/[0-9]/, 'At least 1 number')
		.regex(/[A-Z]/, 'At least 1 uppercase letter')
		.regex(/[a-z]/, 'At least 1 lowercase letter')
		.regex(/[^a-zA-Z0-9]/, 'At least 1 special character'),
})

// export type RegisterForm = z.infer<typeof registrationSchema>

export const NameSchema = z.object({
	name: z.string().min(3, 'Min 3 characters'),
})

// export type LoginForm = z.infer<typeof loginSchema>

export const passSchema = z.object({
	Email: z.string().email('Invalid e-mail'),
})

export type PassForm = z.infer<typeof passSchema>
