<script lang="ts">
	import Editor from '@toast-ui/editor'
	import '@toast-ui/editor/dist/toastui-editor.css'

	export let markdown: string

	let loading = false

	function editor(el: HTMLDivElement) {
		const editor = new Editor({
			el,
			initialValue: markdown,
			height: '400px',
			initialEditType: 'markdown',
			previewStyle: 'tab',
			events: {
				change: () => {
					markdown = editor.getMarkdown()
				},
				load: () => {
					loading = false
				},
			},
		})
	}
</script>

{#if loading}
	<p>Loading editor...</p>
{/if}

<div>
	<div id="editor" use:editor />
	<textarea name="markdown" bind:value={markdown} hidden />
</div>

<style>
	#editor {
		@apply overflow-hidden rounded-2xl bg-slate-50;
	}
</style>
