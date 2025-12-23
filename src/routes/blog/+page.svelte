<script lang="ts">
	import Formula from "$lib/components/dynamic/Formula.svelte";
	import Quote from "$lib/components/dynamic/Quote.svelte";
	import ToRemember from "$lib/components/dynamic/ToRemember.svelte";
	import ContentCard from "$lib/components/dynamic/ContentCard.svelte";
	import beforelearning from "$lib/assets/before_learning.svg";
	import afterlearning from "$lib/assets/after_learning.svg";
	import whilelearning from "$lib/assets/while_learning.svg";
	import learnermonke from "$lib/assets/learner_monke.svg";

	import meme from "$lib/assets/neuron-activation-meme.svg";
	import monke1Html from "$lib/content/sidebar/monke-1.html?raw";
	import ml1Html from "$lib/content/sidebar/ml-1.html?raw";
	import ai_slop from "$lib/content/sidebar/ai-slop.html?raw";

	import { onMount } from "svelte";
	import MasterContentCard from "$lib/components/dynamic/MasterContentCard.svelte";
	import Syllabus from "$lib/components/Syllabus.svelte";
    import BlogContentCard from "$lib/components/dynamic/BlogContentCard.svelte";

	const images = [beforelearning, whilelearning, afterlearning, learnermonke];

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
		}
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
		const track = document.querySelector(".carousel-track") as HTMLElement;
		if (!track) return;

		const halfWidth = track.scrollWidth / 2;
		track.style.setProperty("--track-width", `${halfWidth}px`);

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

	const content1 = [
		{
			content:
				'We\'ll discuss the <span class="text-3xl bFont">logic</span>, intuition and the <span class="text-3xl bFont">mathematics</span> behind each step of machine learning paradigms to properly understand each and every concept.',
		},
		{
			content:
				'Usual ML courses are full of unnecessary jargon. Let us get <span class="text-3xl bFont">rid</span> of that.',
			note: "researches after writing 200+ words of nothing",
		},
		{
			content:
				'Blogs? Too much text, more procrastination.<br/>Videos? I zone out easily.<br/>Hence, trying to make learning more <span class="text-3xl bFont">visually appealing!</span>',
		},
		{
			content: "Monke loves memes. Try learning with memes :3",
			note: "i'm not serious 90% of the time, but learning is serious business!",
			image: "https://media4.giphy.com/media/v1.Y2lkPTZjMDliOTUycWx0MDZmdmVjcXJwcDduZHJ5ajd0ZDE4NmI2dXE2NWNqdWF1ODltMiZlcD12MV92aWRlb3Nfc2VhcmNoJmN0PXY/tdDByjqJsARvQvCPqq/giphy_s.gif",
			imageAlt: "monke memes",
			imageClass: "w-64",
		},
		{
			content:
				"Following a 2-page approach! <br/> Absorb more content with less scrolling.",
		},
		{
			content:
				"Important points highlighted using special tabs for your tiny brain to comprehend.",
		},
	];
</script>
<svelte:window on:mousemove={handleMouseMove} on:mouseup={handleMouseUp} />

<div class="flex-1 w-screen flex flex-row overflow-hidden">
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
		class="overflow-y-auto overflow-x-hidden flex flex-col gap-15 items-center py-4"
	>

		<div class="flex flex-col gap-5 justify-center items-center">
			<h1 class="text-4xl">Concept</h1>
			<BlogContentCard count={1} title="Temp Topic" items={content1} className="w-full" />
		</div>
	</div>
</div>

<style>
	.carousel-container {
		width: 100%;
	}

	.carousel-track {
		display: flex;
		gap: 1rem;
		width: max-content;
		animation: scroll 50s linear infinite;
		will-change: transform;
	}

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
