<script lang="ts">
	import { onMount } from "svelte";
	import Counter from "./Counter.svelte";

	export let count: number = 1;
	export let title: string = "";

	interface AnimationItem {
		content: any;
		image?: string;
		imageAlt?: string;
		imageClass?: string;
		note?: string;
	}

	export let items: AnimationItem[] = [];
	export let className: string = "";

	let duration = "10s";
	let isPlaying = false;
	let currentIndex = -1;
	let containerEl: HTMLElement;
	let itemEls: HTMLElement[] = [];
	let shouldStop = false;
	let isFocused = false;

	function handleKeydown(event: KeyboardEvent) {
		if (event.ctrlKey && event.key === 'Enter' && isFocused) {
			event.preventDefault();
			// Manual step-through mode
			nextCell();
		}
	}

	function nextCell() {
		// Stop any running animation
		if (isPlaying) {
			resetAnimation();
		}
		
		// Move to next cell
		currentIndex = (currentIndex + 1) % items.length;
		
		// Scroll to the current item
		if (itemEls[currentIndex]) {
			itemEls[currentIndex].scrollIntoView({
				behavior: "smooth",
				block: "center",
			});
		}
	}

	onMount(() => {
		window.addEventListener('keydown', handleKeydown);
		return () => {
			window.removeEventListener('keydown', handleKeydown);
		};
	});

	async function playAnimation() {
		if (isPlaying) return;
		isPlaying = true;
		shouldStop = false;

		for (let i = 0; i < items.length; i++) {
			// Check if we should stop the animation
			if (shouldStop) break;

			currentIndex = i;

			// Scroll to the current item
			if (itemEls[i]) {
				itemEls[i].scrollIntoView({
					behavior: "smooth",
					block: "center",
				});

				// Animate background
				itemEls[i].style.transition = `background-position ${duration} ease-in-out`;
				itemEls[i].style.backgroundPosition = "left center";
			}

			// Wait before moving to next
			await new Promise((resolve) => setTimeout(resolve, Number(duration.replace("s", "")) * 1000));
		}

		// If animation completed normally (not stopped), reset everything
		if (!shouldStop) {
			resetAnimation();
		} else {
			isPlaying = false;
		}
	}

	function resetAnimation() {
		shouldStop = true;
		isPlaying = false;
		currentIndex = -1;
		itemEls.forEach((el) => {
			if (el) {
				el.style.transition = "";
				el.style.backgroundPosition = "";
			}
		});
	}
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<div 
	class="flex flex-col gap-15 {className}"
	on:mouseenter={() => isFocused = true}
	on:mouseleave={() => isFocused = false}
	tabindex="-1"
>
	<div class="flex flex-row items-center justify-center gap-3 {isPlaying ? 'sticky top-0 z-10 bg-transparent py-2' : ''}">
		<Counter {count} />
		<div class="flex items-center gap-2 text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded border border-gray-300 {isFocused ? 'opacity-100' : 'opacity-30'}">
			<kbd class="font-mono font-semibold">Ctrl</kbd>
			<span>+</span>
			<kbd class="font-mono font-semibold">Enter</kbd>
		</div>
		<button
			on:click={isPlaying ? resetAnimation : playAnimation}
			class="scale-75 play-button rounded-full border-4 border-blue-500 w-10 h-10 flex items-center justify-center cursor-pointer hover:bg-gray-100 active:scale-95 transition-all duration-300"
			aria-label={isPlaying ? "Stop animation" : "Play animation"}
		>
			{#if isPlaying}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="w-5 h-5"
					viewBox="0 0 24 24"
					fill="#3b82f6"
				>
					<rect x="6" y="4" width="4" height="16" />
					<rect x="14" y="4" width="4" height="16" />
				</svg>
			{:else}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="w-5 h-5 ml-0.5"
					viewBox="0 0 24 24"
					fill="#3b82f6"
				>
					<polygon points="5,3 19,12 5,21" />
				</svg>
			{/if}
		</button>
	</div>

	<div bind:this={containerEl} class="text-center px-3 w-full">
		{#if title}
			<div class="text-3xl bFont">{title}</div>
		{/if}
		<div class="self-center text-lg">
			{#each items as item, i}
				<div
					bind:this={itemEls[i]}
					class="animated-item"
					class:active={currentIndex === i}
					class:manual-active={currentIndex === i && !isPlaying}
					class:mt-5={i === 0}
					class:mb-5={i === items.length - 1}
				>
					<slot name="item" {item} index={i}>
						{@html item.content}
					</slot>
					{#if item.note}
						<br />
						<span class="italic text-sm">{item.note}</span>
					{/if}
					{#if item.image}
						<img
							class="mx-auto img-border mt-3 {item.imageClass ||
								''}"
							alt={item.imageAlt || ""}
							src={item.image}
						/>
					{/if}
				</div>
				{#if i < items.length - 1}
					<div class="rounded-full w-8 h-1 bg-gray-300 mx-auto my-5"></div>
				{/if}
			{/each}
		</div>
	</div>
</div>
<style>
	.animated-item {
		opacity: 100%;
		transition: border 0.3s ease-in-out;
		background: linear-gradient(to left, rgba(59, 130, 246, 0.05) 50%, rgba(59, 130, 246, 0.1) 50%);
		background-size: 200% 100%;
		background-position: right center;
		padding: 1rem;
		border: 2px solid transparent;
	}

	.animated-item.manual-active {
		border: 2px solid #1e40af;
	}

	.play-button:hover {
		background-color: rgba(0, 0, 0, 0.05);
	}
</style>