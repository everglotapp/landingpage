<script lang="ts">
    import { getContext } from "svelte";
	export let segment: string | undefined;
</script>

<style>
	[aria-current] {
		position: relative;
		display: inline-block;
	}

	[aria-current]::after {
		position: absolute;
		content: '';
		height: 2px;
		display: block;
		bottom: -1px;
		left: 0;
		right: 0;
		@apply bg-accent;
	}

	a {
		display: flex;
		padding: .75rem 1rem;
		text-decoration: none;
	}
</style>

<nav class="flex px-2">
	<ul class="flex flex-1">
		<li>
			<a aria-current="{segment === undefined ? 'page' : undefined}" class="italic" href=".">{getContext("brand")}</a>
		</li>
		<li class="ml-auto">
			<a aria-current="{segment === 'login' ? 'page' : undefined}" href="login">Login</a>
		</li>
	</ul>
</nav>
