<script lang="ts">
	import { superForm } from 'sveltekit-superforms/client'
	import { SlideToggle } from '@skeletonlabs/skeleton'
	import type { Validation } from 'sveltekit-superforms/index'
	import type { AnyZodObject } from 'zod'
	import Editor from '$lib/components/editor.svelte'

	export let data: string | Validation<AnyZodObject> | null | undefined

	const { form, errors, constraints, enhance } = superForm(data)
	let isDraft: boolean = $form.published
</script>

<div class="card mt-8 p-8">
	<form method="POST" class="space-y-6" use:enhance>
		<label class="label" for="title">
			<span class="block">Title</span>
			<input
				class="input"
				type="text"
				name="title"
				id="title"
				class:input-error={$errors.title}
				data-invalid={$errors.title}
				bind:value={$form.title}
				{...$constraints.slug}
			/>
		</label>
		{#if $errors.title}
			<span class="text-red-400">{$errors.title}</span>
		{/if}

		<label class="label" for="slug">
			<span>Slug</span>
			<input
				class="input"
				type="text"
				name="slug"
				id="slug"
				class:input-error={$errors.slug}
				data-invalid={$errors.slug}
				bind:value={$form.slug}
				{...$constraints.slug}
			/>
		</label>
		{#if $errors.slug}
			<span class="text-red-400">{$errors.slug}</span>
		{/if}

		<label class="label" for="description">
			<span>Description</span>
			<input
				class="input mt-2"
				type="text"
				name="description"
				id="description"
				class:input-error={$errors.description}
				data-invalid={$errors.description}
				bind:value={$form.description}
				{...$constraints.description}
			/>
		</label>
		{#if $errors.description}
			<span class="text-red-400">{$errors.description}</span>
		{/if}

		<div class="space-y-2">
			<p>Markdown</p>
			<Editor markdown={$form.markdown} />
		</div>

		<div>
			<SlideToggle name="published" bind:checked={isDraft}>
				Published
			</SlideToggle>
		</div>

		<button class="btn variant-filled" type="submit">Submit</button>
	</form>
</div>
