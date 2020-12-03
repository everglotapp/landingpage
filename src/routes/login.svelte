<script lang="ts">
	import PageTitle from "../comp/typography/PageTitle.svelte";
	import ButtonLarge from "../comp/util/ButtonLarge.svelte";

	const handleSubmit = (event: Event) => {
		console.log(event);
	};
	let email = "";
	let password = "";
</script>

<svelte:head>
	<title>Login to {"<"}Brand{">"}</title>
</svelte:head>

<div class="container px-4 mx-auto my-16 max-w-sm">
	<PageTitle>Login to {"<"}Brand{">"}</PageTitle>

	<form on:submit|preventDefault="{handleSubmit}" method="post" class="bg-white my-8">
		<div class="flex flex-col w-full mb-2">
			<label for="email">Email</label>
			<input id="email" type="email" bind:value="{email}" placeholder="jane.doe@example.com" />
		</div>
		<div class="flex flex-col w-full mb-2">
			<label for="password">Password</label>
			<input id="password" type="password" bind:value="{password}" />
		</div>
		<button
			type="submit"
			variant=FILLED
			class="mt-5 py-3 px-10 w-full mb-1 bg-primary hover:bg-primary-bitlight text-white rounded-xl font-bold"
		>Login</button>
		<ButtonLarge
			href="join"
			variant=OUTLINED
			className="w-full justify-center"
		>I don't have an account</ButtonLarge>
	</form>
</div>

<style>
label {
    @apply flex;
	@apply tracking-wide;
	@apply text-gray-bitdark;
	@apply text-sm;
	@apply mb-1;
	@apply pl-1;
}
input {
    @apply flex;
	@apply rounded-xl;
	@apply border-gray-300;
	@apply text-gray-600;
	@apply py-2;
	@apply px-3;
	@apply leading-relaxed;
	@apply focus:border-gray-300;
	@apply focus:ring-2;
	@apply focus:ring-gray-200;
	@apply focus:ring-opacity-50
}
input[type="email"]::placeholder {
	@apply text-gray-bitlight;
}
</style>
