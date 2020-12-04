<script lang="ts">
	import { scale } from "svelte/transition";
	import MainNav from '../comp/layout/MainNav.svelte';

	export let segment: string | undefined;

  const timeout = 150;
  let show = true;

  const change = () => {
    show = !show;
  };

  $: segment, change();
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
    <footer class="container mx-auto py-4 md:py-8 px-8">
        <div class="flex space-x-8 justify-end">
            <span>Privacy</span>
            <span>Imprint</span>
        </div>
    </footer>
  </main>
{:else}
  <main
    in:scale={{ duration: timeout, delay: timeout }}
    out:scale={{ duration: timeout }}>
    <slot />
    <footer class="container mx-auto py-4 md:py-8 px-8">
        <div class="flex space-x-8 justify-end">
            <span>Privacy</span>
            <span>Imprint</span>
        </div>
    </footer>
  </main>
{/if}
