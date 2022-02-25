<script lang="ts">
	import IconSun from '$icons/icon_sun.svelte';
	import IconMoon from '$icons/icon_moon.svelte';
	import { isDark, ToggleDark } from '../../stores/darkModeStore';
</script>

{#if $isDark}
	<button class="p-0 m-0 ml-8 hover:text-amber-100 ease-in duration-150" on:click={ToggleDark}
		><IconSun class="h-7 w-7 p-0 m-0" /></button
	>
{:else}
	<button class="p-0 m-0 ml-8 hover:text-purple-100 ease-in duration-150" on:click={ToggleDark}
		><IconMoon class="h-7 w-7 p-0 m-0" /></button
	>
{/if}
