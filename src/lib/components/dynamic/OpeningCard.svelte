<script>
    import Title from "./Title.svelte";
    import ToRemember from "./ToRemember.svelte";
</script>

<div
    id="one"
    class="flex flex-col items-center justify-center w-full gap-5 px-4"
>
    <div class="w-full"><Title className="md:text-8xl" /></div>
    <div class="flex flex-row justify-center items-center gap-5 w-full mt-15">
        <div
            class="tenor-gif-embed max-w-sm img-border justify-start overflow-hidden border-8 border-black"
            data-postid="13933823"
            data-share-method="host"
            data-aspect-ratio="1.455"
            data-width="50%"
        >
            <a href="https://tenor.com/view/monkey-typing-working-gif-13933823"
                >Monkey Typing GIF</a
            >from
            <a href="https://tenor.com/search/monkey-gifs">Monkey GIFs</a>
        </div>
        <script
            type="text/javascript"
            async
            src="https://tenor.com/embed.js"
        ></script>

        <div class="flex flex-col items-start gap-3">
            <div class="flex flex-col items-start">
                <h1 class="text-4xl mb-2">
                    This is <span id="monke-1" class="monkeText">Monke</span>!
                </h1>
                <p>
                    Monke teaches you
                    <span id="ml-1" class="mlText">machine learning</span>, in a very... not so serious way.
                </p>
                <p>Less words, more learning. Monke happy, you happy :3</p>
            </div>

            <div class="scale-100 w-full">
                <ToRemember
                    title="Pro Tip"
                    content={[
                        "Try clicking on the highlighted words throughout the blog.",
                        "Also try selecting a bunch of text and exploring the AI Explanation!",
                    ]}
                />
            </div>
        </div>
    </div>
</div>
