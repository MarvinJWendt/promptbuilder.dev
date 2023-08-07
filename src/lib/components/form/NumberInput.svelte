<script>
  export let label = "";
  export let min = 0;
  export let max = 100;
  export let value = min;
</script>

<div class="flex flex-col gap-2">
    {#if label}
        <label class="block text-gray-400 text-sm">{label}</label>
    {/if}
    <input type="number" bind:value={value} min={min} max={max} class="input input-bordered dark:bg-gray-800"/>
</div>
