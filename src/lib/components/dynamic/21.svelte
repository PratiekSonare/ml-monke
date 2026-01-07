<div class="w-full grid grid-cols-3 gap-4 h-1/2 max-h-1/2">
    <div class="col-span-2 flex flex-col shadow-col overflow-y-auto h-full">
        <div
            class="flex-[0_0_25%] p-3 flex flex-row justify-between items-center border-b-4 border-black bg-purple-500"
        >
            <div class="flex flex-col">
                <h1 class="text-lg font-bold px-2 bg-black text-white w-fit">
                    1.1.1
                </h1>
                <h1 class="text-3xl">What is a Function?</h1>
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
        <div class="flex-1 bg-purple-200 overflow-y-auto">
            <!-- text  -->
            <p>
                ○ Functions are <span>“rules”</span> that define a
                <span>“relationship”</span> between two or more entities. Simple.
            </p>
            <p>
                ○ These entities are what we call - variables and the “function”
                governs this relationship between these variables!
            </p>

            <div class="relative h-1 w-full bg-black">
                <div class="absolute -top-2 right-0">
                    <h1 class="bg-black text-white px-2 w-fit">memes..?</h1>
                </div>
            </div>

            <!-- img/manim animation -->
            <img
                alt="cdn-functions"
                src="https://cdn.jsdelivr.net/gh/PratiekSonare/all-manim-animations@main/chapter_1/xing-xingxing-compressed.gif"
                class="w-1/2 mx-auto"
            />
        </div>
    </div>

    <div class="flex flex-col shadow-col overflow-y-auto">
        <!-- content area -->
        <div class="bg-purple-200">
            <!-- text  -->
            <p>
                ○ Consider each function to be a machine. This machine asks for
                something and returns something, well, something similar to a
                monkey!
            </p>
            <p>
                ○ You give the machine an input, x & it gives you an output, y.
            </p>
            <p>
                ○ For example, the monke (machine) - that takes in the input, x
                (treats) and returns output, y (poop 💩)
            </p>
            <div class="relative h-1 w-full bg-black">
                <div class="absolute -top-2 right-0">
                    <h1 class="bg-black text-white px-2 w-fit">
                        graphs n shi'
                    </h1>
                </div>
            </div>
        </div>

        <img
            alt="cdn-functions"
            src="https://cdn.jsdelivr.net/gh/PratiekSonare/all-manim-animations@main/chapter_1/functionIntroduction-alt.gif"
            class=""
        />
    </div>
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

    p,
    li {
        padding: 0.75rem;
        font-size: 1.125rem;
    }

    li {
        padding: 0.25rem;
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
