<script lang="ts">
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
		width: calc(100% - 1em);
		background-color: rgb(0, 255, 179);
		height: 2px;
		display: block;
		bottom: -1px;
	}

	a {
		text-decoration: none;
		padding: 1em 0.5em;
		display: block;
	}
</style>

<nav class="flex px-2">
	<ul class="flex flex-1">
		<li>
			<a aria-current="{segment === undefined ? 'page' : undefined}" href=".">Lang</a>
		</li>
		<li class="ml-auto">
			<a aria-current="{segment === 'login' ? 'page' : undefined}" href="login">Login</a>
		</li>
	</ul>
</nav>
