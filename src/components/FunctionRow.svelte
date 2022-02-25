<script lang="ts">
	import CodeBlock from './CodeBlock.svelte';
	import CopyButton from './CopyButton.svelte';

	export let row;
</script>

<div class="py-4 px-0">
	<div class="flex items-end justify-between mb-4">
		<h1 class="text-4xl">{row.name}</h1>
	</div>
	<div
		class="flex flex-col bg-purple-50 dark:bg-stone-200 text-stone-700 p-4 border border-stone-700 border-dashed"
	>
		<CopyButton {row} />
		<p class="p-4 text-lg break-all">
			<CodeBlock>{row?.data || ''}</CodeBlock>
		</p>
	</div>
</div>
