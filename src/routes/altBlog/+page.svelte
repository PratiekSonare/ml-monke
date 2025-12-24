<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';

	const sections = [
		{
			id: '1.1',
			title: 'Functions',
			description: 'Introduction to mathematical functions, linear vs non-linear relationships',
			path: '/altBlog/1.1'
		}
		// Add more sections here as you create them
	];
</script>

<svelte:head>
	<title>Alt Blog - Markdown Styled</title>
</svelte:head>

<main class="min-h-screen flex flex-col" style="background: linear-gradient(to bottom right, #0f172a, #581c87, #0f172a);">
	<Header />
	
	<div class="flex-1 container mx-auto px-4 py-8 max-w-4xl">
		<h1 class="text-4xl font-bold text-purple-300 mb-4">Alternative Blog</h1>
		<p class="text-slate-300 mb-8 text-lg">Markdown-based content with beautiful styling</p>
		
		<div class="grid gap-6">
			{#each sections as section}
				<a 
					href={section.path}
					class="block bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 shadow-lg border border-purple-500/30 hover:border-purple-400/60 transition-all hover:shadow-xl hover:scale-105"
				>
					<h2 class="text-2xl font-bold text-purple-300 mb-2">
						Section {section.id}: {section.title}
					</h2>
					<p class="text-slate-400">
						{section.description}
					</p>
				</a>
			{/each}
		</div>
	</div>

	<Footer />
</main>

<style>
	/* Additional styling if needed */
</style>
