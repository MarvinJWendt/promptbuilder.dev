<script>
  import {randomId} from "$lib/utils.js";

  export let item;
  const id = randomId()
</script>

<div class="flex flex-grow flex-col gap-2">
    <label for="{id}" class="block text-sm"><br></label>
    <button
            id="{id}"
            class="btn w-full {item.selected ? 'btn-success' : 'btn-error btn-outline'}"
            on:click={() => {item.selected = !item.selected}}>
        {item.value}
    </button>
</div>
