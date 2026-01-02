<script lang="ts">
    import { fly } from "svelte/transition";
    export let className: string;
</script>
<!-- 
<h1
    class="{className} strong whitespace-nowrap text-ellipsis tracking-tighter"
    in:fly={{ y: -50, duration: 500 }}
>
    machine learning<span class="lFont {marginClassName}">by</span><span
        class="text-orange-600 underline">Monke</span
    >
</h1> -->

<div class="{className} flex flex-row justify-between">
    <h1
        class="strong whitespace-nowrap text-ellipsis tracking-tighter"
        in:fly={{ y: -50, duration: 500 }}
    >machine learning
    </h1>
    
    <span class="lFont">by</span>
    
    <h1
        class="text-orange-600 underline strong whitespace-nowrap text-ellipsis tracking-tighter"
        >Monke</h1>
</div>