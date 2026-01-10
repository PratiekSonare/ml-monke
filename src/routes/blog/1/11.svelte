<script lang="ts">
    import { onMount } from "svelte";

    let calculatorElement: HTMLDivElement;
    let showButtons = false;
    let selectedButton: string | null = null;
    let isCorrect = false;

    function handleClick(buttonId: string) {
        selectedButton = buttonId;
        isCorrect = buttonId === 'correct';
    }

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
            // calculator.setExpression({ id: "graph1", latex: "y=x^2" });
            // @ts-ignore
            calculator.setExpression({
                id: "graph2",
                latex: "y=2x+1",
            });

            calculator.setExpression({
                id: "graph3",
                latex: "x=2",
                color:Desmos.Colors.RED
            });
 
            calculator.setExpression({
                id: "graph4",
                latex: "x=4",
                color:Desmos.Colors.RED
            });

            calculator.setExpression({
                id: "shade",
                latex: "y \\leq 2x+1 \\left\\{2 \\leq x \\leq 4\\right\\}",
                color: Desmos.Colors.BLUE,
                fillOpacity: 0.3
            });

            // Set viewport
            calculator.setMathBounds({
                left: -2,
                right: 7,
                bottom: -2,
                top: 10,
            });

            calculator
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
                ○ x-axis: number of 🍌 given <span>(input)</span> & y-axis: number of 🪙 you get <span>(output)</span>
            </p>
            <p>
                ○ Below is a graph for a function (y = 2x + 1), feel free to interact with it!
            </p>
            <p>
                ○ Hence, for every 🍌 that you give, you get (2*🍌+1) count of 🪙s in return!
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
                    Tell me, if you have 2 &ltlarr; 🍌 &LT; 4, then how many 🪙s can you possibly get? <span>(range)</span>
                </p>
                <div class="flex-1/2 flex flex-col gap-2 overflow-hidden transition-all duration-500 ease-in-out {showButtons ? 'opacity-100 max-w-xs max-h-48' : 'opacity-0 max-w-0 max-h-0'}" on:click={(e) => e.stopPropagation()}>
                    <button id="correct" class="px-4 py-1 whitespace-nowrap border-2 border-black {selectedButton === 'correct' ? (isCorrect ? 'bg-green-500 text-white' : 'bg-red-500 text-white') : (selectedButton && !isCorrect && 'correct' === 'correct' ? 'bg-green-500 text-white' : '')}" on:click={() => handleClick('correct')}> [5-10) </button>
                    <button id="wrong1" class="px-4 py-1 whitespace-nowrap border-2 border-black {selectedButton === 'wrong1' ? (isCorrect ? 'bg-green-500 text-white' : 'bg-red-500 text-white') : (selectedButton && !isCorrect && 'wrong1' === 'correct' ? 'bg-green-500 text-white' : '')}" on:click={() => handleClick('wrong1')}> [0-5) </button>
                    <button id="wrong2" class="px-4 py-1 whitespace-nowrap border-2 border-black {selectedButton === 'wrong2' ? (isCorrect ? 'bg-green-500 text-white' : 'bg-red-500 text-white') : (selectedButton && !isCorrect && 'wrong2' === 'correct' ? 'bg-green-500 text-white' : '')}" on:click={() => handleClick('wrong2')}> [10-15)</button>
                    <button id="wrong3" class="px-4 py-1 whitespace-nowrap border-2 border-black {selectedButton === 'wrong3' ? (isCorrect ? 'bg-green-500 text-white' : 'bg-red-500 text-white') : (selectedButton && !isCorrect && 'wrong3' === 'correct' ? 'bg-green-500 text-white' : '')}" on:click={() => handleClick('wrong3')}> 15+  </button>
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
