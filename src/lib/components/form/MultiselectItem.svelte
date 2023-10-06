<script>
  import {randomId} from "$lib/utils.js";

  export let item;
  const id = randomId()
</script>

<div class="flex flex-grow flex-col gap-2">
    <label for="{id}" class="block text-sm"><br/></label> <!-- Label is a placeholder to position the button - do not use the ID in the button -->
    <button
            class="btn w-full {item.selected ? 'btn-success hover:btn-error' : 'btn-error hover:btn-success btn-outline'}"
            on:click={() => {item.selected = !item.selected}}>
        {item.value}
    </button>
</div>
