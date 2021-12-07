<script context="module" lang="ts">
    export const TRACKER_BASE_URL = "//internal-analytics.everglot.com/"
    export const TRACKER_URL = TRACKER_BASE_URL + "matomo.php"
    export const SITE_ID = "1"
    function onLoaded(): any {
        const tryInitializeMatomo = () => {
            if (typeof window !== undefined && "Matomo" in window) {
                matomoInitialized.set(true)
            } else {
                setTimeout(tryInitializeMatomo, 10)
            }
        }
        tryInitializeMatomo()
    }
    if (typeof window !== "undefined") {
        const _paq = (window._paq = window._paq || [])
        /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
        _paq.push(["trackPageView"])
        _paq.push(["enableLinkTracking"])
        ;(function () {
            _paq.push(["setTrackerUrl", TRACKER_URL])
            _paq.push(["setSiteId", SITE_ID])
            const d = document
            const g = d.createElement("script")
            const s = d.getElementsByTagName("script")[0]
            g.async = true
            g.src = TRACKER_BASE_URL + "matomo.js"
            g.onload = onLoaded()
            s.parentNode!.insertBefore(g, s)
        })()
    }
</script>

<script lang="ts">
    import { scale } from "svelte/transition"
    import { stores } from "@sapper/app"
    import MainNav from "../components/layout/MainNav.svelte"
    import Footer from "../components/layout/Footer.svelte"
    import LocaleProvider from "../components/util/LocaleProvider.svelte"
    import { matomoInitialized } from "../stores"

    export let segment: string | undefined

    const { page } = stores()
    $: if ($page && $matomoInitialized) {
        if (typeof window !== "undefined") {
            const Matomo = window.Matomo
            if (Matomo) {
                const tracker = Matomo.getTracker(TRACKER_URL, SITE_ID)
                tracker.trackPageView()
            }
        }
    }

    const timeout = 150
    let show = true

    const change = () => {
        show = !show
    }

    // @ts-ignore
    $: segment, change()
</script>

<noscript>
    <img
        referrerpolicy="no-referrer-when-downgrade"
        src="https://internal-analytics.everglot.com/matomo.php?idsite=1&amp;rec=1"
        style="border:0"
        alt=""
    />
</noscript>

<LocaleProvider {segment}>
    <MainNav {segment} />

    {#if show}
        <main
            in:scale={{ duration: timeout, delay: timeout }}
            out:scale={{ duration: timeout }}
        >
            <slot />
        </main>
        <Footer {segment} />
    {:else}
        <main
            in:scale={{ duration: timeout, delay: timeout }}
            out:scale={{ duration: timeout }}
        >
            <slot />
        </main>
        <Footer {segment} />
    {/if}
</LocaleProvider>

<style>
    :global(#sapper) {
        min-height: 100vh;
    }

    main {
        position: relative;
        box-sizing: border-box;

        @apply text-gray-lightest;
        @apply font-sans;
    }
</style>
