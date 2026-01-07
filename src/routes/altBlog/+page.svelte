<script lang="ts">
    import Formula from "$lib/components/dynamic/Formula.svelte";
    import Quote from "$lib/components/dynamic/Quote.svelte";
    import ToRemember from "$lib/components/dynamic/ToRemember.svelte";
    import BlogContentCard from "$lib/components/dynamic/BlogContentCard.svelte";
    import Header from "$lib/components/Header.svelte";
    import Footer from "$lib/components/Footer.svelte";

    import monke1Html from "$lib/content/sidebar/monke-1.html?raw";
    import ml1Html from "$lib/content/sidebar/ml-1.html?raw";
    import ai_slop from "$lib/content/sidebar/ai-slop.html?raw";

    import { onMount } from "svelte";
    import ContextPanel from "$lib/components/dynamic/ContextPanel.svelte";
    import ProgressBar from "$lib/components/dynamic/ProgressBar.svelte";
    import OneOneOne from "$lib/components/dynamic/111.svelte";
    import OneTwo from "$lib/components/dynamic/11.svelte";
    import TwoOne from "$lib/components/dynamic/21.svelte";

    // Hardcoded data for demonstration - using content from 1.1
    const data = {
        parentTitle: "Functions",
        subtitle:
            "Learning functions can help you transform your inputs into dedicated outputs. For ex: turn a single banan into multiple banans! STONKS. Consider functions to be ",

        sections: [
            {
                grandparentId: "1",
                parentId: "1.1",
                id: "1.1.1",
                title: "What are functions?",
                sectionContent: [
                    {
                        content:
                            "Functions are basically machines that take an input & give out an output. Simple.",
                        image: "https://media.geeksforgeeks.org/wp-content/uploads/20240509174104/Function-in-Maths.webp",
                        imageAlt: "monke memes",
                        imageClass: "w-64",
                    },
                    {
                        content:
                            "Each numerical input must produce some numerical output, which must be unique to that input.",
                    },
                ],
            },
            {
                grandparentId: "1",
                parentId: "1.1",
                id: "1.1.2",
                title: "(Scenario): Banan & Banker Monke",
                sectionContent: [
                    {
                        content:
                            "Mr. Banker Monke returns coins for each banan that they get! <br/> A question that you must ask as a regular monke. <br/>'How many coins will I get for each banan?'",
                    },
                    {
                        content: "THIS is called a relationship of a function.",
                    },
                    {
                        content:
                            "Treating Mr. Banker Monke as a function, the relationship between number of banans & number of coins  gives us a relationship between the two!",
                    },
                    {
                        content:
                            "A few terminologies here are:<ul><li>Domain: a set of your inputs (for ex: 1 banan, 2 banan, 3 banan, …)</li><li>Range: a set of outputs (for ex: 1 coin, 2 coin, 3 coin, etc…)</li><li>Co-Domain: a set of **ALL outputs** (for ex: number of coins more than what Mr. Banker Monke has)</li></ul>",
                    },
                    {
                        type: "formula",
                        formula: "f(x) = y",
                        content:
                            "Here, f is the function that takes an input x & gives an output y.",
                    },
                    {
                        content:
                            "A function must have a one-one OR many-one relationship, not one-many relationship. <br/>Each input must return a single, unique output. No multiple outputs for each input.",
                    },
                ],
            },
        ],
    };

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

        const newWidth = (e.clientX / window.innerWidth) * 100;
        if (newWidth > 10 && newWidth < 50) {
            sidebarWidth = newWidth;
        }
    }

    const link = [
        {
            id: "monke-1",
            content: monke1Html,
        },
        {
            id: "ml-1",
            content: ml1Html,
        },
        {
            id: "ai-slop",
            content: ai_slop,
        },
    ];

    let activeSidebarContent = "";

    function handleSpanClick(event: MouseEvent) {
        const target = event.target as HTMLElement;
        const clickedId = target.id;

        const matchedLink = link.find((item) => item.id === clickedId);
        if (matchedLink && matchedLink.content) {
            activeSidebarContent = matchedLink.content;
        }
    }

    onMount(() => {
        // Add click listeners to all spans with IDs from the link array
        link.forEach((item) => {
            const element = document.getElementById(item.id);
            if (element) {
                element.addEventListener("click", handleSpanClick);
                element.style.cursor = "pointer";
            }
        });

        return () => {
            // Cleanup listeners
            link.forEach((item) => {
                const element = document.getElementById(item.id);
                if (element) {
                    element.removeEventListener("click", handleSpanClick);
                }
            });
        };
    });

    onMount(() => {
        if (
            !document.querySelector('script[src="https://tenor.com/embed.js"]')
        ) {
            const script = document.createElement("script");
            script.src = "https://tenor.com/embed.js";
            script.async = true;
            document.body.appendChild(script);
        }

        // Handle scroll to section if hash is present
        const hash = window.location.hash.slice(1);
        if (hash) {
            setTimeout(() => {
                const element = document.getElementById(hash);
                if (element) {
                    element.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                    });
                }
            }, 100);
        }
    });
</script>

<svelte:window on:mousemove={handleMouseMove} on:mouseup={handleMouseUp} />

<main class="h-screen flex flex-col overflow-hidden">
    <Header />

    <div class="flex-1 flex flex-row overflow-hidden min-h-0">
        <div
            style="width: {sidebarWidth}%"
            class="h-full p-3 select-none overflow-y-auto"
        >
            <!-- ContextPanel -->
            <ContextPanel />

            <!-- {#if activeSidebarContent}
                {@html activeSidebarContent}
            {:else}
                <p class="text-gray-500">
                    Click on highlighted text to see content here
                </p>
            {/if} -->
        </div>

        <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
        <div
            class="w-1 bg-gray-500 hover:bg-gray-400 cursor-col-resize transition-colors"
            on:mousedown={handleMouseDown}
            role="separator"
            aria-label="Resize sidebar"
        ></div>

        <div
            id="main-content"
            style="width: {100 - sidebarWidth}%"
            class="overflow-y-auto overflow-x-hidden flex flex-col items-start px-4"
        >
            <div
                class="flex flex-col w-full gap-5 justify-center items-start my-5"
            >
                <div class="space-y-4 w-full">
                    <h1 class="text-4xl uppercase strong tracking-tighter">
                        Chapter {data.sections[0].grandparentId}: {data.parentTitle}
                    </h1>
                    <div
                        class="flex flex-row justify-between items-end-safe w-full"
                    >
                        <div class="space-y-0 w-1/2">
                            <h1
                                class="text-xl uppercase strong tracking-tighter text-gray-500"
                            >
                                Preface:
                            </h1>
                            <span class="italic">{data.subtitle}</span>
                        </div>
                        <ProgressBar level={50} />
                    </div>
                </div>
                <div class="h-1 w-full bg-black"></div>
            </div>

            <OneOneOne />
            <div class="my-2"></div>
            <OneTwo />
            <div class="my-2"></div>
            <TwoOne />
        </div>
    </div>

    <Footer />
</main>

<style>
    @keyframes scroll {
        from {
            transform: translateX(0);
        }
        to {
            transform: translateX(calc(-1 * var(--track-width)));
        }
    }

    :global(.carousel-img-class) {
        width: 300px;
        height: 300px;
        flex-shrink: 0;
        object-fit: cover;
    }
</style>
