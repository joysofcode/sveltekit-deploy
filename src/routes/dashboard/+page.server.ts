import { fail } from '@sveltejs/kit'
import * as posts from '$lib/services/posts'

export const load = async () => {
	return { posts: await posts.getPosts() }
}

export const actions = {
	delete: async ({ url }) => {
		const slug = String(url.searchParams.get('slug'))

		try {
			await posts.deletePost(slug)
		} catch (error) {
			return fail(400)
		}
	},
}
