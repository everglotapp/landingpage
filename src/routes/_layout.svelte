<script lang="ts">
	import MainNav from '../comp/layout/MainNav.svelte';

	export let segment: string | undefined;
</script>

<style>
	main {
		position: relative;
		max-width: 56em;
		background-color: white;
		padding: 2em;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>

<MainNav {segment}/>

<main>
	<slot></slot>
</main>
