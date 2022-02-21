<script lang="ts">
	import IconCopy from '$icons/icon_copy.svelte';
	export let row;
	let codeValue = JSON.stringify(row.data, null, ' ');
	let isCopied = false;
	$: mode = row.type;

	function handleCopyClipboard() {
		navigator.clipboard.writeText(codeValue).then(
			function () {
				/* clipboard successfully set */
				isCopied = true;
				setTimeout(() => {
					isCopied = false;
				}, 3000);
			},
			function () {
				/* clipboard write failed */
			}
		);
	}

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
			<div class="flex justify-end items-start">
				<p
					class="mr-2 font-bold transition-all ease-in duration-150 p-0 m-0"
					class:opacity-0={!isCopied}
				>
					COPIADO
				</p>
				<button class="btn mr-4" on:click={handleCopyClipboard}>
					<IconCopy class="h-6 w-6" />
				</button>
			</div>
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
				{JSON.stringify(row.data, null, ' ')}
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
