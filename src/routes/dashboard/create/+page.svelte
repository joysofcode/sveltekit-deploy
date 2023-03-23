<script lang="ts">
	import Form from '$lib/components/forms/post.svelte'

	export let data
</script>

<div class="container mt-32">
	<h1 class="capitalize">Create post</h1>
	<Form data={data.form} />
</div>
