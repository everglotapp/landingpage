<script lang="ts">
    import ButtonLarge from "../comp/util/ButtonLarge.svelte";
    import ScrollDownArrow from "../comp/util/ScrollDownArrow.svelte";
    import heart from "images/heart.svg";
    import headerHome from "images/header-home.jpg";
    import globe from "images/globe-cartoon.png";
</script>

<svelte:head>
	<title>Everglot</title>
</svelte:head>

<ScrollDownArrow />

<!-- Header -->
<section id="hero" class="bg-primary shadow-md relative" style="--header-home:url({headerHome})">
    <div class="flex flex-col md:flex-row md:items-center container mx-auto px-8 md:px-4 py-8 sm:py-12 md:py-32 relative">
        <div class="md:w-1/2 px-3 mb-4 md:mb-0 text-gray-200 md:text-lg">
            <p class="text-xl font-bold mb-6 md:mb-3 md:text-2xl">Perfect your German with fun conversations.</p>
            <p class="md:pr-16">We <img src={heart} class="inline w-4 h-4" aria-label="red heart" alt="love" /> all languages and strongly believe they shouldn't be scary.</p>
            <p class="md:pr-16">Everglot guides you towards mastery.</p>
        </div>
        <div class="md:w-1/2">
            <div class="p-6 z-10">
                <ButtonLarge
                    href="try"
                    className="w-full justify-center md:w-auto mb-3 md:mb-0 md:mr-1"
                >Try now!</ButtonLarge>
                <ButtonLarge
                    href="login"
                    variant=TEXT
                    className="w-full justify-center md:w-auto border bg-gray-verylight focus:border-primary sm:bg-transparent sm:border-gray-400 sm:text-gray-200 sm:hover:text-primary sm:focus:text-primary"
                >Login</ButtonLarge>
            </div>
        </div>
    </div>
</section>

<!-- USP -->
<section class="container mx-auto py-8 md:py-20 px-8 flex flex-col md:flex-row items-center">
    <div class="md:w-1/3 flex justify-center mb-8 sm:mb-0">
        <img src={globe} alt="Globe" style="max-width: 220px" class="self-start" />
    </div>

    <div class="md:w-2/3">
        <h2 class="text-lg text-gray-dark font-bold mb-2">Speaking a foreign tongue can be much easier.</h2>
        <p>Everglots are building the world's most welcoming community around language learning.</p>
        <p>Our study groups make the world a better place by helping those who are struggling.</p>
    </div>
</section>

<!-- Features -->
<section class="bg-gray-lightest py-8 relative">
    <div class="flex container flex-col md:flex-row mx-auto py-8 px-4 md:px-8 gap-2 md:space-x-8">

        <div class="md:w-1/3 mb-16 md:mb-0">
            <h3>Get a group that fits your own schedule</h3>
            <p>Even if you're really busy, you can always find people who have time when you do.</p>
            <div class="py-24 my-6 text-center w-full bg-gray-verylight text-gray-bitdark italic rounded-2xl shadow-sm">Demo</div>
            <p>Good study groups live on differences. Some like teaching, others like to keep the spirit up or to focus on studying.</p>
        </div>

        <div class="md:w-1/3 mb-16 md:mb-0">
            <h3>Better than movies and textbooks</h3>
            <p>It's hard to follow what people are saying? We've got you covered, as live subtitles and helpful tutors are here to help.</p>
            <div class="py-24 my-6 text-center w-full bg-gray-verylight text-gray-bitdark italic rounded-2xl shadow-sm">Demo</div>
            <p>Making mistakes is encouraged. Correcting others is helpful as well, as long as it's constructive!</p>
        </div>

        <div class="md:w-1/3 mb-16 md:mb-0">
            <h3>Invite your friends</h3>
            <p>Everglot works even better with your tandem partners. And everyone else is just as friendly as you.</p>
            <div class="py-24 my-6 text-center w-full bg-gray-verylight text-gray-bitdark italic rounded-2xl shadow-sm">Demo</div>
            <p>We know that the best way to learn anything is to enjoy the process. Make new friends and never miss a session again.</p>
        </div>

    </div>
</section>


<section id="footer-cta" class="bg-primary-lightest shadow-sm relative" style="--footer-cta-bg:url('')">
    <div class="flex flex-col md:flex-row md:items-center space-y-8 md:space-y-0 md:space-x-8 container mx-auto px-4 md:px-8 py-8 sm:py-12 md:py-24 relative">
        <p>Sign up, it's free!</p>
        <ButtonLarge
            href="try"
            className="w-full justify-center md:w-auto mb-3 md:mb-0 md:mr-1"
        >Try now!</ButtonLarge>
    </div>
</section>

<style>
    #hero::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: var(--header-home, none);
        filter: blur(1px) brightness(60%);
        background-position: 62% -122%;
        @screen md {
            background-position: -1300% 30%;
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
