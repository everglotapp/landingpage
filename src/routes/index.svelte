<script lang="ts">
    import { getContext } from "svelte";
	import PageTitle from "../comp/typography/PageTitle.svelte";
</script>

<svelte:head>
	<title>{getContext("brand")}</title>
</svelte:head>

<div class="flex bg-primary-lightest">
    <div class="flex flex-row items-center container mx-auto py-4">
        <div class="w-1/2">
    {getContext("brand")} takes the stress away from learning a language.
        </div>
        <div class="w-1/2">
            <div class="p-6">
                <a class="py-4 px-10 inline-flex bg-primary text-white rounded-xl font-bold shadow-md hover:shadow-lg cursor-pointer" href="login">Join now!</a>
                <a class="py-4 px-10 inline-flex text-primary rounded-xl font-bold text-sm cursor-pointer" href="login">Login</a>
            </div>
        </div>
    </div>
</div>
