<script lang="ts">
	import { onMount } from 'svelte';
	import { cursorColor } from '$lib';

	let x = $state(0);
	let y = $state(0);

	function handleMouseMove(event: MouseEvent) {
		x = event.clientX;
		y = event.clientY;
	}

	onMount(() => {
		document.addEventListener('mousemove', handleMouseMove);
		return () => document.removeEventListener('mousemove', handleMouseMove);
	});
</script>

<div class="cursor-circle" style="left: {x - 15}px; top: {y - 15}px; border-color: {$cursorColor}; box-shadow: 0 0 10px {$cursorColor};"></div>

<style>
	.cursor-circle {
		position: fixed;
		width: 30px;
		height: 30px;
		border: 3px solid;
		border-radius: 50%;
		pointer-events: none;
		z-index: 9999;
		transition: all 0.1s ease;
	}
</style>