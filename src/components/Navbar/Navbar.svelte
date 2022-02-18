<script lang="ts">
	import { page } from '$app/stores';
	import DarkModeButton from './DarkModeButton.svelte';
	import DropdownComponent from './DropdownComponent.svelte';
	import LinkComponent from './LinkComponent.svelte';
	import LogoComponent from './LogoComponent.svelte';

	const links = [
		{ title: 'home', url: '/' },
		{
			title: 'listas',
			url: '/listas',
			dropdownList: [{ title: 'Distritos Portugal', url: 'distritosPortugal' }]
		},
		{ title: 'funções', url: '/funcoes' }
	];
</script>

<div class="p-8 flex justify-center items-center">
	<LogoComponent />
	<div class="w-full flex justify-end items-center">
		{#each links as { title, url, dropdownList }}
			{#if dropdownList}
				<DropdownComponent
					{title}
					{url}
					{dropdownList}
					isSameUrl={$page.url.pathname.includes(url)}
				/>
			{:else}
				<LinkComponent isSameUrl={$page.url.pathname === url} {title} {url} />
			{/if}
		{/each}
		<DarkModeButton />
	</div>
</div>
