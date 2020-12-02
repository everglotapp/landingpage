<script lang="ts">
	import MainNav from '../comp/layout/MainNav.svelte';

	export let segment: string | undefined;

	import { scale } from "svelte/transition";
  const timeout = 150;
  let show = true;

  const change = () => {
    show = !show;
  };

  $: change(segment);
</script>

<style>
	main {
		position: relative;
		background-color: white;
		box-sizing: border-box;
	}
</style>

<MainNav {segment}/>

{#if show}
  <main
    in:scale={{ duration: timeout, delay: timeout }}
    out:scale={{ duration: timeout }}>
    <slot />
  </main>
{:else}
  <main
    in:scale={{ duration: timeout, delay: timeout }}
    out:scale={{ duration: timeout }}>
    <slot />
  </main>
{/if}
