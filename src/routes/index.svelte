<script lang="ts">
    import ButtonLarge from "../comp/util/ButtonLarge.svelte";
    import ScrollDownArrow from "../comp/util/ScrollDownArrow.svelte";
    import heart from "images/heart.svg";
    import globe from "images/globe-cartoon.png"
    import notebook from "images/notebook.jpg";
</script>

<svelte:head>
	<title>{"<"}Brand{">"}</title>
</svelte:head>

<ScrollDownArrow />

<!-- Header -->
<section id="hero" class="bg-primary-lightest shadow-md relative" style="--notebook:url({notebook})">
    <div class="flex flex-col md:flex-row md:items-center container mx-auto px-8 md:px-4 py-8 sm:py-12 md:py-24 relative">
        <div class="md:w-1/2 px-3 mb-4 md:mb-0 text-black">
            <p class="text-xl font-bold mb-6 md:mb-3">Learn languages together with fun stories.</p>
            <p class="md:pr-16">We <img src={heart} class="inline w-4 h-4" aria-label="red heart" alt="love" /> all languages and strongly believe they shouldn't be scary.</p>
            <p class="md:pr-16">{"<"}Brand{">"} makes writing effortless.</p>
        </div>
        <div class="md:w-1/2">
            <div class="p-6 z-10">
                <ButtonLarge
                    href="join"
                    className="w-full justify-center md:w-auto mb-3 md:mb-0 md:mr-1"
                >Join now!</ButtonLarge>
                <ButtonLarge
                    href="login"
                    variant=TEXT
                    className="w-full justify-center md:w-auto border bg-gray-verylight focus:border-primary sm:bg-transparent sm:border-transparent"
                >Login</ButtonLarge>
            </div>
        </div>
    </div>
</section>

<!-- USP -->
<section class="container mx-auto py-8 md:py-20 px-8 flex flex-col md:flex-row items-center">
    <div class="md:w-1/3 flex justify-center mb-8 sm:mb-0">
        <img src={globe} alt="Globe" style="max-width: 220px" >
    </div>

    <div class="md:w-2/3">
        <h3>We are excited about languages. But we can do better.</h3>
        <p>Members of {"<"}Brand{">"} are building the world's largest collection of exciting lessons.</p>
        <p>They make the world a better place by helping others who are struggling.</p>
    </div>
</section>

<!-- Features -->
<section class="bg-gray-lightest py-8 relative">
    <div class="flex container flex-col md:flex-row mx-auto py-8 px-4 md:px-8 gap-2 md:space-x-8">

        <div class="md:w-1/3 mb-16 md:mb-0">
            <h3>Say goodbye to writer's block</h3>
            <p>Get inspired by our writing prompts or translate one of our existing stories.</p>
            <div class="py-24 my-6 text-center w-full bg-gray-verylight text-gray-bitdark italic rounded-2xl shadow-sm">Demo</div>
            <p>The most successful way to learn anything is to like doing it. Write about your favorite topic and choose what to share.</p>
        </div>

        <div class="md:w-1/3 mb-16 md:mb-0">
            <h3>Invite your friends</h3>
            <p>{"<"}Brand{">"} works even better with your tandem partners. You can also do lessons together.</p>
            <div class="py-24 my-6 text-center w-full bg-gray-verylight text-gray-bitdark italic rounded-2xl shadow-sm">Demo</div>
            <p>Seriously, the most successful way to learn anything is to actually enjoy doing it.</p>
        </div>

        <div class="md:w-1/3 mb-16 md:mb-0">
            <h3>Better than dictionaries</h3>
            <p>Keep running out of words? No need to worry, as we've got instant suggestions lined up for you.</p>
            <div class="py-24 my-6 text-center w-full bg-gray-verylight text-gray-bitdark italic rounded-2xl shadow-sm">Demo</div>
            <p>Go as far as you want whenever you feel ready.</p>
        </div>

    </div>
</section>


<section id="footer-cta" class="bg-primary-lightest shadow-sm relative" style="--footer-cta-bg:url('')">
    <div class="flex flex-col md:flex-row md:items-center container mx-auto px-8 md:px-4 py-8 sm:py-12 md:py-24 relative">
        <ButtonLarge
            href="join"
            className="w-full justify-center md:w-auto mb-3 md:mb-0 md:mr-1"
        >Join now!</ButtonLarge>
    </div>
</section>

<style>
    #hero::before {
        content: "";
        position: absolute;
        top: 0; left: 0;
        width: 100%;
        height: 100%;
        background-image: var(--notebook, none);
        filter: blur(.1px);
        background-position: 132% -98%;
        transform: rotate(1deg);
        @screen md {
            background-position: 60% 19%;
        }
        @screen sm {
            /*background-position: 60% 22%;*/
            transform: none;
        }
    }
    h3 {
        @apply text-lg;
        @apply uppercase;
        @apply text-gray-dark;
        @apply font-bold;
        @apply mb-2;
    }
</style>
