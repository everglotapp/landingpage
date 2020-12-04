<script context="module" lang="ts">
    import { scale } from "svelte/transition";

    export type Variant = "FILLED" | "OUTLINED" | "TEXT";
    const classes: Record<Variant, string> = {
        FILLED: "border border-primary bg-primary hover:bg-primary-bitlight text-white shadow-md focus:border-primary-light focus:bg-primary-light",
        OUTLINED: "border border-primary hover:bg-gray-lightest text-primary focus:border-white focus:bg-white",
        TEXT: "border border-transparent hover:bg-gray-lightest text-primary focus:bg-white focus:border-primary"
    };
</script>

<script lang="ts">
    export let href: string = "";
    export let variant: Variant = "FILLED";
    $: variantClasses = classes[variant];
    export let className: string = "";
</script>

<a
    class={`py-3 px-10 inline-flex rounded-xl font-bold cursor-pointer transition-colors ${variantClasses} ${className}`}
    href={href}
    in:scale={{ duration: 200, delay: 200 }}
    out:scale={{ duration: 200 }}
><slot /></a>
