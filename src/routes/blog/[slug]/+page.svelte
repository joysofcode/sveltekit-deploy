<script lang="ts">
	export let data
</script>

<div class="container mt-32">
	<h1>{data.post.title}</h1>
	<div class="mt-8 max-w-[80ch] space-y-8">
		{@html data.post.html}
	</div>
</div>
