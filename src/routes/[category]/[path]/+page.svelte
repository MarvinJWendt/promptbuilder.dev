<script>
  import FormFactory from "$lib/components/form/FormFactory.svelte";
  import Categories from "$lib/components/Categories.svelte";

  export let data
  $: console.log("Data:", data)

  let categories = data.categories
  let category = categories.find(c => c.slug === data.category)
  $: console.log("Category", category)

  let path = category.paths.find(p => p.slug === data.path)
  $: console.log("Path", path)

</script>

<svelte:head>
    <title>Prompt builder: {path.name.replaceAll("-", " ")}</title>
    <meta name="description" content="{path.description} using ChatGPT">
</svelte:head>

<div class="min-h-screen flex flex-col items-center text-white">
    <div class="text-sm breadcrumbs">
        <ul>
            <li><a href="/">Categories</a></li>
            <li><a href="/{data.category}">{data.category}</a></li>
            <li>{data.path.toLowerCase().replaceAll("-", " ")}</li>
        </ul>
    </div>
    <div class="w-full">
        <FormFactory pathData="{path}"/>
    </div>

    {#if category.paths.length > 1}
        <div class="divider mt-16">Other {data.category} prompts</div>
        <Categories data="{category.paths}" exclude="{data.path}" isPath="true"/>
    {/if}
</div>
