<script>
  import FormFactory from "$lib/components/form/FormFactory.svelte";

  export let data

  let pathData = data.pathData;
  let step = 1;
</script>

<svelte:head>
    <title>Prompt Builder | {pathData.description}</title>
</svelte:head>

<div class="min-h-screen flex flex-col items-center text-white mx-8 mt-20">
    <div class="w-full">
        {#if pathData}
            <FormFactory pathData="{pathData}" step="{step}"/>
        {:else}
            <div class="h-screen flex flex-col items-center justify-center">
                <h2 class="text-2xl mb-4">Loading...</h2>
                <progress class="progress w-56 h-2"></progress>
            </div>
        {/if}
    </div>
</div>
