<script>
	export let isSameUrl;
	export let url;
	export let title;
	$: onSameUrlLine = isSameUrl ? 'border-white drop-shadow-lg' : 'hover:border-white/50';
</script>

<a class="navbarLink {onSameUrlLine}" href={url}>{title}</a>
