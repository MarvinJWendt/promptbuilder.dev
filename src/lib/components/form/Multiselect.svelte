<script>
  import {randomId} from "$lib/utils.js";

  export let items = [];

  const ids = items.map(() => randomId());
</script>

{#each items as item, i}
    <div class="flex flex-col gap-2 w-full">
        <label for="{ids[i]}" class="block text-gray-400 text-sm"><br></label>
        <button
                id="{ids[i]}"
                class="btn w-full {item.selected ? 'btn-info' : 'btn-outline'}"
                on:click={() => {item.selected = !item.selected}}>
            {item.value}
        </button>
    </div>
{/each}
