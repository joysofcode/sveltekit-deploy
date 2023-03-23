import db from '$lib/server/database'
import { error } from '@sveltejs/kit'

// should use Prisma to get subset of types but I'm lazy
type Post = {
	html: string
	title: string
	slug: string
	description: string
	markdown: string
	published: boolean
}

export async function getPosts() {
	return await db.post.findMany({
		select: {
			createdAt: true,
			slug: true,
			title: true,
			published: true,
		},
		orderBy: { createdAt: 'desc' },
	})
}

export async function getPublishedPosts() {
	return await db.post.findMany({
		where: { published: true },
		select: {
			createdAt: true,
			slug: true,
			title: true,
			description: true,
		},
		orderBy: { createdAt: 'desc' },
		take: 10,
	})
}

export async function getPost(slug: string) {
	const post = await db.post.findUnique({
		where: { slug },
		select: {
			title: true,
			slug: true,
			description: true,
			markdown: true,
			html: true,
			published: true,
		},
	})

	if (!post) {
		throw error(400, `Could not find “${slug}”`)
	}

	return post
}

export async function createPost(data: Post) {
	await db.post.create({ data })
}

export async function updatePost(slug: string, data: Post) {
	return await db.post.update({
		where: { slug },
		data,
	})
}

export async function deletePost(slug: string) {
	await db.post.delete({ where: { slug } })
}
