<script lang="ts">
	import IconTrash from '$icons/icon_trash.svelte';
	import { minutesToHours } from '../functions/minutesToHours';
	import { useDayjs } from '../hooks/useDayjs';
	import type { iTimeCalcRows } from '../interfaces/timeCalcInterface';

	export let row: iTimeCalcRows;
	export let i: number;

	function onStartEndTimeInput() {
		if (row.startTime !== '' && row.endTime !== '') {
			const startTime = useDayjs(row.startTime, 'hh:mm');
			const endTime = useDayjs(row.endTime, 'hh:mm');
			const timeDiff = endTime.diff(startTime, 'minute');
			const { hours, minutes } = minutesToHours(timeDiff);
			row.totalHours = hours;
			row.totalMinutes = minutes;
		} else {
			row.totalHours = '';
			row.totalMinutes = '';
		}
	}
</script>

<tr>
	<td
		><input
			class="input px-6 !important"
			type="time"
			name="startTime"
			bind:value={row.startTime}
			on:input|self={onStartEndTimeInput}
		/></td
	>
	<td
		><input
			class="input px-6 !important"
			type="time"
			name="endTime"
			bind:value={row.endTime}
			on:input|self={onStartEndTimeInput}
		/></td
	>
	<td
		><input
			class="input inputText dark:border-stone-800"
			type="text"
			name="totalHours"
			bind:value={row.totalHours}
		/><input
			type="text"
			class="input inputText dark:border-stone-800"
			name="totalMinutes"
			bind:value={row.totalMinutes}
		/></td
	>
	{#if i > 0}
		<td class="text-left"
			><button class="text-2xl" on:click><IconTrash class="h-6 w-6" /></button></td
		>
	{/if}
</tr>

<style>
	td {
		@apply py-2;
	}

	.input {
		@apply text-xl text-stone-800 p-2;
	}

	.inputText {
		@apply border-2 border-purple-900 text-center;
	}
</style>
