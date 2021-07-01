<script lang="ts">
    import ButtonLarge from "../util/ButtonLarge.svelte"
    export let segment: string | undefined
</script>

<nav class="flex container mx-auto px-2 bg-secondary-dark">
    <ul class="flex flex-1">
        <li class="mr-2">
            <a
                aria-current={segment === undefined ? "page" : undefined}
                class="logo font-bold uppercase tracking-wide text-lg"
                href="."
                ><img
                    src="/logo-192.png"
                    alt="Everglot"
                    style="max-height: 28px;"
                /></a
            >
        </li>
        <!-- <li class="ml-auto">
			<a
				aria-current="{segment === 'try' ? 'page' : undefined}"
				href="try"
			>Try</a>
		</li> -->
        <!-- <li class="ml-auto">
			<a
				aria-current="{segment === 'pricing' ? 'page' : undefined}"
				href="pricing"
				class="text-gray-bitlight hover:bg-transparent pointer-events-none cursor-default"
				on:click|preventDefault=""
			>Pricing</a>
		</li> -->
        <!--<li class="ml-auto">
            <a
                aria-current={segment === "about" ? "page" : undefined}
                href="about"
                class="text-gray-bitlight hover:bg-transparent cursor-not-allowed"
                on:click|preventDefault>About</a
            >
        </li>-->
        <li class="ml-auto">
            <a href="https://app.everglot.com/login">Login</a>
        </li>
        <li>
            <ButtonLarge
                href="/#footer-cta"
                className="cta text-sm uppercase ml-2 mb-0 whitespace-nowrap"
                >Join now</ButtonLarge
            >
        </li>
    </ul>
</nav>

<style>
    nav {
        @apply sticky;
        @apply left-0;
        @apply right-0;
        @apply top-0;
        @apply z-10;
        @apply bg-secondary-dark;

        @screen sm {
            @apply relative;
            @apply bg-transparent;
        }
    }

    li a[aria-current] {
        position: relative;
        display: inline-block;
    }

    li a[aria-current]::after {
        position: absolute;
        content: "";
        height: 2px;
        display: block;
        bottom: 0;
        left: 0;
        right: 0;
        @apply bg-accent;
    }

    li a[aria-current].logo::after {
        background-color: transparent;
    }

    a {
        display: flex;
        padding: 1.5rem 1rem;
        text-decoration: none;

        @apply m-0;
        @apply text-gray-verylight;
        @apply uppercase;
        @apply text-sm;
    }

    li :global(a),
    li :global(button) {
        font-family: Poppins, Verdana, Geneva, Tahoma, sans-serif;
    }

    li:hover a {
        @apply text-white;
    }

    a.logo {
        filter: grayscale(1) brightness(8);
    }

    a.logo:hover {
        background: transparent;
    }

    :global(.cta) {
        @apply px-4 !important;
        @apply py-2 !important;
    }

    li {
        display: flex;
        align-items: center;
    }
</style>
