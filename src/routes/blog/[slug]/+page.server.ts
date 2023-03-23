import * as posts from '$lib/services/posts'

export const load = async ({ params }) => {
	return { post: await posts.getPost(params.slug) }
}
