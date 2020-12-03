<script context="module" lang="ts">
    export type Variant = 'FILLED' | 'OUTLINED';
    const classes: Record<Variant, string> = {
        FILLED: "bg-primary hover:bg-primary-bitlight text-white shadow-md",
        OUTLINED: "border hover:bg-gray-lightest border-primary text-primary",
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
><slot /></a>
