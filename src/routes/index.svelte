<script lang="ts">
    import { onMount } from "svelte"
    import { v4 as uuidv4 } from "uuid"
    import {
        BellIcon,
        ArrowDownIcon,
        ArrowUpIcon,
        ArrowRightIcon,
    } from "svelte-feather-icons"
    import { Localized } from "@nubolab-ffwd/svelte-fluent"

    import ButtonLarge from "../components/util/ButtonLarge.svelte"
    import ScrollDownArrow from "../components/util/ScrollDownArrow.svelte"
    import EscapeKeyListener from "../components/util/EscapeKeyListener.svelte"
    import ClickAwayListener from "../components/util/ClickAwayListener.svelte"
    import Modal from "../components/util/Modal.svelte"
    import chat from "images/chat.png"
    import group from "images/group.png"
    import groupSort from "images/group-sort.png"
    import feed from "images/feed.png"
    import hangman from "images/hangman.png"
    import liveAudio from "images/live-audio.png"
    import stars from "images/stars.png"

    import { inviteToken, linkToCta, linkToLogin, ctaLink } from "../stores"
    import { trackEvent } from "./_helpers/analytics"

    let email = ""
    let subscriptionSuccess: Boolean | undefined
    let subscribing = false
    let consented = false
    function onSubscribe() {
        trackEvent("Newsletter", "ClickSubscribe")
        if (
            (
                document.getElementById(formUuid) as HTMLFormElement
            ).reportValidity()
        ) {
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

    let formUuid: string
    onMount(() => {
        formUuid = uuidv4()
        document
            .getElementById("sapper")!
            .setAttribute("style", `--stars: url('${stars}');`)
        if ($inviteToken === null) {
            $inviteToken = new URL(window.location.href).searchParams.get(
                "token"
            )
        }
    })

    const testflightExplanationModalId = uuidv4()
    let showTestflightExplanationModal = false
    let reactToClickaways = false
    function handleTestFlightClick() {
        showTestflightExplanationModal = true
    }
    function handleClickAway() {
        if (!reactToClickaways) {
            // ignore first time bug
            reactToClickaways = true
            return
        }
        showTestflightExplanationModal = false
        reactToClickaways = false
    }

    function handleConsentCheckboxChange(
        e: Event & { currentTarget: EventTarget & HTMLInputElement }
    ) {
        if (!e.currentTarget) {
            return
        }
        trackEvent(
            "Newsletter",
            e.currentTarget.checked ? "CheckConsent" : "UncheckConsent"
        )
    }
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
                class="md:w-1/2 md:px-3 mb-4 md:mb-0 text-center text-gray-lightest md:text-lg"
            >
                <h1 class="text-3xl font-bold mb-6 md:text-4xl text-white">
                    <Localized id="index-hero-slogan" />
                </h1>
                <p class="text-lg text-gray-lightest pt-4">
                    <Localized id="index-hero-description" />
                </p>
            </div>
            <div class="md:w-1/2">
                <div class="hero-buttons text-center p-6 z-10">
                    <ButtonLarge
                        href={$linkToCta}
                        on:click={() => trackEvent("Hero", "ClickJoin")}
                        className="w-full justify-center md:w-auto mb-3 md:mb-0 md:mr-1 text-lg"
                        ><Localized id="index-hero-button-join" /></ButtonLarge
                    >
                    <ButtonLarge
                        variant="OUTLINED"
                        color="SECONDARY"
                        href={$linkToLogin}
                        on:click={() => trackEvent("Hero", "ClickLogin")}
                        className="w-full justify-center md:w-auto"
                        ><Localized id="index-hero-button-login" /></ButtonLarge
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
                <Localized id="index-usp-1" />
            </p>
            <p class="text-xl max-w-sm text-center">
                <Localized id="index-usp-2" />
            </p>
        </div>
    </section>

    <!-- Features -->
    <section class="py-8 relative features">
        <div
            class="flex container flex-col mx-auto py-8 md:py-16 px-4 lg:px-8 gap-2 md:space-x-8"
        >
            <div class="feature mb-16 md:mb-4">
                <h3>Find a study group that fits your goals and schedule</h3>
                <div class="flex flex-col md:flex-row">
                    <div class="md:w-3/5 feature-image-container group-sort">
                        <img
                            src={groupSort}
                            alt="You are sorted into groups based on your language skills"
                            style="max-height: 540px;"
                            class="mx-auto"
                        />
                    </div>
                    <div class="md:w-2/5 feature-image-container">
                        <img
                            src={group}
                            alt="Your study group is divided into native speakers and learners"
                            class="shadow-md mb-8 md:ml-0 mr-auto"
                            style="max-height: 540px;"
                        />
                    </div>
                </div>
            </div>

            <div class="feature mb-16 md:mb-0">
                <h3>
                    Create and share content in your target language with other
                    learners and native speakers
                </h3>
                <div class="flex flex-col md:flex-row">
                    <div
                        class="md:w-1/3 md:text-center flex flex-col justify-center items-end px-4 md:px-0 md:pr-8"
                    >
                        <p class="text-xl" style="max-width: 300px;">
                            Turn any content into language practice
                        </p>
                    </div>
                    <div class="md:w-1/3 feature-image-container">
                        <img src={feed} alt="feed" />
                    </div>
                    <div
                        class="md:w-1/3 md:text-center flex flex-col justify-center items-start px-4 md:px-0 md:pl-8"
                    >
                        <p class="text-xl" style="max-width: 300px;">
                            Receive feedback and tips from native speakers
                        </p>
                    </div>
                </div>
            </div>

            <div class="feature mb-16 md:mb-0">
                <h3>Learn with the help of interactive games</h3>
                <div class="flex flex-col md:flex-row">
                    <div class="md:w-2/5 feature-image-container">
                        <img
                            src={hangman}
                            alt="hangman"
                            class="shadow-md mb-8 md:mx-auto"
                            style="max-height: 480px;"
                        />
                        <div class="text-center text-xl">
                            <p class="text-xl">Language Games</p>
                        </div>
                    </div>
                    <div class="md:w-3/5 feature-image-container">
                        <img
                            src={liveAudio}
                            alt="Everglot allows voice chats"
                            class="mb-8 md:mx-auto"
                            style="max-height: 480px;"
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
    <section class="relative">
        <div id="join" class="absolute" style="top: -12vh;" />
        <div
            class="flex flex-col md:items-center space-y-2 md:space-y-4 container mx-auto px-4 md:px-8 py-8 sm:py-12 md:pt-0 md:pb-32 relative"
        >
            {#if $inviteToken === null}
                <p
                    class="mb-32 md:mb-16 font-light text-2xl text-center text-gray-lightest"
                >
                    Join Everglot to find your language learning community
                </p>
                <form
                    id={formUuid}
                    class="relative"
                    name="subscribe"
                    action="/subscribe"
                    on:submit|preventDefault={onSubscribe}
                >
                    <div class="flex flex-col md:flex-row items-end">
                        <div class="flex flex-col">
                            <div class="inline-flex flex-col w-full">
                                <label
                                    for="subscribe_email"
                                    class="font-bold text-gray-verylight"
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
                            <div class="flex sm:hidden items-center mb-3">
                                <input
                                    id="subscribe_consented"
                                    type="checkbox"
                                    class="mr-2"
                                    required
                                    bind:checked={consented}
                                    on:change={handleConsentCheckboxChange}
                                />
                                <label
                                    for="subscribe_consented"
                                    class="m-0 block text-gray-verylight"
                                    >I would like to receive marketing updates
                                    from Everglot. See&nbsp;<a href="/privacy"
                                        >privacy policy</a
                                    >.</label
                                >
                            </div>
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
                    </div>
                    <div class="items-center mt-3 hidden sm:flex">
                        <input
                            id="subscribe_consented"
                            type="checkbox"
                            class="mr-2"
                            required
                            bind:checked={consented}
                            on:change={handleConsentCheckboxChange}
                        />
                        <label
                            for="subscribe_consented"
                            class="m-0 block text-gray-verylight"
                            >I would like to receive marketing updates from
                            Everglot. See&nbsp;<a href="/privacy"
                                >privacy policy</a
                            >.</label
                        >
                    </div>
                    <p
                        class="sm:absolute sm:transform sm:-translate-x-1/2 sm:right-0 sm:-top-12 relative flex sm:flex-row flex-row-reverse justify-between"
                    >
                        <span class="mr-4 font-bold sm:self-start self-end"
                            >Reserve your early access now</span
                        >
                        <svg
                            width="66"
                            height="77"
                            viewBox="0 0 66 77"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            class="transform rotate-180 sm:rotate-0"
                        >
                            <g clip-path="url(#clip0_1518_4834)">
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M52.7013 36.3302C53.0772 36.1898 53.5045 36.2157 53.9234 36.4045C54.3423 36.5933 54.7317 36.9354 55.0373 37.3829C55.3428 37.8305 55.5491 38.3612 55.6274 38.9007C55.7057 39.4401 55.6519 39.9614 55.4737 40.3916L45.753 63.9274C45.5634 64.3866 45.2427 64.7169 44.8415 64.8662C44.4404 65.0155 43.9818 64.9752 43.5382 64.7518L20.7946 53.2993C20.3785 53.0904 19.997 52.7311 19.7035 52.2717C19.41 51.8123 19.2192 51.2759 19.1577 50.7375C19.0962 50.1991 19.1672 49.6856 19.3607 49.2689C19.5543 48.8522 19.8606 48.5532 20.2369 48.4136L27.4332 45.7351C22.2276 32.3673 17.9825 26.5948 14.7732 24.0961C11.7225 21.7203 9.27407 21.9886 6.71082 22.274L6.04988 22.3464C5.57581 22.3952 5.06617 22.2123 4.61685 21.8323C4.16752 21.4522 3.80948 20.9012 3.6101 20.2828C3.41071 19.6644 3.38372 19.0213 3.5342 18.4745C3.68468 17.9277 4.00226 17.5148 4.42719 17.3137C9.22435 15.0416 16.6452 13.0107 24.4585 15.6255C32.0419 18.1637 39.6818 24.9745 45.4473 39.0302L52.7013 36.3302Z"
                                    fill="#F2F2F2"
                                />
                            </g>
                            <defs>
                                <clipPath id="clip0_1518_4834">
                                    <rect
                                        width="64"
                                        height="46.1869"
                                        fill="white"
                                        transform="matrix(-0.348825 -0.937188 -0.937188 0.348825 65.6113 59.98)"
                                    />
                                </clipPath>
                            </defs>
                        </svg>
                    </p>
                </form>
                <div
                    class="py-4 font-bold text-lg"
                    class:hidden={!subscriptionSuccess}
                >
                    Thanks for your subscription, we will notify you as soon as
                    you can join the early access!
                </div>
            {:else}
                <p class="font-bold text-4xl text-center text-white">
                    Get the app for the best experience!
                </p>
                <div>
                    <ArrowDownIcon size="24" class="mx-auto" />
                </div>
                <div
                    class="flex flex-col md:flex-row justify-center items-center gap-y-2 mx-auto mb-1"
                >
                    <button
                        href="https://testflight.apple.com/join/ZvjofjHo"
                        on:click={handleTestFlightClick}
                        target="_blank"
                        ><svg
                            id="livetype"
                            xmlns="http://www.w3.org/2000/svg"
                            width="295"
                            height="93.5"
                            viewBox="0 0 119.66407 40"
                            style="margin: 0 auto; width: 295px; height: auto;"
                        >
                            <title
                                >Download_on_the_App_Store_Badge_US-UK_RGB_blk_4SVG_092917</title
                            >
                            <g>
                                <g>
                                    <g>
                                        <path
                                            d="M110.13477,0H9.53468c-.3667,0-.729,0-1.09473.002-.30615.002-.60986.00781-.91895.0127A13.21476,13.21476,0,0,0,5.5171.19141a6.66509,6.66509,0,0,0-1.90088.627A6.43779,6.43779,0,0,0,1.99757,1.99707,6.25844,6.25844,0,0,0,.81935,3.61816a6.60119,6.60119,0,0,0-.625,1.90332,12.993,12.993,0,0,0-.1792,2.002C.00587,7.83008.00489,8.1377,0,8.44434V31.5586c.00489.3105.00587.6113.01515.9219a12.99232,12.99232,0,0,0,.1792,2.0019,6.58756,6.58756,0,0,0,.625,1.9043A6.20778,6.20778,0,0,0,1.99757,38.001a6.27445,6.27445,0,0,0,1.61865,1.1787,6.70082,6.70082,0,0,0,1.90088.6308,13.45514,13.45514,0,0,0,2.0039.1768c.30909.0068.6128.0107.91895.0107C8.80567,40,9.168,40,9.53468,40H110.13477c.3594,0,.7246,0,1.084-.002.3047,0,.6172-.0039.9219-.0107a13.279,13.279,0,0,0,2-.1768,6.80432,6.80432,0,0,0,1.9082-.6308,6.27742,6.27742,0,0,0,1.6172-1.1787,6.39482,6.39482,0,0,0,1.1816-1.6143,6.60413,6.60413,0,0,0,.6191-1.9043,13.50643,13.50643,0,0,0,.1856-2.0019c.0039-.3106.0039-.6114.0039-.9219.0078-.3633.0078-.7246.0078-1.0938V9.53613c0-.36621,0-.72949-.0078-1.09179,0-.30664,0-.61426-.0039-.9209a13.5071,13.5071,0,0,0-.1856-2.002,6.6177,6.6177,0,0,0-.6191-1.90332,6.46619,6.46619,0,0,0-2.7988-2.7998,6.76754,6.76754,0,0,0-1.9082-.627,13.04394,13.04394,0,0,0-2-.17676c-.3047-.00488-.6172-.01074-.9219-.01269-.3594-.002-.7246-.002-1.084-.002Z"
                                            style="fill: #a6a6a6"
                                        />
                                        <path
                                            d="M8.44483,39.125c-.30468,0-.602-.0039-.90429-.0107a12.68714,12.68714,0,0,1-1.86914-.1631,5.88381,5.88381,0,0,1-1.65674-.5479,5.40573,5.40573,0,0,1-1.397-1.0166,5.32082,5.32082,0,0,1-1.02051-1.3965,5.72186,5.72186,0,0,1-.543-1.6572,12.41351,12.41351,0,0,1-.1665-1.875c-.00634-.2109-.01464-.9131-.01464-.9131V8.44434S.88185,7.75293.8877,7.5498a12.37039,12.37039,0,0,1,.16553-1.87207,5.7555,5.7555,0,0,1,.54346-1.6621A5.37349,5.37349,0,0,1,2.61183,2.61768,5.56543,5.56543,0,0,1,4.01417,1.59521a5.82309,5.82309,0,0,1,1.65332-.54394A12.58589,12.58589,0,0,1,7.543.88721L8.44532.875H111.21387l.9131.0127a12.38493,12.38493,0,0,1,1.8584.16259,5.93833,5.93833,0,0,1,1.6709.54785,5.59374,5.59374,0,0,1,2.415,2.41993,5.76267,5.76267,0,0,1,.5352,1.64892,12.995,12.995,0,0,1,.1738,1.88721c.0029.2832.0029.5874.0029.89014.0079.375.0079.73193.0079,1.09179V30.4648c0,.3633,0,.7178-.0079,1.0752,0,.3252,0,.6231-.0039.9297a12.73126,12.73126,0,0,1-.1709,1.8535,5.739,5.739,0,0,1-.54,1.67,5.48029,5.48029,0,0,1-1.0156,1.3857,5.4129,5.4129,0,0,1-1.3994,1.0225,5.86168,5.86168,0,0,1-1.668.5498,12.54218,12.54218,0,0,1-1.8692.1631c-.2929.0068-.5996.0107-.8974.0107l-1.084.002Z"
                                        />
                                    </g>
                                    <g id="_Group_" data-name="&lt;Group&gt;">
                                        <g
                                            id="_Group_2"
                                            data-name="&lt;Group&gt;"
                                        >
                                            <g
                                                id="_Group_3"
                                                data-name="&lt;Group&gt;"
                                            >
                                                <path
                                                    id="_Path_"
                                                    data-name="&lt;Path&gt;"
                                                    d="M24.76888,20.30068a4.94881,4.94881,0,0,1,2.35656-4.15206,5.06566,5.06566,0,0,0-3.99116-2.15768c-1.67924-.17626-3.30719,1.00483-4.1629,1.00483-.87227,0-2.18977-.98733-3.6085-.95814a5.31529,5.31529,0,0,0-4.47292,2.72787c-1.934,3.34842-.49141,8.26947,1.3612,10.97608.9269,1.32535,2.01018,2.8058,3.42763,2.7533,1.38706-.05753,1.9051-.88448,3.5794-.88448,1.65876,0,2.14479.88448,3.591.8511,1.48838-.02416,2.42613-1.33124,3.32051-2.66914a10.962,10.962,0,0,0,1.51842-3.09251A4.78205,4.78205,0,0,1,24.76888,20.30068Z"
                                                    style="fill: #fff"
                                                />
                                                <path
                                                    id="_Path_2"
                                                    data-name="&lt;Path&gt;"
                                                    d="M22.03725,12.21089a4.87248,4.87248,0,0,0,1.11452-3.49062,4.95746,4.95746,0,0,0-3.20758,1.65961,4.63634,4.63634,0,0,0-1.14371,3.36139A4.09905,4.09905,0,0,0,22.03725,12.21089Z"
                                                    style="fill: #fff"
                                                />
                                            </g>
                                        </g>
                                        <g>
                                            <path
                                                d="M42.30227,27.13965h-4.7334l-1.13672,3.35645H34.42727l4.4834-12.418h2.083l4.4834,12.418H43.438ZM38.0591,25.59082h3.752l-1.84961-5.44727h-.05176Z"
                                                style="fill: #fff"
                                            />
                                            <path
                                                d="M55.15969,25.96973c0,2.81348-1.50586,4.62109-3.77832,4.62109a3.0693,3.0693,0,0,1-2.84863-1.584h-.043v4.48438h-1.8584V21.44238H48.4302v1.50586h.03418a3.21162,3.21162,0,0,1,2.88281-1.60059C53.645,21.34766,55.15969,23.16406,55.15969,25.96973Zm-1.91016,0c0-1.833-.94727-3.03809-2.39258-3.03809-1.41992,0-2.375,1.23047-2.375,3.03809,0,1.82422.95508,3.0459,2.375,3.0459C52.30227,29.01563,53.24953,27.81934,53.24953,25.96973Z"
                                                style="fill: #fff"
                                            />
                                            <path
                                                d="M65.12453,25.96973c0,2.81348-1.50586,4.62109-3.77832,4.62109a3.0693,3.0693,0,0,1-2.84863-1.584h-.043v4.48438h-1.8584V21.44238H58.395v1.50586h.03418A3.21162,3.21162,0,0,1,61.312,21.34766C63.60988,21.34766,65.12453,23.16406,65.12453,25.96973Zm-1.91016,0c0-1.833-.94727-3.03809-2.39258-3.03809-1.41992,0-2.375,1.23047-2.375,3.03809,0,1.82422.95508,3.0459,2.375,3.0459C62.26711,29.01563,63.21438,27.81934,63.21438,25.96973Z"
                                                style="fill: #fff"
                                            />
                                            <path
                                                d="M71.71047,27.03613c.1377,1.23145,1.334,2.04,2.96875,2.04,1.56641,0,2.69336-.80859,2.69336-1.91895,0-.96387-.67969-1.541-2.28906-1.93652l-1.60937-.3877c-2.28027-.55078-3.33887-1.61719-3.33887-3.34766,0-2.14258,1.86719-3.61426,4.51855-3.61426,2.624,0,4.42285,1.47168,4.4834,3.61426h-1.876c-.1123-1.23926-1.13672-1.9873-2.63379-1.9873s-2.52148.75684-2.52148,1.8584c0,.87793.6543,1.39453,2.25488,1.79l1.36816.33594c2.54785.60254,3.60645,1.626,3.60645,3.44238,0,2.32324-1.85059,3.77832-4.79395,3.77832-2.75391,0-4.61328-1.4209-4.7334-3.667Z"
                                                style="fill: #fff"
                                            />
                                            <path
                                                d="M83.34621,19.2998v2.14258h1.72168v1.47168H83.34621v4.99121c0,.77539.34473,1.13672,1.10156,1.13672a5.80752,5.80752,0,0,0,.61133-.043v1.46289a5.10351,5.10351,0,0,1-1.03223.08594c-1.833,0-2.54785-.68848-2.54785-2.44434V22.91406H80.16262V21.44238H81.479V19.2998Z"
                                                style="fill: #fff"
                                            />
                                            <path
                                                d="M86.065,25.96973c0-2.84863,1.67773-4.63867,4.29395-4.63867,2.625,0,4.29492,1.79,4.29492,4.63867,0,2.85645-1.66113,4.63867-4.29492,4.63867C87.72609,30.6084,86.065,28.82617,86.065,25.96973Zm6.69531,0c0-1.9541-.89551-3.10742-2.40137-3.10742s-2.40039,1.16211-2.40039,3.10742c0,1.96191.89453,3.10645,2.40039,3.10645S92.76027,27.93164,92.76027,25.96973Z"
                                                style="fill: #fff"
                                            />
                                            <path
                                                d="M96.18606,21.44238h1.77246v1.541h.043a2.1594,2.1594,0,0,1,2.17773-1.63574,2.86616,2.86616,0,0,1,.63672.06934v1.73828a2.59794,2.59794,0,0,0-.835-.1123,1.87264,1.87264,0,0,0-1.93652,2.083v5.37012h-1.8584Z"
                                                style="fill: #fff"
                                            />
                                            <path
                                                d="M109.3843,27.83691c-.25,1.64355-1.85059,2.77148-3.89844,2.77148-2.63379,0-4.26855-1.76465-4.26855-4.5957,0-2.83984,1.64355-4.68164,4.19043-4.68164,2.50488,0,4.08008,1.7207,4.08008,4.46582v.63672h-6.39453v.1123a2.358,2.358,0,0,0,2.43555,2.56445,2.04834,2.04834,0,0,0,2.09082-1.27344Zm-6.28223-2.70215h4.52637a2.1773,2.1773,0,0,0-2.2207-2.29785A2.292,2.292,0,0,0,103.10207,25.13477Z"
                                                style="fill: #fff"
                                            />
                                        </g>
                                    </g>
                                </g>
                                <g id="_Group_4" data-name="&lt;Group&gt;">
                                    <g>
                                        <path
                                            d="M37.82619,8.731a2.63964,2.63964,0,0,1,2.80762,2.96484c0,1.90625-1.03027,3.002-2.80762,3.002H35.67092V8.731Zm-1.22852,5.123h1.125a1.87588,1.87588,0,0,0,1.96777-2.146,1.881,1.881,0,0,0-1.96777-2.13379h-1.125Z"
                                            style="fill: #fff"
                                        />
                                        <path
                                            d="M41.68068,12.44434a2.13323,2.13323,0,1,1,4.24707,0,2.13358,2.13358,0,1,1-4.24707,0Zm3.333,0c0-.97607-.43848-1.54687-1.208-1.54687-.77246,0-1.207.5708-1.207,1.54688,0,.98389.43457,1.55029,1.207,1.55029C44.57522,13.99463,45.01369,13.42432,45.01369,12.44434Z"
                                            style="fill: #fff"
                                        />
                                        <path
                                            d="M51.57326,14.69775h-.92187l-.93066-3.31641h-.07031l-.92676,3.31641h-.91309l-1.24121-4.50293h.90137l.80664,3.436h.06641l.92578-3.436h.85254l.92578,3.436h.07031l.80273-3.436h.88867Z"
                                            style="fill: #fff"
                                        />
                                        <path
                                            d="M53.85354,10.19482H54.709v.71533h.06641a1.348,1.348,0,0,1,1.34375-.80225,1.46456,1.46456,0,0,1,1.55859,1.6748v2.915h-.88867V12.00586c0-.72363-.31445-1.0835-.97168-1.0835a1.03294,1.03294,0,0,0-1.0752,1.14111v2.63428h-.88867Z"
                                            style="fill: #fff"
                                        />
                                        <path
                                            d="M59.09377,8.437h.88867v6.26074h-.88867Z"
                                            style="fill: #fff"
                                        />
                                        <path
                                            d="M61.21779,12.44434a2.13346,2.13346,0,1,1,4.24756,0,2.1338,2.1338,0,1,1-4.24756,0Zm3.333,0c0-.97607-.43848-1.54687-1.208-1.54687-.77246,0-1.207.5708-1.207,1.54688,0,.98389.43457,1.55029,1.207,1.55029C64.11232,13.99463,64.5508,13.42432,64.5508,12.44434Z"
                                            style="fill: #fff"
                                        />
                                        <path
                                            d="M66.4009,13.42432c0-.81055.60352-1.27783,1.6748-1.34424l1.21973-.07031v-.38867c0-.47559-.31445-.74414-.92187-.74414-.49609,0-.83984.18213-.93848.50049h-.86035c.09082-.77344.81836-1.26953,1.83984-1.26953,1.12891,0,1.76563.562,1.76563,1.51318v3.07666h-.85547v-.63281h-.07031a1.515,1.515,0,0,1-1.35254.707A1.36026,1.36026,0,0,1,66.4009,13.42432Zm2.89453-.38477v-.37646l-1.09961.07031c-.62012.0415-.90137.25244-.90137.64941,0,.40527.35156.64111.835.64111A1.0615,1.0615,0,0,0,69.29543,13.03955Z"
                                            style="fill: #fff"
                                        />
                                        <path
                                            d="M71.34816,12.44434c0-1.42285.73145-2.32422,1.86914-2.32422a1.484,1.484,0,0,1,1.38086.79h.06641V8.437h.88867v6.26074h-.85156v-.71143h-.07031a1.56284,1.56284,0,0,1-1.41406.78564C72.0718,14.772,71.34816,13.87061,71.34816,12.44434Zm.918,0c0,.95508.4502,1.52979,1.20313,1.52979.749,0,1.21191-.583,1.21191-1.52588,0-.93848-.46777-1.52979-1.21191-1.52979C72.72121,10.91846,72.26613,11.49707,72.26613,12.44434Z"
                                            style="fill: #fff"
                                        />
                                        <path
                                            d="M79.23,12.44434a2.13323,2.13323,0,1,1,4.24707,0,2.13358,2.13358,0,1,1-4.24707,0Zm3.333,0c0-.97607-.43848-1.54687-1.208-1.54687-.77246,0-1.207.5708-1.207,1.54688,0,.98389.43457,1.55029,1.207,1.55029C82.12453,13.99463,82.563,13.42432,82.563,12.44434Z"
                                            style="fill: #fff"
                                        />
                                        <path
                                            d="M84.66945,10.19482h.85547v.71533h.06641a1.348,1.348,0,0,1,1.34375-.80225,1.46456,1.46456,0,0,1,1.55859,1.6748v2.915H87.605V12.00586c0-.72363-.31445-1.0835-.97168-1.0835a1.03294,1.03294,0,0,0-1.0752,1.14111v2.63428h-.88867Z"
                                            style="fill: #fff"
                                        />
                                        <path
                                            d="M93.51516,9.07373v1.1416h.97559v.74854h-.97559V13.2793c0,.47168.19434.67822.63672.67822a2.96657,2.96657,0,0,0,.33887-.02051v.74023a2.9155,2.9155,0,0,1-.4834.04541c-.98828,0-1.38184-.34766-1.38184-1.21582v-2.543h-.71484v-.74854h.71484V9.07373Z"
                                            style="fill: #fff"
                                        />
                                        <path
                                            d="M95.70461,8.437h.88086v2.48145h.07031a1.3856,1.3856,0,0,1,1.373-.80664,1.48339,1.48339,0,0,1,1.55078,1.67871v2.90723H98.69v-2.688c0-.71924-.335-1.0835-.96289-1.0835a1.05194,1.05194,0,0,0-1.13379,1.1416v2.62988h-.88867Z"
                                            style="fill: #fff"
                                        />
                                        <path
                                            d="M104.76125,13.48193a1.828,1.828,0,0,1-1.95117,1.30273A2.04531,2.04531,0,0,1,100.73,12.46045a2.07685,2.07685,0,0,1,2.07617-2.35254c1.25293,0,2.00879.856,2.00879,2.27V12.688h-3.17969v.0498a1.1902,1.1902,0,0,0,1.19922,1.29,1.07934,1.07934,0,0,0,1.07129-.5459Zm-3.126-1.45117h2.27441a1.08647,1.08647,0,0,0-1.1084-1.1665A1.15162,1.15162,0,0,0,101.63527,12.03076Z"
                                            style="fill: #fff"
                                        />
                                    </g>
                                </g>
                            </g>
                        </svg>
                    </button>
                    <a
                        href="https://play.google.com/store/apps/details?id=com.everglot"
                        target="_blank"
                        class="my-0"
                        ><img
                            src="/google-play-badge.png"
                            alt="Download Everglot for Android"
                            style="width: 320px; margin: 0 auto;"
                        /></a
                    >
                </div>
                <div>
                    <ArrowUpIcon size="24" class="mx-auto" />
                </div>
                <p
                    class="pt-8 md:pt-4 font-bold text-2xl md:text-center text-gray-lightest"
                >
                    Or click the below button to sign up on the web.
                </p>
                <div class="flex flex-col md:flex-row items-end pt-8 pb-2">
                    <ButtonLarge
                        href={$ctaLink}
                        color="PRIMARY"
                        variant="FILLED"
                        className="w-full justify-center text-lg md:w-auto mb-3 md:mb-0 md:mr-1"
                        >Join now</ButtonLarge
                    >
                </div>
            {/if}
        </div>
    </section>
</div>
{#if showTestflightExplanationModal}
    <Modal>
        <div
            id={testflightExplanationModalId}
            class="py-4 px-4 md:py-8 md:px-10 shadow-lg rounded-lg max-w-md"
            style="background: #253035;"
        >
            <ClickAwayListener
                elementId={testflightExplanationModalId}
                on:clickaway={handleClickAway}
            />
            <EscapeKeyListener
                on:keydown={() => (showTestflightExplanationModal = false)}
            />
            <p class="mb-6 text-xl text-center font-bold">
                Thank you so much for your interest in Everglot!
            </p>
            <p class="mb-6 text-center text-lg">
                If you have an Apple device please first <a
                    class="flex my-1 font-bold text-2xl text-primary justify-between items-center"
                    href="https://itunes.apple.com/us/app/testflight/id899247664?mt=8"
                    target="_blank"
                    >install Apple's own TestFlight® app<ArrowRightIcon
                        size="32"
                    />
                </a>
            </p>
            <p class="mb-6 text-center text-lg">
                Only then will you be able to download the Everglot beta version
                below.
            </p>
            <div class="flex items-center mx-auto">
                <ButtonLarge
                    variant="FILLED"
                    color="PRIMARY"
                    className="w-full justify-center items-center"
                    href="https://testflight.apple.com/join/ZvjofjHo"
                    target="_blank"
                    ><span style="text-transform: none;"
                        >Download <img
                            src="/logo-192.png"
                            alt="Everglot"
                            style="filter: grayscale(1) brightness(8);
                            height: 20px;
                            display: inline;
                            margin-left: .175rem;
                            margin-right: .175rem;"
                            class="text-base"
                        />
                        for iOS</span
                    ></ButtonLarge
                >
            </div>
        </div></Modal
    >
{/if}

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
            @apply pt-24;
            @apply pb-24;
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

    section.features .feature h3 {
        @apply max-w-3xl;
        @apply mx-auto;
    }

    .group-sort img {
        @screen lg {
            margin-bottom: 71px !important;
        }
    }
</style>
