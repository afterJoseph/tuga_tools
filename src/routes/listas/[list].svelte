<script context="module" lang="ts">
	export async function load({ fetch, params }) {
		const res = await fetch(`/listas/${params.list}.json`);
		if (res.ok) {
			const { listas } = await res.json();
			return {
				props: {
					listas
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
	import ListRow from '$components/ListRow.svelte';

	export let listas;
</script>

<div class="py-0 px-16">
	{#if listas.length > 0}
		{#each listas as row}
			<ListRow {row} />
		{/each}
	{:else}
		<h1 class="text-center mt-8 text-white text-3xl">
			AINDA não há nada aqui... Volta mais tarde ;)
		</h1>
	{/if}
</div>
