<script lang="ts">
    import { negotiateLanguages } from "@fluent/langneg"
    import { FluentBundle, FluentResource } from "@fluent/bundle"
    import { FluentProvider } from "@nubolab-ffwd/svelte-fluent"

    import en from "../../../locales/en/page.ftl"
    import de from "../../../locales/de/page.ftl"
    import zh from "../../../locales/zh-CN/page.ftl"

    import { SUPPORTED_LOCALES } from "../../constants"
    import type { SupportedLocale } from "../../constants"

    export let segment: string | undefined = undefined
    segment = segment // get rid of unused prop warning

    // Store all translations as a simple object which is available
    // synchronously and bundled with the rest of the code.
    const RESOURCES: Record<SupportedLocale, FluentResource> = {
        de,
        en,
        zh,
    }

    function* generateBundles(userLocales: readonly string[]) {
        // Choose locales that are best for the user.
        const currentLocales = negotiateLanguages(
            userLocales,
            SUPPORTED_LOCALES,
            { defaultLocale: "en" }
        )

        for (const locale of currentLocales) {
            const bundle = new FluentBundle(locale)
            bundle.addResource(RESOURCES[locale as SupportedLocale])
            yield bundle
        }
    }

    $: navigatorLocales =
        typeof navigator === "undefined" ? [] : navigator.languages
    $: preferredLocales = navigatorLocales
</script>

<FluentProvider bundles={generateBundles(preferredLocales)}>
    <slot />
</FluentProvider>
