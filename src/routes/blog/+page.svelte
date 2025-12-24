<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';

	// Available blog sections
	const blogSections = [
		{
			id: "1.1",
			parentId: "1",
			childId: "1",
			title: "Functions",
			description: "Understanding mathematical functions, linear vs non-linear relationships, and their applications in machine learning.",
			tags: ["Mathematics", "Fundamentals", "ML Basics"],
			path: "/blog/1/1"
		}
		// Add more sections here as you create them
	];

	// Group sections by parent topic
	const groupedSections = blogSections.reduce((acc, section) => {
		const parent = section.parentId;
		if (!acc[parent]) {
			acc[parent] = {
				id: parent,
				title: getParentTitle(parent),
				sections: []
			};
		}
		acc[parent].sections.push(section);
		return acc;
	}, {} as Record<string, { id: string, title: string, sections: typeof blogSections }>);

	function getParentTitle(parentId: string): string {
		const titles: Record<string, string> = {
			"1": "Mathematical Foundations"
			// Add more parent titles as needed
		};
		return titles[parentId] || `Topic ${parentId}`;
	}
</script>

<svelte:head>
	<title>ML Monke - Blog</title>
</svelte:head>

<main class="h-screen flex flex-col overflow-hidden">
	<Header />

	<div class="flex-1 overflow-y-auto px-4">
		<div class="max-w-6xl mx-auto py-12">
			<!-- Page Header -->
			<div class="text-center mb-12">
				<h1 class="text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
					ML Monke Learning Path
				</h1>
				<p class="text-xl text-gray-400">
					A monke's journey through Machine Learning fundamentals
				</p>
				<img
					class="w-1/4 mx-auto mt-6"
					src="/src/lib/assets/div.svg"
					alt="divider"
				/>
			</div>

			<!-- Sections Grid -->
			{#each Object.values(groupedSections) as group}
				<div class="mb-16">
					<h2 class="text-3xl font-bold mb-6 text-purple-300 border-b-2 border-purple-500 pb-2">
						{group.title}
					</h2>
					
					<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
						{#each group.sections as section}
							<a 
								href={section.path}
								class="block group"
							>
								<div class="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700 hover:border-purple-500 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 hover:-translate-y-1">
									<div class="flex items-start justify-between mb-3">
										<span class="text-sm font-mono text-purple-400 bg-purple-900/30 px-3 py-1 rounded-full">
											Section {section.id}
										</span>
										<svg class="w-5 h-5 text-gray-500 group-hover:text-purple-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
										</svg>
									</div>
									
									<h3 class="text-2xl font-bold mb-3 text-white group-hover:text-purple-300 transition-colors">
										{section.title}
									</h3>
									
									<p class="text-gray-400 mb-4 line-clamp-3">
										{section.description}
									</p>
									
									<div class="flex flex-wrap gap-2">
										{#each section.tags as tag}
											<span class="text-xs px-2 py-1 bg-gray-700/50 text-gray-300 rounded">
												{tag}
											</span>
										{/each}
									</div>
								</div>
							</a>
						{/each}
					</div>
				</div>
			{/each}

			<!-- Coming Soon Section -->
			<div class="mt-16 text-center">
				<div class="inline-block bg-slate-800/30 backdrop-blur-sm rounded-lg p-8 border border-gray-700 border-dashed">
					<h3 class="text-2xl font-bold mb-3 text-gray-400">
						More Sections Coming Soon
					</h3>
					<p class="text-gray-500">
						Stay tuned for more ML fundamentals, deep learning, and advanced topics!
					</p>
				</div>
			</div>
		</div>
	</div>

	<Footer />
</main>

<style>
	.line-clamp-3 {
		display: -webkit-box;
		-webkit-line-clamp: 3;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}
</style>
