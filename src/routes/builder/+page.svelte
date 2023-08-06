<script>
  import {onMount} from 'svelte';

  let categories;

  onMount(async () => {
    const res = await fetch('/api/categories');
    categories = await res.json();
  });

  // Optionally, add 30 random categories
</script>

<div class="h-screen flex flex-col justify-center items-center text-white">
    <h1 class="text-3xl mb-8">Select a category</h1>
    {#if categories}
        <div class="flex flex-wrap gap-4 justify-center">
            {#each categories as category}
                <a href="/builder/{category.name}" class="btn btn-outline">{category.name}</a>
            {/each}
        </div>

        <div class="mt-6 flex flex-col w-1/3 border-opacity-50">
            <div class="divider text-gray-400">OR</div>
        </div>
        <a href="/" class="link text-gray-400">Back to homepage</a>
    {:else}
        <progress class="progress w-56"></progress>
    {/if}
</div>

<style>
    :global(body) {
        overflow-y: hidden;
    }
</style>
