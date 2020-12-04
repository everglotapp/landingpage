<script lang="ts">
    import ButtonLarge from "../comp/util/ButtonLarge.svelte";
</script>

<svelte:head>
	<title>{"<"}Brand{">"}</title>
</svelte:head>

<!-- Header -->
<section class="bg-primary-lightest shadow-sm">
    <div class="flex flex-col md:flex-row md:items-center container mx-auto px-8 md:px-4 py-8 sm:py-12 md:py-24">
        <div class="md:w-1/2 px-3 mb-4 md:mb-0">
            <p class="text-lg font-bold mb-6 md:mb-3">Learn languages together with fun stories.</p>
            <p class="md:pr-16">We <span role="img" aria-label="red heart" alt="love">❤️</span> all languages and strongly believe that they shouldn't be scary. Go as far as you want whenever you feel ready.</p>
        </div>
        <div class="md:w-1/2">
            <div class="p-6 z-10">
                <ButtonLarge
                    href="join"
                    className="w-full justify-center md:w-auto mb-3 md:mb-0 md:mr-1"
                >Join now!</ButtonLarge>
                <ButtonLarge
                    href="login"
                    variant=OUTLINED
                    className="w-full justify-center md:w-auto"
                >Login</ButtonLarge>
            </div>
        </div>
    </div>
</section>

<!-- Features -->
<section class="bg-gray-lightest py-8">
    <div class="flex container flex-col md:flex-row mx-auto py-8 px-4 md:px-8 gap-2 md:space-x-8">

        <div class="md:w-1/3 mb-16 md:mb-0">
            <h3>Better than dictionaries</h3>
            <p>Run out of a word? No worries, we've got instant suggestions for you.</p>
            <div class="py-24 my-6 text-center w-full bg-gray-verylight text-gray-bitdark italic">Demo</div>
            <p>{"<"}Brand{">"} makes writing fun.</p>
        </div>

        <div class="md:w-1/3 mb-16 md:mb-0">
            <h3>Say goodbye to writer's block</h3>
            <p>Run out of an idea? Get inspired by our writing prompts or translate one of our existing stories.</p>
            <div class="py-24 my-6 text-center w-full bg-gray-verylight text-gray-bitdark italic">Demo</div>
            <p>The most successful way to learn anything is to like doing it. Write about whatever you want and choose what to share.</p>
        </div>

        <div class="md:w-1/3 mb-16 md:mb-0">
            <h3>Invite your friends</h3>
            <p>{"<"}Brand{">"} is free for your tandem partners.</p>
            <div class="py-24 my-6 text-center w-full bg-gray-verylight text-gray-bitdark italic">Demo</div>
            <p>The most successful way to learn anything is to like doing it.</p>
        </div>

    </div>
</section>

<!-- End goal -->
<section class="container mx-auto py-8 md:py-24 px-8">
    <p>Members of {"<"}Brand{">"} are building the world's largest collection of exciting lessons.</p>

    <p>Make the world a better place by helping others who are struggling.</p>
</section>

<style>
    h3 {
        @apply text-lg;
        @apply uppercase;
        @apply text-gray-dark;
        @apply font-bold;
        @apply mb-2;
    }
</style>
