<script lang="ts">
	import { fly } from "svelte/transition";

    let previousScrollTop: Number;
    let scrolledDown = false;
    const handleScroll = (e: any) => {
        if (scrolledDown) {
            return;
        }
        if (e.scrollTop <= 0) {
            // user cannot possibly have scrolled down
            return;
        }
        if (previousScrollTop) {
            if (e.scrollTop <= previousScrollTop) {
                // user did not scroll down
                previousScrollTop = e.scrollTop;
                return;
            }
        }
        previousScrollTop = e.scrollTop;
        scrolledDown = true;
    };
</script>

<svelte:window on:scroll={handleScroll} />
{#if !scrolledDown}
    <div class="arrow hidden md:block" out:fly={{y: -200, delay: 300, duration: 800}}></div>
{/if}

<style>
    .arrow {
        opacity: 0;
        position: absolute;
        left: 50%;
        top: 40%;
        transform-origin: 50% 50%;
        transform: translate3d(-50%, -50%, 0);
        animation: arrow-movement 1.5s ease-in-out infinite;
    }

    .arrow:before,
    .arrow:after {
        @apply bg-gray-bitlight;
        content: '';
        display: block;
        height: 3px;
        position: absolute;
        top: 0;
        left: 0;
        width: 30px;
    }

    .arrow:before {
        transform: rotate(45deg) translateX(-23%);
        transform-origin: top left;
    }

    .arrow:after {
        transform: rotate(-45deg) translateX(23%);
        transform-origin: top right;
    }

    @keyframes arrow-movement {
        0% {
            opacity: 0;
            top: 36%;
        }
        70% {
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
    }
</style>
