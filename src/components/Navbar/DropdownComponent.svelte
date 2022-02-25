<script lang="ts">
	export let title;
	export let url;
	export let dropdownList;
	export let isSameUrl;
	$: onSameUrlLine = isSameUrl ? 'border-white drop-shadow-lg' : 'hover:border-white/50';
</script>

<div class="group dropdown">
	<button class="navbarLink {onSameUrlLine}">{title}</button>
	<div class="hidden group-hover:block absolute min-w-fit z-10 bg-purple-900 dark:bg-stone-800">
		{#each dropdownList as linkRow}
			<a
				sveltekit:prefetch
				class="float-none p-3 font-bold mt-1 no-underline block text-left text-xl border-2 border-dashed border-purple-900 hover:text-white hover:bg-purple-900 drop-shadow-lg bg-purple-50 text-purple-900 hover:border-white dark:hover:bg-stone-800 dark:text-stone-800 dark:border-stone-800 dark:bg-white dark:hover:text-white dark:hover:border-white"
				href={`${url}/${linkRow.url}`}>{linkRow.title}</a
			>
		{/each}
	</div>
</div>
