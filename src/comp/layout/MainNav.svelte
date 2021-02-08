<script lang="ts">
	export let segment: string | undefined;
</script>

<style>
	li a[aria-current] {
		position: relative;
		display: inline-block;
	}

	li a[aria-current]::after {
		position: absolute;
		content: '';
		height: 2px;
		display: block;
		bottom: 0;
		left: 0;
		right: 0;
		@apply bg-accent;
	}

	li a[aria-current].logo::after {
		background-color: transparent;
	}

	li a {
		display: flex;
		padding: 1rem 1rem;
		text-decoration: none;
	}

	li:hover a {
		@apply bg-gray-verylight;
	}
</style>

<nav class="flex container mx-auto px-2">
	<ul class="flex flex-1">
		<li class="mr-2">
			<a
				aria-current="{segment === undefined ? 'page' : undefined}"
				class="logo font-light"
				href="."
			>Everglot</a>
		</li>
		<!-- <li class="ml-auto">
			<a
				aria-current="{segment === 'try' ? 'page' : undefined}"
				href="try"
			>Try</a>
		</li> -->
		<!-- <li class="ml-auto">
			<a
				aria-current="{segment === 'pricing' ? 'page' : undefined}"
				href="pricing"
				class="text-gray-bitlight hover:bg-transparent pointer-events-none cursor-default"
				on:click|preventDefault=""
			>Pricing</a>
		</li> -->
		<li class="ml-auto">
			<a
				aria-current="{segment === 'about' ? 'page' : undefined}"
				href="about"
				class="text-gray-bitlight hover:bg-transparent cursor-not-allowed"
				on:click|preventDefault=""
			>About</a>
		</li>
		<li>
			<a
				aria-current="{segment === 'login' ? 'page' : undefined}"
				href="login"
			>Login</a>
		</li>
	</ul>
</nav>
