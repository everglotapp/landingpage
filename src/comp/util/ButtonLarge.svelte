<script context="module" lang="ts">
    export type Variant = "FILLED" | "OUTLINED" | "TEXT";
    const classes: Record<Variant, string> = {
        FILLED: "border border-primary bg-primary hover:bg-primary-bitlight text-white shadow-md focus:border-primary-light focus:bg-primary-light",
        OUTLINED: "border border-primary hover:bg-gray-lightest text-primary focus:border-white focus:bg-white",
        TEXT: "border border-transparent hover:bg-gray-lightest text-primary focus:bg-white focus:border-primary"
    };
</script>

<script lang="ts">
    export let variant: Variant = "FILLED";
    export let tag: keyof HTMLElementTagNameMap = "a";
    export let href: string = "";
    export let type: string = "button";
    $: variantClasses = classes[variant];
    export let className: string = "";
</script>

{#if tag === "button"}
    <button
        class={`py-3 px-10 inline-flex rounded-xl font-bold cursor-pointer transition-colors ${variantClasses} ${className}`}
        type={type}
        on:click|preventDefault
    >
        <slot />
    </button>
{:else if tag === "a"}
    <a
        class={`py-3 px-10 inline-flex rounded-xl font-bold cursor-pointer transition-colors ${variantClasses} ${className}`}
        href={href}
    >
        <slot />
    </a>
{/if}
