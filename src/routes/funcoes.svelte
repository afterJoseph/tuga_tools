<script context="module" lang="ts">
	export async function load({ fetch }) {
		const res = await fetch('/funcoes/functions.json');
		if (res.ok) {
			const { coisas } = await res.json();
			return {
				props: {
					coisas
				}
			};
		}
		return {
			status: res.status,
			error: new Error('Could not fecth coisas')
		};
	}
</script>

<script>
	export let coisas;
</script>

<h1>I'm HERE {coisas}</h1>
