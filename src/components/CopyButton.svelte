<script lang="ts">
	import IconCopy from '$icons/icon_copy.svelte';
	export let row;
	$: codeValue = JSON.stringify(row.data, null, ' ');
	let isCopied = false;

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
</script>

<div class="flex justify-end items-start">
	<p class="mr-2 font-bold transition-all ease-in duration-150 p-0 m-0" class:opacity-0={!isCopied}>
		COPIADO
	</p>
	<button
		class="bg-none border-none outline-none cursor-pointer mr-4"
		on:click={handleCopyClipboard}
	>
		<IconCopy class="h-6 w-6" />
	</button>
</div>
