<script lang="ts">
	import { page } from '$app/stores';
	import DarkModeButton from './DarkModeButton.svelte';
	import DropdownComponent from './DropdownComponent.svelte';
	import LinkComponent from './LinkComponent.svelte';
	import LogoComponent from './LogoComponent.svelte';

	const links: { title: string; url: string; dropdownList?: { title: string; url: string }[] }[] = [
		{ title: 'home', url: '/' },
		{
			title: 'listas',
			url: '/listas',
			dropdownList: [
				{ title: 'Concelhos_Portugal', url: 'concelhosportugal' },
				{ title: 'Distritos_Portugal', url: 'distritosportugal' },
				{ title: 'Freguesias_Portugal', url: 'freguesiasportugal' },
				{ title: 'Distritos_Concelhos_Freguesias', url: 'distritosconcelhosfreguesias' }
			]
		},
		{
			title: 'funções',
			url: '/funcoes',
			dropdownList: [{ title: 'Validar NIF', url: 'validarnif' }]
		},
		{ title: 'tools', url: '/tools' }
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
