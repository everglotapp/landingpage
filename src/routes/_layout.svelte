<script context="module" lang="ts">
    const _paq = (window._paq = window._paq || [])
    /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
    _paq.push(["trackPageView"])
    _paq.push(["enableLinkTracking"])
    ;(function () {
        const u = "//internal-analytics.everglot.com/"
        _paq.push(["setTrackerUrl", u + "matomo.php"])
        _paq.push(["setSiteId", "1"])
        const d = document
        const g = d.createElement("script")
        const s = d.getElementsByTagName("script")[0]
        g.async = true
        g.src = u + "matomo.js"
        s.parentNode!.insertBefore(g, s)
    })()
</script>

<script lang="ts">
    import { scale } from "svelte/transition"
    import MainNav from "../components/layout/MainNav.svelte"
    import Footer from "../components/layout/Footer.svelte"
    import LocaleProvider from "../components/util/LocaleProvider.svelte"

    export let segment: string | undefined

    const timeout = 150
    let show = true

    const change = () => {
        show = !show
    }

    // @ts-ignore
    $: segment, change()
</script>

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
