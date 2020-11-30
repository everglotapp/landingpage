<script lang="ts">
    import { getContext } from "svelte";
	import PageTitle from "../comp/typography/PageTitle.svelte";

	const handleLogin = (event: Event) => {
		console.log(event);
	};
	let email = "";
	let password = "";
</script>

<svelte:head>
	<title>Join {getContext("brand")}</title>
</svelte:head>

<PageTitle>Join {getContext("brand")}</PageTitle>

<form on:submit|preventDefault="{handleLogin}" method="post" class="bg-white max-w-sm my-8">
	<div class="flex flex-col w-full mb-2">
		<label for="email">Email</label>
		<input id="email" type="email" bind:value="{email}" />
	</div>
	<div class="flex flex-col w-full mb-2">
		<label for="password">Password</label>
		<input id="password" type="password" bind:value="{password}" />
	</div>
	<button type="submit" class="mt-5 py-2 px-6 bg-primary text-white rounded-xl font-bold">Login</button>
</form>

<style>
label {
    @apply flex;
	@apply tracking-wide;
	@apply text-gray-welldark;
	@apply text-sm;
	@apply font-light;
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
	@apply focus:ring-opacity-50;
}
</style>
