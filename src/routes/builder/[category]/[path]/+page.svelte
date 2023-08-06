<script>
  import {fade} from "svelte/transition";
  import {onMount} from "svelte";
  import FormBuilder from "$lib/components/form/FormBuilder.svelte";

  export let data

  let pathData;
  let step = 1;

  onMount(async () => {
    const res = await fetch(`/api/path/${data.category}/${data.path}`);
    pathData = await res.json();
    console.log(pathData)
  });
</script>

<div class="h-screen flex flex-col items-center text-white mx-8 mt-20" transition:fade>
    <div class="w-full">
        {#if pathData}
            <FormBuilder pathData="{pathData}" step="{step}"/>
        {:else}
            <div class="h-screen flex flex-col items-center justify-center">
                <h2 class="text-2xl mb-4">Loading...</h2>
                <progress class="progress w-56 h-2"></progress>
            </div>
        {/if}
    </div>
</div>

<style>
    :global(body) {
        overflow-y: auto !important;
    }
</style>
