<script lang="ts">
	import { onMount } from 'svelte';
	import { marked } from 'marked';
	import DOMPurify from 'dompurify';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	let renderedHtml = '';

	// Configure marked for better rendering
	marked.setOptions({
		breaks: true,
		gfm: true
	});

	onMount(() => {
		// Parse markdown to HTML
		const rawHtml = marked.parse(data.markdown) as string;
		// Sanitize the HTML to prevent XSS
		renderedHtml = DOMPurify.sanitize(rawHtml);
	});
</script>

<svelte:head>
	<title>Alt Blog - {data.section}</title>
</svelte:head>

<main class="min-h-screen flex flex-col" style="background: linear-gradient(to bottom right, #0f172a, #581c87, #0f172a);">
	<Header />
	
	<div class="flex-1 container mx-auto px-4 py-8 max-w-4xl">
		<article class="markdown-content bg-slate-800/50 backdrop-blur-sm rounded-lg p-8 shadow-2xl border border-purple-500/30">
			{@html renderedHtml}
		</article>
	</div>

	<Footer />
</main>

<style>
	/* Markdown Content Styling */
	:global(.markdown-content) {
		color: #e2e8f0;
		line-height: 1.8;
	}

	/* Headings */
	:global(.markdown-content h1) {
		font-size: 2.5rem;
		font-weight: 800;
		color: #a78bfa;
		margin-bottom: 1.5rem;
		margin-top: 2rem;
		border-bottom: 3px solid #7c3aed;
		padding-bottom: 0.5rem;
	}

	:global(.markdown-content h2) {
		font-size: 2rem;
		font-weight: 700;
		color: #c4b5fd;
		margin-bottom: 1.25rem;
		margin-top: 2rem;
		border-bottom: 2px solid #8b5cf6;
		padding-bottom: 0.4rem;
	}

	:global(.markdown-content h3) {
		font-size: 1.5rem;
		font-weight: 600;
		color: #ddd6fe;
		margin-bottom: 1rem;
		margin-top: 1.5rem;
	}

	/* Paragraphs */
	:global(.markdown-content p) {
		margin-bottom: 1.25rem;
		color: #cbd5e1;
		font-size: 1.05rem;
	}

	/* Lists */
	:global(.markdown-content ul) {
		margin-bottom: 1.5rem;
		margin-left: 1.5rem;
		list-style-type: disc;
		color: #cbd5e1;
	}

	:global(.markdown-content ul ul) {
		margin-top: 0.5rem;
		margin-bottom: 0.5rem;
		list-style-type: circle;
	}

	:global(.markdown-content li) {
		margin-bottom: 0.75rem;
		padding-left: 0.5rem;
	}

	:global(.markdown-content li::marker) {
		color: #a78bfa;
	}

	/* Code blocks */
	:global(.markdown-content code) {
		background-color: #1e293b;
		color: #f472b6;
		padding: 0.2rem 0.5rem;
		border-radius: 0.25rem;
		font-family: 'Courier New', monospace;
		font-size: 0.95em;
		border: 1px solid #334155;
	}

	:global(.markdown-content pre) {
		background-color: #0f172a;
		padding: 1.5rem;
		border-radius: 0.5rem;
		overflow-x: auto;
		margin-bottom: 1.5rem;
		border: 1px solid #334155;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
	}

	:global(.markdown-content pre code) {
		background-color: transparent;
		padding: 0;
		border: none;
		color: #e2e8f0;
	}

	/* Blockquotes */
	:global(.markdown-content blockquote) {
		border-left: 4px solid #a78bfa;
		padding-left: 1.5rem;
		margin: 1.5rem 0;
		font-style: italic;
		color: #cbd5e1;
		background-color: #1e293b;
		padding: 1rem 1.5rem;
		border-radius: 0.25rem;
	}

	/* Strong/Bold */
	:global(.markdown-content strong) {
		color: #fbbf24;
		font-weight: 700;
	}

	/* Emphasis/Italic */
	:global(.markdown-content em) {
		color: #a78bfa;
	}

	/* Links */
	:global(.markdown-content a) {
		color: #60a5fa;
		text-decoration: underline;
		transition: color 0.2s;
	}

	:global(.markdown-content a:hover) {
		color: #93c5fd;
	}

	/* Horizontal Rules */
	:global(.markdown-content hr) {
		border: none;
		border-top: 2px solid #7c3aed;
		margin: 2rem 0;
	}

	/* Tables (if needed) */
	:global(.markdown-content table) {
		width: 100%;
		border-collapse: collapse;
		margin: 1.5rem 0;
	}

	:global(.markdown-content th) {
		background-color: #7c3aed;
		color: white;
		padding: 0.75rem;
		text-align: left;
		font-weight: 600;
	}

	:global(.markdown-content td) {
		padding: 0.75rem;
		border: 1px solid #475569;
	}

	:global(.markdown-content tr:nth-child(even)) {
		background-color: #1e293b;
	}

	/* Special styling can be added with class names if needed */
</style>
