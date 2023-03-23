import * as posts from '$lib/services/posts'

export const load = async () => {
	return { posts: posts.getPublishedPosts() }
}
