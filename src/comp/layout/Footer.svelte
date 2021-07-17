<script lang="ts">
    export let segment: string | undefined
</script>

<footer
    class="container relative flex flex-col-reverse sm:flex-row sm:justify-between mx-auto py-4 md:py-8 px-8 space-y-2 md:space-y-0 text-gray-lightest"
    class:index={typeof segment === undefined}
>
    <div
        class="flex self-center items-baseline sm:space-x-2 sm:justify-start flex-col-reverse sm:flex-row mt-8 sm:mt-0"
    >
        <span class="mt-2 sm:mt-0">&copy; 2021 Everglot.</span>
    </div>
    <div
        class="flex self-center sm:space-x-8 sm:justify-end flex-col sm:flex-row"
    >
        <a
            href="/attribution"
            aria-current={segment === "attribution" ? "page" : undefined}
            >Attribution</a
        >
        <a
            href="/privacy"
            aria-current={segment === "privacy" || segment === "datenschutz"
                ? "page"
                : undefined}>Privacy</a
        >
        <!--<span class="cursor-not-allowed mb-3">Imprint</span>-->
    </div>
</footer>

<style>
    footer.index {
        background: #016fa5;
    }

    a {
        @apply text-gray-verylight;
        @apply mb-3;
    }
</style>
