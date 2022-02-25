<script context="module" lang="ts">
	export async function load({ fetch, params }) {
		const res = await fetch(`/funcoes/${params.function}.json`);
		if (res.ok) {
			const { functions } = await res.json();

			return {
				props: {
					functions
				}
			};
		}
		return {
			status: res.status,
			error: new Error('Could not fecth list')
		};
	}
</script>

<script lang="ts">
	import FunctionRow from '$components/FunctionRow.svelte';

	export let functions;
</script>

<div class="py-0 px-16">
	{#if functions.length > 0}
		{#each functions as row}
			<FunctionRow {row} />
		{/each}
	{:else}
		<h1 class="text-center mt-8 text-white text-3xl">
			AINDA não há nada aqui... Volta mais tarde ;)
		</h1>
	{/if}
</div>
