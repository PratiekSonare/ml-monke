<script lang="ts">
    import monke from "$lib/assets/monke.svg";
    import thinkingMonke from "$lib/assets/thinking_monke.svg";
    import thinkingMonke2 from "$lib/assets/thinking_monke_2.svg";

    let isHovered = false;
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<div
    class="relative top-0 h-fit p-3 border-b-4 border-black flex flex-row justify-between items-center"
    on:mouseenter={() => (isHovered = true)}
    on:mouseleave={() => (isHovered = false)}
>
    {#if !isHovered}
        <img
            src={thinkingMonke}
            alt="monke logo"
            class="w-24 h-24 absolute -bottom-6"
        />
    {:else}
        <img
            src={thinkingMonke2}
            alt="monke logo"
            class="w-24 h-24 absolute -bottom-6 left-4"
        />
    {/if}
    <div class="flex flex-row items-center justify-center pl-24">
        <div class="flex flex-col">
            <h1 class="text-2xl">
                machine learning<span class="lFont mx-2">by</span><span class="text-orange-600 underline">Monke</span>
            </h1>
            <p class="text-sm">
                monke will teach you <span class="italic underline"
                    >machine learning</span
                >, hoo hoo hoo :3
            </p>
        </div>
    </div>

    <div class="flex flex-row gap-2 text-xs">
        <button
            class="text-xs min-w-18 p-2 py-2 bg-purple-500 shadow-col text-white hover:text-black"
        >
            about
        </button>

        <button
            class="text-xs min-w-18 p-2 bg-pink-500 shadow-col text-white hover:text-black"
        >
            syllabus
        </button>

        <button
            class="text-xs min-w-18 p-2 bg-orange-500 shadow-col text-white hover:text-black"
        >
            resources
        </button>

        <button
            class="text-xs min-w-18 p-2 bg-green-500 shadow-col text-white hover:text-black"
        >
            contest
        </button>

        <div
            class="flex flex-row items-center justify-start py-1 gap-1 bg-blue-500 shadow-col text-white"
        >
            <svg
                class="ml-2 mb-px w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                ><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                ></g><g id="SVGRepo_iconCarrier">
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M17.0392 15.6244C18.2714 14.084 19.0082 12.1301 19.0082 10.0041C19.0082 5.03127 14.9769 1 10.0041 1C5.03127 1 1 5.03127 1 10.0041C1 14.9769 5.03127 19.0082 10.0041 19.0082C12.1301 19.0082 14.084 18.2714 15.6244 17.0392L21.2921 22.707C21.6828 23.0977 22.3163 23.0977 22.707 22.707C23.0977 22.3163 23.0977 21.6828 22.707 21.2921L17.0392 15.6244ZM10.0041 17.0173C6.1308 17.0173 2.99087 13.8774 2.99087 10.0041C2.99087 6.1308 6.1308 2.99087 10.0041 2.99087C13.8774 2.99087 17.0173 6.1308 17.0173 10.0041C17.0173 13.8774 13.8774 17.0173 10.0041 17.0173Z"
                        fill="#FFF"
                    ></path>
                </g></svg
            >
            <input class="outline-none ml-1" placeholder="Search posts..." />
        </div>
    </div>
</div>

<style>
    .shadow-col {
        border: 2px solid black;
        box-shadow: rgba(0, 0, 0, 1) 3px 3px;
        transition: all 0.3s ease;
        cursor: pointer;
        scale: 100%;
    }

    .shadow-col:hover {
        box-shadow: rgba(0, 0, 0, 1) 4px 4px;
    }

    .shadow-col:active {
        scale: 95%;
    }
</style>