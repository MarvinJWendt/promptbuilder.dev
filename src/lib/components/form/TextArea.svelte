<script>
  import {randomId} from "$lib/utils.js";

  export let label = "";
  export let text;

  const id = randomId()
</script>

<div class="flex flex-col gap-2 w-full">
    {#if label}
        <label for="{id}" class="block text-gray-400 text-sm">{label}</label>
    {/if}
    <textarea id="{id}" wrap="hard" rows="5" bind:value={text} class="textarea textarea-bordered dark:bg-gray-800 w-full w-full"></textarea>
</div>
