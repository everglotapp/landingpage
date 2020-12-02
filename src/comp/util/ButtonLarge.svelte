<script context="module" lang="ts">
    export enum Variant {
        PRIMARY,
        SECONDARY,
    };
    const classesByVariant = {
        [Variant.PRIMARY]: "bg-primary hover:bg-primary-bitlight text-white shadow-md",
        [Variant.SECONDARY]: "border hover:bg-gray-lightest border-primary text-primary",
    };
</script>

<script lang="ts">
    export let href: string = "";
    export let variant: Variant = Variant.PRIMARY;
    $: variantClasses = classesByVariant[variant];
    export let className: string = "";
</script>

<a
    class={`py-3 px-10 inline-flex rounded-xl font-bold cursor-pointer transition-colors ${variantClasses} ${className}`}
    href={href}
><slot /></a>
