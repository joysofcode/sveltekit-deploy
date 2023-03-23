<script lang="ts">
	import { date } from '$lib/utils'

	export let data
</script>

<main class="container mt-32">
	<h1 class="capitalize">Latest posts</h1>

	<div class="mt-8 space-y-6">
		{#each data.posts as post, i}
			<ol>
				<li>
					<h3>
						<a
							class="unstyled font-semibold capitalize text-primary-500"
							href="/blog/{post.slug}"
						>
							{post.title}
						</a>
					</h3>
					<p>{post.description}</p>
					<p class="mt-4 text-gray-600 dark:text-gray-400">
						{date(post.createdAt)}
					</p>
				</li>
			</ol>

			{#if data.posts.length > 1 && data.posts.length !== i + 1}
				<hr />
			{/if}
		{/each}
	</div>
</main>
