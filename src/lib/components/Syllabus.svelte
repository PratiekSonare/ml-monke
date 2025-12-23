<script lang="ts">
    export let syllabus: any[] = [];
</script>

<div class="text-left text-sm! w-full space-y-4">
    {#each syllabus as topic}
        <div
            class="{topic.bgColor} p-6 border-l-4 {topic.borderColor} opacity-80 hover:opacity-100 transition-opacity duration-300"
        >
            <h2 class="text-sm! bFont mb-4">
                {topic.id}. {topic.title}
            </h2>
            <p class="text-sm! text-gray-600 mb-2 italic">
                {topic.subtitle}
            </p>

            <div class="space-y-2">
                {#each topic.sections as section}
                    <div class="ml-4">
                        <h3 class="text-sm! bFont mb-1">
                            {section.id}
                            {section.title}
                            {#if section.subtitle}
                                <span class="text-sm! text-gray-500"
                                    >{section.subtitle}</span
                                >
                            {/if}
                        </h3>
                        <div class="ml-6 space-y-0.5 text-sm! text-gray-700">
                            {#each section.items as item}
                                <p class="text-sm!">{item}</p>
                            {/each}
                        </div>
                    </div>
                {/each}
            </div>
        </div>
    {/each}
</div>