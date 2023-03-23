<script lang="ts">
	import { page } from '$app/stores'
</script>

<div class="container mt-32">
	<h1>{$page.status}: {$page.error?.message}</h1>
</div>
