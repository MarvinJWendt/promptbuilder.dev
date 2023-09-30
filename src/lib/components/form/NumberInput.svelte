<script>
  import {randomId} from "$lib/utils.js";

  export let label = "";
  export let min = 0;
  export let max = 100;
  export let value = min;

  const id = randomId()
</script>

<div class="flex flex-col gap-2">
    {#if label}
        <label for="{id}" class="block text-sm">{label}</label>
    {/if}
    <input id="{id}" type="number" bind:value={value} min={min} max={max} class="input input-bordered"/>
</div>
