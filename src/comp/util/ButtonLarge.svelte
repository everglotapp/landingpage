<script context="module" lang="ts">
    import { scale } from "svelte/transition";

    export type Variant = "FILLED" | "OUTLINED";
    const classes: Record<Variant, string> = {
        FILLED: "bg-primary hover:bg-primary-bitlight text-white shadow-md focus:border-primary-light focus:bg-primary-light",
        OUTLINED: "border hover:bg-gray-lightest border-primary text-primary focus:border-primary-lightest focus:bg-primary-lightest",
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
