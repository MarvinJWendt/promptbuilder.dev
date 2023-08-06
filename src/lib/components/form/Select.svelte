<script>
  import {onMount} from "svelte";

  export let label = "";
  export let items = [];

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

<div class="flex flex-col gap-2 w-full">
    {#if label}
        <label class="block text-gray-400 text-sm">{label}</label>
    {/if}
    <select bind:value={selectedItem} class="select select-bordered w-full dark:bg-gray-800">
        {#each items as item (item)}
            <option value={item.value}>{item.value}</option>
        {/each}
    </select>
</div>
