<script>
  export let label = "";
  export let text;
</script>

<div class="flex flex-col gap-2 w-full w-full">
    {#if label}
        <label class="block text-gray-400 text-sm">{label}</label>
    {/if}
    <textarea wrap="hard" rows="5" bind:value={text} class="textarea textarea-bordered dark:bg-gray-800 w-full w-full"></textarea>
</div>
