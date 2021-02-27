<script lang="ts">
    import ButtonLarge from "../comp/util/ButtonLarge.svelte"
    import ScrollDownArrow from "../comp/util/ScrollDownArrow.svelte"
    import heart from "images/heart.svg"
    import headerHome1920 from "images/header-home-1920.jpg"
    import headerHome1280 from "images/header-home-1280.jpg"
    import headerHome1024 from "images/header-home-1024.jpg"
    import studyCall from "images/study-call.jpg"
    import group from "images/group.jpg"
    import friends from "images/friends.jpg"
    import books from "images/books.jpg"

    import { BellIcon, ArrowDownIcon } from "svelte-feather-icons"

    let email = ""
    let subscriptionSuccess: Boolean | undefined
    let subscribing = false
    function onSubscribe() {
        if (document.forms["subscribe"].reportValidity()) {
            subscribing = true
            fetch("/subscribe/", {
                method: "post",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email,
                }),
            })
                .then((response) => {
                    if (response.status !== 200) {
                        return
                    }
                    response.json().then((res) => {
                        if (!res.hasOwnProperty("success")) {
                            return
                        }
                        subscriptionSuccess = res.success === true
                    })
                })
                .then(() => {
                    subscribing = false
                })
        }
    }
</script>

<svelte:head>
    <title>Everglot – The Language Community</title>
</svelte:head>

<ScrollDownArrow />

<!-- Header -->
<section
    id="hero"
    class="bg-gray-600 shadow-md relative"
    style="--header-home-1920:url({headerHome1920});--header-home-1280:url({headerHome1280});--header-home-1024:url({headerHome1024});"
>
    <div
        class="flex flex-col md:flex-row md:items-center container mx-auto px-8 md:px-4 py-8 sm:py-12 md:py-32 relative"
    >
        <div class="md:w-1/2 px-3 mb-4 md:mb-0 text-gray-lightest md:text-lg">
            <p class="text-xl font-bold mb-6 md:mb-3 md:text-2xl">
                Perfect your language skills together with fellow polyglots.
            </p>
            <p class="md:pr-16">
                We <img
                    src={heart}
                    class="inline w-4 h-4"
                    aria-label="red heart"
                    alt="love"
                /> all languages and strongly believe they shouldn't be scary.
            </p>
            <p class="md:pr-16">Everglot guides you towards mastery.</p>
        </div>
        <div class="md:w-1/2">
            <div class="p-6 z-10">
                <ButtonLarge
                    href="join"
                    className="w-full justify-center md:w-auto mb-3 md:mb-0 md:mr-1 text-lg"
                    >Join now!</ButtonLarge
                >
                <ButtonLarge
                    variant="OUTLINED"
                    color="SECONDARY"
                    href="login"
                    className="w-full justify-center md:w-auto"
                    >Login</ButtonLarge
                >
            </div>
        </div>
    </div>
</section>

<!-- USP -->
<section
    class="container md:max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto py-8 sm:py-16 flex flex-col-reverse md:flex-row justify-center items-center md:px-8 lg:px-16 xl:px-0"
>
    <div
        class="md:w-1/2 xl:w-1/3 flex justify-center md:justify-start py-8 sm:py-0 md:px-auto mb-8 sm:mb-0 lg:mr-16"
    >
        <img
            id="study-call"
            src={studyCall}
            alt="Study call"
            class="self-start max-w-full shadow-md sm:rounded-lg"
        />
    </div>

    <div class="md:w-1/2 xl:w-2/3 px-8 md:px-0 py-16 sm:py-0 mb-16 lg:mb-0">
        <h2 class="text-lg text-gray-dark font-bold mb-2">
            Speaking a foreign tongue can be much easier.
        </h2>
        <p class="mb-4 sm:mb-0">
            Everglots are building the world's most <strong
                class="text-gray-dark">welcoming</strong
            > community around language learning.
        </p>
        <p>
            Native speakers teach their languages to each other, helping those
            who are struggling finally make <strong class="text-gray-dark"
                >lasting progress</strong
            >.
        </p>
    </div>
</section>

<!-- Features -->
<section class="bg-gray-lightest py-8 relative features">
    <div
        class="flex container flex-col md:flex-row mx-auto py-8 md:py-16 px-4 lg:px-8 gap-2 md:space-x-8"
    >
        <div class="md:w-1/3 mb-16 md:mb-0">
            <h3>Get a group that fits your own schedule</h3>
            <p>
                Even if you're really busy, you can always find people who have
                time when you do.
            </p>
            <div class="feature-image-container">
                <img src={group} alt="Study group" />
            </div>
            <p>
                Successful study groups live on diversity. Some like teaching,
                others focus on studying or simply keep the spirit up <span
                    aria-label="wink">😉</span
                >
            </p>
        </div>

        <div class="md:w-1/3 mb-16 md:mb-0">
            <h3>Better than movies and textbooks</h3>
            <p>
                It's hard to follow what people are saying? We've got you
                covered, as live subtitles and amazing tutors are here to help.
            </p>
            <div class="feature-image-container">
                <img src={books} alt="Library" />
            </div>
            <p>
                Making mistakes is encouraged. Correcting each other is usually
                helpful as well, provided that it's constructive!
            </p>
        </div>

        <div class="md:w-1/3 mb-16 md:mb-0">
            <h3>Invite your friends</h3>
            <p>
                Everglot is you and your tandem partners' laid back place to
                hang out. And the others are just as friendly.
            </p>
            <div class="feature-image-container">
                <img src={friends} alt="Friends" />
            </div>
            <p>
                The best way to learn anything is to enjoy the process. After
                making new friends you'll never want to skip a session again!
            </p>
        </div>
    </div>
</section>

<section
    id="footer-cta"
    class="bg-primary-lightest shadow-sm relative"
    style="--footer-cta-bg:url('')"
>
    <div
        class="flex flex-col md:items-center space-y-2 md:space-y-4 container mx-auto px-4 md:px-8 py-8 sm:py-12 md:py-32 relative"
    >
        <p class="font-bold text-2xl md:text-center text-gray-dark">
            Subscribe to our early access list,<br class="hidden md:inline" />
            you'll be notified when we launch!
        </p>
        <div>
            <ArrowDownIcon size="24" class="text-gray mx-auto" />
        </div>
        <form
            class="flex flex-col md:flex-row items-end"
            name="subscribe"
            action="/subscribe"
            on:submit|preventDefault={onSubscribe}
        >
            <div class="inline-flex flex-col w-full">
                <label for="subscribe_email" class="font-bold text-gray-bitdark"
                    >Email</label
                >
                <input
                    id="subscribe_email"
                    type="email"
                    required
                    placeholder="jane.doe@example.com"
                    class="border-none shadow-md mb-4 md:mb-0 md:mr-4 py-4 px-4 rounded-md w-full md:w-64"
                    bind:value={email}
                />
            </div>
            <ButtonLarge
                tag="button"
                on:click={onSubscribe}
                disabled={subscribing ||
                    typeof subscriptionSuccess !== "undefined"}
                className="w-full justify-center text-lg md:w-auto mb-3 md:mb-0 md:mr-1"
                type="submit"
                ><BellIcon size="24" class="mr-2" /><span
                    style="line-height: 1.35">Subscribe</span
                ></ButtonLarge
            >
        </form>
        <div class="py-4 font-bold text-lg" class:hidden={!subscriptionSuccess}>
            Thanks for your subscription, please make sure to confirm it in the
            mail we just sent you!
        </div>
        <div class="flex flex-col md:flex-row hidden">
            <input type="email" class="py-4 px-4 m-2 rounded-md" />
            <ButtonLarge
                tag="button"
                on:click={onSubscribe}
                disabled={subscribing ||
                    typeof subscriptionSuccess !== "undefined"}
                className="w-full justify-center text-lg md:w-auto mb-3 md:mb-0 md:mr-1"
                >Subscribe with Google</ButtonLarge
            >
        </div>
    </div>
</section>

<!-- Features -->
<style>
    #hero {
        max-width: 1920px;
        margin: 0 auto;
        max-width: 1024px;
        max-height: 416px;
        @screen lg {
            max-width: 1280px;
            max-height: 369px;
        }
        @screen xl {
            max-width: 1920px;
            max-height: 369px;
        }
    }
    #hero::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: var(--header-home-1024, none);
        background-repeat: no-repeat;
        filter: blur(1px) brightness(40%);
        background-position: 34% 0%;
        @screen sm {
            background-position: 0% 0%;
            filter: blur(1px) brightness(60%);
            transform: none;
        }
        @screen lg {
            background-image: var(--header-home-1280, none);
            max-width: 1280px;
            max-height: 369px;
        }
        @screen xl {
            background-image: var(--header-home-1920, none);
            max-width: 1920px;
            max-height: 369px;
        }
        @screen 2xl {
            background-repeat: repeat-x;
            background-position: 242px;
        }
    }
    #study-call {
        @screen sm {
            max-width: 340px;
        }
    }
    h3 {
        @apply text-lg;
        @apply uppercase;
        @apply text-gray-dark;
        @apply font-bold;
        @apply mb-2;
    }
    section.features .feature-image-container {
        @apply my-6;
        @apply text-center;
        @apply w-full;
        @apply bg-gray-verylight;
        @apply text-gray-bitdark;
        @apply italic;
        @apply rounded-lg;
        @apply shadow-md;
        @apply overflow-hidden;
        width: 100%;
        max-height: 296px;
        @screen md {
            max-height: 241px;
        }
        @screen 2xl {
            max-height: 296px;
        }
    }
    section.features .feature-image-container img {
        @apply self-start;
        @apply max-w-full;
        @apply shadow-md;
    }
</style>
