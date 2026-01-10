<script lang="ts">
	import { onMount } from "svelte";
    import '../app.css';

    import Header from '$lib/components/Header.svelte';
    import Footer from '$lib/components/Footer.svelte';
    import MainPageLayout from '$lib/components/MainPageLayout.svelte';
</script>

<svelte:head>
	<title>machine learning by Monke</title>
	<meta name="description" content="monke teaches you ml :3" />
</svelte:head>

<main class="h-screen flex flex-col overflow-hidden">
    <Header />
    <MainPageLayout />
    <Footer />
</main>

<style>
    @reference "tailwindcss";
</style>