<script lang="ts">
    export let level: number;
</script>

<div class="shadow-col h-fit flex flex-row justify-between items-center gap-2 p-3 min-w-1/4 max-w-1/3">
    <h1>PROGRESS</h1>
    <div class="h-4 flex-1 bg-gray-300 overflow-hidden border border-black">
        <div class="h-full bg-orange-500" style="width: {level}%;"></div>
    </div>
    <span class="text-sm font-medium">{level}%</span>
</div>

<style>
    .shadow-col {
        border: 4px solid black;
        box-shadow: black 4px 4px;
        transition: all 0.3s ease;
    }
    .shadow-col:hover {
        box-shadow: black 6px 6px;
    }
</style>