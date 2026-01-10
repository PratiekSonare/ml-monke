<script lang="ts">
	import favicon from '$lib/assets/monke.ico';
	import '../app.css';
	import CursorCircle from '$lib/components/CursorCircle.svelte';
	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<!-- <CursorCircle /> -->

{@render children()}
