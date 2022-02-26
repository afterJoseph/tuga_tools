<script lang="ts">
	import CodeBlock from './CodeBlock.svelte';
	import CopyButton from './CopyButton.svelte';
	export let row;
	$: mode = row.type;

	function toggleMode(newMode) {
		mode = newMode;
	}
</script>

<div class="py-4 px-0">
	<div class="flex items-end justify-between mb-4">
		<h1 class="text-4xl">{row.name}</h1>
		<h3 class="text-lg" hidden={row.type === 'json'}>{row.data.length} REGISTOS</h3>
	</div>
	<div
		class="flex flex-col bg-purple-50 dark:bg-stone-200 text-stone-700 p-4 border border-stone-700 border-dashed"
	>
		<div class="flex justify-between w-full pb-2">
			<div class="flex items-center ml-4">
				<button
					class="btn px-2 text-xl font-bold"
					class:active={mode === 'list'}
					class:hidden={row.type === 'json'}
					on:click={() => toggleMode('list')}>LISTA</button
				>
				<button
					class="btn px-2 text-xl font-bold"
					class:active={mode === 'json'}
					on:click={() => toggleMode('json')}>JSON</button
				>
			</div>
			<CopyButton data={row.data} />
		</div>
		{#if mode === 'list'}
			<div
				class="p-4 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 mx-auto gap-y-3 gap-x-9 text-lg"
			>
				{#if row.type === 'list'}
					{#each row.data as el}
						<p>{el}</p>
					{/each}
				{/if}
			</div>
		{:else if mode === 'json'}
			<p class="p-4 text-lg break-all">
				<CodeBlock>{JSON.stringify(row.data, null, ' ')}</CodeBlock>
			</p>
		{/if}
	</div>
</div>

<style lang="scss">
	:global(svg) {
		width: 20px;
	}

	.btn {
		@apply bg-none border-none outline-none cursor-pointer;
	}

	.active {
		@apply border-b-4 border-solid border-b-stone-700;
	}
</style>
