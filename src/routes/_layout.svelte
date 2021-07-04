<script lang="ts">
    import { scale } from "svelte/transition"
    import MainNav from "../comp/layout/MainNav.svelte"
    import Footer from "../comp/layout/Footer.svelte"

    export let segment: string | undefined

    const timeout = 150
    let show = true

    const change = () => {
        show = !show
    }

    $: segment, change()
</script>

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
