<script lang="ts">
    import { onMount } from "svelte";
    import { slide } from "svelte/transition";
    import { cursorColor } from "$lib";

    export let syllabus: any[] = [];

    let cardOpen: boolean[] = syllabus.map(() => false);

    let pointerPositions: { [key: number]: number } = {};
    let showPointer: number = -1;

    let clickX = 0;
    let clickY = 0;
    let showAnimation = false;
    let animationColor = "";
    let windowWidth = 0;
    let windowHeight = 0;

    onMount(() => {
        windowWidth = window.innerWidth;
        windowHeight = window.innerHeight;
    });

    function navigateToSection(sectionId: string) {
        const parts = sectionId.split(".");
        if (parts.length === 2) {
            const [parentId, childId] = parts;
            window.open(`/blog/${parentId}/${childId}`, '_blank');
        }
    }

    function navigateToItem(itemId: string) {
        const parts = itemId.split(".");
        if (parts.length === 3) {
            const [parentId, childId, subId] = parts;
            window.open(`/blog/${parentId}/${childId}#${itemId}`, '_blank');
        }
    }
</script>

<div class="text-left w-full mx-1">
    {#each syllabus as topic, i}
        <!-- svelte-ignore a11y_no_static_element_interactions -->
        <div   
            on:mouseenter={() => { cardOpen[i] = true; cardOpen = [...cardOpen]; cursorColor.set(`${topic.shadowColor}`); }}
            class="w-full bg-white {topic.borderColor} shadow-col border transition-opacity duration-300 relative overflow-hidden"
            style="--shadow-color: {topic.shadowColor}; --content-color: {topic.contentColor};"
        >
            <div class="p-6">
                <span class="text-2xl font-bold mb-0 {topic.titleColor}">
                    {topic.id}. {topic.title}
                </span>

                <p class=" text-gray-600 text-xs italic">
                    {topic.subtitle}
                </p>
            </div>

            <div class="h-1 w-full {topic.bgColor}"></div>
            
            {#if cardOpen[i]}
            <div class="{topic.contentColor} p-3" transition:slide={{ duration: 300 }}>
                {#each topic.sections as section}
                    <div
                        class="ml-4 mb-3"
                    >
                        <button
                            class="text-lg font-bold mb-1 underline underline-offset-2 {topic.titleColor} cursor-pointer transition-colors text-left w-full bg-transparent border-none p-0"
                            on:click={() => navigateToSection(section.id)}
                        >
                            {section.id}
                            {section.title}
                            {#if section.subtitle}
                                <span class=" text-gray-500"
                                    >{section.subtitle}</span
                                >
                            {/if}
                        </button>
                        <div class="ml-6 space-y-0.5 text-gray-700">
                            {#each section.items as item}
                                {#if item.id && item.topic}
                                    <button
                                        class="text-sm text-left w-full bg-transparent border-none p-0 cursor-pointer hover:{topic.titleColor} transition-colors hover:underline"
                                        on:click={() => navigateToItem(item.id)}
                                    >
                                        {item.id}
                                        {item.topic}
                                    </button>
                                {:else}
                                    <p class="">{item}</p>
                                {/if}
                            {/each}
                        </div>
                    </div>
                {/each}
            </div>
            {/if}
        </div>
    {/each}
</div>

<style>
    .shadow-col {
        border: 4px solid var(--shadow-color);
        box-shadow: var(--shadow-color) 4px 4px;
        transition: all 0.3s ease;
    }
    .shadow-col:hover {
        box-shadow: var(--shadow-color) 6px 6px;
    }

    .animation-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        z-index: 9999;
        transition: clip-path 1s ease-out;
    }

    ::selection {
        background-color: var(--content-color);
    }
</style>
