<script lang="ts">
	import { enhance } from '$app/forms'
	import { date, truncate } from '$lib/utils'

	export let data
</script>

<main class="container mt-32">
	<h1 class="font">Dashboard</h1>

	<div class="mt-8">
		<a class="font-bold capitalize underline-offset-4" href="/dashboard/create">
			+ Create a new post
		</a>
	</div>

	<div class="table-container mt-8">
		<table class="table-hover table">
			<thead>
				<tr>
					<th>Title</th>
					<th>Created</th>
					<th>Published</th>
					<th>Actions</th>
				</tr>
			</thead>

			<tbody>
				{#each data.posts as post, i}
					<tr>
						<td>
							<a class="unstyled capitalize" href="/dashboard/edit/{post.slug}">
								{truncate(post.title)}
							</a>
						</td>
						<td>{date(post.createdAt)}</td>
						<td>{post.published ? 'Yes' : 'No'}</td>
						<td>
							<form
								method="POST"
								action="?/delete&slug={post.slug}"
								use:enhance
							>
								<button class="btn variant-soft-error" type="submit">
									Delete
								</button>
							</form>
						</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
</main>
