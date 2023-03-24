<script lang="ts">
	import { enhance } from '$app/forms'
	import { getUser } from '@lucia-auth/sveltekit/client'
	import { LightSwitch } from '@skeletonlabs/skeleton'

	const user = getUser()
</script>

<nav class="container mt-8 flex justify-between">
	<a class="unstyled text-xl" href="/">
		<b>🔥 Blog</b>
	</a>

	<div class="flex items-center gap-4">
		<ol class="flex space-x-4">
			<li>
				<a class="unstyled muted" href="/blog">Blog</a>
			</li>
			<li>
				<a class="unstyled muted" href="/dashboard">Dashboard</a>
			</li>
			<li>
				<a class="unstyled muted" href="/about">About</a>
			</li>

			{#if $user}
				<li>
					<form method="POST" action="/logout" use:enhance>
						<button class="muted" type="submit">Log out</button>
					</form>
				</li>
			{/if}
		</ol>

		<LightSwitch />
	</div>
</nav>
