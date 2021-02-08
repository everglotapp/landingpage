<script lang="ts">
    import PageTitle from "../comp/typography/PageTitle.svelte";
    import ButtonLarge from "../comp/util/ButtonLarge.svelte";

    let title = "My new story";
    interface Block {
        id: number;
        type: "text";
        innerHTML: string;
    };
    let blocks: Record<Block["id"], Block> = {};
    let blockSequence: Block["id"][] = [];
    const buildBlock = (props = {}): Block => {
        const id = Math.round(Math.random() * 1000000);
        return {
            id,
            type: "text",
            innerHTML: "Once upon a time …",
            ...props,
        };
    };
    const onAdd = () => {
        const block = buildBlock();
        blocks = {
            ...blocks,
            [block.id]: block,
        };
        blockSequence = [...blockSequence, block.id];
    };
    const onKeyup = (blockId: Block["id"]) => (event: KeyboardEvent) => {
        if (event.key !== "Enter") {
            return;
        }
        if (event.target === null) {
            return;
        }
        const block = blocks[blockId]!;
        const TWO_NEWLINES_HTML = "<div><br></div><div><br></div>";
        if (block.innerHTML.endsWith(TWO_NEWLINES_HTML)) {
            blocks[blockId] = {
                ...block,
                innerHTML: block.innerHTML.slice(0, -TWO_NEWLINES_HTML.length)
            };
            const newBlock = buildBlock(
                // TODO: split by TWO_NEWLINES_HTML and set second part as new block's innerHTML
            );
            blocks[newBlock.id] = newBlock;
            const pos = blockSequence.indexOf(blockId);
            blockSequence = [
                ...blockSequence.slice(0, pos + 1),
                newBlock.id,
                ...blockSequence.slice(pos + 1),
            ];
        }
    };
</script>

<div class="container mx-auto px-4 flex justify-center">
    <div class="blocks py-8 md:py-16 w-full min-h-screen">
        <PageTitle className="relative">
            <span
                contenteditable
                bind:textContent={title}
                class="title-inner px-2 py-1 mr-6 bg-gray-verylight w-full"
            />
        </PageTitle>
        {#each blockSequence as blockId}
            <div
                contenteditable
                bind:innerHTML={blocks[blockId].innerHTML}
                on:keyup={onKeyup(blockId)}
                class="block w-full rounded-2xl h-auto bg-gray-lightest text-gray-dark px-6 py-4 mb-2"
            />
        {/each}
        <div class="mt-8">
            <ButtonLarge tag="button" on:click={onAdd}>Add paragraph</ButtonLarge>
        </div>
    </div>
</div>

<style>
    .blocks {
        max-width: 480px;
    }
    .block:focus {
        @apply bg-white;
    }
    .title-inner::before {
        content: "🖉";
        position: absolute;
        top: 0.3rem;
        right: 4px;
        @apply font-normal;
        @apply text-sm;
        @apply text-gray-light;
    }
</style>
