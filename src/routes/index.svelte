<script lang="ts">
    import { onMount } from "svelte"
    import { BellIcon, ArrowDownIcon } from "svelte-feather-icons"

    import ButtonLarge from "../comp/util/ButtonLarge.svelte"
    import ScrollDownArrow from "../comp/util/ScrollDownArrow.svelte"
    import chat from "images/chat.png"
    import group from "images/group.png"
    import groupSort from "images/group-sort.png"
    import chatGame from "images/chat-game.png"
    import hangman from "images/hangman.png"
    import liveAudio from "images/live-audio.png"
    import stars from "images/stars.png"

    let email = ""
    let subscriptionSuccess: Boolean | undefined
    let subscribing = false
    function onSubscribe() {
        if ((document.forms["subscribe"] as HTMLFormElement).reportValidity()) {
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

    onMount(() => {
        document
            .getElementById("sapper")!
            .setAttribute("style", `--stars: url('${stars}');`)
    })
</script>

<svelte:head>
    <title>Everglot – Learn Together.</title>
</svelte:head>

<ScrollDownArrow />

<div id="wrapper">
    <!-- Header -->
    <section id="hero" class="relative" style="">
        <div
            class="flex flex-col md:items-center container mx-auto px-8 md:px-4 pt-8 md:pt-20 relative"
        >
            <div
                class="md:w-1/2 px-3 mb-4 md:mb-0 text-center text-gray-lightest md:text-lg"
            >
                <h1 class="text-3xl font-bold mb-6 md:text-4xl text-white">
                    Learn Languages In Groups.
                </h1>
                <p class="text-lg text-gray-lightest pt-4">
                    Everglot is a place for language learners and polyglots to
                    support each other along their language learning journeys.
                </p>
            </div>
            <div class="md:w-1/2">
                <div class="hero-buttons text-center p-6 z-10">
                    <ButtonLarge
                        href="#footer-cta"
                        className="w-full justify-center md:w-auto mb-3 md:mb-0 md:mr-1 text-lg"
                        >Join now</ButtonLarge
                    >
                    <ButtonLarge
                        variant="OUTLINED"
                        color="SECONDARY"
                        href="https://app.everglot.com/login"
                        className="w-full justify-center md:w-auto"
                        >Login</ButtonLarge
                    >
                </div>
            </div>
        </div>
    </section>

    <!-- USP -->
    <section
        class="usp container md:max-w-4xl lg:max-w-4xl mx-auto py-8 sm:py-16 flex flex-col md:flex-row justify-center items-center md:px-8 lg:px-16 xl:px-0"
    >
        <div
            class="md:w-1/2 flex justify-center md:justify-start px-4 py-8 sm:py-0 md:px-auto mb-8 sm:mb-0 lg:mr-16"
        >
            <img
                id="chat"
                src={chat}
                alt="chat"
                class="self-start max-w-full shadow-md sm:rounded-lg"
            />
        </div>

        <div
            class="md:w-1/2px-8 md:px-0 md:max-w-sm py-16 sm:py-0 mb-16 lg:mb-0 px-4"
        >
            <p class="text-xl max-w-sm sm:mb-0m mb-4 text-center">
                Language learning is a long-term journey. With any adventure, it
                is important to find friends and companions along the way.
            </p>
            <p class="text-xl max-w-sm text-center">
                Everglot provides the learning environment and tools to make
                this happen.
            </p>
        </div>
    </section>

    <!-- Features -->
    <section class="py-8 relative features">
        <div
            class="flex container flex-col mx-auto py-8 md:py-16 px-4 lg:px-8 gap-2 md:space-x-8"
        >
            <div class="feature mb-16 md:mb-0">
                <h3>Find a study group that fits your goals and schedule</h3>
                <div class="flex flex-col md:flex-row">
                    <div class="md:w-2/3 feature-image-container group-sort">
                        <img
                            src={groupSort}
                            alt="You are sorted into groups based on your language skills"
                            style="margin-top: -74px; margin-bottom: 24px;"
                        />
                        <div class="md:text-right text-xl md:pr-24">
                            <p>Tell us what you need...</p>
                        </div>
                    </div>
                    <div class="md:w-1/3 feature-image-container">
                        <img
                            src={group}
                            alt="Your study group is divided into native speakers and learners"
                            class="shadow-md mb-8"
                        />
                        <div class="md:text-right text-xl">
                            <p>and we’ll find you a suitable study group</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="feature mb-16 md:mb-0">
                <h3>
                    Practice your target language with native speakers and
                    fellow learners
                </h3>
                <div class="flex flex-col md:flex-row">
                    <div
                        class="md:w-1/3 md:text-center flex flex-col justify-center items-end px-4 md:px-0 md:pr-8"
                    >
                        <p class="text-xl" style="max-width: 300px;">
                            Get the ball rolling with conversation prompts and
                            role-play scenarios. Receive feedback and tips from
                            native speakers.
                        </p>
                    </div>
                    <div class="md:w-1/3 feature-image-container">
                        <img src={chatGame} alt="chatGame" />
                    </div>
                    <div
                        class="md:w-1/3 md:text-center flex flex-col justify-center items-start px-4 md:px-0 md:pl-8"
                    >
                        <p class="text-xl" style="max-width: 300px;">
                            Making mistakes is encouraged. Correcting each other
                            is usually helpful as well, provided that it's
                            constructive!
                        </p>
                    </div>
                </div>
            </div>

            <div class="feature mb-16 md:mb-0">
                <h3>Learn with the aid of games</h3>
                <div class="flex flex-col md:flex-row">
                    <div class="md:w-1/2 feature-image-container">
                        <img
                            src={hangman}
                            alt="hangman"
                            class="shadow-md mb-8 md:ml-auto md:mr-24"
                        />
                        <div class="text-center text-xl">
                            <p class="text-xl">Language Games</p>
                        </div>
                    </div>
                    <div class="md:w-1/2 feature-image-container">
                        <img
                            src={liveAudio}
                            alt="Everglot allows voice chats"
                            class="mb-8"
                            style="margin-top: 32px;"
                        />
                        <div class="text-center text-xl">
                            <p class="text-xl">Live Audio</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- CTA -->
    <section id="footer-cta" class="relative" style="--footer-cta-bg:url('')">
        <div
            class="flex flex-col md:items-center space-y-2 md:space-y-4 container mx-auto px-4 md:px-8 py-8 sm:py-12 md:py-32 relative"
        >
            <p class="font-bold text-2xl md:text-center text-gray-lightest">
                Subscribe to our early access list,<br
                    class="hidden md:inline"
                />
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
                    <label
                        for="subscribe_email"
                        class="font-bold text-gray-verylight">Email</label
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
                    className="w-full justify-center text-lg md:w-auto mb-3 md:mb-1 md:mr-1"
                    type="submit"
                    ><BellIcon size="24" class="mr-2" /><span
                        style="line-height: 1.35">Subscribe</span
                    ></ButtonLarge
                >
            </form>
            <div
                class="py-4 font-bold text-lg"
                class:hidden={!subscriptionSuccess}
            >
                Thanks for your subscription, please make sure to confirm it in
                the mail we just sent you!
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
</div>

<style>
    :global(#sapper::before) {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: var(--stars);
        background-repeat: repeat;
        background-position: -10px -26px;
        background-size: 68%;
        filter: contrast(70%) blur(1px);
    }

    .hero-buttons :global(a),
    .hero-buttons :global(button) {
        text-transform: uppercase;
    }

    section.features h3 {
        @apply text-2xl;
        @apply uppercase;
        @apply font-bold;
        @apply text-center;
        @apply mb-8;
    }

    section.features .feature {
        @apply pt-8;
        @apply pb-8;

        @screen md {
            @apply pt-16;
            @apply pb-16;
        }
    }

    section.features .feature-image-container {
        @apply my-6;
        @apply rounded-lg;
        @apply overflow-hidden;
    }

    section.features .feature-image-container img {
        @apply self-start;
        @apply max-w-full;
    }

    .group-sort img {
        @screen lg {
            margin-bottom: 71px !important;
        }
    }
</style>
