<svelte:head>
    <title>Prompt Builder 🛠️</title>
    <meta name="description" content="Prompt Builder is a free library and builder for ChatGPT prompts.">
</svelte:head>

<script>
  import Categories from "$lib/components/Categories.svelte";

  export let data;
  let categories = data.categories;
</script>

<div class="min-h-screen">
    <div class="flex flex-col items-center text-white">
        <h1 class="text-5xl font-bold pt-14">🛠️ Prompt Builder</h1>
        <p class="text-xl">No need to study prompt engineering</p>
        <br/>
        <br/>
        <blockquote class="text-xl">PromptBuilder is a free library and builder for ChatGPT prompts. All prompts are
            carefully crafted to get good output.
        </blockquote>
    </div>
    <h2 class="pt-8">Categories</h2>
    <Categories data={categories}/>
</div>
