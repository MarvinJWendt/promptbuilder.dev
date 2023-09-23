<svelte:head>
    <title>Prompt Builder</title>
</svelte:head>

<script>
  import {onMount} from "svelte";

  export let data;
  let categories = data.categories;
  $: console.log(categories);

  categories.sort((a, b) => a.name.localeCompare(b.name))

  const numCols = 3;
  let sortedCategories = Array.from({length: numCols}, () => []);

  for (let i = 0; i < categories.length; i++) {
    sortedCategories[i % numCols].push(categories[i]);
  }

  // Title case capitalizes the first letter of each word
  function titleCase(str) {
    return str.toLowerCase().replaceAll("-", " ").split(' ').map(function (word) {
      return word.replace(word[0], word[0].toUpperCase());
    }).join(' ');
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

<div class="min-h-screen">
    <h1 class="text-5xl font-bold pt-14">Prompt Builder</h1>
    <p class="text-xl">Don't want to study prompt engineering?</p>
    <br/>
    <p class="text-xl">PromptBuilder is a free library and builder for ChatGPT prompts. All prompts are carefully crafted to get good output.</p>
    <h2 class="pt-8">Prompts</h2>
    <div class="grid gap-4 grid-cols-1 md:grid-cols-3">
        {#each sortedCategories as col}
            <div>
                {#each col as category}
                    <details id="{category.name.toLowerCase()}" class="collapse border border-base-content text-white collapse-arrow mb-8">
                        <summary class="collapse-title text-xl font-medium select-none">{titleCase(category.name)}</summary>
                        <div class="collapse-content">
                            <ul class="ml-6 list-disc">
                                {#each category.paths as path}
                                    <li><a class="link" href="/{category.name}/{path}">{titleCase(path)}</a></li>
                                {/each}
                            </ul>
                        </div>
                    </details>
                {/each}
            </div>
        {/each}
    </div>
</div>
