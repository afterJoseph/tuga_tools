<script>
	export let isSameUrl;
	export let url;
	export let title;
	let onSameUrlLine = isSameUrl ? '' : 'hover:border-white/50';
</script>

<a
	class="p-0 m-0 ml-4 text-2xl no-underline text-white border-b-4 border-transparent {onSameUrlLine} ease-in duration-150"
	class:border-white={isSameUrl}
	href={url}>{title}</a
>
