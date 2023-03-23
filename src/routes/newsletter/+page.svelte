<script>
	import { enhance } from '$app/forms'
</script>

<main class="container mt-32">
	<h1>Newsletter</h1>

	<div class="mt-8 max-w-md">
		<form method="POST" action="?/subscribe" use:enhance>
			<div class="flex gap-2">
				<input class="input" type="email" name="email" />
				<button class="btn variant-filled-primary" type="submit">
					Subscribe
				</button>
			</div>
		</form>
	</div>
</main>
