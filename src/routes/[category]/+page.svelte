<svelte:head>
    <title>{category.name} prompt library for ChatGPT - Prompt Builder</title>
    <meta name="description" content="High quality prompt library for the category: '{category.name.replace(/^.*? /, '')}'">
</svelte:head>

<script>
  import {onMount} from "svelte";
  import Categories from "$lib/components/Categories.svelte";
  import AllPrompts from "$lib/components/AllPrompts.svelte";
  import Sidebar from "$lib/components/Sidebar.svelte";

  export let data;
  let categories = data.categories;
  let slug = data.slug;

  let category = categories.find(c => c.slug === slug);
  $: console.log("Category", category);

  const numCols = 3;
  let sortedPaths = Array.from({length: numCols}, () => []);

  for (let i = 0; i < category.paths.length; i++) {
    sortedPaths[i % numCols].push(category.paths[i]);
  }

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

<section>
    <Sidebar categories={categories}/>
    <div class="flex flex-col items-center">
        <h1 class="text-3xl sm:text-5xl font-bold pt-14">{category.name.replace(/^.*? /, '')} Prompts️</h1>
        <p class="text-xl">{category.description}</p>
        <div class="mt-8 w-full">
            <Categories data={category.paths} isPath="true"/>
        </div>

        <!--    <h2 class="mt-48 text-3xl sm:text-4xl">Other Categories</h2>-->
        <!--    <Categories data={categories} exclude="{category.slug}"/>-->
        <!--    <div class="mt-48">-->
        <!--        <AllPrompts data="{categories}"/>-->
        <!--    </div>-->
    </div>
</section>
