<script>
  import {onMount} from "svelte";
  import {randomId} from "$lib/utils.js";

  export let label = "";
  export let items = [];

  const id = randomId()

  onMount(() => {
    if (items.length > 0) {
      selectedItem = items.find(item => item.selected).value;
    }
  });

  export let selectedItem;
  $: if (selectedItem) {
    for (let item of items) {
      item.selected = false;
    }
    items.find(item => item.value === selectedItem).selected = true;
  }
</script>

<div class="flex flex-grow min-w-30% flex-col gap-2">
    {#if label}
        <label for="{id}" class="block text-gray-400 text-sm">{label}</label>
    {/if}
    <select id="{id}" bind:value={selectedItem} class="select select-bordered w-full bg-white dark:bg-gray-800">
        {#each items as item (item)}
            <option value={item.value}>{item.value}</option>
        {/each}
    </select>
</div>
