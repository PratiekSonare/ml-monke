<script lang="ts">
    import ContentCard from "./ContentCard.svelte";
    import Counter from "./Counter.svelte";
    export let n: number = 1;
    export let leftContent: any[] = [];
    export let rightContent: any[] = [];
</script>

<div class="flex flex-col gap-0 items-center">
    <div class="flex flex-row items-center gap-0">
        {#each Array(n) as _, i}
            <Counter count={i + 1} />
            {#if i < n - 1}
                <div class="h-1 w-5 bg-black"></div>
            {/if}
        {/each}
    </div>
    
    <div class="flex flex-row justify-between items-start gap-5 w-full px-4">
        <ContentCard count={1} title="The idea:" items={leftContent} className="flex-1" />
        <!-- <div class="h-1/2 w-px bg-gray-400 my-auto"></div> -->
        <ContentCard count={2} title="I follow:" items={rightContent} className="flex-1" />
    </div>
</div>
