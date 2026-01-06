<div class="w-full grid grid-cols-3 gap-4 h-1/2">
    <div class="flex flex-col shadow-col">
        <div
            class="flex-[0_0_25%] p-3 flex flex-row justify-between items-center border-b-4 border-black bg-yellow-500"
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
        <div class="relative flex-1 bg-yellow-200 overflow-y-auto">
            <!-- text  -->
            <span>Functions are like machines!</span>

            <!-- img/manim animation -->
            <img
                alt="cdn-functions"
                src="https://cdn.jsdelivr.net/gh/PratiekSonare/all-manim-animations@main/chapter_1/functionIntroduction.gif"
                class="absolute bottom-0 self-end border-t-4 border-black clip"
            />
        </div>
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

    .clip {
        object-fit: cover;
        width: 100%;
        height: 100px; /* Adjust height as needed */
    }
</style>
