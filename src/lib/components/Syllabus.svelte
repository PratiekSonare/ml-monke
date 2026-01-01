<script lang="ts">
    export let syllabus: any[] = [];

    function navigateToSection(sectionId: string) {
        const parts = sectionId.split('.');
        if (parts.length === 2) {
            const [parentId, childId] = parts;
            window.location.href = `/blog/${parentId}/${childId}`;
        }
    }

    function navigateToItem(itemId: string) {
        const parts = itemId.split('.');
        if (parts.length === 3) {
            const [parentId, childId, subId] = parts;
            window.location.href = `/blog/${parentId}/${childId}#${itemId}`;
        }
    }
</script>

<div class="text-left  w-full space-y-4">
    {#each syllabus as topic}
        <div
            class="{topic.bgColor} p-6 border-l-4 {topic.borderColor} opacity-80 hover:opacity-100 transition-opacity duration-300"
        >
            <h2 class="font-bold mb-0">
                {topic.id}. {topic.title}
            </h2>
            <p class=" text-gray-600 mb-4 text-xs italic">
                {topic.subtitle}
            </p>

            <div class="space-y-2">
                {#each topic.sections as section}
                    <div class="ml-4">
                        <button
                            class="font-bold mb-1 cursor-pointer hover:text-blue-600 transition-colors text-left w-full bg-transparent border-none p-0"
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
                        <div class="ml-6 space-y-0.5  text-gray-700">
                            {#each section.items as item}
                                {#if item.id && item.topic}
                                    <button
                                        class="text-left w-full bg-transparent border-none p-0 cursor-pointer hover:text-blue-500 transition-colors hover:underline"
                                        on:click={() => navigateToItem(item.id)}
                                    >
                                        {item.id} {item.topic}
                                    </button>
                                {:else}
                                    <p class="">{item}</p>
                                {/if}
                            {/each}
                        </div>
                    </div>
                {/each}
            </div>
        </div>
    {/each}
</div>