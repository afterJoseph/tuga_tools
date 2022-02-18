<script lang="ts">
	import IconCopy from '$icons/icon_copy.svelte';
	export let row;
	let codeValue: HTMLParagraphElement;
	let isCopied = false;

	function handleCopyClipboard() {
		navigator.clipboard.writeText(codeValue.innerText).then(
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
</script>

<div class="py-4 px-0">
	<h1 class="text-3xl mb-4">{row.name}</h1>
	<div class="flex flex-col bg-purple-50 text-stone-700 p-4 border border-stone-700 border-dashed">
		<div class="flex justify-end w-full pb-2">
			<p
				class="mr-2 font-bold transition-all ease-in duration-150 p-0 m-0"
				class:opacity-0={!isCopied}
			>
				COPIADO
			</p>
			<button
				class="bg-none border-none outline-none cursor-pointer mr-4"
				on:click={handleCopyClipboard}
			>
				<IconCopy class="h-6 w-6" />
			</button>
		</div>
		<p class="py-2 px-4 text-lg break-all" bind:this={codeValue}>
			{JSON.stringify(row.data, null, ' ')}
		</p>
	</div>
</div>

<style lang="scss">
	:global(svg) {
		width: 20px;
	}
</style>
