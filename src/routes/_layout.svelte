<script lang="ts">
    import { setContext } from "svelte";
	import MainNav from '../comp/layout/MainNav.svelte';

	export let segment: string | undefined;
	setContext("brand", "<Brand>");
</script>

<style>
	main {
		position: relative;
		background-color: white;
		padding: 2rem;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>

<MainNav {segment}/>

<main>
	<slot></slot>
</main>
