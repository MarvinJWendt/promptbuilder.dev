<svelte:head>
    <title>Prompt Builder</title>
</svelte:head>

<script>
  import {onMount} from "svelte";
  import Categories from "$lib/components/Categories.svelte";

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

<div class="min-h-screen flex flex-col items-center text-white">
    <div class="text-sm breadcrumbs">
        <ul>
            <li><a href="/">Categories</a></li>
            <li><a href="/{category.slug}">{category.slug}</a></li>
        </ul>
    </div>
    <h1 class="text-5xl font-bold pt-14">{category.name.replace(/^.*? /, '')} Prompts️</h1>
    <p class="text-xl">{category.description}</p>
    <div class="mt-8 w-full">
        <Categories data={category.paths} isPath="true"/>
    </div>

<!--    <h2 class="mt-48">Other Categories</h2>-->
<!--    <Categories data={categories}/>-->
</div>
