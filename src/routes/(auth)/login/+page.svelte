<script lang="ts">
	import AuthForm from '$lib/components/forms/auth.svelte'

	export let data
</script>

<div class="mx-auto mt-32 max-w-sm">
	<h1>Log in</h1>
	<AuthForm data={data.form} />
	<p class="mt-4">
		Don't have an account? <a href="/register">Register</a>
	</p>
</div>
