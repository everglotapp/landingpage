<script lang="ts">
    export let segment: string | undefined
</script>

<nav class="flex container mx-auto px-2">
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
        <li class="ml-auto">
            <a
                aria-current={segment === "about" ? "page" : undefined}
                href="about"
                class="text-gray-bitlight hover:bg-transparent cursor-not-allowed"
                on:click|preventDefault>About</a
            >
        </li>
        <li>
            <a href="https://app.everglot.com/login">Login</a>
        </li>
    </ul>
</nav>

<style>
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
        padding: 1rem 1rem;
        text-decoration: none;
        @apply m-0;
        @apply text-gray-bitdark;
    }

    a.logo {
        @apply text-black;
    }

    li {
        display: flex;
        align-items: center;
    }

    li:hover a {
        @apply bg-gray-verylight;
    }
</style>
