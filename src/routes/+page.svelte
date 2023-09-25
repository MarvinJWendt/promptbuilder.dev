<svelte:head>
    <title>Prompt Builder</title>
</svelte:head>

<script>
  import {onMount} from "svelte";
  import Categories from "$lib/components/Categories.svelte";

  export let data;
  let categories = data.categories;

  onMount(() => {
    const hash = window.location.hash.substr(1);
    if (hash) {
      const el = document.getElementById(hash);
      if (el) {
        el.open = true;
        el.scrollIntoView({behavior: "smooth"});
      }
    }
  });
</script>

<div class="min-h-screen">
    <div class="flex flex-col items-center text-white">
        <h1 class="text-5xl font-bold pt-14">🛠️ Prompt Builder</h1>
        <p class="text-xl">Don't want to study prompt engineering?</p>
        <br/>
        <p class="text-xl">PromptBuilder is a free library and builder for ChatGPT prompts. All prompts are carefully
            crafted to get good output.</p>
    </div>
    <h2 class="pt-8">Categories</h2>
    <Categories data={categories}/>
</div>
