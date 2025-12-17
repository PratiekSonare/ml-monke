<script lang="ts">
    import Formula from "./dynamic/Formula.svelte";
    import Quote from "./dynamic/Quote.svelte";
    import ToRemember from "./dynamic/ToRemember.svelte";

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

		const container = document.querySelector('.main-container') as HTMLElement;
		if (!container) return;

		const newWidth = (e.clientX / container.clientWidth) * 100;
		if (newWidth > 10 && newWidth < 50) {
			sidebarWidth = newWidth;
		}
	}
</script>

<svelte:window on:mousemove={handleMouseMove} on:mouseup={handleMouseUp} />

<div class="main-container w-screen max-h-full flex flex-row overflow-x-hidden">

	<div style="width: {sidebarWidth}%" class="h-full p-3 select-none">
		sidebar content
	</div>

	<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
	<div
		class="w-1 bg-gray-500 hover:bg-gray-400 cursor-col-resize transition-colors"
		on:mousedown={handleMouseDown}
		role="separator"
		aria-label="Resize sidebar"
	></div>

	<div style="width: {100 - sidebarWidth}%" class="h-full p-3 overflow-auto flex flex-col items-center justify-center gap-1">

        <Quote 
            pText="As Albert Einstein once said," 
            quote="Life is like riding a bicycle. To keep your balance you must keep moving." 
            sText="So keep learning and growing!" 
        />

        <Formula formula="E = mc^2" />

        <ToRemember title="Big Bwain Einstein" content={["E = mc^2", "Energy equals mass times the speed of light squared", "This equation is a fundamental principle of physics."]} />
	
	</div>
</div>