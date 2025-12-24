<script lang="ts">
	import Formula from "$lib/components/dynamic/Formula.svelte";
	import Quote from "$lib/components/dynamic/Quote.svelte";
	import ToRemember from "$lib/components/dynamic/ToRemember.svelte";
	import BlogContentCard from "$lib/components/dynamic/BlogContentCard.svelte";
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';

	import monke1Html from "$lib/content/sidebar/monke-1.html?raw";
	import ml1Html from "$lib/content/sidebar/ml-1.html?raw";
	import ai_slop from "$lib/content/sidebar/ai-slop.html?raw";

	import { onMount } from "svelte";
	import type { PageData } from './$types';

	export let data: PageData;

	let sidebarWidth = 20;
	let isResizing = false;

	function handleMouseDown() {
		isResizing = true;
	}

	function handleMouseUp() {
		isResizing = false;
	}

	function handleMouseMove(e: MouseEvent) {
		if (!isResizing) return;

		const newWidth = (e.clientX / window.innerWidth) * 100;
		if (newWidth > 10 && newWidth < 50) {
			sidebarWidth = newWidth;
		}
	}

	const link = [
		{
			id: "monke-1",
			content: monke1Html,
		},
		{
			id: "ml-1",
			content: ml1Html,
		},
		{
			id: "ai-slop",
			content: ai_slop,
		},
	];

	let activeSidebarContent = "";

	function handleSpanClick(event: MouseEvent) {
		const target = event.target as HTMLElement;
		const clickedId = target.id;

		const matchedLink = link.find((item) => item.id === clickedId);
		if (matchedLink && matchedLink.content) {
			activeSidebarContent = matchedLink.content;
		}
	}

	onMount(() => {
		// Add click listeners to all spans with IDs from the link array
		link.forEach((item) => {
			const element = document.getElementById(item.id);
			if (element) {
				element.addEventListener("click", handleSpanClick);
				element.style.cursor = "pointer";
			}
		});

		return () => {
			// Cleanup listeners
			link.forEach((item) => {
				const element = document.getElementById(item.id);
				if (element) {
					element.removeEventListener("click", handleSpanClick);
				}
			});
		};
	});

	onMount(() => {
		if (
			!document.querySelector('script[src="https://tenor.com/embed.js"]')
		) {
			const script = document.createElement("script");
			script.src = "https://tenor.com/embed.js";
			script.async = true;
			document.body.appendChild(script);
		}
	});
</script>

<svelte:window on:mousemove={handleMouseMove} on:mouseup={handleMouseUp} />

<main class="h-screen flex flex-col overflow-hidden">
	<Header />

	<div class="flex-1 flex flex-row overflow-hidden">
		<div
			style="width: {sidebarWidth}%"
			class="h-full p-3 select-none overflow-y-auto"
		>
			{#if activeSidebarContent}
				{@html activeSidebarContent}
			{:else}
				<p class="text-gray-500">
					Click on highlighted text to see content here
				</p>
			{/if}
		</div>

		<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
		<div
			class="w-1 bg-gray-500 hover:bg-gray-400 cursor-col-resize transition-colors"
			on:mousedown={handleMouseDown}
			role="separator"
			aria-label="Resize sidebar"
		></div>

		<div
			id="main-content"
			style="width: {100 - sidebarWidth}%"
			class="overflow-y-auto overflow-x-hidden flex flex-col gap-15 items-center px-4"
		>
			<div class="flex flex-col w-full gap-5 justify-center items-center my-5">
				<h1 class="text-4xl">{data.parentTitle}</h1>
				<img
					class="w-1/4"
					src="/src/lib/assets/div.svg"
					alt="divider"
				/>
				
				{#each data.sections as section}
					<BlogContentCard
						count={section.id}
						sectionTitle={section.title}
						items={section.sectionContent}
						className="w-full"
					>
						<svelte:fragment slot="item" let:item let:index>
							{#if item.type === "formula" && item.formula}
								<Formula formula={item.formula} />
								{#if item.content}
									<br />
									{@html item.content}
								{/if}
							{:else if item.type === "quote" && item.quote && item.pText && item.sText}
								<Quote
									quote={item.quote}
									pText={item.pText}
									sText={item.sText}
								/>
							{:else if item.type === "toremember" && item.content}
								<ToRemember title="To Remember" content={item.content} />
							{:else if item.content}
								{@html item.content}
							{/if}
						</svelte:fragment>
					</BlogContentCard>
				{/each}
			</div>
		</div>
	</div>

	<Footer />
</main>

<style>
	@keyframes scroll {
		from {
			transform: translateX(0);
		}
		to {
			transform: translateX(calc(-1 * var(--track-width)));
		}
	}

	:global(.carousel-img-class) {
		width: 300px;
		height: 300px;
		flex-shrink: 0;
		object-fit: cover;
	}
</style>
