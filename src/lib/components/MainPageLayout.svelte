<script lang="ts">
	import Formula from "./dynamic/Formula.svelte";
	import Quote from "./dynamic/Quote.svelte";
	import ToRemember from "./dynamic/ToRemember.svelte";
	import ContentCard from "./dynamic/ContentCard.svelte";
	import beforelearning from "$lib/assets/before_learning.svg";
	import afterlearning from "$lib/assets/after_learning.svg";
	import whilelearning from "$lib/assets/while_learning.svg";
	import learnermonke from "$lib/assets/learner_monke.svg";

	import meme from "$lib/assets/neuron-activation-meme.svg";
	import monke1Html from "../content/sidebar/monke-1.html?raw";
	import ml1Html from "../content/sidebar/ml-1.html?raw";
	import ai_slop from "../content/sidebar/ai-slop.html?raw";

	import { onMount } from "svelte";
	import MasterContentCard from "./dynamic/MasterContentCard.svelte";
	import Syllabus from "./Syllabus.svelte";
	import { fly } from "svelte/transition";
	import { syllabus_1 } from "../data/syllabus1";
	import { syllabus_2 } from "../data/syllabus2";
	import { syllabus_3 } from "../data/syllabus3";
	import { syllabus_4 } from "../data/syllabus4";
    import ContextPanel from "./dynamic/ContextPanel.svelte";
    import Title from "./dynamic/Title.svelte";
    import OpeningCard from "./dynamic/OpeningCard.svelte";

	const images = [beforelearning, whilelearning, afterlearning, learnermonke];

	let sidebarWidth = 20;
	let isResizing = false;
	let showTitle = false;

	onMount(() => {
		showTitle = true;
	});

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

	let hoveredBg = "";

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
				'We\'ll discuss the <span class="imp-text">logic</span>, intuition and the <span class="imp-text">mathematics</span> behind each step of machine learning paradigms to properly understand each and every concept.',
		},
		{
			content:
				'Usual ML courses are full of unnecessary jargon. Let us get <span class="imp-text">rid</span> of that.',
			note: "researches after writing 200+ words of nothing",
		},
		{
			content:
				'Blogs? Too much text, more procrastination.<br/>Videos? I zone out easily.<br/>Hence, trying to make learning more <span class="imp-text">visually appealing!</span>',
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

	const content2 = [
		{
			content:
				'◦ less words, more learning. THIS IS <span class="imp-text">NOT</span> AN ACADEMIC TEXTBOOK.',
			note: "[note: no academic paper has dancing monke gifs.]",
			image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTER0tuZtB_opN6Lr9DxgL_lQbVUd8mX3381A&s",
			imageAlt: "few words",
		},
		{
			content:
				'◦ i <span class="imp-text">hate</span> <span id="ai-slop" class="monkeText">AI slop</span>. everything is written using this Monke brain.',
			image: "https://i.pinimg.com/736x/68/07/b0/6807b07a68d7aa045e2bfeebedee7d7d.jpg",
			imageAlt: "big bwain",
			imageClass: "w-64",
		},
		{
			content: "◦ learn first, apply later.",
			note: "No BS about learning quick! Learning never quick, must be as slow as possible to understand everything. learn at your own pace.",
		},
		{
			content: "◦ monke looks at graphs & images, monke understands.",
			note: "[monke is a visual learner.]",
			image: meme,
			imageAlt: "big bwain",
			imageClass: "w-80",
		},
		{
			content:
				'◦ learning must be fun. <span class="imp-text">have fun</span>, hoo hoo hoo! :3',
			note: "don't shy away from exploring the additional resources provided by me - the most learned monke.",
		},
	];
	
</script>

<svelte:window on:mousemove={handleMouseMove} on:mouseup={handleMouseUp} />

<div class="flex-1 w-screen flex flex-row overflow-hidden">
	<div
		style="width: {sidebarWidth}%"
		class="h-full p-3 select-none overflow-y-auto"
	>

		<!-- ContextPanel -->
		<ContextPanel />
<!-- 		
		{#if activeSidebarContent}
			{@html activeSidebarContent}
		{:else}
			<p class="text-gray-500">
				Click on highlighted text to see content here
			</p>
		{/if} -->
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
		class="overflow-y-auto overflow-x-hidden flex flex-col gap-2 items-center py-4"
	>	

		<div class="relative w-full"><OpeningCard /></div>

		<div
			id="two"
			class="flex flex-col gap-0 justify-center items-center w-full px-8 mt-15 relative"
		>
			<!-- <div 
				style="width: {(100 - sidebarWidth)/3}%"
				class="absolute ml-8 top-0 left-0 h-full -z-10 bg-blue-400 opacity-50 transition-all duration-300">
			</div> -->

			<h1 class="relative text-4xl z-100 self-start">What you'll learn...</h1>

			<div class="flex w-full flex-row gap-2 transition-all duration-300 relative z-10 my-5">
				<Syllabus syllabus={syllabus_1} on:mouseenter={() => hoveredBg = syllabus_1[0]?.bgColor || ''} on:mouseleave={() => hoveredBg = ''} />
				<Syllabus syllabus={syllabus_2} on:mouseenter={() => hoveredBg = syllabus_2[0]?.bgColor || ''} on:mouseleave={() => hoveredBg = ''} />
				<Syllabus syllabus={syllabus_3} on:mouseenter={() => hoveredBg = syllabus_3[0]?.bgColor || ''} on:mouseleave={() => hoveredBg = ''} />
				<Syllabus syllabus={syllabus_4} on:mouseenter={() => hoveredBg = syllabus_4[0]?.bgColor || ''} on:mouseleave={() => hoveredBg = ''} />
			</div>
		</div>

		<h1 class="relative text-4xl z-100">And, uhh... memes?</h1>

		<img
			class="mx-auto w-1/4 z-100"
			src="/src/lib/assets/div.svg"
			alt="divider"
		/>

		<!-- svelte-ignore a11y_no_static_element_interactions -->
		<div id="carousel" class="carousel-container w-full">
			<div class="carousel-track" style="animation-play-state: running">
				{#each [...images, ...images] as img}
					<img class="carousel-img-class" src={img} alt="carousel" />
				{/each}
			</div>
		</div>

		<div class="flex flex-col gap-0 justify-center items-center mt-15">
			<h1 class="relative text-4xl z-100">Concept</h1>
			<img
				class="mx-auto w-1/4 z-100"
				src="/src/lib/assets/div.svg"
				alt="divider"
			/>
			<div class="mb-5"></div>
			<MasterContentCard
				n={2}
				leftContent={content1}
				rightContent={content2}
			/>
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
