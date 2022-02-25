<script>
	import Navbar from '$components/Navbar/Navbar.svelte';
	import Footer from '$components/Footer.svelte';
	import '../app.css';
</script>

<div
	class="__layout min-h-screen h-full flex justify-center text-slate-50 bg-purple-900 dark:bg-stone-800"
>
	<div class="main min-w-full px-4">
		<Navbar />
		<slot />
		<Footer />
	</div>
</div>
