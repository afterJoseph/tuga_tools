<script context="module" lang="ts">
	export async function load({ fetch }) {
		const res = await fetch('/listas/listas.json');
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
			error: new Error('Could not fecth concelhos')
		};
	}
</script>

<script lang="ts">
	import ListRow from '$components/ListRow.svelte';

	export let listas;
</script>

<div class="py-0 px-16">
	{#each listas as row}
		<ListRow {row} />
	{/each}
</div>
