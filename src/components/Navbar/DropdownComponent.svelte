<script lang="ts">
	export let title;
	export let url;
	export let dropdownList;
	export let isSameUrl;
	let onSameUrlLine = isSameUrl ? '' : 'hover:border-white/50';
</script>

<div class="group dropdown">
	<button
		class="p-0 m-0 ml-4 text-2xl no-underline text-white border-b-4 border-transparent {onSameUrlLine} ease-in duration-150"
		class:border-white={isSameUrl}>{title}</button
	>
	<div
		class="hidden group-hover:block absolute border min-w-fit z-10 hover:bg-white text-white hover:text-purple-900"
	>
		{#each dropdownList as linkRow}
			<a class="float-none p-4 no-underline block text-left" href={`${url}/${linkRow.url}`}
				>{linkRow.title}</a
			>
		{/each}
	</div>
</div>
