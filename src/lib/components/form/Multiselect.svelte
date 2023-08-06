<script>
  export let items = [];

</script>

{#each items as item}
    <div class="flex flex-col gap-2 w-full">
        <label class="block text-gray-400 text-sm"><br></label>
        <button
                class="btn w-full {item.selected ? 'btn-info' : 'btn-outline'}"
                on:click={() => {item.selected = !item.selected}}>
            {item.value}
        </button>
    </div>
{/each}
