<script lang="ts">
	export let title;
	export let url;
	export let dropdownList;
	export let isSameUrl;
	$: onSameUrlLine = isSameUrl ? 'border-white drop-shadow-lg' : 'hover:border-white/50';
</script>

<div class="group dropdown">
	<button class="navbarLink {onSameUrlLine}">{title}</button>
	<div class="hidden group-hover:block absolute min-w-fit z-10 ">
		{#each dropdownList as linkRow}
			<a
				sveltekit:prefetch
				class="float-none p-3 font-bold my-2 no-underline block text-left text-xl border-2 border-dashed text-white bg-purple-900 drop-shadow-lg hover:bg-white hover:text-purple-900 hover:border-purple-900 dark:bg-stone-800 dark:hover:text-stone-800 dark:hover:border-stone-800 dark:hover:bg-white"
				href={`${url}/${linkRow.url}`}>{linkRow.title}</a
			>
		{/each}
	</div>
</div>
