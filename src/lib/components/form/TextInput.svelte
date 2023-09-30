<script>
  import {randomId} from "$lib/utils.js";

  export let label = "";
  export let text;

  const id = randomId()
</script>

<div class="flex flex-col gap-2">
    {#if label}
        <label for="{id}" class="block text-gray-400 text-sm">{label}</label>
    {/if}
    <input type="text" bind:value={text} class="input input-bordered dark:bg-gray-800" />
</div>
