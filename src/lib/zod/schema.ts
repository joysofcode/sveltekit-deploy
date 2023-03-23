import { z } from 'zod'

export const authSchema = z.object({
	username: z.string(),
	password: z.string(),
})

export const postSchema = z.object({
	title: z.string().nonempty({ message: 'Missing title' }),
	slug: z.string().nonempty({ message: 'Missing slug' }),
	description: z.string().nonempty({ message: 'Missing descripton' }),
	markdown: z.string().nonempty({ message: 'Missing Markdown' }),
	published: z.boolean(),
})
