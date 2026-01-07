<script lang="ts">
    import { onMount } from "svelte";

    let calculatorElement: HTMLDivElement;
    let showButtons = false;

    onMount(() => {
        // Load Desmos API
        const script = document.createElement("script");
        script.src =
            "https://www.desmos.com/api/v1.9/calculator.js?apiKey=dcb31709b452b1cf9dc26972add0fda6";
        script.onload = () => {
            // Initialize calculator with interactivity enabled
            // @ts-ignore - Desmos is loaded from CDN
            const calculator = Desmos.GraphingCalculator(calculatorElement, {
                expressionsCollapsed: true,
                settingsMenu: false,
                zoomButtons: true,
                expressions: true,
                keypad: false,
            });

            // Load a default graph (example: quadratic function)
            // You can customize these expressions or load saved graph states
            calculator.setExpression({ id: "graph1", latex: "y=x^2" });
            // @ts-ignore
            calculator.setExpression({
                id: "graph2",
                latex: "y=2x+1",
                color: Desmos.Colors.RED,
            });

            // Set viewport
            calculator.setMathBounds({
                left: -2,
                right: 7,
                bottom: -2,
                top: 10,
            });
        };
        document.head.appendChild(script);
    });
</script>

<div class="w-full grid grid-cols-2 gap-4">
    <div class="flex flex-col shadow-col overflow-y-auto h-full">
        <div
            class="flex-[0_0_25%] p-3 flex flex-row justify-between items-center border-b-4 border-black bg-cyan-500"
        >
            <div class="flex flex-col">
                <h1 class="text-lg font-bold px-2 bg-black text-white w-fit">
                    1.1.2
                </h1>
                <h1 class="text-3xl">[Scenario] Banans & Banker Monke</h1>
            </div>

            <!-- svelte-ignore a11y_consider_explicit_label -->
            <button
                class="self-start scale-85 play-button rounded-full border-4 border-black w-10 h-10 flex items-center justify-center cursor-pointer hover:bg-gray-100 active:scale-95 transition-all duration-300"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="#000"
                >
                    <polygon points="5,3 19,12 5,21" />
                    <!-- <rect x="6" y="4" width="4" height="16" /> -->
                    <!-- <rect x="14" y="4" width="4" height="16" /> -->
                </svg>
            </button>
        </div>

        <!-- content area -->
        <div class="flex-1 bg-cyan-200 overflow-y-auto">
            <!-- text  -->
            <p>
                ○ Banker Monke here - loves banans! 🍌 It will happily trade
                your banans <span>(input)</span> for some coins 🪙
                <span>(output)</span>
            </p>
            <p>
                ○ Depending on Banker Monke's mood, the exchange rate <span
                    >(function)</span
                > may vary!
            </p>
            <p class="italic">
                You better give him an extra banan <span>(bribe) :D</span>
            </p>

            <div class="relative h-1 w-full bg-black">
                <div class="absolute -top-2 right-0">
                    <h1 class="bg-black text-white px-2 w-fit">memes..?</h1>
                </div>
            </div>

            <!-- img/manim animation -->
            <img
                alt="cdn-functions"
                src="https://cdn.jsdelivr.net/gh/PratiekSonare/all-manim-animations@main/chapter_1/bankermonke.svg"
                class="w-1/2 mx-auto img-border"
            />
        </div>
    </div>

    <div class="flex flex-col shadow-col overflow-y-auto">
        <!-- content area -->
        <div class="bg-cyan-200">
            <!-- text  -->
            <p>
                ○ x-axis: number of banans given <span>(input)</span> & y-axis: number of coins you get <span>(output)</span>
            </p>
            <p>
                ○ Blue line: monke <span>good mood</span> &lt;3 & Red line: <span>monke angy </span> :(
            </p>
            <p>
                ○ These lines are two different functions that relate banans to coins <span>(variables)</span>
            </p>
            <div class="relative h-1 w-full bg-black z-20">
                <div class="absolute -top-2 right-0">
                    <h1 class="bg-black text-white px-2 w-fit z-100">
                        use your brain, cuh
                    </h1>
                </div>
            </div>

            <!-- This -->
            <!-- to this  -->
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <!-- svelte-ignore a11y-no-static-element-interactions -->
            <div class="flex flex-row justify-between items-start p-2 transition-all duration-500 ease-in-out cursor-pointer {showButtons ? 'h-48' : 'h-16'}" on:click={() => showButtons = !showButtons}>
                <p class="">
                    Can you tell me <span>when</span> must a person visit Banker
                    Monke to get more coins?
                </p>
                <div class="flex-1/2 flex flex-col gap-2 overflow-hidden transition-all duration-500 ease-in-out {showButtons ? 'opacity-100 max-w-xs max-h-48' : 'opacity-0 max-w-0 max-h-0'}" on:click={(e) => e.stopPropagation()}>
                    <button class="px-4 py-1 whitespace-nowrap">Monday</button>
                    <button class="px-4 py-1 whitespace-nowrap">Wednesday</button>
                    <button class="px-4 py-1 whitespace-nowrap">Friday</button>
                    <button class="px-4 py-1 whitespace-nowrap">Sunday</button>
                </div>
            </div>
        </div>

        <div class="relative h-1 w-full bg-black z-20">
            <div class="absolute -top-2 right-0">
                <h1 class="bg-black text-white px-2 w-fit z-100">
                    graphs n shi'
                </h1>
            </div>
        </div>

        <!-- Desmos Interactive Graph -->
        <!-- Yes! You can load default graphs using calculator.setExpression() -->
        <!-- and enable full interactivity: zoom, pan, add expressions, etc. -->
        <div bind:this={calculatorElement} class="flex-1 z-10"></div>
    </div>
</div>

<style>
    button {
        border: 2px solid black;
    }

    button:hover {
        background-color: #e2e8f0;
        transition: all 0.3s ease;
    }

    .shadow-col {
        border: 4px solid black;
        box-shadow: black 4px 4px;
        transition: all 0.3s ease;
    }
    .shadow-col:hover {
        box-shadow: black 6px 6px;
    }

    p {
        padding: 0.75rem;
        font-size: 1.125rem;
    }

    span {
        font-weight: bold;
    }

    * {
        scrollbar-width: none;
    }

    ::-webkit-scrollbar {
        display: none;
    }
</style>
