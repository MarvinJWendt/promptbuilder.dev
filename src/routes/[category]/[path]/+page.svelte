<script>
  import FormFactory from "$lib/components/form/FormFactory.svelte";

  export let data
  $: console.log("Data:", data)

  let pathData = data.pathData;
</script>

<svelte:head>
    <title>Prompt Builder | {pathData.description}</title>
</svelte:head>

<div class="min-h-screen flex flex-col items-center text-white">
    <div class="text-sm breadcrumbs">
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/#{data.category}">{data.category}</a></li>
            <li>{data.path.toLowerCase().replaceAll("-", " ")}</li>
        </ul>
    </div>
    <div class="w-full">
        {#if pathData}
            <FormFactory pathData="{pathData}"/>
        {:else}
            <div class="h-screen flex flex-col items-center justify-center">
                <h2 class="text-2xl mb-4">Loading...</h2>
                <progress class="progress w-56 h-2"></progress>
            </div>
        {/if}
    </div>
</div>
