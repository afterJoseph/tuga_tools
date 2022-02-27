<script lang="ts">
	import TimeCalcRow from '$components/TimeCalcRow.svelte';
	import { minutesToHours } from '../../functions/minutesToHours';
	import type { iTimeCalcRows } from '../../interfaces/timeCalcInterface';

	let timeCalcRows: iTimeCalcRows[] = [
		{ startTime: '', endTime: '', totalHours: '', totalMinutes: '' }
	];

	$: totalHoursMinutes = minutesToHours(
		timeCalcRows
			.map((el) => {
				let hours = Number(el.totalHours) * 60;
				let minutes = Number(el.totalMinutes);
				return hours + minutes;
			})
			.reduce((prev, curr) => prev + curr, 0)
	);

	function addNewRow() {
		timeCalcRows = [
			...timeCalcRows,
			{ startTime: '', endTime: '', totalHours: '', totalMinutes: '' }
		];
	}

	function clearAll() {
		timeCalcRows = [{ startTime: '', endTime: '', totalHours: '', totalMinutes: '' }];
	}
</script>

<div class="px-8 py-4">
	<h1 class="text-3xl">Calculadora Diferença e Soma de Horas</h1>
	<table class="table-auto w-2/3 mt-8 text-center mx-auto">
		<tr>
			<th>Hora Inicial</th>
			<th>Hora Final</th>
			<th>Total (Horas / Minutos)</th>
		</tr>
		{#each timeCalcRows as row, i}
			<TimeCalcRow
				bind:row
				{i}
				on:click={() => {
					timeCalcRows = timeCalcRows.filter((el, j) => j !== i);
				}}
			/>
		{/each}
		<tr>
			<td class="pt-4">
				<button class="p-2 text-xl bg-white text-purple-900" on:click={addNewRow}
					>ADICIONAR FILA</button
				>
			</td>
			<td class="pt-4" />
			<td class="pt-4 text-3xl"
				>{totalHoursMinutes.hours} Horas e {totalHoursMinutes.minutes} Minutos</td
			>
			<td
				><button
					on:click={clearAll}
					class="p-2 text-xl bg-purple-900 border-2 border-dashed hover:bg-red-500 dark:hover:bg-red-400 dark:bg-stone-800"
					>Limpar Tudo</button
				></td
			>
		</tr>
	</table>
</div>

<style>
	th {
		@apply text-xl pb-4;
	}
</style>
