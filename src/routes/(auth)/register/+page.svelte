<script lang="ts">
	import AuthForm from '$lib/components/forms/auth.svelte'

	export let data
</script>

<div class="mx-auto mt-32 max-w-sm">
	<h1>Register</h1>
	<AuthForm data={data.form} />
</div>
