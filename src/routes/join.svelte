<script lang="ts">
    import PageTitle from "../comp/typography/PageTitle.svelte"
    import ButtonLarge from "../comp/util/ButtonLarge.svelte"

    let submitted = false
    const handleSubmit = (event: Event) => {
        submitted = true
    }
    let email = ""
    let password = ""
</script>

<svelte:head>
    <title>Join – Everglot</title>
</svelte:head>

<div class="container px-4 mx-auto my-16 max-w-sm">
    <PageTitle>Join Everglot</PageTitle>

    <form
        on:submit|preventDefault={handleSubmit}
        method="post"
        class="bg-white my-8"
    >
        <div class="flex flex-col w-full mb-2">
            <label for="email">Email</label>
            <input
                id="email"
                type="email"
                bind:value={email}
                placeholder="jane.doe@example.com"
            />
        </div>
        <div class="flex flex-col w-full mb-2">
            <label for="password">Password</label>
            <input id="password" type="password" bind:value={password} />
        </div>
        <p class="my-5 text-gray-bitdark text-sm">
            By signing up you agree to our <a
                href="/privacy"
                class="font-normal">privacy policy</a
            >.
        </p>
        <button
            type="submit"
            class="py-3 px-10 w-full mb-1 bg-primary hover:bg-primary-bitlight text-white rounded-xl font-bold"
            >Create a new account</button
        >
        <ButtonLarge
            href="login"
            variant="TEXT"
            className="w-full justify-center"
            >I already have an account</ButtonLarge
        >
        <div
            class="py-4 font-bold my-8 px-8 bg-primary-lightest"
            class:hidden={!submitted}
        >
            Sorry, signup will be available soon!
        </div>
    </form>
</div>
