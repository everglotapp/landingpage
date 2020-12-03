<script lang="ts">
    import ButtonLarge from "../comp/util/ButtonLarge.svelte";
</script>

<svelte:head>
	<title>{"<"}Brand{">"}</title>
</svelte:head>

<!-- Header -->
<section class="bg-primary-lightest shadow-sm">
    <div class="flex flex-col md:flex-row md:items-center container mx-auto px-8 md:px-4 py-8 sm:py-12 md:py-16">
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
<section class="bg-gray-lightest py-4">
    <div class="flex container mx-auto py-8 px-8">
        <div>
            <p class="mb-2">Members of {"<"}Brand{">"} are building the world's largest collection of exciting lessons.</p>
        </div>

        <p>The most successful way to learn anything is to like doing it.</p>
    </div>
</section>
